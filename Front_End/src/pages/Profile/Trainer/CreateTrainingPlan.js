import { useEffect, useState } from 'react';
// import Welcome from './welcome.webp';
// import Reception from './reception.webp';
//import Journey from './journey.jpg';
import axios from 'axios';


function CreateTrainingPlan() {
    const [day, setDay] = useState("");
    const [workout, setWorkout] = useState("")
    const [diet, setDiet] = useState("")
    const [messege, setMessege] = useState("");
   
   
    
    function addData() {
        const plan = {}
       plan.day=day;
       plan.diet=diet
       plan.workout=workout
        
       
        console.log(plan);

        if (day=="" || diet=="" || workout=="") {
            setMessege("Fill Necessary Details");
            return
        }

        axios.post("http://localhost:8080/trainingplan", plan)
            .then((response) => {
                setMessege(response.data);
            })
            .catch((error) => {
                setMessege(error.data)
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
                                    <img src={"#"}
                                        alt="login form" className="img-fluid" style={{ "borderRadius": " 1rem 0 0 1rem" }} /><br /><br /><br />
                                   <img src={"#"}
                                        alt="login form" className="img-fluid" style={{ "borderRadius": " 1rem 0 0 1rem" }} /><br /><br /><br />
                                    <img src={"#"}
                                        alt="login form" className="img-fluid" style={{ "borderRadius": " 1rem 0 0 1rem" }} />
                                </div> */}
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black" style={{ 'backgroundColor': 'rgb(5, 101, 134)' }}>
                                        <form>
                                      
                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <i className="fas fa-key fa-2x me-3" style={{ "color": " #000" }}></i>
                                                <span className="h1 fw-bold mb-0">Create Training Plan</span>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label">Day</label>
                                                <input type="text" placeholder='enter day with date(dd/mm/yy)' className="form-control form-control-lg" required onBlur={(e) => { setDay(e.target.value) }} />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label">workout Plan</label>
                                                <textarea rows={5} cols="50" placeholder='enter workoutplan' required onBlur={(e) => { setWorkout(e.target.value) }}/>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label">Diet Plan</label>
                                                <textarea rows={5} cols="50" placeholder='enter dietplan' required onBlur={(e) => { setDiet(e.target.value) }}/>

                                            </div>
                                            
                                            
                                            <b style={{ 'color': 'red' }}>{messege}</b>
                                            <div className="pt-1 mb-4">
                                                <button className="btn btn-dark btn-lg btn-block" type="button" onClick={addData}>Generate Plan</button>
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

export default CreateTrainingPlan;