package Fitness.FitnessProject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import Fitness.FitnessProject.models.Login;
@RestController
@CrossOrigin
public class LoginController {
    @Autowired
	JdbcTemplate temp;
    @PostMapping("/login")
	public int CheckLogin(@RequestBody Login login) {
          int id=0;
		try {
			 id = temp.queryForObject("select loginid from login where username='"+login.getUsername()+"' and password='"+login.getPassword()+"'",Integer.class);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return id;
	}
    
    @GetMapping("/getrole/{id}")
  	public String getRole(@PathVariable int id) {
  			 return temp.queryForObject("select role from login where loginid="+id,String.class);
  			
  	}
    
   
}
