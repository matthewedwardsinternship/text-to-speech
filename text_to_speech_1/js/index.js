window.addEventListener("DOMContentLoaded", () => {
	const speak = text => {
		const utterance = new SpeechSynthesisUtterance(text);
		speechSynthesis.speak(utterance);
	};
	const textarea = document.getElementById("textarea");
	textarea.value = "This is a text-to-speech accessibility demonstration.\nWrite any text you would like to hear read out loud here...";
	const button = document.getElementById("button");
	button.addEventListener("click", () => {
		speak(textarea.value);
	});
});