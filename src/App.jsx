import { useState } from "react";
import "./assets/css/style.css";

function App() {
	const [text, setText] = useState("");
	

	function handleChange(event) {
		const { value } = event.target;

		setText(value);
	}

	function countWords(){
		return text.split(" ").filter((word) => word !== "").length
	}
	return (
		<div className="container">
			<div className="main">
				<div className="header">
					<h1>How fast can you type?</h1>
				</div>
				<div className="game">
					<textarea value={text} onChange={handleChange} />
				</div>

				<div className="submission">
					<h3>Time Remaining: 5</h3>
					<button className="submit">Start</button>
					<h4>Word Count: {countWords()}</h4>
				</div>
			</div>
		</div>
	);
}

export default App;
