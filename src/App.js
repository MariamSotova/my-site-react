import "./App.css";
import NavBar from "./NavBar/NavBar";
// import Home from "./Home/Home";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Work from "./Work/Work";
import PageHeader from "./PageHeader/PageHeader";
import MyPdf from "./MyPdf/MyPdf";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Home /> */}
      <About />
      <Skills />
      <Work />
      <PageHeader />
      <MyPdf />
    </div>
  );
}

export default App;
