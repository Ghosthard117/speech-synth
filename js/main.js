// Init speech synth
let speech = new SpeechSynthesisUtterance()
let voices = []

// Wrap DOM elements
let voiceSelect = document.querySelector('.select')

// Select voice
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices()
  speech.voice = voices[0]

  voices.forEach((voice, i) => (voiceSelect.options[i]) = new Option(voice.
    name, i))
}

voiceSelect.addEventListener('change', () => {
  speech.voice = voices[voiceSelect.value]
})

// Listen for submission
const listenElement = document.querySelector('.listen')
listenElement.addEventListener('click', () => {
  speech.text = document.querySelector('.textarea').value
  window.speechSynthesis.speak(speech)
})