import axios from "axios";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import login from "../../assets/images/login.jpg";
const Login = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const formHandle = async (event) => {
    try {
      event.preventDefault();
      setSuccess("");
      setError("");
      const email = event.target.email.value;
      const password = event.target.password.value;
      const data = { email, password };
      const url = "https://reqres.in/api/login";
      const { data: result } = await axios.post(url, data);
      if (result.token) {
        setSuccess(result.token);
      }
    } catch (error) {
      setError(error.response.data.error);
    }
  };
  return (
    <Container className="mt-3">
      <Row className="justify-item-center">
        <Col sm={12} md={12} lg={5}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div>
              <h2 className="text-center">Welcome Back</h2>
              <p className="text-center">Please Login ATools </p>
              <Form onSubmit={formHandle}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Email Address*"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Password*"
                  />
                </Form.Group>

                <Button
                  variant="dark"
                  className="d-block w-100 mb-2"
                  type="submit"
                >
                  Login
                </Button>
              </Form>
              {success && <p className="text-success"> Token : {success}</p>}
              {error && <p className="text-danger"> Error : {error}</p>}
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
