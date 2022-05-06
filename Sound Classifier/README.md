# Doorbell.io
Audio Classifier with Tensorflow.js and ReactJS
This is just a specific use case, you can train your own model and classify any sound you like!

# How To Use

* Clone this repository
* Run `npm install`
* Start using `npm run`

# How to Train Your Own Model

* Go to https://teachablemachine.withgoogle.com/train
* Create a new **Audio Project**
* Record a couple of samples for **Background Noise** (each of 20 seconds). Extract the samples for each recording.
* Move on to the next class (default name will be "Class 2"). Similarly record samples for the sound you want to classifiy. 
* You can add more classes similarly and rename them. For better accuracy, try to record more samples for each class.
* Train the model, for at least 100 epochs. 
* Export the model and upload the model to the cloud. Get the shareable link.
* Replace the current model link in **AudioClassifier.js** with your shareable link.
* (Optional) Change the variable **tts_key** for TTS. 
* That's all. 
