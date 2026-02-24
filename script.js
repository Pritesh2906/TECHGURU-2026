/* Countdown */
const eventDate = new Date("March 28, 2026 09:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const d = eventDate - now;
    if (d < 0) return;

    days.innerText = Math.floor(d / (1000 * 60 * 60 * 24));
    hours.innerText = Math.floor((d / (1000 * 60 * 60)) % 24);
    minutes.innerText = Math.floor((d / (1000 * 60)) % 60);
    seconds.innerText = Math.floor((d / 1000) % 60);
}, 1000);

/* FAQ toggle */
document.querySelectorAll(".faq-item").forEach(item => {
    item.onclick = () => item.classList.toggle("active");
});

/* Close instruction */
document.getElementById("close-instruction").onclick = () => {
    document.getElementById("instruction-bar").style.display = "none";
    document.querySelector("nav").style.top = "0";
};

/* ===== IMPROVED THEME TOGGLE ===== */

const toggleBtn = document.getElementById("theme-toggle");

// 1️⃣ Detect saved theme OR system theme
const savedTheme = localStorage.getItem("theme");
const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

if (savedTheme === "light" || (!savedTheme && systemPrefersLight)) {
    document.body.classList.add("light");
    toggleBtn.textContent = "☀️";
} else {
    toggleBtn.textContent = "🌙";
}

// 2️⃣ Toggle theme on click
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");
    toggleBtn.textContent = isLight ? "☀️" : "🌙";
    localStorage.setItem("theme", isLight ? "light" : "dark");

    /* ========================= */
    /* COUNTDOWN TIMER */
    /* ========================= */

    const eventDate = new Date("March 28, 2026 09:00:00").getTime();

    setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance < 0) return;

        document.getElementById("days").innerText =
            Math.floor(distance / (1000 * 60 * 60 * 24));

        document.getElementById("hours").innerText =
            Math.floor((distance / (1000 * 60 * 60)) % 24);

        document.getElementById("minutes").innerText =
            Math.floor((distance / (1000 * 60)) % 60);

        document.getElementById("seconds").innerText =
            Math.floor((distance / 1000) % 60);
    }, 1000);

});