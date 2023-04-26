const botaoTrailer = document.querySelector(".trailer-button");
const botaoFecharModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");

function alternarModal() {
  modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
  const linkDoVideo = botaoTrailer.getAttribute("data-src");
  video.setAttribute("src", linkDoVideo);
  alternarModal();
});

botaoFecharModal.addEventListener("click", () => {
  video.setAttribute("src", "");
  alternarModal();
});
