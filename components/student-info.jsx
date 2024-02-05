import React from 'react';
const StudentInfo = (student) => {
return (
    <div>
        <table>
            <tbody>
                <tr>
                    <td>Roll Number:</td>
                    <td>{student.RollNo}</td>
                </tr>
                <tr>
                    <td>Name:</td>
                    <td>{student.Name}</td>
                </tr>
                <tr>
                <td>Phone Number:</td>
                <td>{student.MobileNumber}</td>
                </tr>
                

            </tbody>
        </table>
    </div>
);
}
export default StudentInfo;