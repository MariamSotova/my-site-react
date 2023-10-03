import "./App.css";
import NavBar from "./NavBar/NavBar";
import About from "./About/About";
import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import Work from "./Work/Work";
import PageHeader from "./PageHeader/PageHeader";

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Home />
      <Skills />
      <Work />
      <PageHeader />
    </div>
  );
}

export default App;
