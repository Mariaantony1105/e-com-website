// src/components/FormModalBar.js
import React, { useState } from "react";
import { Button, Modal, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";

const FormModalBar = ({ show, handleClose }) => {
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleSignupRedirect = () => {
    navigate('/signup');
    handleClose();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {successMessage && <Alert variant="success">{successMessage}</Alert>}
          <LoginForm handleClose={handleClose} setSuccessMessage={setSuccessMessage} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="link" onClick={handleSignupRedirect}>
            Create Account
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormModalBar;
