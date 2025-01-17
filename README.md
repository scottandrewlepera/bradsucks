*Last updated: 2025-01-16*

This repo contains work done for the Brad Sucks website at https://bradsucks.net, including:

* Style overrides for the SquareSpace theme
* Dark mode overrides
* Audio player component

## Style Overrides

Style overrides include CSS and JavaScript that are injected both globally and into specific pages to apply bespoke styling to the SquareSpace theme. Override files can be found in the `/site` directory.

Some of these override files reference images that were uploaded as site assets. Copies of these images can be found in the `/img` directory.

### Override files
|File|Description|
|-|-|
|`/site/bs-overrides-2024.css`|CSS overrides that are applied globally.|
|`/site/bs-overrides-2024.js`|A file that contains JavaScript code to be applied only to specific pages.|

### Applying the CSS overrides

* Under **Website**, go to **Pages > Website Tools > Custom CSS**
* Paste the content of `/site/bs-overrides-2024.css` into the text box on the left hand side.
* Click **Save** in the top right corner.

### Applying the JavaScript overrides

These JS fragments inject custom class names into specific pages so they can be targeted by the custom style rules. *Do not inject these globally* or the pages may break. The specific pages are listed in the JS file itself.

To apply, 

* Under **Website** go to **Pages** and click the page to open it in the SquareSpace editor. the page in the SQS editor
* click the gear icon ⛭ to the right of the page name to open the **Settings** dialog
* In the dialog, go to **Advanced**
* Add an empty `<script></script>` tag to the "Page Header Code Injection" box.
* Paste the relevant code from the JS file into the tag.
* Click **Save**

## Dark mode overrides

Dark mode is achieved by injecting a CSS file with JavaScript. This is needed to prevent dark mode from being applied to the Squarespace editor.

NOTE: Dark mode is only visible if the user has their system set to display it.

|File|Description|
|-|-|
|`/site/dark-mode-overrides.css`|CSS overrides for dark mode that are applied globally.|
|`/site/dark-mode-injection.js`|A file that contains JavaScript code that injects the dark mode CSS.|

### Applying the dark mode overrides

* Under **Website**, go to **Pages > Website Tools > Code Injection**
* Add an empty `<script></script>` tag to the "Footer" box on the left hand side.
* Paste the content of `/site/dark-mode-injection.js` into the tag.
* Click **Save** in the top right corner.

To disable dark mode, remove or comment out this JS code.

## Audio player

The audio player is designed to be responsive for both wide and mobile screens and work with the SquareSpace theme.

Because SquareSpace does not currently permit CSS and JavaScript files to be uploaded as assets, the minified core files are hosted at cdn.statically.io and imported into the website with `script` and `link` tags.

### Adding the audio player to a page

To add the player to a page:

* Under **Website**, go to **Pages** and click the page you want to the audio player to
* Hover over the top of the page to display the **Page Content** tooltip
* Click **Edit**
* Click the plus icon ➕ on the right hand side to open the *Add New Block* menu
* Select **Code**. An editor window should pop open
* Set the **Mode** to "HTML" if not already set
* Copy and paste the content of `/demo/index.html` into the editor:
  * Only copy the content between the `<!-- begin player -->` and `<!-- end player -->` comments
  * Make sure to include the link and script tags
* Click **Save**

> You may see a "Script Disabled" message. This is safe to ignore.

Test the page to make sure the audio plays and controls are working correctly.

### Customizing the track list

You can change the track list by editing the JavaScript code embedded in the HTML that was copy-pasted. The track list is saved as a window-level variable called `bspConfig`.

* under Website, go to Pages and open the page containing the audio player.
* Hover over the audio player code block and click the pencil (Edit) icon.
* In the code editor window that appears, locate the `bspConfig` JavaScript array variable.
* Add, change, or remove entries from the array.
* Click **Save**
* Test your changes.

Each entry is an object that describes a track with the following properties (all are required):

|Property|Description|
|-|-|
|`url`|the URL of the MP3 file (usually hosted at static1.squarespace.com)|
|`title`|the song title|
|`albumURL`|the URL of the album the song belongs to|

The `albumURL` property can point to a release page, Spotify link, Bandcamp page, etc.

### Customizing the player styles

You can add CSS variables to the code block that override the default styles.

|Variable|Description|
|-|-|
|`--bsp-background-gradient`|The player background gradient fill|
|`--bsp-bgcolor`|The player background color.|
|`--bsp-fgcolor`|Button backgrounds and progress bar|
|`--bsp-hlcolor`|Button icons and track label text|
|`--bsp-logo-fill-color`|The logo color fill|
|`--bsp-track-label-font`|The track label/link font|
|`--bsp-image-colorization-filters`|CSS filter chain that colorizes the floating image|

Below are the current default values. Copy this code into the Code block that contains the audio player HTML.

```css
<style>
  :root {
    --bsp-background-gradient: linear-gradient(90deg, rgba(116,68,147,1) 30%, rgba(79,226,224,1) 100%);
    --bsp-bgcolor: #744493;
    --bsp-fgcolor: #4fe2e0;
    --bsp-hlcolor: #eee8aa;
    --bsp-logo-fill-color: #4fe2e0;
    --bsp-track-label-font: 'Bowlby One SC', sans-serif;
    --bsp-image-colorization-filters: invert(0%) sepia(66%) saturate(2129%) hue-rotate(140deg) brightness(93%) contrast(90%);
  }
</style>
```

To generate a new filter chain for image colorization, try using the tool here: https://codepen.io/sosuke/pen/Pjoqqp/

## Updates

Updates to the core CSS and JS files hosted at statically.io can only be made through this repo. Your options are:

1. File an issue
2. File a pull request
3. Fork the repo and host your changes elsewhere

Options 1 and 2 will create a new versioned URL for the CSS and JS. You will need to update the audio player code on your site with the new URLs.

## Need help?

Write to hire.scott@airpost.net

---












