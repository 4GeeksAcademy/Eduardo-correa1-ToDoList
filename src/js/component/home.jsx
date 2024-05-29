import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center container">
			<h1 className="text-center mt-5">Mis tareas pendientes</h1>
			<div className="taskContainer">
			<ul className="mt-5 text-center">
				<li><input type="text" placeholder="Que tienes por hacer?" /></li>
				<li><i className="fas fa-trash-alt float-left"></i> Limpiar</li>

			</ul>
			<div className="text-start taskCounter"><p>10 tareas</p></div>
			</div>
			

		</div>
	);
};

export default Home;
