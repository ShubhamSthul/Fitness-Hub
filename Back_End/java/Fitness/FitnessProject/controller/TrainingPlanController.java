package Fitness.FitnessProject.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import Fitness.FitnessProject.models.TrainingPlan;

@RestController
@CrossOrigin
public class TrainingPlanController {
	
	@Autowired
	JdbcTemplate temp;
	
	@PostMapping("/trainingplan")
	public String addplan(@RequestBody TrainingPlan tp)
	{
		String message="";
		try {
			temp.update("insert into training_plan (day,diet,workout) values (?,?,?)",tp.getDay(),tp.getDiet(),tp.getWorkout());
			message="Successfully Added";
		} catch (DataAccessException e) {
			message="Query Failed";
			e.printStackTrace();
		}		
		return message;	
	}
	
	@PostMapping("/updateplan")
	public String updatePlan(@RequestBody TrainingPlan tp)
	{
		String message="";
		try {
			temp.update("update training_plan set diet='"+tp.getDiet()+"', workout='"+tp.getWorkout()+"', day='"+tp.getDay()+"' where id="+tp.getId());
			message="Successfully updated";
		} catch (DataAccessException e) {
			message="Query Failed";
			e.printStackTrace();
		}		
		return message;	
	}
	
	@GetMapping("/getallplan")
	public ArrayList<TrainingPlan> getAllPlan()
	{
		List<TrainingPlan> list=new ArrayList<TrainingPlan>();
		
		try {
			list=temp.query("select * from training_plan",(rs,rownum)->{return new TrainingPlan(rs.getInt(1),rs.getString(2),rs.getString(3),rs.getString(4));});
		} catch (DataAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return (ArrayList<TrainingPlan>) list;
	}
	
}
