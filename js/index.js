const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');

$play.addEventListener('click', handlePlay );
$pause.addEventListener('click', handlePause );
$backward.addEventListener('click', handleBackward );
$forward.addEventListener('click', handleForward );

function handlePlay() {
    $video.play()
    $play.hidden = true;
    console.log('Reproducción en curso');
    $pause.hidden = false;
}

function handlePause(){
    $video.pause()
    $pause.hidden = true;
    $play.hidden = false;
    console.log('En PAUSA');
}

function handleForward(){
    handlePlay();
    console.log('Para adelante 10 segundos', $video.currentTime);
    $video.currentTime += 10;
    handlePlay(); //Llama a la función handlePlay para que se reproduzca
}

function handleBackward(){
    console.log('Para atras 10 segundos', $video.currentTime);
    $video.currentTime -= 10;
    handlePlay();
}

