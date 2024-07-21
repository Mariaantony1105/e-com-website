import React, { useState } from 'react';
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [addUser, setAddUser] = useState({
    userType: "",
    email: "",
    password: "",
    dateOfBirth: "",
    MobileNumber: "",
    address: ""
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const { userType, email, password, dateOfBirth, MobileNumber, address } = addUser;

  // Validate the form and update the errors state
  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "userType":
        if (!value) error = "User type is required";
        break;
      case "email":
        if (!value) error = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(value)) error = "Email is invalid";
        break;
      case "password":
        if (!value) error = "Password is required";
        else if (value.length < 6) error = "Password must be at least 6 characters";
        break;
      case "dateOfBirth":
        if (!value) error = "Date of Birth is required";
        break;
      case "MobileNumber":
        if (!value) error = "Mobile Number is required";
        else if (!/^\d+$/.test(value)) error = "Mobile Number must be digits only";
        break;
      case "address":
        if (!value) error = "Address is required";
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  // Handle input changes and validate
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setAddUser({ ...addUser, [name]: value });
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate all fields before submitting
    const newErrors = {};
    Object.keys(addUser).forEach((key) => validateField(key, addUser[key]));
    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      return;
    }

    try {
      // const response = await axios.post('your-api-endpoint/signup', addUser); // Update with your API endpoint
      setSuccessMessage("Signup successful!");
      console.log(addUser.userType); 

      if (addUser.userType === "user") {
        navigate('/user');
      } else {
        navigate('/admin');
      }

      // Clear form and errors on successful signup
      setAddUser({
        userType: "",
        email: "",
        password: "",
        dateOfBirth: "",
        MobileNumber: "",
        address: ""
      });
      setErrors({});
    } catch (error) {
      console.error('There was an error!', error);
      setErrors({ form: 'An error occurred during signup. Please try again later.' });
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="text-center mb-4">Signup Page</h1>
          <Form onSubmit={handleSubmit}>
            {successMessage && <Alert variant="success">{successMessage}</Alert>}
            {errors.form && <Alert variant="danger">{errors.form}</Alert>}

            <Form.Group className="mb-3">
              <Form.Label>Select User Type</Form.Label>
              <Form.Control
                as="select"
                name="userType"
                value={userType}
                onChange={onChangeInput}
                isInvalid={!!errors.userType}
              >
                <option value="">Select...</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.userType}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                name="email"
                onChange={onChangeInput}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                name="password"
                onChange={onChangeInput}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDateOfBirth">
              <Form.Label>Date Of Birth</Form.Label>
              <Form.Control
                type="date"
                placeholder="Date of Birth"
                value={dateOfBirth}
                name="dateOfBirth"
                onChange={onChangeInput}
                isInvalid={!!errors.dateOfBirth}
              />
              <Form.Control.Feedback type="invalid">
                {errors.dateOfBirth}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMobileNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter Your Mobile Number"
                value={MobileNumber}
                name="MobileNumber"
                onChange={onChangeInput}
                isInvalid={!!errors.MobileNumber}
              />
              <Form.Control.Feedback type="invalid">
                {errors.MobileNumber}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Address"
                value={address}
                name="address"
                onChange={onChangeInput}
                isInvalid={!!errors.address}
              />
              <Form.Control.Feedback type="invalid">
                {errors.address}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Signup
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
