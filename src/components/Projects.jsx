import React from "react";
import Card from "./Card.jsx";

const Projects = () => {
  const projects = [
    { id: 1, name: "Monthly Expense Tracker" },
    { id: 2, name: "Todo App" },
  ];

  return (
    <>
      <h2>My Projects</h2>
      {projects.map((project) => (
        <Card key={project.id}>
          <p>{project.name}</p>
        </Card>
      ))}
    </>
  );
};

export default Projects;
