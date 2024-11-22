const inputNota = document.getElementById('novaNota');
const botaoAdicionar = document.getElementById('adicionarNota');
const listaNotas = document.getElementById('listaNotas');

function getRandomColor() {

  const colors = ['#007bff', '#ffc107', '#f87979', '#28a745', '#fff'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];

}

botaoAdicionar.addEventListener('click', () => {

  const novaNota = inputNota.value;

  if (novaNota) {
    
    const li = document.createElement('li');
    li.textContent = novaNota;
    li.style.backgroundColor = getRandomColor();

    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.addEventListener('click', () => {
      listaNotas.removeChild(li);   

    });

    li.appendChild(botaoExcluir);
    listaNotas.appendChild(li);

    inputNota.value = '';
  }
});