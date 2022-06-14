import { Button, Col, Container, Form, Row } from "react-bootstrap";
import login from "../../assets/images/login.jpg";
const Login = () => {
  return (
    <Container className="mt-3">
      <Row className="justify-item-center">
        <Col sm={12} md={12} lg={5}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div>
              <h2 className="text-center">Welcome Back</h2>
              <p className="text-center">Please Login ATools </p>
              <Form>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Control type="email" placeholder="Email Address*" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Control type="password" placeholder="Password*" />
                </Form.Group>

                <Button variant="dark" className="d-block w-100" type="submit">
                  Login
                </Button>
              </Form>
              <div className="d-flex justify-content-between  flex-wrap mt-2">
                <Form.Check
                  className="pe-3"
                  type="checkbox"
                  label="Remember Password"
                />
                <p>Forget Password?</p>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={12} md={12} lg={7} className="d-none d-lg-block ">
          <div>
            <img className="img-fluid" src={login} alt="login" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
