import React from "react";

const StudentList = (props) => {
  //TODO: write logic to take an array of values and MAP them into JSX
  let renderedStudents = props.names.map((name) => {
    return <p>{name}</p>;
  });
  return (
    <div>
      <ul>{renderedStudents}</ul>
    </div>
  );
};

export default StudentList;
