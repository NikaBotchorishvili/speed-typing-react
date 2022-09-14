import { useState, useEffect, useRef } from "react";

function Hook(default_time) {
	//  REFERENCES
	const inputRef = useRef(null);

	//  STATES
	const [time, setTime] = useState(default_time);
	const [formData, setFormData] = useState({
		text: "",
		time: time,
	});
	const [started, setStarted] = useState(false);
	const [wordCount, setWordCount] = useState(0);

	function handleChange(event) {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	}
	function handleTimeChange(event) {
		const { value } = event.target;
		setTime(value);
	}

	function countWords() {
		return formData.text.split(" ").filter((word) => word !== "").length;
	}

	function handleStartGame() {
		setStarted((prevStarted) => !prevStarted);
		setFormData((prevFormData) => ({ time: time, text: "" }));
		inputRef.current.disabled = false;
		inputRef.current.focus();
	}
	useEffect(() => {
		if (formData.time == 0) {
			setStarted(false);
			setWordCount(countWords());
		} else {
			if (started) {
				const timeout = setTimeout(() => {
					setFormData((prevFormData) => ({
						...prevFormData,
						time: prevFormData.time - 1,
					}));
				}, 1000);

				return () => clearTimeout(timeout);
			}
		}
	}, [formData.time, started]);

	return {
		handleTimeChange: handleTimeChange,
		handleChange: handleChange,
		handleStartGame: handleStartGame,
		inputRef: inputRef,
		wordCount: wordCount,
		started: started,
		formData: formData,
        time,
	};
}

export default Hook;
