import React from "react";

const Header = (props) => {
  return <h1>{props.courseName}</h1>;
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.name} {props.exerciseCount}
      </p>
    </>
  );
};
const Content = (props) => {
  return (
    <>
      <Part
        name={props.parts[0].name}
        exerciseCount={props.parts[0].exercises}
      />
      <Part
        name={props.parts[1].name}
        exerciseCount={props.parts[1].exercises}
      />
      <Part
        name={props.parts[2].name}
        exerciseCount={props.parts[2].exercises}
      />
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.total}</p>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total
        total={
          course.parts[0].exercises +
          course.parts[1].exercises +
          course.parts[2].exercises
        }
      />
    </div>
  );
};

export default App;
