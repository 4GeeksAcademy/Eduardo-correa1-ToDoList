import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [task, setTask] = useState([]);
	return (
		<div className="text-center container">
			<h1 className="text-center mt-5">Mis tareas pendientes</h1>
			<div className="taskContainer">
			<ul className="mt-5 text-center">
				<li><input type="text" placeholder="Agrega tu tarea" onChange={(tarea)=> setInputValue(tarea.target.value)} value={inputValue} onKeyPress={(tarea) =>{
					if (tarea.key === "Enter"){
						setTask(task.concat(inputValue));
						setInputValue("");
					}
				}} /></li>
				{task.map((entrada, index) => <li key={index}><i onClick={()=>setTask(task.filter((entrada, currentIndex) => index != currentIndex))} className="fas fa-trash-alt"></i> {entrada}</li>)}
			</ul>
			<div className="text-start taskCounter"><p>{task.length} tareas pendientes</p></div>
			</div>
			

		</div>
	);
	
};

export default Home;
