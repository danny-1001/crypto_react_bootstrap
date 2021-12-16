import "./Styles/Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import { Container } from "react-bootstrap";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <NavBar />

        <Footer />
      </Container>
    </div>
  );
}

export default App;
