document.body.addEventListener('keypress', (e) => {
   playSound(e.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', ()=>{
    let composicao = document.querySelector('#input').value;
    
    if(composicao != ''){
        let musica = composicao.split('');
        playComposicao(musica);
    }
});

//Funções
function playSound(sound){
    let audio = document.querySelector(`#s_${sound}`);
    let tecla = document.querySelector(`div[data-key="${sound}"]`);

    if(audio){
        audio.currentTime = 0;
        audio.play();
    }

    if(tecla){
        tecla.classList.add('active');

        setTimeout(()=>{
            tecla.classList.remove('active');
        }, 300);
    }
}


function playComposicao(musica){

    let aguarde = 0;

    for(let som of musica){
        
        setTimeout(() => {
            playSound(`key${som}`);
        }, aguarde);

        aguarde += 250;
    }
}