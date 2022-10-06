const inputCidade = document.getElementById('input-cidade');
const botao = document.getElementById('btn-pesquisa');
botao.addEventListener('click', pesquisar);

const cabecalho = document.querySelector('header');
const conteinerInformacoes = document.getElementById('conteiner-informacoes');
const conteinerErro = document.getElementById('conteiner-erro');

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

    // ENVIA A CIDADE PESQUISADA PARA A BUSCA NA API
    getDadosApi(cidade);    
}

// BUSCAR DADOS NA API
async function getDadosApi(cidade){

    let URLgetDados = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apiKey}&lang=pt_br`;

    // FAZ A CONSULTA NA API E RETORNA
    fetch(URLgetDados)
        .then(response => response.json())
        .then((dados) => cidadeEncontrada(dados))
        .catch(() => cidadeNaoEncontrada())    
}

// CASO A CIDADE SEJA ENCONTRADA NA API
function cidadeEncontrada(dados){
    updateElements(dados);
    conteinerInformacoes.style.display = 'flex';
    conteinerErro.style.display = 'none';
    cabecalho.style.marginBottom = '2em';
}

// EXIBIR MENSAGEM DE ERRO
function cidadeNaoEncontrada(){
    conteinerInformacoes.style.display = 'none';
    conteinerErro.style.display = 'block';
    cabecalho.style.marginBottom = '2em';
}

// ATUALIZAR ELEMENTOS VISUAIS NA PÁGINA
function updateElements(dados){

    nomeCidade.innerHTML = dados.name;
    bandeira.setAttribute('src', URL_apiBandeira + dados.sys.country);
    temperatura.innerHTML = Math.round(dados.main.temp);
    descricao.innerHTML = dados.weather[0].description;
    imgClima.setAttribute('src', `http://openweathermap.org/img/wn/${dados.weather[0].icon}.png`)
    umidade.innerHTML = dados.main.humidity + '%';
    vento.innerHTML = dados.wind.speed + 'km/h';
}