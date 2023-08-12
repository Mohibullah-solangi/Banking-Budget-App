import React from 'react';
import deposit_img from '../images/icons8-deposit-90.png'
import send_img from '../images/icons8-send-money-96.png'
import withdraw_img from '../images/icons8-withdraw-64.png'
import friend_img from '../images/icons8-friends-96.png'
import logo from '../images/vDHlc1gATvGuir2mwpUF_Y0uugH16L6gtYdVq.png'
import { deposit, withdraw, send } from '../action-creator';
import { useDispatch } from 'react-redux';


  

const Display = () =>{
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const Dispatch = useDispatch();

  return(
<>
<div className="container mt-5">
<h1 className='text-center' id='balance'> <img src={logo} alt="" style={{height: "80px"}}/> &nbsp;Gullak Bank</h1>
<div className='row offset-2 mt-5'>

    
    <div className='col-md-5 bg-light m-1' id='display'>
      
      <h6>MOHIB ULLAH</h6>
      <h4 id='balance'>Rs. 2000 <span>.00</span></h4>
      <h6>1234 0000 0000 1234</h6>
      <h6 id='display-footer'><div>{date} </div><span>Share Acc. No</span></h6>

    </div>
    <div className='col-lg-6'>
      <div className="row">
    <div className='col-4 bg-light m-1 align-items-center' id='display-actions' onClick={()=>{Dispatch(deposit(50))}}>
      
      <img src={deposit_img} alt="" style={{height: "50px"}}/>
      <h6>Deposit</h6>
     



    </div>

    <div className='col-4 bg-light m-1' id='display-actions' onClick={()=>{Dispatch(send(50))}}>
      
    <img src={send_img} alt="" style={{height: "55px"}}/>
      <h6>Send Money</h6>
   

    </div>
    </div>
    <div className="row">
    <div className='col-4 bg-light m-1' id='display-actions' onClick={()=>{Dispatch(withdraw(50))}}>
      
    <img src={withdraw_img} alt="" style={{height: "45px"}}/>
      <h6>Widhdraw</h6>


    </div>
    <div className='col-4 bg-light m-1' id='display-actions'>
      
    <img src={friend_img} alt="" style={{height: "50px"}}/>
      <h6 >Friends</h6>
      
      </div>
    </div>

    </div>



</div>

<div className="row offset-2">
  
  <div className="col-9 bg-light mt-2 mx-3" id='expense'>Expense</div>
  
</div>

</div>
</>
  )
}


export default Display;