import { registerBradSucksLogoComponent } from "./bradsucks-logo.js";
import { registerBradSucksPlayerComponent } from "./bradsucks-player.js";
import { registerBradSucksPlayButtonComponent } from "./bradsucks-play-button.js";
import { registerBradSucksPauseButtonComponent } from "./bradsucks-pause-button.js";

const init = () => {
  registerBradSucksPlayButtonComponent();
  registerBradSucksPauseButtonComponent();
  registerBradSucksLogoComponent();
  registerBradSucksPlayerComponent();
}

document.addEventListener('DOMContentLoaded', init);

