import deposit_img from "../images/icons8-deposit-90.png";
import send_img from "../images/icons8-send-money-96.png";
import withdraw_img from "../images/icons8-withdraw-64.png";
import friend_img from "../images/icons8-friends-96.png";
import logo from "../images/vDHlc1gATvGuir2mwpUF_Y0uugH16L6gtYdVq.png";
import { deposit, withdraw, send, name} from "../action-creator";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FormControl } from "react-bootstrap";
import { useSelector } from "react-redux/es/hooks/useSelector"; 




const Display = () => {

  const name1 = useSelector(state =>  state.info);

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const Dispatch = useDispatch();

  const [show_Deposit, setshow_Deposit] = useState(false);
  const handleClose_d = () => [setshow_Deposit(false), console.log("close")];
  const handleShow_d = () => setshow_Deposit(true);
  const [input_deposit, setinput_deposit] = useState(0);

  
  const [show_withdraw, setshow_withdraw] = useState(false);
  const handleClose_w = () => [setshow_withdraw(false), console.log("close")];
  const handleShow_w = () => setshow_withdraw(true);
  const [input_withdraw, setinput_withdraw] = useState(0);

  const [show_send, setshow_send] = useState(false);
  const handleClose_s = () => [setshow_send(false), console.log("close")];
  const handleShow_s = () => setshow_send(true);
  const [input_send, setinput_send] = useState(0);
 


  
  

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center" id="balance">
          {" "}
          <img src={logo} alt="" style={{ height: "80px" }} /> &nbsp;Gullak Bank
        </h1>
        <div className="row offset-2 mt-5">
          <div className="col-md-5 bg-light m-1" id="display">
            <h6 id="name">{name1 ? name1: Dispatch(name())}</h6>
            <h4 id="balance">
              Rs. 2000 <span>.00</span>
            </h4>
            <h6>1234 0000 0000 1234</h6>
            <h6 id="display-footer">
              <div>{date} </div>
              <span>Share Acc. No</span>
            </h6>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div
                className="col-4 bg-light m-1 align-items-center"
                id="display-actions"
                onClick={handleShow_d}
                variant="primary"
              >
                <img src={deposit_img} alt="" style={{ height: "50px" }} />
                <h6>Deposit</h6>

                
              </div>

              <div
                className="col-4 bg-light m-1"
                id="display-actions"
                onClick={handleShow_s}
              >
                
                <img src={send_img} alt="" style={{ height: "55px" }} />
                <h6>Send Money</h6>
              </div>
            </div>
            <div className="row">
              <div
                className="col-4 bg-light m-1"
                id="display-actions"
                onClick={handleShow_w}
              >
                <img src={withdraw_img} alt="" style={{ height: "45px" }} />
                <h6>Widhdraw</h6>
              </div>
              <div className="col-4 bg-light m-1" id="display-actions">
                <img src={friend_img} alt="" style={{ height: "50px" }} />
                <h6>Friends</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="row offset-2">
          <div className="col-9 bg-light mt-2 mx-3" id="expense">
            Expense
          </div>
        </div>
      </div>

      <Modal
                  show={show_Deposit}
                  onHide={handleClose_d}
                  backdrop="static"
                  keyboard={false}
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Deposit</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <FormControl 
                type="text"
                placeholder="Enter Amount in PKR"
                autoFocus value={input_deposit} onChange={(e)=>{setinput_deposit(e.target.value);}}
              />
                  </Modal.Body>
                  <Modal.Footer className="d-flex justify-content-center">
                    <Button variant="outline-secondary" onClick={handleClose_d}>
                      Close
                    </Button>
                    <Button variant="outline-success" onClick={()=>{handleClose_d(); Dispatch(deposit(input_deposit))}}>Enter</Button>
                  </Modal.Footer>
                </Modal>


                <Modal
                  show={show_withdraw}
                  onHide={handleClose_w}
                  backdrop="static"
                  keyboard={false}
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Widhdraw</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <FormControl 
                type="text"
                placeholder="Enter Amount in PKR"
                autoFocus value={input_withdraw} onChange={(e)=>{setinput_withdraw(e.target.value);}}
              />
                  </Modal.Body>
                  <Modal.Footer className="d-flex justify-content-center">
                    <Button variant="outline-secondary" onClick={handleClose_w}>
                      Close
                    </Button>
                    <Button variant="outline-success" onClick={()=>{handleClose_w(); Dispatch(withdraw(input_withdraw))}}>Enter</Button>
                  </Modal.Footer>
                </Modal>


                <Modal
                  show={show_send}
                  onHide={handleClose_s}
                  backdrop="static"
                  keyboard={false}
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Send Money</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <FormControl 
                type="text"
                placeholder="Enter Amount in PKR"
                autoFocus value={input_send} onChange={(e)=>{setinput_send(e.target.value);}}
              />
                  </Modal.Body>
                  <Modal.Footer className="d-flex justify-content-center">
                    <Button variant="outline-secondary" onClick={handleClose_s}>
                      Close
                    </Button>
                    <Button variant="outline-success" onClick={()=>{handleClose_s(); Dispatch(send(input_deposit))}}>Enter</Button>
                  </Modal.Footer>
                </Modal>
    </>
  );
};

export default Display;
