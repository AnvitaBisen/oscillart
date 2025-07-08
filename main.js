const input = document.getElementById('input');

//web audio api elements
const audioCtx = new AudioContext();
const gainNode = audioCtx.createGain();

//Oscillator node
const oscillator = audioCtx.createOscillator();
oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);
oscillator.type = "sine";

oscillator.start();
gainNode.gain.value = 0;

//note names
notenames = new Map();
notenames.set("A", 440);
notenames.set("B", 493.9);
notenames.set("C", 261.6);
notenames.set("D", 293.7);
notenames.set("E", 329.6);
notenames.set("F", 349.2);
notenames.set("G", 392.0);


function frequency(pitch){
    gainNode.gain.setValueAtTime(100, audioCtx.currentTime);
    oscillator.frequency.setValueAtTime(pitch, audioCtx.currentTime);
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime + 1);
}

function handle() {
    audioCtx.resume();
    gainNode.gain.value = 0;
    frequency(input.value);
    var usernotes = String(input.value);
    frequency(notenames.get(usernotes));
}