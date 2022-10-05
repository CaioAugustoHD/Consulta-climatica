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


async function pesquisar() {

    let cidade = inputCidade.value;

    // RECEBE RETORNO DA FUNÇÃO getDadosApi
    let dados = await getDadosApi(cidade);
    updateElements(dados);
    console.log(dados);
}

async function getDadosApi(cidade){

    let URLgetDados = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apiKey}&lang=pt_br`;

    // FAZ A CONSULTA NA API E RETORNA
    let dados = await fetch(URLgetDados);
    return dados.json();
    
}

function updateElements(dados){

    nomeCidade.innerHTML = dados.name;

    temperatura.innerHTML = dados.main.temp;
    descricao.innerHTML = dados.weather[0].description;
    imgClima.setAttribute('src', `http://openweathermap.org/img/wn/${dados.weather[0].icon}.png`)
    umidade.innerHTML = dados.main.humidity + '%';
    vento.innerHTML = dados.wind.speed + 'km/h';
}