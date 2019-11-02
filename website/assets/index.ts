import MediaPlayer from './MediaPlayer';
import AutoPlay from  './plugins/AutoPlay';
import AutoPause from  './plugins/AutoPause';


const video = document.querySelector('video');
const player =  new MediaPlayer({
    el:video,
    plugins: [
        new AutoPlay(),
        new AutoPause(),
    ] });

const playButton: HTMLElement = document.querySelector('#playButton');

const muteButton: HTMLElement = document.querySelector('#muteButton');

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