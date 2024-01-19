// Selecionando id dos elementos do HTML
const hrEl = document.querySelector("#hora");
const mnEl = document.querySelector("#minuto");
const sgEl = document.querySelector("#segundo");
const mlEl = document.querySelector("#milissegundos");
// Selecionando classes dos botões do HTML
const btnStart = document.querySelector("#btnStart");
const btnPause = document.querySelector("#btnPause");
const btnReset = document.querySelector("#btnReset");

// Variáveis para o cronômetro de tempo
let hr = 0;
let mn = 0;
let sg = 0;
let ml = 0;

let intervalo;

// Evento de click dos botões que chamam as funções
btnStart.addEventListener("click", tempIni);
btnPause.addEventListener("click", tempPause);
btnReset.addEventListener("click", tempZerar);

// Função que inicia o cronômetro
function tempIni(){
    // Essa variável recebe uma função global setInterval 
    // que recebe uma função anônima que faz a contagem de 
    // tempo no cronômetro
    intervalo = setInterval(() => {
        ml += 10;
        if(ml == 1000){
            ml = 0;
            sg++;
            if(sg == 60){
                sg = 0;
                mn++;
                if(mn == 60){
                    mn = 0;
                    hr++;
                }
            }
        }
        // Retornando o valor do tempo formatado
        hrEl.textContent = formatTime(hr);
        mnEl.textContent = formatTime(mn);
        sgEl.textContent = formatTime(sg);
        mlEl.textContent = formatMl(ml);
        // O valor 10 será o intervalo de tempo em
        // milissegundos que o cronômetro deve atrasar
    }, 10);
}

// Função que pausa a contagem
function tempPause(){
    // A função golbal clearInterval limpa todo o valor da 
    // variável intervalo
    clearInterval(intervalo);
    // Muda o valor escrito dentro do botão para "Continuar"
    btnStart.textContent = "Continuar";
}

// Função que zera todos os valores dos segundos, minutos, 
// horas e milissegundos
function tempZerar(){
    // A função golbal clearInterval limpa todo o valor da 
    // variável intervalo
    clearInterval(intervalo);
    // Zera os valores das variáveis
    hr = 0;
    mn = 0;
    sg = 0;
    ml = 0;
    // Zera o valor direto do documento HTML
    hrEl.textContent = formatTime(hr);
    mnEl.textContent = formatTime(mn);
    sgEl.textContent = formatTime(sg);
    mlEl.textContent = formatMl(ml);    
    // Muda o valor escrito dentro do botão para "Iniciar"
    btnStart.textContent = "Iniciar";
}

// Função que formata os valores de hora, minuto e segundo 
// para o documento HTML
function formatTime(time){
    // Retorna a string de: (time < 10 ?) se time for menor 
    // que 10, então (`${time}`.padStart(2, '0')) o método 
    // padStart é responsável por adicionar zeros à esquerda, 
    // definindo a quantidade de caracteres 2 e se for menor 
    // que 10 é adicionado '0' no começo, números como 0, 1, 
    // 2..., se não, mostra apenas o valor de time.
    return time < 10 ? `${time}`.padStart(2, '0') : time;
}

// Função que formata os valores de milissegundo 
function formatMl(time){
    // Retorna a string de: (time < 100 ?) se time for menor 
    // que 100, então (`${time}`.padStart(3, '0')) o método 
    // padStart é responsável por adicionar zeros à esquerda, 
    // definindo a quantidade de caracteres 3 e se for menor 
    // que 100 é adicionado '00' no começo, números como 0, 1, 
    // 2..., se não, mostra apenas o valor de time.
    return time < 100 ? `${time}`.padStart(3, '0') : time;
}