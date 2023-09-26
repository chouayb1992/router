import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

export function FormAdd(props) {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({ title: '', description: '', posterURL: '', rating:''});
    const handleInputChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
      };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Complete the form:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col}  controlId="validationCustom01">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Movie title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group as={Col}  controlId="validationCustom02">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Movie description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="position-relative mb-3">
            <Form.Label>Cover picture:</Form.Label>
            <Form.Control
              type="file"
              required
              name="file"
              value={formData.posterURL}
              onChange={handleInputChange}
            />
            </Form.Group>
            <Form.Group as={Col}  controlId="validationCustom02">
          <Form.Label>Rating:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Movie rating"
            value={formData.rating}
            onChange={handleInputChange}
          />
          </Form.Group>
      </Row>
      <Button type="submit">Add movie</Button>
    </Form>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}