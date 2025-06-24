const fotos = [
    "../img/foto1.jpeg",
    "../img/foto2.jpeg",
    "../img/foto3.jpeg",
    "../img/foto4.jpeg"
  ];
  
  let indice = 0;
  
  function changePhoto(direcao) {
    indice += direcao;
    if (indice < 0) {
      indice = fotos.length - 1;
    } else if (indice >= fotos.length) {
      indice = 0;
    }
  
    document.getElementById("slide").src = fotos[indice];
  }
  