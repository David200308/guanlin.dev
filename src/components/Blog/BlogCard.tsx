import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { BsCalendar3, BsClock, BsArrowRight } from "react-icons/bs";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  tags: string[];
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = (props) => {
  const { title, excerpt, image, date, tags, slug } = props;

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <Card className="blog-card-view">
      <Card.Img 
        variant="top" 
        src={image} 
        alt={title}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <div className="blog-meta mb-2">
          <small className="text-muted me-3">
            <BsCalendar3 className="me-1" />
            {formatDate(date)}
          </small>
        </div>
        
        <Card.Title className="blog-title">{title}</Card.Title>
        <Card.Text className="blog-excerpt">
          {excerpt}
        </Card.Text>
        
        <div className="blog-tags mb-3">
          {tags.map((tag, index) => (
            <Badge 
              key={index} 
              bg="secondary" 
              className="me-1"
              style={{ fontSize: "0.75rem" }}
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <Button 
          variant="outline-primary" 
          className="read-more-btn"
          href={`/blog/${slug}`}
        >
          Read More <BsArrowRight className="ms-1" />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
