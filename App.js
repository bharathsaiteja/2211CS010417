import StudentInfo from "./components/student-info";
import WelcomeMessage from "./components/welcome";
function App() {
 return (
 <div className="App">
 <div class="container-fluid">
 <WelcomeMessage/>
 <StudentInfo/>
 </div>
 </div>
 );
}
export default App;