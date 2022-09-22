import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "../ride.css";

function AllRides() {
  
  
  const [payment,setPayment]=useState([])
  const [add,setAdd]=useState(false)
console.log(payment);

  useEffect(()=>{

    axios.get("http://localhost:8080/getpaymentdetails")
      .then((response) => {
        setPayment(response.data);
        setAdd(true)

      })
      .catch((error) => {
        console.log(error);
      })

  },[])

  
  return (
    <div>
    {add && payment.map((trans,index)=>(<div id='ride' key={index} style={{'textAlign':'center'}}>
      <div className="card">
        <div className="card-body">
          <h5 className='btn btn-dark btn-lg btn-block'><b>Transaction Details</b></h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Transaction Id</b>:{trans.pid}</li>
          <li className="list-group-item"><b>Amount</b>:{trans.fees}</li>
          <li className="list-group-item"><b>Name</b> :{trans.name}</li>
          <li className="list-group-item"><b>LoginId</b> : {trans.loginid}</li>
        </ul>
        
      </div>
    </div>))}
    </div>
  )
}
export default AllRides;