import { Container, Nav, Navbar } from "react-bootstrap";
import "./Menubar.css";
const Menubar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
      className="shadow-sm"
    >
      <Container>
        <Navbar.Brand href="#home">
          <span className="fw-bold logo">ATools</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex justify-content-center align-items-center gap-2">
            <button type="button" className="custom-btn trail-btn">
              Start Free Trial
            </button>
            <button type="button" className="custom-btn login-btn">
              LogIn
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menubar;
