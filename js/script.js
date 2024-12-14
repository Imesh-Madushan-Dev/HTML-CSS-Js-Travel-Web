let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

document
  .querySelectorAll(".about .video-container .controls .control-btn")
  .forEach((btn) => {
    btn.onclick = () => {
      let src = btn.getAttribute("data-src");
      document.querySelector(".about .video-container .video").src = src;
      document.querySelector(".about .video-container .video").play(); // Ensure playback starts
    };
  });

window.addEventListener("DOMContentLoaded", (event) => {
  const urlParams = new URLSearchParams(window.location.search);

  urlParams.forEach((value, key) => {
    const element = document.getElementById(key);
    if (element) {
      if (element.tagName === "SELECT") {
        const option = element.querySelector(`option[value="${value}"]`);
        if (option) option.selected = true;
      } else if (element.type === "checkbox") {
        element.checked = value === "true" || value === "on";
      } else {
        element.value = value;
      }
    }
  });
});

// --------------------------------------------------------------------------------------------------------------------------
document
  .getElementById("trip-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    let mailtoBody = "";
    for (let [key, value] of formData.entries()) {
      mailtoBody += `${key}: ${value}\n`;
    }

    const mailtoUrl = `mailto:imeshmadushan1333@gmail.com?subject=New Trip Scheduled&body=${encodeURIComponent(
      mailtoBody
    )}`;

    window.location.href = mailtoUrl; // Open user's email client
  });
