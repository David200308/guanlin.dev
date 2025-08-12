import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

interface EduCardsProps {
  imgPath: string;
  eduName: string;
  location: string;
  title: string;
  honLevel: string;
  date: string;
  link: string;
}

const EduCards: React.FC<EduCardsProps> = (props) => {
  return (
    <Card className="edu-card-view">
      <div className="edu-card-container">
        <div className="edu-card-image-container">
          <Card.Img 
            src={props.imgPath} 
            alt="card-img" 
            className="edu-card-image"
          />
        </div>
        <Card.Body className="edu-card-body">
          <Card.Title style={{ fontSize: 30, fontWeight: "bold" }} >{props.eduName}</Card.Title>
          <Card.Text>{"- " + props.location + " -"}</Card.Text>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ fontStyle: "italic" }}>
            {props.date}
          </Card.Text>
          <Button variant="primary" href={props.link} target="_blank">
            University Website
          </Button>
          {"\n"}
        </Card.Body>
      </div>
    </Card>
  );
};

export default EduCards;
