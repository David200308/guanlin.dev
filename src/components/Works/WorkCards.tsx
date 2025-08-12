import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

interface WorkCardsProps {
  imgPath: string;
  companyName: string;
  location: string;
  title: string;
  date: string;
  link: string;
}

const WorkCards: React.FC<WorkCardsProps> = (props) => {
  return (
    <Card className="work-card-view">
      <div className="work-card-container">
        <div className="work-card-image-container">
          <Card.Img 
            src={props.imgPath} 
            alt="card-img" 
            className="work-card-image"
          />
        </div>
        <Card.Body className="work-card-body">
          <Card.Title style={{ fontSize: 30, fontWeight: "bold" }} >{props.companyName}</Card.Title>
          <Card.Text>{"- " + props.location + " -"}</Card.Text>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ fontStyle: "italic" }}>
            {props.date}
          </Card.Text>
          <Button variant="primary" href={props.link} target="_blank">
            Company Website
          </Button>
          {"\n"}
        </Card.Body>
      </div>
    </Card>
  );
};

export default WorkCards;
