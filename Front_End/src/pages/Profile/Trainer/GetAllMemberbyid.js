import React, { useEffect, useState } from 'react'
import { ReactSession } from 'react-client-session';

import axios from 'axios';
import "../ride.css";
import { useHistory } from 'react-router-dom';
import Memberbyid from './Memberbyid';

function GetAllMemberbyid() {
  const user = ReactSession.get("user");
  const id = user.tid
  const [member, setMember] = useState([])
  const [add, setAdd] = useState(false)
  const history = useHistory();


  useEffect(() => {

    axios.get("http://localhost:8080/getallmemberbytrainerid/" + id)
      .then((response) => {
        setMember(response.data);
        setAdd(true)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  function update(id) {
    ReactSession.set("mem", id);
    history.push({
      pathname: '/updatetrainingplan',
      state: id
    })

  }
  return (
    <div>
      <br/>
      <br/>
      <center>
        <h2><b>MEMBER-DETAILS</b></h2>
        <br />
        <br />
      {add && <Memberbyid data={member}/>}
      </center>
    </div>
  )
}
export default GetAllMemberbyid;