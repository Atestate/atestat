let video_wrapper = document.getElementById("video_wrapper");
let video = document.getElementById("video");
let logo = document.getElementById("logo");
let logo_img = document.getElementById("logo_img");
let logo_text = document.getElementById("logo_text");
let made_by = document.getElementById("made_by");
let videos = document.getElementById("videos_wrapper");
const load = () => {
  setTimeout(() => {
    video_wrapper.style.opacity = "1";
  }, 1000);
  setTimeout(() => {
    logo_img.style.scale = "1";
    logo_img.style.transform = "rotate(+0deg)";
  }, 1800);
  setTimeout(() => {
    logo_text.style.opacity = "1";
    logo_img.style.opacity = "0.5";
  }, 4500);
  setTimeout(() => {
    made_by.style.opacity = "1";
  }, 5300);
  setTimeout(() => {
    video.style.opacity = "0";
    logo_img.style.opacity = "0";
    made_by.style.opacity = "0";
  }, 8000);
  setTimeout(() => {
    logo.style.top = "0%";
    logo.style.transform = "translateX(-50%)";
    logo_text.style.top = "110px";
    videos.style.opacity = "1";
  }, 9700);
  setTimeout(() => {
    video_wrapper.style.pointerEvents = "none";
  }, 11700);
};
var oppened = 0;
var left = document.getElementById("left");
var right = document.getElementById("right");
const show_right_data = (fast) => {
  right.style.pointerEvents = "none";
  var right_video = document.getElementById("right_video");
  var left_video = document.getElementById("left_video");
  var data = document.getElementById("data_right");
  left_video.style.height = "100%";
  right_video.style.opacity = "0";
  data.style.opacity = "1";
};
const hide_right_data = (fast) => {
  right.style.pointerEvents = "all";
  var right_video = document.getElementById("right_video");
  var left_video = document.getElementById("left_video");
  var data = document.getElementById("data_right");
  data.style.opacity = "0";
  left_video.style.height = "70%";
  right_video.style.opacity = "1";
  oppened = 0;
};
const show_left_data = (fast) => {
  right_video.style.height = "100%";
  var data = document.getElementById("data_left");
  left.style.pointerEvents = "none";
  if (!fast)
    setTimeout(() => {
      data.style.opacity = "1";
    }, 1000);
  else data.style.opacity = "1";
  left_video.style.opacity = "0";
};

const hide_left_data = (fast) => {
  left.style.pointerEvents = "all";
  var data = document.getElementById("data_left");
  right_video.style.height = "70%";
  data.style.opacity = "0";
  oppened = 0;
  if (!fast)
    setTimeout(() => {
      left_video.style.opacity = "1";
    }, 1000);
  else left_video.style.opacity = "1";
};
var seconds = new Date().getTime() / 1000;
const add_left_right_events = () => {
  var left = document.getElementById("left");
  var right = document.getElementById("right");
  left.addEventListener("mouseenter", () => {
    var temp = new Date().getTime() / 1000;
    if (temp - seconds < 1 || oppened) {
      return;
    }
    oppened = 2;
    seconds = temp;
    show_right_data(true);
  });
  left.addEventListener("mouseleave", () => {
    var temp = new Date().getTime() / 1000;
    if (temp - seconds < 1) return;
    seconds = temp;
    hide_right_data(false);
  });

  right.addEventListener("mouseenter", () => {
    var temp = new Date().getTime() / 1000;
    if (temp - seconds < 0.5 || oppened) {
      return;
    }
    console.log("test");
    oppened = 1;
    seconds = temp;
    show_left_data(true);
  });
  right.addEventListener("mouseleave", () => {
    var temp = new Date().getTime() / 1000;
    if (temp - seconds < 1) return;
    else hide_left_data(false);
    seconds = temp;
  });
};

add_left_right_events();
if (window.innerWidth < 1000) {
  document.getElementById("video_wrapper").remove();
  document.getElementById("videos_wrapper").remove();
  document.getElementById("pc").style.display = "flex";
}
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const s = urlParams.get("s");
if (s == 1) {
  video_wrapper.style.opacity = "1";
  console.log("1");
  logo_text.style.opacity = "1";
  logo_text.style.top = "110px";
  logo.style.top = "0%";
  logo.style.transform = "translateX(-50%)";
  logo_text.style.top = "110px";
  videos.style.opacity = "1";
  video.style.opacity = "0";
  video_wrapper.style.pointerEvents = "none";
}
