import MediaPlayer from './MediaPlayer.js';
import AutoPlay from  './plugins/AutoPlay.js';
import AutoPause from  './plugins/AutoPause.ts';


const video = document.querySelector('video');
const player =  new MediaPlayer({
    el:video,
    plugins: [
        new AutoPlay(),
        new AutoPause(),
    ] });

const playButton = document.querySelector('#playButton');

const muteButton = document.querySelector('#muteButton');

playButton.onclick = () => player.togglePlay()
muteButton.onclick = () => player.toggleMute()

if ('serviceWorker' in navigator ) {
    navigator.serviceWorker.register('/sw.js').catch((e) => {
        console.log(e.message)
    })
}
// function makeColorPrinter(color){
//     let colorMsg = `The color is ${color}`;
//     return function() {
//         console.log(colorMsg)
//     };
// }

// let greenColor = makeColorPrinter('green');
// console.log(greenColor())