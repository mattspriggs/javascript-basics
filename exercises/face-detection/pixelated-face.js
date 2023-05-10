// The face detection does not work on all browsers and operating systems.
// If you are getting a `Face detection service unavailable` error or similar,
// it's possible that it won't work for you at the moment.

const video = document.querySelector('.webcam');

const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');
ctx.strokeStyle = '#ffc600';
ctx.lineWidth = 2;
const faceCanvas = document.querySelector('.face');
const faceCtx = canvas.getContext('2d');

const faceDetector = new window.FaceDetector({ fastMode: true });

//Write a function that will populate the users video
async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { width: 1280, height: 720 },
  });
  video.srcObject = stream;
  await video.play();
  //size the canvases to be the same size as the video
  console.log(video.videoWidth, video.videoHeight);
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  faceCanvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
}

async function detect() {
  const faces = await faceDetector.detect(video);
  console.log(faces.length);
  //ask the browser when the next animation frame is and tell it to run detect for us
  faces.forEach(drawFace);
  requestAnimationFrame(detect); //recursion function - function calls itself
}

function drawFace(face) {
  const { width, height, top, left } = face.boundingBox;
  ctx.strokeRect(left, top, width, height);
}
populateVideo().then(detect);
