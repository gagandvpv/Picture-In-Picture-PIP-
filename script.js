const video = document.getElementById("video");
const button = document.getElementById("button");

// select media stream
async function mediaStream() {
  try {
    const media = await navigator.mediaDevices.getDisplayMedia(); //screen capture API!
    video.srcObject = media;
    video.onloadedmetadata = () => {
      video.play();
    };
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", async () => {
  button.disabled = true; //AVOIDING MULTIPLE CLICKS
  // Start Picture in Picture
  await video.requestPictureInPicture(); //PIP API!

  button.disabled = false;
});

mediaStream();
