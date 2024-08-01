



import React, { useEffect, useState } from "react";
import { Card, Form, Button, Modal, Alert } from 'react-bootstrap';
import axios from "axios";
import { useParams } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import "./styles/Inventorystyle.css";

const InventoryManagement = () => {
  const { id: vendorId } = useParams();
  const [vendors, setVendors] = useState([]);
  const [items, setItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [form, setForm] = useState({
    name: "",
    category: "",
    image: "",
    vendorName: vendorId,
    price: 0
  });

  console.log(items);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("https://multi-vender-okyf.onrender.com/api/vendor", form)
      .then((res) => {
        console.log(res);
        alert("product added successfully")
        // Refresh items after adding new product
        fetchItems();
        // Show success message
        setShowSuccessMessage(true);
        // Hide success message after 3 seconds
        setTimeout(() => setShowSuccessMessage(false), 3000);
        setForm({ name: "",
          category: "",
          image: "",
          vendorName: vendorId,
          price:0 })
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };
  
  const chunks = chunkArray(items, 4);

  const fetchItems = () => {
    axios.get(`https://multi-vender-okyf.onrender.com/api/getvendors/${vendorId}`)
      .then((res) => {
        setVendors(res.data.users);
      })
      .catch((err) => {
        console.log(err);
      });

    axios.get(`https://multi-vender-okyf.onrender.com/api/getvendorproducts`)
      .then((res) => {
        const vendorUsers = res.data.user.filter(user => user.vendorName === vendorId );
        setItems(vendorUsers);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchItems();
  }, [vendorId]);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleDelete = (productId) => {
    axios.delete(`https://multi-vender-okyf.onrender.com/api/getvendorproducts/${productId}`)
      .then((res) => {
        console.log(res);
        // Refresh items after deletion
        fetchItems();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showDeleteConfirmation = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const confirmDelete = () => {
    handleDelete(selectedProduct._id);
    setShowModal(false);
  };

  const cancelDelete = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="inventory-management">
      {showSuccessMessage && (
        <Alert variant="success" onClose={() => setShowSuccessMessage(false)} dismissible>
          Product added successfully!
        </Alert>
      )}

      <div style={{ display: "flex", gap: "5%", justifyContent: "center" }}>
        <div>
          <Card.Img 
            variant="top" 
            style={{ height: "180px", width: "180px", marginLeft: "20%", marginTop: "8%", borderRadius: "50%" }} 
            src="https://secure.gravatar.com/avatar/8e051f27bc681a698a8572f5b3fae354?s=96&d=mm&r=g" 
          />
        </div>
        <div>
          <Card.Body>
            <Card.Title>{vendors.name}</Card.Title>
            <Card.Text>{vendors.email}</Card.Text>
            <Card.Text>
              <img style={{ height: "30px", width: "30px" }} src="https://cdn-icons-png.flaticon.com/128/126/126509.png" alt="phone icon" /> 
              {vendors.vendornumber}
            </Card.Text>
            <Button variant="outlet-primary">
              <SocialIcon url="https://twitter.com" />&nbsp;
              <SocialIcon url="https://facebook.com" />&nbsp;
              <SocialIcon url="https://youtube.com" />&nbsp;
              <SocialIcon url="https://linkedin.com" />&nbsp;
              <SocialIcon url="https://instagram.com" />&nbsp;
            </Button>
          </Card.Body>
        </div>
      </div>

      <center>
        <Button variant="primary" onClick={toggleForm}>
          {showForm ? "Hide Form" : "Add Product"}
        </Button>
      </center>

      {showForm && (
        <div className="form-container">       
          <Form onSubmit={handleSubmit} className="product-form">
            <Form.Group controlId="formBasicName">
              <Form.Label>Product Name:</Form.Label>
              <Form.Control
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Enter name"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPrice" className="mt-3">
              <Form.Label>Product Price:</Form.Label>
              <Form.Control
                name="price"
                value={form.price}
                onChange={handleChange}
                type="number"
                placeholder="Enter price"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicCategory" className="mt-3">
              <Form.Label>Categories:</Form.Label>
              <Form.Control
                name="category"
                value={form.category}
                onChange={handleChange}
                type="text"
                placeholder="Enter categories"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicImage" className="mt-3">
              <Form.Label>Product Image URL:</Form.Label>
              <Form.Control
                name="image"
                value={form.image}
                onChange={handleChange}
                type="text"
                placeholder="Enter image URL"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicVendor" className="mt-3">
              <Form.Label>Vendor ID:</Form.Label>
              <Form.Control
                name="vendorName"
                value={form.vendorName}
                onChange={handleChange}
                type="text"
                placeholder="Enter vendor ID"
                required
                readOnly
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">Add Product</Button>
          </Form>
        </div>
      )}

      {chunks.length > 0 ? (
        chunks.map((chunk, index) => (
          <div key={index} className="chunk-container">
            {chunk.map((vendor) => (
              <Card className="product-card" key={vendor.id}>
                <Card.Img
                  variant="top"
                  style={{ height: "150px", width: "150px", marginLeft: "20%", marginTop: "8%", borderRadius: "50%" }}
                  src={vendor.image}
                  alt="vendor"
                />
                <Card.Body>
                  <Card.Title>{vendor.category}</Card.Title>
                  <Card.Text>{vendor.name}</Card.Text>
                  <div className="card-buttons">
                    <Button style={{ border: "none", color: "#4A72A2", fontWeight: "bold" }} variant="outline-primary">
                      {vendor.price}
                    </Button>
                    <Button variant="danger" onClick={() => showDeleteConfirmation(vendor)}>Delete</Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        ))
      ) : (
        <h2>No Products found with this Vendor</h2>
      )}

      <Modal show={showModal} onHide={cancelDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default InventoryManagement;
