import { useState, useEffect } from "react";
import "./assets/css/style.css";

function App() {
	const [text, setText] = useState("");
	const [timeRemaining, setTimeRemaining] = useState(5);
	const [started, setStarted] = useState(false);
	const [wordCount, setWordCount] = useState(0);
	function handleChange(event) {
		const { value } = event.target;

		setText(value);
	}

	function countWords() {
		return text.split(" ").filter((word) => word !== "").length;
	}

	function handleStartGame() {
		setText("")
		setStarted((prevStarted) => !prevStarted);
		setTimeRemaining(5);
	}

	useEffect(() => {
		if (timeRemaining == 0) {
			setStarted(false);
			setWordCount(countWords());
		} else {
			if (started) {
				const timeout = setTimeout(() => {
					setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 1);
				}, 1000);

				return () => clearTimeout(timeout);
			}
		}
	}, [timeRemaining, started]);
	return (
		<div className="container">
			<div className="main">
				<div className="header">
					<h1>How fast can you type?</h1>
				</div>
				<div className="game">
					<textarea
						style={{ background: started ? "#00b800" : "gray" }}
						value={text}
						onChange={handleChange}
					/>
				</div>

				<div className="submission">
					<h3>Time Remaining: {timeRemaining}</h3>
					<button className="submit" onClick={started === false && handleStartGame}>
						Start
					</button>
					<h4>Word Count: {wordCount !== 0 ? countWords() : "???"}</h4>
				</div>
			</div>
		</div>
	);
}

export default App;
