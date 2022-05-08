function changeImageCarrousel() {
  const MAX = 1;

  var carrossel_image = document.querySelector(".carrossel img");
  var indice_imagem = carrossel_image.getAttribute("data-indice");

  if (indice_imagem == MAX) {
    carrossel_image.setAttribute("data-indice", 0);
    carrossel_image.src = "./assets/images/carrossel0.png";
  } else {
    carrossel_image.setAttribute("data-indice", parseInt(indice_imagem) + 1);
    carrossel_image.src =
      "./assets/images/carrossel" + (parseInt(indice_imagem) + 1) + ".png";
  }
}

const imageTransitionTime = 3000;

setInterval(changeImageCarrousel, imageTransitionTime);

function navigateTo(url) {
  window.location.href = url;
}

function talkByWhatsapp() {
  const url = "https://wa.me";
  const phoneNumber = "51995253515";

  navigateTo(`${url}/${phoneNumber}`);
}

const whatsappButton = document.querySelector("#whatsapp-button");
whatsappButton.addEventListener("click", talkByWhatsapp);
