// Select all sections and nav links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120; // adjust for sticky header
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

let badgeIndex = 0;

function slideBadges(direction) {
  const track = document.getElementById("badgeTrack");
  const badges = document.querySelectorAll("#badgeTrack img");
  const visibleCount = 3;
  const totalBadges = badges.length;

  badgeIndex += direction;

  if (badgeIndex < 0) badgeIndex = 0;
  if (badgeIndex > totalBadges - visibleCount) badgeIndex = totalBadges - visibleCount;

  const offset = badgeIndex * (badges[0].offsetWidth + 20); // width + margin
  track.style.transform = `translateX(-${offset}px)`;
}
