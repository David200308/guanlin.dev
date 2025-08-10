import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./BlogCard";
import Particle from "../Particle";

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const response = await fetch('/posts/metadata.json');
      if (!response.ok) {
        throw new Error('Failed to fetch blog posts');
      }
      const data = await response.json();
      setBlogPosts(data.posts);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching blog posts:', err);
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Container fluid className="blog-section">
        <Particle />
        <Container>
          <h1 className="blog-heading">
            <strong className="purple">Blog Posts</strong>
          </h1>
          <p>Loading blog posts...</p>
        </Container>
      </Container>
    );
  }

  if (error) {
    return (
      <Container fluid className="blog-section">
        <Particle />
        <Container>
          <h1 className="blog-heading">
            <strong className="purple">Blog Posts</strong>
          </h1>
          <p>Error loading blog posts: {error}</p>
        </Container>
      </Container>
    );
  }

  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container>
        <h1 className="blog-heading">
          <strong className="purple">Blog Posts</strong>
        </h1>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {blogPosts.map((post) => (
            <Col md={4} className="blog-card" key={post.id}>
              <BlogCard
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                date={post.date}
                readTime={post.readTime}
                tags={post.tags}
                slug={post.slug}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Blog;
