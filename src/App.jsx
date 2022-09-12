import { useState, useEffect } from "react";
import "./assets/css/style.css";

// 2. Set up an effect that runs every time the `timeRemaining` changes
//    The effect should wait 1 second, then decrement the `timeRemaining` by 1
//
//    Hint: use `setTimeout` instead of `setInterval`. This will help you avoid
//    a lot of extra work.
//
//    Warning: there will be a bug in this, but we'll tackle that next

function App() {
	const [text, setText] = useState("");
	const [timeRemaining, setTimeRemaining] = useState(5);
	const [finished, setFinished] = useState(false);

	function handleChange(event) {
		const { value } = event.target;

		setText(value);
	}

	function countWords() {
		return text.split(" ").filter((word) => word !== "").length;
	}
	console.log("reloaded")
	useEffect(() => {
		if (timeRemaining == 0) {
			setFinished(true);
		} else {
			if (finished == false) {
				const timeout = setTimeout(() => {
					setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 1);
				}, 1000);

				return () => (clearTimeout(timeout))
			}
		}
	}, [timeRemaining]);
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
					<h3>Time Remaining: {timeRemaining}</h3>
					<button className="submit">Start</button>
					<h4>Word Count: {countWords()}</h4>
				</div>
			</div>
		</div>
	);
}

export default App;
