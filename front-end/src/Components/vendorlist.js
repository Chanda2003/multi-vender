


import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { Link } from "react-router-dom";

const VendorList = () => {
  const [vendors, setVendors] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedVendor, setSelectedVendor] = useState(null);

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };
  const chunks = chunkArray(vendors, 3);

  useEffect(() => {
    axios.get("https://multi-vender-okyf.onrender.com/api/getvendors")
      .then((res) => {
        const vendorUsers = res.data.users.filter(user => user.role === "vendor");
        setVendors(vendorUsers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (vendorId) => {
    axios.delete(`https://multi-vender-okyf.onrender.com/api/getvendors/${vendorId}`)
      .then((res) => {
        setVendors(prevVendors => prevVendors.filter(vendor => vendor._id !== vendorId));
        setShowModal(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showDeleteConfirmation = (vendor) => {
    setSelectedVendor(vendor);
    setShowModal(true);
  };

  const confirmDelete = () => {
    handleDelete(selectedVendor._id);
  };

  const cancelDelete = () => {
    setShowModal(false);
    setSelectedVendor(null);
  };

  return (
    <div>
      {chunks.map((chunk, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#E6ECF2",
            backgroundSize: "cover",
            height: "500px",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          {chunk.map((vendor) => (
            <Link to={`/vendors/${vendor._id}`} key={vendor._id}>
              <Card
                style={{
                  width: "18rem",
                  display: "inline-flex",
                  height: "370px",
                  margin: "8px",
                  boxShadow: "1px 1px 9px 7px #CAC5C3",
                  border: "none",
                }}
              >
                <Card.Img
                  variant="top"
                  style={{
                    height: "150px",
                    width: "150px",
                    marginLeft: "20%",
                    marginTop: "8%",
                    borderRadius: "50%",
                  }}
                  src="https://secure.gravatar.com/avatar/8e051f27bc681a698a8572f5b3fae354?s=96&d=mm&r=g"
                />
                <br></br>

                <Card.Body>
                  <Card.Title>{vendor.name}</Card.Title>
                  <Card.Text>Role: {vendor.role}</Card.Text>
                  <Card.Text>ID: {vendor._id}</Card.Text>
                  <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <Button
                      style={{ border: "none", color: "#4A72A2", fontWeight: "bold" }}
                      variant="outline-primary"
                    >
                      {vendor.vendornumber}
                    </Button>
                    <Button
                      variant="danger"
                      onClick={(e) => {
                        e.preventDefault();
                        showDeleteConfirmation(vendor);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          ))}
        </div>
      ))}

      <Modal show={showModal} onHide={cancelDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this vendor?</Modal.Body>
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

export default VendorList;
