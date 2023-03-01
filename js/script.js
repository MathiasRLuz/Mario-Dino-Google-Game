const mario = document.querySelector('.mario'); // pega a classe .mario do style.css
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');
    setTimeout(()=>{
        mario.classList.remove('jump')
    },500);
}

const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px',''); // o + tenta converter a string em numero

    // condição para gameover
    if (pipePosition >= 0 && pipePosition <= 120 && marioPosition<=80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        
        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop); // break do loop
    }
},10);

document.addEventListener('keydown',jump);