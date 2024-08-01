
import axios from 'axios';
import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8080/api/login", form)
      .then((res) => {
        const { role, _id } = res.data.data;
        if (role === "vendor") {
          navigate(`/vendors/${_id}`);
        } else if (role === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err.message);
        setMessage("Login failed: Invalid email or password" );
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  return (
    <div className="auth-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', backgroundColor: "#F7F6FA" }}>
      <Card style={{ width: '30rem', padding: '2rem', backgroundColor: "#F7F6FA" }}>
        <Card.Body>
          <Card.Title className="text-center" style={{ fontSize: "40px" }}>Login</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control name="email" value={form.email} onChange={handleChange} type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" value={form.password} onChange={handleChange} type="password" placeholder="Password" required />
            </Form.Group>

            <p className="text-danger mt-2">{message}</p>

            <div className="d-grid gap-2 mt-4">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>

            <div className="text-center mt-3">
              <Button variant="link" onClick={() => navigate('/register')}>
                Don't have an account? Register
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
