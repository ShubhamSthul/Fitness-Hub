import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Alltrainer from './Alltrainer';
export default function AllUser() {
  const [users, setUsers] = useState([]);
 
  const [check, setCheck] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/getalltrainer")
      .then((response) => {
        setUsers(response.data);
        setCheck(true);
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
        <h2><b>TRAINER-DETAILS</b></h2>
        <br />
        <br />
        {check && <Alltrainer data={users} />
        }
      </center>
    </div>
  )
}