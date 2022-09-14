import { useState, useEffect, useRef } from "react";
import "./assets/css/style.css";
import Hook from "./Hook"

function App() {

	
	const {inputRef, handleChange, handleStartGame, wordCount, started, timeRemaining, text} = Hook()
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
						value={text}
						onChange={handleChange}
						disabled={!started}
					/>
				</div>

				<div className="submission">
					<h3>Time Remaining: {timeRemaining}</h3>
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
