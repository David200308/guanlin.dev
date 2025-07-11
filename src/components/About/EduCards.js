import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function WorkCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ fontSize: 30 }} >{props.eduName}</Card.Title>
        <Card.Text>{"< " + props.location + " >"}</Card.Text>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ fontStyle: "italic" }}>
          {props.date}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          University Website
        </Button>
        {"\n"}
      </Card.Body>
    </Card>
  );
}

export default WorkCards;