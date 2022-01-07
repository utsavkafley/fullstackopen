import React from "react";

const Header = ({ coursename }) => {
  return <h1>{coursename}</h1>;
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.name} {props.exercises}
      </p>
    </>
  );
};
const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </>
  );
};

const Total = ({ parts }) => {
  return (
    <>
      <p>
        Number of exercises{" "}
        {
          parts.reduce((a, b) => {
            return { exercises: a.exercises + b.exercises };
          }).exercises
        }
      </p>
    </>
  );
};
const Course = ({ course }) => {
  return (
    <>
      <Header coursename={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default Course;
