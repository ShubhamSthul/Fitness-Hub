import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import '../ride.css';
export default function AllUser() {
  const [users,setUsers] = useState([]);
  const [user, setUser] = useState("");
  const [day, setDay] = useState(user.day);
  const [workout, setWorkout] = useState(user.workout);
  const [diet, setDiet] = useState(user.diet);
  const [check, setCheck] = useState(false);
  

  useEffect(() => {
    axios.get("http://localhost:8080/getallplan")
    .then((response) => {
      setUsers(response.data);
      setCheck(true);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])

  function updateData(user) {
    console.log(user);
    const updatedUser = {}
    updatedUser.id = user.id;
    updatedUser.day = day==undefined?user.day:day;
    updatedUser.workout = workout==undefined?user.workout:workout;
    updatedUser.diet = diet==undefined?user.diet:diet;

    console.log(updatedUser);
    axios.post("http://localhost:8080/updateplan", updatedUser)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })

  }
  return (

    <div style={{"textAlign":"center"}}>
      <h5>Update diet plan</h5>
      <Table striped bordered hover className="table-responsive">
        <thead>
          <tr>
            <th>ID</th>
            <th>Days</th>
            <th>WorkOut</th>
            <th>DietPlan</th>
           
          </tr>
        </thead>
        <tbody>
          {check && users.map((user,index) => (
            <tr key={index } >
              <td>{user.id}</td>
              <td><input type='text' defaultValue={user.day}  onBlur={(e) => { setDay(e.target.value); setUser(user) }} /></td>
              <td><input type='text' defaultValue={user.workout}  onBlur={(e) => { setWorkout(e.target.value) }} /></td>
              <td><input type='text' defaultValue={user.diet}  onBlur={(e) => { setDiet(e.target.value) }} /></td>
              <td><button className='btn btn-dark' onClick={() => { updateData(user) }}>Update</button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}