import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import BlogCard from "./BlogCard";
import Particle from "../Particle";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

const Blog: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [availableTags, setAvailableTags] = useState<string[]>([]);
  const [showAllTags, setShowAllTags] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    fetchBlogPosts();
    checkScreenSize();
    
    const handleResize = () => {
      checkScreenSize();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const checkScreenSize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    filterPosts();
  }, [blogPosts, selectedTags]);

  const fetchBlogPosts = async () => {
    try {
      const response = await fetch('/posts/metadata.json');
      if (!response.ok) {
        throw new Error('Failed to fetch blog posts');
      }
      const data = await response.json();
      setBlogPosts(data.posts);
      
      // Extract unique tags from all posts and prioritize specific tags
      const tags = [...new Set(data.posts.flatMap((post: BlogPost) => post.tags))] as string[];
      
      // Sort tags with priority for Tech, Life, and PolyU Course Notes
      const priorityTags = ['Tech', 'Life', 'PolyU Course Notes'];
      const sortedTags = tags.sort((a, b) => {
        const aPriority = priorityTags.indexOf(a);
        const bPriority = priorityTags.indexOf(b);
        
        if (aPriority !== -1 && bPriority !== -1) {
          return aPriority - bPriority;
        } else if (aPriority !== -1) {
          return -1;
        } else if (bPriority !== -1) {
          return 1;
        }
        return a.localeCompare(b);
      });
      
      setAvailableTags(sortedTags);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching blog posts:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
      setLoading(false);
    }
  };

  const filterPosts = useCallback(() => {
    let filtered = [...blogPosts];

    // Filter by selected tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(post =>
        selectedTags.some(tag => post.tags.includes(tag))
      );
    }

    setFilteredPosts(filtered);
  }, [blogPosts, selectedTags]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearAllFilters = () => {
    setSelectedTags([]);
  };

  const getActiveFiltersCount = () => {
    return selectedTags.length;
  };

  const getVisibleTags = () => {
    if (isMobile) {
      // In mobile mode, always show first 3 tags (Tech, Life, PolyU Course Notes)
      const alwaysVisible = availableTags.slice(0, 3);
      if (showAllTags) {
        return availableTags;
      }
      return alwaysVisible;
    } else {
      // In computer mode, show all tags if they fit in one line, otherwise use show more/less
      if (availableTags.length <= 8) {
        return availableTags;
      }
      return showAllTags ? availableTags : availableTags.slice(0, 8);
    }
  };

  const shouldShowToggle = () => {
    if (isMobile) {
      return availableTags.length > 3;
    } else {
      return availableTags.length > 8;
    }
  };

  const getToggleText = () => {
    if (isMobile) {
      return showAllTags ? "Show Less" : "Show More";
    } else {
      return showAllTags ? "Show Less" : "Show More";
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
        
        {/* Tags Filter */}
        <Row className="mb-4">
          <Col>
            <div className="tags-filter">
              <span className="fw-bold">Filter by tags:</span>
              {getVisibleTags().map((tag) => (
                <Badge
                  key={tag}
                  bg={selectedTags.includes(tag) ? "dark" : "light"}
                  text={selectedTags.includes(tag) ? "white" : "dark"}
                  className="tag-badge"
                  style={{ cursor: "pointer", fontSize: "0.9rem" }}
                  onClick={() => handleTagToggle(tag)}
                >
                  {tag}
                </Badge>
              ))}
              {shouldShowToggle() && (
                <Button
                  variant="link"
                  size="sm"
                  className="show-more-tags-btn p-0 ms-2"
                  onClick={() => setShowAllTags(!showAllTags)}
                  style={{ textDecoration: 'none', color: '#6c757d' }}
                >
                  {getToggleText()}
                </Button>
              )}
            </div>
          </Col>
        </Row>

        {/* Results Count */}
        <Row className="mb-3">
          <Col className="d-flex justify-content-between align-items-center">
            <p className="text-muted mb-0">
              Showing {filteredPosts.length} of {blogPosts.length} posts
            </p>
            {getActiveFiltersCount() > 0 && (
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={clearAllFilters}
                className="clear-filters-btn"
              >
                Clear Filters ({getActiveFiltersCount()})
              </Button>
            )}
          </Col>
        </Row>
        
        {/* Blog Posts Grid */}
        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Col md={4} className="blog-card" key={post.id}>
                <BlogCard
                  title={post.title}
                  excerpt={post.excerpt}
                  image={post.image}
                  date={post.date}
                  tags={post.tags}
                  slug={post.slug}
                />
              </Col>
            ))
          ) : (
            <Col className="text-center py-5">
              <p className="text-muted">No blog posts found matching your criteria.</p>
              <Button variant="outline-primary" onClick={clearAllFilters}>
                Clear all filters
              </Button>
            </Col>
          )}
        </Row>
      </Container>
    </Container>
  );
};

export default Blog;
