const arrayAlbums = [];

const albumsHTML = document.querySelector(".albums");

const createAlbum = (event) => {
  event.preventDefault();

  const form = new FormData(event.target);

  arrayAlbums.push({
    name: form.get("name"),
    year: form.get("year"),
    image: form.get("image"),
  });

  renderAlbumsHTML();
};

const renderAlbumsHTML = () => {
  const albumsForRender = arrayAlbums.map((album) => {
    return `
     <div>
        <img class="" src="${album.image}">
        <p class="" >${album.name}</p>
        <p class="" >${album.year}</p>
     </div>
    `;
  });

  albumsHTML.innerHTML = albumsForRender.join("");
};
