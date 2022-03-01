import React from "react"
import Card from "react-bootstrap/Card"
import Picture from "./logo192.png"

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
       
            <Card.Img variant="top" src={Picture} />

            <Card.Body>
                <Card.Title>James Broucek</Card.Title>

                <Card.Text>
                    I am a student in the UNLV/Hacker U Full Stack Bootcamp, which has another title now.
                </Card.Text>

            </Card.Body>
        
        </Card>
      </div>
  );
}

export default GitHubCard