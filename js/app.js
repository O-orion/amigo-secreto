const inputNome = document.querySelector('#nome-amigo')
const listaDeAmigos = document.querySelector('#lista-amigos')
const listaSorteio = document.querySelector('#lista-sorteio')

let amigos = [];

function sortear() {

  if (amigos.length < 4) {
    alert('Adicione no minímo 4 amigos!');
  } else {
    embaralhar(amigos)
  
    for(let i = 0; i < amigos.length; i++) { 
  
      if (i == amigos.length - 1 ) {
        listaSorteio.innerHTML += `${amigos[i]} --> ${amigos[0]} <br>`
  
      } else {
  
        listaSorteio.innerHTML += `${amigos[i]} --> ${amigos[ i + 1 ]} <br>`
      }
  
    }

  }

}

function adicionar() {
    const nome = inputNome.value;

    if(nome.trim() == '') {
      alert('Preencha o campo nome corretamente!')

    } else if ( amigos.includes(nome.trim()) ) {
      alert('Esté nome já está na lista!')

    } else {
          amigos.push(nome)
          atualizarListaAmigos()

    }
}


function atualizarListaAmigos () {
    listaDeAmigos.innerHTML = amigos;
    inputNome.value = ''
}

function embaralhar(lista) {
  for (let indice = lista.length; indice; indice--) {
      const indiceAleatorio = Math.floor(Math.random() * indice);
      [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
  }
}

function reiniciar() {
  amigos = [];
  listaDeAmigos.innerHTML = '';
  listaSorteio.innerHTML = ''
}

