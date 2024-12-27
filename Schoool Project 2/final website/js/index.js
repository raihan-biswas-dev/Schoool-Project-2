$(document).on("ready", function () {
  $(".hero").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplay: true,
    prevArrow:
      '<iconify-icon class="slick-prev slick-arrow" icon="ic:sharp-arrow-left"></iconify-icon>',
    nextArrow:
      '<iconify-icon class="slick-next slick-arrow" icon="ic:sharp-arrow-right"></iconify-icon>',
  });
  $(".animated__add--slider").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
  });
});

// mobile menu
let mobileMenuButton = document.querySelector(".mobilemenu__open");
let mobileMenu = document.querySelector(".mobile__menu");
let menuClose = document.querySelector(".close__btn");

mobileMenuButton.addEventListener("click", function () {
  mobileMenu.classList.toggle("open");
});
menuClose.addEventListener("click", function () {
  mobileMenu.classList.remove("open");
});

////////////////Animated Add Start ///////////////////
////////////////Animated Add Start ///////////////////
////////////////Animated Add Start ///////////////////
const canvas = document.getElementById("videoCanvas");
const context = canvas.getContext("2d");
const video = document.getElementById("videoElement");

// Ensure the video is muted for autoplay
video.muted = true;

// Set the canvas dimensions to match the video when metadata is loaded
video.onloadedmetadata = function () {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  playVideo();
};

// Function to update the canvas with the current video frame
function updateCanvas() {
  if (!video.paused && !video.ended) {
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    requestAnimationFrame(updateCanvas);
  }
}

// Function to play the video and update the canvas
function playVideo() {
  video
    .play()
    .then(() => {
      updateCanvas();
    })
    .catch((error) => {
      console.error("Autoplay failed:", error);
      // If autoplay fails, add a user interaction event
      document.body.addEventListener(
        "click",
        () => {
          video.play().then(() => {
            updateCanvas();
          });
        },
        { once: true }
      );
    });
}

// hide animated add after few seconds
let animated__add = document.querySelector(".animated__add");

setTimeout(() => {
  animated__add.remove();
}, 10000);

// animated add close
let addClose = document.querySelector(".add__close");
addClose.addEventListener("click", function () {
  animated__add.remove();
});
