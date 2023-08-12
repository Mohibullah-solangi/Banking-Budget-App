import React from 'react'


  

const Display = () =>{
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return(
<>
<div className="container">
<h1>Gullak Bank By Mohib</h1>
<div className='row offset-2'>

    
    <div className='col-md-4 bg-light m-1' id='display'>
      
      <h6>MOHIB ULLAH</h6>
      <h4 id='balance'>Rs. 2000 <span>.00</span></h4>
      <h6>1234 0000 0000 1234</h6>
      <h6 id='display-footer'><div>{date} </div><span>Share Acc. No.</span></h6>

    </div>
    <div className='col-lg-6'>
      <div className="row">
    <div className='col-4 bg-light m-1' id='display'>
      
      <img src="./images/icons8-deposit-96.png" alt="" />
      

    </div>

    <div className='col-4 bg-light m-1' id='display'>
      
      <h6>MOHIB ULLAH</h6>
   

    </div>
    </div>
    <div className="row">
    <div className='col-4 bg-light m-1' id='display'>
      
      <h6>MOHIB ULLAH</h6>


    </div>
    <div className='col-4 bg-light m-1' id='display'>
      
      <h6>MOHIB ULLAH</h6>
      
      </div>
    </div>

    </div>



</div>

<div className="row offset-2">
  
  <div className="col-8 bg-light mt-2 mx-3" id='display'>Expense</div>
  
</div>

</div>
</>
  )
}


export default Display;