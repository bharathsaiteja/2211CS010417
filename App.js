import WelcomeMessage from "./components/welcome";
import StudentInfo from "./components/student-info";
function App() {
return (
<div className="App">
<div className="container mt-3" >
<WelcomeMessage name="Professor"/>
<StudentInfo RollNo='2211CS010417' Name="N.Bharath Sai Teja" MobileNumber='9959133690'/>
</div>
</div>
);
}
export default App;