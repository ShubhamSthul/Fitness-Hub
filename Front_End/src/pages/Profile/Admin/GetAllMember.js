import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Allmember from './Allmember';
export default function AllUser() {
  const [users, setUsers] = useState([]);
  const [check, setCheck] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:8080/getallmember")
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
        <h2><b>MEMBER-DETAILS</b></h2>
        <br />
        <br />
        {check && <Allmember data={users} />}
      </center>
    </div>
  )
}