// The face detection does not work on all browsers and operating systems.
// If you are getting a `Face detection service unavailable` error or similar,
// it's possible that it won't work for you at the moment.
const video = document.querySelector(".webcam");
const canvas = document.querySelector(".video");
const ctx = canvas.getContext("2d");
const faceCanvas = document.querySelector(".face");
const faceCtx = faceCanvas.getContext("2d");
const faceDetector = new window.FaceDetector({
    fastMode: true
});
const SIZE = 10;
//Write a function that will populate the users video
async function populateVideo() {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: {
            width: 1280,
            height: 720
        }
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
    //ask the browser when the next animation frame is and tell it to run detect for us
    faces.forEach(drawFace);
    faces.forEach(censor);
    requestAnimationFrame(detect); //recursion function - function calls itself
}
function drawFace(face) {
    const { width , height , top , left  } = face.boundingBox;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#ffc600";
    ctx.lineWidth = 2;
    ctx.strokeRect(left, top, width, height);
}
function censor({ boundingBox: face  }) {
    //Draw teh small face
    faceCtx.drawImage(//5 source arguments
    video, face.x, face.y, face.width, face.height, //4 draw arguments
    face.x, face.y, SIZE, SIZE);
    //Take the small face and draw in large space
    faceCtx.drawImage(faceCanvas, face.x, face.y, SIZE, SIZE, //Drawing arguments
    face.x, face.y, face.width, face.height);
}
populateVideo().then(detect);

//# sourceMappingURL=face.78b1ac0f.js.map
