const header = document.querySelector("[data-header]");

function updateHeader() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const heroVideos = [...document.querySelectorAll("[data-hero-video]")];

if (heroVideos.length) {
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  document.head.appendChild(tag);
}

window.onYouTubeIframeAPIReady = function onYouTubeIframeAPIReady() {
  heroVideos.forEach((iframe) => {
    const start = Number(iframe.dataset.videoStart || 53);
    const end = Number(iframe.dataset.videoEnd || 63);

    const player = new YT.Player(iframe, {
      events: {
        onReady(event) {
          event.target.mute();
          event.target.seekTo(start, true);
          event.target.playVideo();
        },
        onStateChange(event) {
          if (event.data === YT.PlayerState.ENDED) {
            event.target.seekTo(start, true);
            event.target.playVideo();
          }
        },
      },
    });

    window.setInterval(() => {
      if (player && player.getCurrentTime && player.getCurrentTime() >= end) {
        player.seekTo(start, true);
        player.playVideo();
      }
    }, 500);
  });
};
