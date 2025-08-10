import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Badge } from "react-bootstrap";
import BlogCard from "./BlogCard";
import Particle from "../Particle";

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [availableTags, setAvailableTags] = useState([]);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

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
      
      // Extract unique tags from all posts
      const tags = [...new Set(data.posts.flatMap(post => post.tags))];
      setAvailableTags(tags.sort());
      
      setLoading(false);
    } catch (err) {
      console.error('Error fetching blog posts:', err);
      setError(err.message);
      setLoading(false);
    }
  };

  const filterPosts = () => {
    let filtered = [...blogPosts];

    // Filter by selected tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(post =>
        selectedTags.some(tag => post.tags.includes(tag))
      );
    }

    setFilteredPosts(filtered);
  };

  const handleTagToggle = (tag) => {
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
              {availableTags.map((tag) => (
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
                  readTime={post.readTime}
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
}

export default Blog;
