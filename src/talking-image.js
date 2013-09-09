/*********************************************************
* Talking Image by Hage Yaapa <captain@hacksparrow.com>  *
* License: MIT                                           *
**********************************************************/

/*jshint newcap: false */

;(function(TalkingImage, global) {

  global.TalkingImage = TalkingImage;

  window.addEventListener('load', function() {
    var img = document.querySelector('img');
    TalkingImage(img);
  });

})(function(img) {

  'use strict';

  var

  VERSION = '0.1.0',
  hasOwnProp = Object.prototype.hasOwnProperty,

  audio = { volume: 1 },

  formats = {
    'mp3': '\x49\x44\x33\x03\x00\x00\x00\x00',
    'ogg': '\x4F\x67\x67\x53\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00'
  },

  url = img.getAttribute('src'),
  options = img.getAttribute('data-audio'),

  is_set = function(option, options) {
    return options.indexOf(option) > -1;
  },

  detectFormat = function(d) {
    var i, ii, j, n, format;
    for (i = 0, ii = d.byteLength; i < ii; i++) {
      for (j in formats) {
        format = true;
        if (hasOwnProp.call(formats, j) && formats[j].length + i < ii) {
          for (n = 0; n < formats[j].length; n++) {
            if (d.getChar(i + n) !== formats[j][n]) {
              format = false;
              break;
            }
          }
          if (format) {
            audio.format = j;
            audio.offset = i;
            return true;
          }
        }
      }
    }
    return false;
  };

  jBinary.loadData(url, function(err, data) {
    var d = new jDataView(data);
    if (!err && detectFormat(d)) {
      // Reset the cursor
      d.seek(0);
      // Extract the audio data
      d.getString(audio.offset);
      // Convert binary data to base64 encoded string and assign it to the audio object usind Data URI
      var audio_data = 'data:audio/'+ audio.format +';base64,' + window.btoa(d.getString());
      var audio_el = new Audio(audio_data);

      if (is_set('sync', options)) img.style.visibility = 'hidden';

      // Apply options
      if (is_set('controls', options)) audio_el.setAttribute('controls', 'controls');
      if (is_set('autoplay', options)) audio_el.setAttribute('autoplay', 'true');
      if (is_set('loop', options)) audio_el.setAttribute('loop', 'true');
      if (is_set('volume', options)) {
        var volume = options.split('volume=')[1].split(' ')[0];
        // We are prefxing with + to convert string to int
        audio.volume = +volume;
        audio_el.volume = +volume;
      }

      if (is_set('sync', options)) {
        // Reset the animation by re-loading the image
        img.setAttribute('src', url);
        img.style.visibility = 'visible';
      }

      // The sound can be muted by clicked on the image, and toggled - we don't pause because GIF images don't pause
      img.addEventListener('click', function() {
        if (audio_el.paused) { 
          audio_el.play(); 
        } else {
          audio_el.volume = audio_el.volume === 0 ? audio_el.volume = audio.volume : 0;
        }
      });
    }
  });

}, this);