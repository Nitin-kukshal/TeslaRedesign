function togglemenu(){
    const nav = document.getElementById("main-nav");
    const overlay = document.getElementById("overlay-menu");
    const containerFluid = document.getElementById("container-fluid");
    // const hideme = document.getElementById("hideme");
    nav.classList.toggle('hide');
    overlay.classList.toggle('show');
    containerFluid.classList.toggle('bg-black');
    const otherElements= document.getElementById("otherElement");
      if (overlay.classList.contains('show')) {
      otherElements.classList.add("other-hide");
      }else{
        otherElements.classList.remove("other-hide");
      }
};
// for link
let navlink = document.querySelector(".nav-link");
let cursorlink = document.querySelector(".cursor-blend");
navlink.addEventListener("mousemove",function(dets){
    cursorlink.style.left = dets.pageX+"px";
    cursorlink.style.top = dets.pageY+"px";
});
navlink.addEventListener("mouseenter",function(){
    cursorlink.style.scale = 1;
    cursorlink.style.opacity = 1;
});
navlink.addEventListener("mouseleave",function(){
    cursorlink.style.scale = 0;
    cursorlink.style.opacity = 0;
});
// for cursor burger
let bars = document.querySelector('#fa-bars');
let cursor = document.querySelector('#cursor');
bars.addEventListener("mousemove",function(det){
    cursor.style.left = det.pageX+"px";
    cursor.style.top = det.pageY+"px";
});
bars.addEventListener("mouseenter",function(){
    cursor.style.scale = 1;
    cursor.style.opacity = 1;
});
bars.addEventListener("mouseleave",function(){
    cursor.style.scale = 0;
    cursor.style.opacity = 0;
});
// for xmark
let xmark = document.querySelector('#xmark');
let cursor2= document.querySelector('#cursor2');
xmark.addEventListener("mousemove",function(de){
    cursor2.style.left = de.pageX + "px";
    cursor2.style.top = de.pageY + "px";
});
xmark.addEventListener("mouseenter",function(){
    cursor2.style.scale = 1;
    cursor2.style.opacity = 1;
});
xmark.addEventListener("mouseleave",function(){
    cursor2.style.scale = 0;
    cursor2.style.opacity = 0;
});
// for wheel rotation
function rotation(){
    const wheelImg = document.getElementById('wheel-img');
document.addEventListener('mousemove', (event) => {
    const { clientX } = event;

    const wheelRect = wheelImg.getBoundingClientRect();
    const wheelCenterX = wheelRect.left + wheelRect.width / 2;
    const deltaX = clientX - wheelCenterX;
    const maxRotation = 180;
    const angle = (deltaX / window.innerWidth) * maxRotation;

    wheelImg.style.transform = `rotate(${angle}deg)`;
    wheelImg.style.transition = 'transform 0.2s ease-out';
});
};
rotation();
const videoContainers = document.querySelectorAll('.video-overlay-container');
const fullScreenVideo = document.getElementById('full-screen-video');

// Set the initial video to play
fullScreenVideo.src = videoContainers[0].getAttribute('data-video');
fullScreenVideo.style.opacity = 1;
videoContainers.forEach(container => {
    container.addEventListener('mouseover', () => {
        const videoSrc = container.getAttribute('data-video');
        if (fullScreenVideo.src !== videoSrc) {
            fullScreenVideo.src = videoSrc;
            fullScreenVideo.style.opacity = 1;
        }
    });
    container.addEventListener('mouseout', () => {
        fullScreenVideo.style.opacity = 1;
    });
});
// car slider
gsap.registerPlugin(ScrollTrigger);

const images = gsap.utils.toArray(".image");
const textContents = gsap.utils.toArray(".text-content");

const imagesTl = gsap.timeline({
  defaults: {
    ease: "none"
  },
  scrollTrigger: {
    trigger: ".container-slider",
    pin: true,
    start: "10% 10%",
    end: `+=${images.length * 100}%`,
    // markers: true,
    scrub: true
  }
});

// Animate image clip-path and text opacity/visibility
images.forEach((image, i) => {
  if (i) {
    imagesTl.to(image, {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"
    });

    // Animate text content in sync with the image
    imagesTl.to(textContents[i], {
      opacity: 1,
      duration: 1,
      ease: "none"
    }, `-=${images.length * 0.1}`); // Adjust timing to sync with image transition
  }
});
// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 0,
  loop: false,
  grabCursor: true,
  centeredSlides: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 3,
    }
  }
});

gsap.registerPlugin(ScrollTrigger);
const mediaItems = gsap.utils.toArray(".media-image, .media-video");
const textContent = gsap.utils.toArray(".media-text");
const mediaTimeline = gsap.timeline({
  defaults: {
    ease: "none"
  },
  scrollTrigger: {
    trigger: ".media-slider-container",
    pin: true,
    start: "10% 10%",
    end: `+=${mediaItems.length * 100}%`,
    scrub: true
  }
});
mediaItems.forEach((mediaItem, i) => {
  if (i) {
    mediaTimeline.to(mediaItem, {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"
    });

    mediaTimeline.to(textContent[i], {
      opacity: 1,
      duration: 1,
      ease: "none"
    }, `-=${mediaItems.length * 0.1}`);
  }
});