import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";

function App (){

 return(
  <>
  <Navbar title="TextUtils" abouttext="About Us"/>
  <div className=" container my-3">
    <div className=" container">
  {/* <TextForm heading= "Enter the text to analyze below"/> */}
  <About></About>
  </div>
 
  </div>
  </>
 )
}
export default App;