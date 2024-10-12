class BradSucksPauseButton extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <svg class="sa-button-skip" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">
          <circle style="fill: var(--sa-skip-circle, --sa-circle, transparent);" cx="256" cy="256" r="245.801"></circle>
            <g style="fill: var(--sa-skip-icon, --sa-icon, #000000);">
              <rect x="298.837" y="120.371" width="54.056" height="271.258"></rect>
              <polygon points="156.048,389.33 297.817,256 156.048,122.67 "></polygon>
            </g>
            <g style="fill: var(--sa-skip-outline, --sa-outline, #000000);">
              <path d="M437.02,74.981C388.667,26.628,324.38,0,256,0S123.333,26.628,74.98,74.981 C26.628,123.333,0,187.619,0,256s26.628,132.667,74.98,181.019C123.333,485.372,187.62,512,256,512s132.667-26.628,181.02-74.981 C485.372,388.667,512,324.381,512,256S485.372,123.333,437.02,74.981z M256,491.602c-129.911,0-235.602-105.69-235.602-235.602 S126.089,20.398,256,20.398S491.602,126.089,491.602,256S385.911,491.602,256,491.602z"></path>
              <path d="M288.637,391.628c0,5.632,4.566,10.199,10.199,10.199h54.056c5.633,0,10.199-4.567,10.199-10.199 V120.371c0-5.632-4.566-10.199-10.199-10.199h-54.056c-5.633,0-10.199,4.567-10.199,10.199v112.996L163.035,115.24 c-2.964-2.786-7.301-3.548-11.035-1.933c-3.735,1.614-6.152,5.292-6.152,9.362v266.66c0,4.068,2.418,7.748,6.152,9.362 c1.303,0.564,2.679,0.837,4.045,0.837c2.549,0,5.06-0.956,6.99-2.77l125.602-118.124V391.628z M166.247,365.736V146.263 L282.929,256L166.247,365.736z M309.036,130.57h33.657v250.86h-33.657V130.57z"></path>
              <path d="M395.634,394.744c-37.229,37.468-86.819,58.101-139.634,58.101c-5.633,0-10.199,4.567-10.199,10.199 c0,5.632,4.566,10.199,10.199,10.199c58.288,0,113.017-22.772,154.104-64.12c3.971-3.996,3.95-10.453-0.046-14.425 C406.062,390.727,399.605,390.749,395.634,394.744z"></path>
              <path d="M440.181,351.218c-4.867-2.833-11.111-1.185-13.946,3.681c-1.412,2.425-2.898,4.854-4.414,7.219 c-3.04,4.742-1.662,11.051,3.079,14.091c1.704,1.092,3.612,1.615,5.496,1.615c3.359,0,6.647-1.657,8.595-4.695 c1.674-2.61,3.313-5.29,4.871-7.967C446.698,360.297,445.048,354.053,440.181,351.218z"></path>
            </g>
          </svg>
    `;
  }
}

export const registerBradSucksPauseButtonComponent = () => {
  customElements.define('bradsucks-pause-button', BradSucksPauseButton);
};
