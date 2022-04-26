LocalMedia
==========

- 3.0.0
    - [BREAKING] removed screenSharingSupport flag
    - [BREAKING] removed deprecated functions: `startLocalMedia` and `stopLocalMedia` use `start` and `stop` instead
    - [BREAKING] removed deprecated properties: `localStream` and `localScreen` use `localStreams` and `localScreens` arrays instead
    - [BREAKING] removed deprecated feature `autoAdjustMic`
    - [BREAKING] rename method `stopStreams` to `stopStream`
    - [BREAKING] rename method `setupAudioMonitor` to `_setupAudioMonitor` (unpublish)
    - added `localStreamRequested`, `localStreamRequestFailed` and `localScreenRequested`, `localScreenRequestFailed` events
    - use `webrtc-adapter` package instead of `webrtcsupport` 
    - removed `getusermedia` package dependency
    - fix audiomonitor with multiple streams
