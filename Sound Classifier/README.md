<h1> Sound Classifier App </h1>
<h3>Project overview</h3> <br>
Audio Classifier with Tensorflow.js and ReactJS
This is just a specific use case, you can train your own model and classify any sound you like!<br>

<h3> Languages Used:-</h3> <br>
<ul>
<li>React JS</li>
<li>CSS</li>
<li>JavaScript</li>
</ul>
<h3>How to run the project</h3>
**1.** Start by making a fork the [**WebDev-Projectkart**](https://github.com/khushi-purwar/WebDev-Projectkart) repository. Click on the <a href="https://github.com/khushi-purwar/WebDev-Projectkart/fork"><img src="https://i.imgur.com/G4z1kEe.png" height="21" width="21"></a> symbol at the top right corner.

**2.** Clone your new fork of the repository:

```bash
git clone https://github.com/<your-github-username>/WebDev-ProjectKart
```

**3.** Navigate to the project directory:

```bash
cd WebDev-ProjectKart/Sound Classifier App
```

**4.** Open the terminal and enter the following commands

```bash
npm install
npm start
```

<h3>How to Train Your Own Model</h3>

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

<h3> ScreenShots </h3> 

![image](https://user-images.githubusercontent.com/72400676/167061311-e637e2e5-6248-4a96-af3b-a6f076faf8c1.png)
![image](https://user-images.githubusercontent.com/72400676/167061361-7ace04b5-cd29-427c-b190-cf1e53bbe92d.png)

