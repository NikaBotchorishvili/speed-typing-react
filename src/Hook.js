import { useState, useEffect, useRef } from "react";

function Hook() {
	const [text, setText] = useState("");
	const [timeRemaining, setTimeRemaining] = useState(5);
	const [started, setStarted] = useState(false);
	const [wordCount, setWordCount] = useState(0);

	const inputRef = useRef(null);
	function handleChange(event) {
		const { value } = event.target;
		setText(value);
	}
	function countWords() {
		return text.split(" ").filter((word) => word !== "").length;
	}

	function handleStartGame() {
		setText("");
		setStarted((prevStarted) => !prevStarted);
		setTimeRemaining(5);
        inputRef.current.disabled = false
		inputRef.current.focus();
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

	return {
		inputRef: inputRef,
		handleChange: handleChange,
		handleStartGame: handleStartGame,
		wordCount: wordCount,
		started: started,
		timeRemaining: timeRemaining,
		text: text,
	};
}


export default Hook
