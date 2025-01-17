/* 
v1.7-alpha

JS used to apply dark mode.
To apply, from the Squarespace editor home page, go to:
Pages > Website Tools > Code Injection

Paste this JS code in the FOOTER text box.
Make sure to enclose it in a <script> tag.

*/

if (!document.location.hostname.includes("squarespace")) {
  const url = 'https://cdn.statically.io/gh/scottandrewlepera/bradsucks/v1.7-alpha/site/dark-mode-overrides.css';
  const lnk = document.createElement('link');
  lnk.setAttribute('rel','stylesheet');
  lnk.setAttribute('href', url);
  document.head.appendChild(lnk);
}