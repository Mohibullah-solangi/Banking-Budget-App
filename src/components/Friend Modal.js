import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import friend_img from "../images/icons8-friends-96.png";
import { useDispatch } from 'react-redux';
import{friend} from "../action-creator"

function Friend() {

  const Dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const [name, setname] = useState("");
  const [email, setemail] = useState("");


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose()
    Dispatch(friend(name, email))
  
  };

  return (
    <>
      <div onClick={handleShow}>
      <img src={friend_img} alt="" style={{ height: "50px" }} />
                <h6>Friends</h6>
      </div>

      <Modal show={show} onHide={handleClose} centered>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Add Friend</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Friend Name"
                value={name}
                onChange={(e)=>{setname(e.target.value)}}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e)=>{setemail(e.target.value)}}
                autoFocus
                required
              />
            </Form.Group>
           
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-success" type="submit">
            Add
          </Button>
         
        </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default Friend;