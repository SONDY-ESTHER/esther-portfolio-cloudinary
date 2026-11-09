// Les trois images sont hébergées sur Cloudinary. Aucun API secret n'est utilisé.
const photos = [
  {
    title: "Ma première photo",
    description: "Une image de ma galerie personnelle, hébergée sur Cloudinary.",
    imageUrl: "https://res.cloudinary.com/fw9uc0ag/image/upload/v1794181976/IMG_20260523_182753.jpg"
  },
  {
    title: "Ma deuxième photo",
    description: "Une deuxième image de ma galerie personnelle, hébergée sur Cloudinary.",
    imageUrl: "https://res.cloudinary.com/fw9uc0ag/image/upload/v1794181971/IMG_20260705_155003.jpg"
  },
  {
    title: "Ma troisième photo",
    description: "Une troisième image de ma galerie personnelle, hébergée sur Cloudinary.",
    imageUrl: "https://res.cloudinary.com/fw9uc0ag/image/upload/v1794181965/IMG_20260523_162447.jpg"
  }
];
const gallery = document.querySelector("#gallery");
photos.forEach((photo) => {
  const card = document.createElement("article");
  card.className = "photo-card";
  const frame = document.createElement("div");
  frame.className = "photo-frame";
  const img = document.createElement("img");
  img.src = photo.imageUrl;
  img.alt = photo.title;
  img.loading = "lazy";
  img.onerror = () => {
    frame.textContent = "Image indisponible : vérifie le lien Cloudinary.";
  };
  frame.appendChild(img);
  const title = document.createElement("h3");
  title.textContent = photo.title;
  const description = document.createElement("p");
  description.textContent = photo.description;
  card.append(frame, title, description);
  gallery.appendChild(card);
});
