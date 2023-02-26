var index = 0;
var slides = document.getElementById("slides");
var slides_arr = document.getElementsByClassName("slide");
var names = document.getElementsByClassName("middle");
var left = document.getElementsByClassName("left");
var right = document.getElementsByClassName("right");
var video = document.getElementsByClassName("video");
var sound = false;

const play_sound = (i) => {
  video[i].muted = !video[i].muted;
};

const show_slide = (i) => {
  video[i].pause();
  video[i].currentTime = 0;
  video[i].load();
  var temp = i;
  setTimeout(() => {
    if (sound && index === temp) play_sound(temp);
  }, 500);
  i--;
  setTimeout(() => {
    left[i].style.opacity = "1";
    right[i].style.opacity = "1";
  }, 500);

  for (let j = 0; j < names[i].childElementCount; j++) {
    setTimeout(() => {
      names[i].children[j].style.opacity = "1";
    }, 200 * (j + 1));
  }
};

const close_slide = (i) => {
  video[i].muted = true;
  if (i == 0) return;
  i--;
  left[i].style.opacity = "0";
  right[i].style.opacity = "0";
  for (let j = 0; j < names[i].childElementCount; j++) {
    names[i].children[j].style.opacity = "0";
  }
};

const move_left = () => {
  if (index == slides_arr.length - 1) return;
  close_slide(index);
  index++;
  show_slide(index);
  var temp = "translateX(" + -100 * index + "vw)";
  console.log(slides);
  slides.style.transform = temp;
};

const move_right = () => {
  if (index == 1) return;
  close_slide(index);
  index--;
  show_slide(index);
  var temp = "translateX(" + -100 * index + "vw)";
  console.log(slides);
  slides.style.transform = temp;
};

window.onwheel = (e) => {
  if (e.deltaY >= 0) {
    // Scrolling Down with mouse
    move_left();
    console.log("Scroll Down");
  } else {
    // Scrolling Up with mouse
    move_right();
    console.log("Scroll Up");
  }
};

console.log(video);
for (let i = 0; i < video.length; i++) {
  video[i].volume = 0.2;
}

var sound_button = document.getElementById("sound");
sound_button.addEventListener("click", () => {
  if (!sound) {
    sound_button.style.opacity = "0";
    sound_button.children[0].style.display = "none";
    sound_button.children[1].style.display = "block";
  } else {
    sound_button.children[1].style.display = "none";
    sound_button.children[0].style.display = "block";
  }
  sound = !sound;
  play_sound(index);
});

console.log(window.innerWidth);
if (window.innerWidth < 1000) {
  slides.remove();
  document.getElementById("pc").style.display = "flex";
}
