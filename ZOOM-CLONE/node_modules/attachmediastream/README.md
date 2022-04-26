# attachMediaStream

## What is this?

A tiny browser module for attaching a media stream to a video (or audio) element with some options. It handles the differences between browsers via [adapter.js](https://github.com/webrtc/adapter).

Suitable for use with browserify/CommonJS on the client. 

If you're not using browserify or you want AMD support use `attachmediastream.bundle.js`.


## Installing

```
npm install attachmediastream
```

## How to use it


Makes it easy to attach video streams to video tags.

```js
var getUserMedia = require('getusermedia');
var attachMediaStream = require('attachmediastream');

// get user media
getUserMedia(function (err, stream) {
    // if the browser doesn't support user media
    // or the user says "no" the error gets passed
    // as the first argument.
    if (err) {
      console.log('failed');
    } else {
      console.log('got a stream', stream);  
       
      // attaches a stream to an element (it returns the element)
      var videoEl = attachMediaStream(stream, document.getElementById('myVideo'));

      // if you don't pass an element it will create a video tag
      var generatedVideoEl = attachMediaStream(stream);

      // you can also pass options
      var videoEl = attachMediaStream(stream, someEl, {
        // this will set the autoplay attribute on the video tag
        // this is true by default but you can turn it off with this option.
        autoplay: true, 
        
        // let's you mirror the video. It's false by default, but it's common 
        // to mirror video when showing a user their own video feed.
        // This makes that easy.
        mirror: true,

        // muted is false, by default
        // this will mute the video. Again, this is a good idea when showing
        // a user their own video. Or there will be feedback issues.
        muted: true,

        // attach as an audio element instead of video
        audio: false
      });

    }
});
```

## Why? 

Browsers used to to this very differently. This is now less true than it used to be.

It's still handy to be able to control mirroring, muting, autoplay in one shot with sane defaults.

## License

MIT


## Created By

If you like this, follow [@HenrikJoreteg](http://twitter.com/henrikjoreteg) on twitter.
