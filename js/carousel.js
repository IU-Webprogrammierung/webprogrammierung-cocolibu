document.addEventListener("DOMContentLoaded", () => {
    // Audio-Buttons
    const buttons = document.querySelectorAll("button[data-audio]");
    let currentlyPlaying = null;
  
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const audioId = btn.dataset.audio;
        const audio = document.getElementById(audioId);
        if (!audio) return;
  
        if (currentlyPlaying && currentlyPlaying !== audio) {
          currentlyPlaying.pause();
          currentlyPlaying.currentTime = 0;
          const previousBtn = document.querySelector(`button[data-audio="${currentlyPlaying.id}"]`);
          if (previousBtn) previousBtn.textContent = "▶";
        }
  
        if (audio.paused) {
          audio.play();
          btn.textContent = "⏸";
          currentlyPlaying = audio;
        } else {
          audio.pause();
          btn.textContent = "▶";
          currentlyPlaying = null;
        }
  
        audio.onended = () => {
          btn.textContent = "▶";
          currentlyPlaying = null;
        };
      });
    });
  
    // Swiper initialisieren – JETZT korrekt!
    new Swiper(".carousel", {
      slidesPerView: 2,
      spaceBetween: 24,
      breakpoints: {
        0: { slidesPerView: 1 },
        769: { slidesPerView: 2 },
      },
    });
  });
  