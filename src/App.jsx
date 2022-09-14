import "./assets/css/style.css";

import useWordGame from "./CustomHooks/useWordGame";

function App() {
	const DEFAULT_TIME = 5;
	const {
		handleTimeChange,
		handleChange,
		handleStartGame,
		inputRef,
		wordCount,
		started,
		formData,
		time,
	} = useWordGame(DEFAULT_TIME);

	
	return (
		<div className="container">
			<div className="main">
				<div className="header">
					<h1>How fast can you type?</h1>
				</div>
				<div className="game">
					<textarea
						ref={inputRef}
						style={{ background: started ? "#00b800" : "gray" }}
						value={formData.text}
						onChange={handleChange}
						disabled={!started}
						name="text"
					/>
				</div>

				<div className="submission">
					<h3>Time Remaining: {formData.time}</h3>

					<select name="time" value={time} onChange={handleTimeChange}>
						<option value={5}>5</option>
						<option value={10}>10</option>
						<option value={30}>30</option>
						<option value={60}>60</option>
					</select>
					<button
						disabled={started}
						className="submit"
						onClick={handleStartGame}
					>
						Start
					</button>
					<h4>Word Count: {wordCount !== 0 ? wordCount : "???"}</h4>
				</div>
			</div>
		</div>
	);
}

export default App;
