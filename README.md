Talking Image
=============

*Add audio to Web images*

## What is Talking Image?

Talking Image is a JavaScript library for playing audio appended to GIF, JPEG, and PNG images. Include the [talking-image.min.js](https://raw.github.com/hacksparrow/talking-image/master/build/talking-image.min.js) on a webpage with a talking image (image with appended audio) and hear the sound come alive.

## Give me a quick demo!

Demos be here: [http://hacksparrow.github.io/talking-image/](http://hacksparrow.github.io/talking-image/)  

To see the demos from the repo, make sure you have Node.js installed on your system. Clone the repo and run the demo server to see the demos. Follow these instructions:

    $ git clone git@github.com:hacksparrow/talking-image.git  
    $ npm install  
    $ node demos

Then load [http://localhost:3000/demos.html](http://localhost:3000/demos.html).

If you don't want to clone the repo, download [talking-image.min.js](https://raw.github.com/hacksparrow/talking-image/master/build/talking-image.min.js) and the files from the [demo/public](https://github.com/hacksparrow/talking-image/tree/master/demos/public) directory and host them on any HTTP server of your own.

## What is a talking image

Talking image refers to an image with an audio payload appended at the end of image data. Currently OGG and MP3 audio formats are supported.

## Where can I find some talking images?

This project hosts some talking images in the [public directory](https://github.com/hacksparrow/talking-image/tree/master/demos/public) under the `demos` directry.

## How can I create talking images?

The idea behind talking images is to append OGG or MP3 data to an existing image file - nothing more than that.

On Linux / Mac:

    $ cat music.ogg >> funny.gif
or
    $ cat beethoven.mp3 >> welcome.jpg

On Windows:

    > copy /b funny.gif + music.ogg funny-music.gif

There are some 'clean' images and audio snippets in the `resources` directory, play around with it.

**Note:** Audio file should be appended to the image file to create a valid talking file. Reversing the order will generate a corrupted file.

## Why is it called Talking Image?

Images on the Web have been 'mute' so far, the technique described here and the library add sound to Web images. The 'talking' in Talking Image comes from [talkies](http://en.wikipedia.org/wiki/Sound_film).

## Is it of any use?

Now you can enjoy the audio-visual experience of [Nyan Cat](http://nyancatmusical.neocities.org/) for infinite hours without loading a YouTube video.

## How does it work?

Using binary data in the browser powered by [jDataView](http://github.com/jDataView/jDataView) and [jBinary](https://github.com/jDataView/jBinary).

## License (MIT)

Copyright (c) 2012 Hage Yaapa <[http://www.hacksparrow.com](http://www.hacksparrow.com)>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

