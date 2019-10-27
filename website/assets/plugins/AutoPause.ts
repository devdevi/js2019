import MediaPlayer from '../MediaPlayer.js'

class AutoPause {
  private threshold: number;
  private player: MediaPlayer;

    constructor() {
      this.threshold = 0.25;
      this.handleIntersection = this.handleIntersection.bind(this)
      this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
    } 

    run(player) {
      this.player = player;
      const observer = new IntersectionObserver(this.handleIntersection, {
          threshold: this.threshold,
      });

      observer.observe(this.player.media)
      document.addEventListener("visibilitychange", this.handleVisibilityChange)
    }
    handleVisibilityChange() {
      const isVisible = document.visibilityState === "visible"
      if (isVisible) {
        this.player.play();
      } else {
        this.player.pause();
      }
    }
    handleIntersection(entries) {
      const entry = entries[0]
      const isVisible = entry.intersectionRadio > this.threshold;
      console.log(entry)
      if (isVisible) {
        this.player.play();
      } else {
        this.player.pause();
      }
    };
}

// AutoPlay.prototype.run = function(player) {
//     player.mute();
//     player.play();
// }
export default AutoPause;