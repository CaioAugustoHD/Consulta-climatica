const inputCidade = document.getElementById('input-cidade');
const botao = document.getElementById('btn-pesquisa');
botao.addEventListener('click', pesquisar);

const nomeCidade = document.getElementById('nomeCidade');
const bandeira = document.getElementById('img-bandeira');

const temperatura = document.getElementById('temperatura');
const descricao = document.getElementById('descricao');
const imgClima = document.getElementById('img-clima');

const umidade = document.getElementById('umidade');
const vento = document.getElementById('vento');

const URL_apiBandeira = 'https://countryflagsapi.com/png/';
const apiKey = 'c0248e94dec6f66826cb62438335f605';


function pesquisar() {

    let cidade = inputCidade.value;
    getDadosApi(cidade);
}

async function getDadosApi(cidade){

    let URLgetDados = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apiKey}&lang=pt_br`;
    let getDadosFetch = await fetch(URLgetDados);
    let getDados = getDadosFetch.json();
    console.log(getDados);
}