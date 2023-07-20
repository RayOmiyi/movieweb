const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const close = document.getElementById('close')
const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
// end
if(bar){
    bar.addEventListener('click',function(){
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',function(){
        nav.classList.remove('active');
    })
}

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});
