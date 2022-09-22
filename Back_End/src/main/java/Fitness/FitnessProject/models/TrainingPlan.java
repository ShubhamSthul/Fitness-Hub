package Fitness.FitnessProject.models;

public class TrainingPlan {

	
	int id;
	
	String day;
	
	String workout;
	
	String diet;
	public TrainingPlan(int id, String day, String workout, String diet) {
		super();
		this.id = id;
		this.day = day;
		this.workout = workout;
		this.diet = diet;
	}
	public TrainingPlan() {
		super();
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDay() {
		return day;
	}
	public void setDay(String day) {
		this.day = day;
	}
	public String getWorkout() {
		return workout;
	}
	public void setWorkout(String workout) {
		this.workout = workout;
	}
	public String getDiet() {
		return diet;
	}
	public void setDiet(String diet) {
		this.diet = diet;
	}
	
}
