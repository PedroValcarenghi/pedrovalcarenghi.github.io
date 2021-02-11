function typeWritter(texto,idElemento,tempo){
  var char = texto.split('').reverse();
  var typer = setInterval(function () {
      if (!char.length) return clearInterval(typer);
      var next = char.pop();
      document.getElementById(idElemento).innerHTML += next;
  }, tempo);
}
typeWritter('Pedro Valcarenghi','tw1',100);
typeWritter('Pedro Valcarenghi','tw2',100);