import React from "react";

const StudentTable = () => {
  const students = [
    { id: 1, name: "John Doe", age: 20 },
    { id: 2, name: "Jane Smith", age: 22 },
    { id: 3, name: "Mike Johnson", age: 21 },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
