const header = document.querySelector("[data-header]");

function updateHeader() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const heroVideos = [...document.querySelectorAll("[data-hero-video]")];
const START_TIME = 53;
const END_TIME = 63;
const RESTART_THRESHOLD = START_TIME - 0.5;

if (heroVideos.length) {
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  document.head.appendChild(tag);
}

window.onYouTubeIframeAPIReady = function onYouTubeIframeAPIReady() {
  heroVideos.forEach((iframe) => {
    let isReady = false;

    function restartVideo(player) {
      player.seekTo(START_TIME, true);
      player.playVideo();
    }

    const player = new YT.Player(iframe, {
      events: {
        onReady(event) {
          isReady = true;
          event.target.mute();
          restartVideo(event.target);
        },
        onStateChange(event) {
          if (event.data === YT.PlayerState.ENDED) {
            restartVideo(event.target);
          }
        },
      },
    });

    window.setInterval(() => {
      if (!isReady || !player.getCurrentTime) return;

      const currentTime = player.getCurrentTime();

      if (currentTime >= END_TIME || currentTime < RESTART_THRESHOLD) {
        restartVideo(player);
      }
    }, 500);
  });
};
