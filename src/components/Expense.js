import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { expense } from '../action-creator';
import { useDispatch } from 'react-redux';

function Expense() {

    const Dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [Amount, setAmount] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => {setShow(true); console.log("clicked")}

  const handleSubmit = (e) => {
    e.preventDefault();
   
    Dispatch(expense(name, Amount))
  
  };

  return (
    <>
      <div onClick={handleShow}>
        Add Expense
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
         <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       
      <Row>
        <Col>
          <Form.Control type="text" placeholder="Expense name" value={name} required onChange={(e)=>{setName(e.target.value)}}/>
        </Col>
        <Col>
          <Form.Control type="text" placeholder="Amount in PKR" value={Amount} required onChange={(e)=>{setAmount(e.target.value)}}/>
        </Col>
      </Row>
   
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-success" type="submit">Add</Button>
        </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}


export default Expense;