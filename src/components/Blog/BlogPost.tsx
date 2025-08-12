import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import { BsCalendar3, BsClock, BsArrowLeft } from "react-icons/bs";
import { useParams, useNavigate } from "react-router-dom";
import Particle from "../Particle";

interface BlogPostData {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
  filename: string;
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [postData, setPostData] = useState<BlogPostData | null>(null);
  const [postContent, setPostContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogPost();
  }, [slug]);

  const fetchBlogPost = useCallback(async () => {
    try {
      setLoading(true);
      
      // First, fetch the metadata to get post information
      const metadataResponse = await fetch('/posts/metadata.json');
      if (!metadataResponse.ok) {
        throw new Error('Failed to fetch blog post metadata');
      }
      const metadata = await metadataResponse.json();
      
      const currentPost = metadata.posts.find((post: BlogPostData) => post.slug === slug);
      if (!currentPost) {
        throw new Error('Blog post not found');
      }
      
      setPostData(currentPost);
      
      // Then, fetch the HTML content
      const contentResponse = await fetch(`/posts${currentPost.filename}`);
      if (!contentResponse.ok) {
        throw new Error('Failed to fetch blog post content');
      }
      const htmlContent = await contentResponse.text();
      
      // Extract content from body tag
      let bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*)<\/body>/i);
      let processedContent = bodyMatch ? bodyMatch[1] : htmlContent;
      
      // Fix relative image paths to absolute paths
      // Convert ./img/ to /posts/tech/COMP3334/img/ or /posts/tech/COMP3335/img/
      const postPath = currentPost.filename;
      processedContent = processedContent.replace(
        /src="\.\/img\//g, 
        `src="/posts${postPath}/img/`
      );
      
      // Also handle img/ without the dot
      processedContent = processedContent.replace(
        /src="img\//g, 
        `src="/posts${postPath}/img/`
      );
      
      setPostContent(processedContent);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching blog post:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return (
      <Container fluid className="blog-section">
        <Particle />
        <Container>
          <h1>Loading...</h1>
          <p>Please wait while we load the blog post.</p>
        </Container>
      </Container>
    );
  }

  if (error || !postData) {
    return (
      <Container fluid className="blog-section">
        <Particle />
        <Container>
          <h1>Blog Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist or couldn't be loaded.</p>
          <Button onClick={() => navigate('/blog')} variant="primary">
            <BsArrowLeft /> Back to Blog
          </Button>
        </Container>
      </Container>
    );
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container>
        <Button 
          onClick={() => navigate('/blog')} 
          variant="outline-secondary" 
          className="mb-4"
        >
          <BsArrowLeft /> Back to Blog
        </Button>
        
        <Row>
          <Col lg={8} className="mx-auto">
            <Card className="blog-post-view">
              <Card.Img 
                variant="top" 
                src={postData.image}
                alt={postData.title}
                style={{ height: "400px", objectFit: "cover" }}
              />
              <Card.Body className="p-4">
                <div className="blog-meta mb-3">
                  <small className="text-muted me-3">
                    <BsCalendar3 className="me-1" />
                    {formatDate(postData.date)}
                  </small>
                  <small className="text-muted">
                    <BsClock className="me-1" />
                    {postData.readTime}
                  </small>
                </div>
                
                <h1 className="blog-post-title mb-3">{postData.title}</h1>
                
                <div className="blog-tags mb-4">
                  {postData.tags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      bg="secondary" 
                      className="me-2"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <style>
                  {`
                    .blog-content img {
                      max-width: 100%;
                      height: auto;
                      max-height: 500px;
                      object-fit: contain;
                      margin: 20px auto;
                      display: block;
                      border-radius: 8px;
                      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                    }
                    
                    .blog-content img[style*="zoom"] {
                      max-width: 80%;
                      max-height: 400px;
                    }
                    
                    .blog-content img[style*="zoom:40%"] {
                      max-width: 60%;
                      max-height: 300px;
                    }
                    
                    .blog-content img[style*="zoom:50%"] {
                      max-width: 70%;
                      max-height: 350px;
                    }
                  `}
                </style>
                
                <div 
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: postContent }}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default BlogPost;
