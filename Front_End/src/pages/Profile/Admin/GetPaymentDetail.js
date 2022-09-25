import React, { useEffect, useState } from 'react'
import axios from 'axios';

import "../ride.css";
import Table from 'react-bootstrap/esm/Table';
import Payment from './Payment';

function AllRides() {



  const [payment, setPayment] = useState([])
  const [add, setAdd] = useState(false)
  console.log(payment);

  useEffect(() => {

    axios.get("http://localhost:8080/getpaymentdetails")
      .then((response) => {
        setPayment(response.data);
        setAdd(true)

      })
      .catch((error) => {
        console.log(error);
      })

  }, [])
  
  return (
    <div>
      <br />
      <br />
      <center>
        <h2><b>PAYMENT-DETAILS</b></h2>
        <br />
        <br />
        <Payment data={payment} />
      </center>
    </div>

  )
}
export default AllRides;