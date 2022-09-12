import { useState } from "react";
import "./assets/css/style.css";

function App() {
	return (
		<div className="container">
			<div className="main">
				<div className="header">
					<h1>How fast can you type?</h1>
				</div>
				<div className="game">
					<textarea name="text"></textarea>
				</div>

				<div className="submission">
					<h3>Time Remaining: 5</h3>
					<button className="submit">Start</button>
				</div>
			</div>
		</div>
	);
}

export default App;
