const btn_marca = document.getElementById("marcar");

btn_marca.addEventListener("click", () => {
  const contato = document.getElementById("contact");
  if (contato) {
    contato.scrollIntoView({ behavior: "smooth" });
  }
});

function menu() {
  const itens = document.getElementById("navbarBasicExample");
  if (itens.style.display == "block") {
    itens.style.display = "none";
  } else {
    itens.style.display = "block"
    
  }
}

function enviar() {
  const nome = document.getElementById("iname").value;
  const data = document.getElementById("idate").value;
  const hora = document.getElementById("ihora").value;

  console.log(nome, data, hora);

  const numero = "553399075738";
  const mensagem = `Olá, meu nome é ${nome}. Gostaria de agendar um corte para o dia ${data} às ${hora}.`;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}
