import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { expense, rem } from '../action-creator';
import { useDispatch } from 'react-redux';
import dele from '../images/icons8-delete-90.png'



function Expense() {

    const Dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [Amount, setAmount] = useState("");
 
const del =()=>{

  console.log("delete")
Dispatch(rem())
}

  const handleClose = () => setShow(false);
  const handleShow = () => {setShow(true); console.log("clicked")}

  const handleSubmit = (e) => {
   
   if(name === ""  || Amount === ""){
    alert("Kindly fill the information")
   }

   else{ 
    
    Dispatch(expense(name, Amount)) 

    }
   
  
  }; 
  let Exp = localStorage.getItem("Entry");
    let Exps= JSON.parse(Exp);
    let expense_row = Exps.Expenses;
  
 

  return (
    <>
 <div className="row  offset-sm-0 offset-md-2 offset-lg-3">
          <div
            className="col-11 col-md-10 col-lg-8  bg-light mt-2 mx-3 mb-5 text-start"
            id="expense"
          >
            Expenses
           
            <div className="row my-2" id="expenses">
               <table>
                        <thead>
                            <tr>
                                <th>Expense Name</th>
                                <th>Cost</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expense_row.map((tableData, index) => (
                                <tr key={index} id={index}>
                                    <td> {tableData.Name ?  tableData.Name: ""}</td>
                                    <td>
                                   {tableData.Amount ? `Rs. ${tableData.Amount} `  : ""}
                                    </td>
                                    <td >
                                    <img src={dele} alt="" style={{height: "25px"}} onClick={del}/>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
            </div>
            <button
              type="button"
              className="btn btn-outline-success btn-sm my-4"
              id="expense_btn"
             >
              {" "}
              <div onClick={handleShow}>
        Add Expense
      </div>
            </button>
          </div>
        </div>
              
       

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
         
        <Modal.Header closeButton>
          <Modal.Title>Add Expense</Modal.Title>
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
          <Button variant="outline-success" onClick={()=>{handleSubmit(); handleClose();}}>Add</Button>
        </Modal.Footer>
     
      </Modal>
    </>
  );
}


export default Expense;