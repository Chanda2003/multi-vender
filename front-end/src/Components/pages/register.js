
import axios from 'axios';
import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    vendorname: "",
    vendornumber:0
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("https://multi-vender-okyf.onrender.com/api/register", form)
      .then((res) => {
        console.log(res);
        if(res.data.status==="success"){
          navigate("/login")
        }
      })
      .catch((err) => {
        console.log(err);
        setMessage("Email already exits")
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  return (
    <div className="auth-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: "#F7F6FA" }}>
      <Card style={{ width: '30rem', padding: '2rem', backgroundColor: "#F7F6FA" }}>
        <Card.Body>
          <Card.Title className="text-center" style={{ fontSize: "40px" }}>Register</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name: </Form.Label>
              <Form.Control name="name" value={form.name} onChange={handleChange} type="text" placeholder="Enter name" required />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address: </Form.Label>
              <Form.Control name="email" value={form.email} onChange={handleChange} type="email" placeholder="Enter email" required />
              <p style={{color:"red"}}>{message}</p>
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Password: </Form.Label>
              <Form.Control name="password" value={form.password} onChange={handleChange} type="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group controlId="formBasicRole" className="mt-3">
              <Form.Label>Role: </Form.Label>
              <Form.Control name="role" value={form.role} onChange={handleChange} type="text" placeholder="Enter role" required />
            </Form.Group>

            {form.role.toLowerCase() === "vendor" && (
              <>              <Form.Group controlId="formBasicVendorName" className="mt-3">
                <Form.Label>Vendor Name: </Form.Label>
                <Form.Control name="vendorname" value={form.vendorname} onChange={handleChange} type="text" placeholder="Enter vendor name" required />
              </Form.Group>
               <Form.Group controlId="formBasicVendorName" className="mt-3">
               <Form.Label>Vendor Phonenumber: </Form.Label>
               <Form.Control name="vendornumber" value={form.vendornumber} onChange={handleChange} type="number" placeholder="Enter vendor number" required />
             </Form.Group>
             </>

            )}

            {form.role.toLowerCase() === "admin" && (
              <Form.Group controlId="formBasicVendorName" className="mt-3">
                <Form.Label>Admin Name: </Form.Label>
                <Form.Control name="vendorname" value={form.vendorname} onChange={handleChange} type="text" placeholder="Enter vendor name" required />
              </Form.Group>
            )}

            <div className="d-grid gap-2 mt-4">
              <Button variant="primary" type="submit">
                Register
              </Button>
            </div>

            <div className="text-center mt-3">
              <Button variant="link" onClick={() => navigate('/login')}>
                Already have an account? Login
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Register;
