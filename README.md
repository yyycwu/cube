# cube
> Chrome URL Blocking Extension

This is a custom [Google Chrome](https://www.google.com/chrome/) extension that blocks pre-determined [URL](https://en.wikipedia.org/wiki/URL)s.

## Installation

1. Clone this repository, so it exists locally: `$ git clone https://github.com/yyycwu/cube.git`
2. In your browser, open the Extension Management page by navigating to `chrome://extensions` or by clicking on the Chrome menu, hovering over More Tools then selecting Extensions.
3. Enable Developer Mode by clicking the toggle switch next to Developer mode.
4. Click the LOAD UNPACKED button and select the extension directory (this repository, where it was cloned to).

## How does it work?

The chrome browser exposes a [declarativeNetRequest](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/) API that allows developers to check request URLs and to block or redirect.

If we wanted to block requests to `example.com`:

1. Go to Options page.
2. Add URLs split by newlines in the page.
