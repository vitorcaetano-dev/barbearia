function enviar() {
  const nome = document.getElementById("iname").value;
  const data = document.getElementById("idate").value;
  const hora = document.getElementById("ihora").value;

  console.log(nome, data, hora);

  const numero = "553399075738";
  const mensagem = 
  `Olá, meu nome é ${nome}. Gostaria de agendar um corte para o dia ${data} às ${hora}.`

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}
