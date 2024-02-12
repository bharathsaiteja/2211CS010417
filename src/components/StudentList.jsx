
import React, { useState, useEffect } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudentList = async () => {
      try {
        const response = await fetch(' https://sindhuravuri666.github.io/StudentList/StudentList.json');
        if (!response.ok) {

            throw new Error('Failed to fetch countries');
            
            }
            const data = await response.json();
            

        setStudents(data);
      } catch (error) {
        console.log('Error fetching student list:', error);
      }
    };

    fetchStudentList();
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            
            <th>RollNo:</th>
            <th>EmailID:</th>
            <th>Name:</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.RollNo}>
              
              <td>{student.RollNo}</td>
              <td>{student.EmailID}</td>
              <td>{student.Name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
