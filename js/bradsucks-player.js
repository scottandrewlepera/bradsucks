class BradSucksPlayer extends HTMLElement {

  constructor() {
    super();
  }

  initialize() {
    // create audio element
    const audio = this.audio = document.createElement('audio');
    audio.setAttribute('src','');
    audio.setAttribute('preload', 'auto');
    audio.setAttribute('controls', 'false');
    audio.style.setProperty('display', 'none');

    // grab references to various UI elements
    this.trackList = this.querySelector('datalist');
    this.playButton = this.querySelector('button.play');
    this.skipButton = this.querySelector('button.skip');
    this.trackLabel = this.querySelector('span.track-label');
    this.appendChild(this.audio);

    this.playButton.classList.add('play-button');
    this.skipButton.classList.add('skip-button');
    this.trackLabel.classList.add('track-label');

    this.currentTrackNumber = 0;
  }

  connectedCallback() {

    this.initialize();

    this.playButton.addEventListener('click', () => {
      if (this.audio.paused) {
        this.play();
      } else {
        this.pause();
      }
    });

    if (this.skipButton) {
      this.skipButton.addEventListener('click', () => {
        this.advance();
      });
    }

    this.audio.addEventListener("ended", () => {
      this.advance();
    });

    this.update();
  }

  disconnectedCallback() {
  }

  play() {
    this.audio.play();
    this.classList.add('playing');
  }

  pause() {
    this.audio.pause();
    this.classList.remove('playing');
  }

  advance() {
    if (!this.audio.paused) {
      this.pause();
    }

    this.currentTrackNumber++;
    if (this.currentTrackNumber === this.trackList.options.length) {
      this.currentTrackNumber = 0;
    }

    this.update();

    if (this.audio.paused) {
      this.play();
    }
  }

  update() {
    const track = this.trackList.options[this.currentTrackNumber];
    this.audio.src = track.value;
    this.trackLabel.innerHTML = track.text;
  }
  
}

export const registerBradSucksPlayerComponent = () => {
  customElements.define("bradsucks-player", BradSucksPlayer);
}
