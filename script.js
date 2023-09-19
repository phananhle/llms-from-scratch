// Anzahl der Frames
const numFrames = 940;

// Lädt alle Bilder vor und speichert sie in ein Array
const frameImages = Array(numFrames).fill().map((_, i) => {
  const img = new Image();
  img.src = `images/${i+1}.jpg`;
  return img;
});

const frameDescriptions = [
  "Beschreibung für Bild 1",
  "Beschreibung für Bild 4",
  "Beschreibung für Bild 3",
  "Beschreibung für Bild 5",
  "Beschreibung für Bild 6",
  "Beschreibung für Bild 7",
  "Beschreibung für Bild 8",
  "Beschreibung für Bild 9",
  "Beschreibung für Bild 10",
  "Beschreibung für Bild 2",

  // ... und so weiter für jedes Ihrer Bilder
];

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(frameImages.length - 1, Math.ceil(scrollFraction * numFrames));

  if (frameDescriptions[frameIndex]) {
    document.getElementById('descriptionBox').innerText = frameDescriptions[frameIndex];
  }

  requestAnimationFrame(() => {
    document.getElementById('scene').style.backgroundImage = `url(${frameImages[frameIndex].src})`;
  });  
});

window.addEventListener("load", () => {
  // Setzt das erste Bild beim Laden der Seite
  document.getElementById('scene').style.backgroundImage = `url(${frameImages[0].src})`;
}); 