import { useEffect, useState } from 'react';
//import Update from './images/update.webp';
import axios from 'axios';
import { ReactSession } from 'react-client-session';


function UpdateTrainingPlan() {

  const user = ReactSession.get("user");
  const [day, setDay] = useState("");
  const [workout, setWorkout] = useState("")
  const [diet, setDiet] = useState("")
  const [messege, setMessege] = useState("");

  // useEffect(() => {
  //   axios.post("http://localhost:8080/updateplan", updatedPlan)
  //   .then((response) => {
  //     console.log(response);
  //     setMessege(response.data);

  //   })
  // }, [])

  function updateData() {
    const updatedPlan = {}
    updatedPlan.day = day;
    updatedPlan.diet = diet
    updatedPlan.workout = workout
    console.log(updatedPlan);
    axios.post("http://localhost:8080/updateplan", updatedPlan)
      .then((response) => {
        console.log(response);
        setMessege(response.data);

      })
      .catch((error) => {
        console.log(error);
        setMessege(error.data);

      })
  }

  return (
    <section>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ "borderRadius": " 1rem" }}>
              <div className="row g-0">
                {/* <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img src={'#'}
                    alt="login form" className="img-fluid" style={{ "borderRadius": " 1rem 0 0 1rem" }} /><br /><br /><br />
                </div> */}
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black" style={{ 'backgroundColor': 'rgb(5, 101, 134)' }}>
                    <form action='/home'>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-key fa-2x me-3" style={{ "color": " #000" }}></i>
                        <span className="h1 fw-bold mb-0">Update Training Plan</span>
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label">Day</label>
                        <input type="text" placeholder='enter current day' className="form-control form-control-lg" required onBlur={(e) => { setDay(e.target.value) }} />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label">workout Plan</label>
                        <textarea rows={5} cols="50" placeholder='enter workoutplan' required onBlur={(e) => { setWorkout(e.target.value) }} />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label">Diet Plan</label>
                        <textarea rows={5} cols="50" placeholder='enter dietplan' required onBlur={(e) => { setDiet(e.target.value) }} />
                      </div>
                      <b style={{ 'color': 'red' }}>{messege}</b>
                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="button" onClick={updateData}>Update</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpdateTrainingPlan;
