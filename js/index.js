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


const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded) //Esto se hace para saber la duracion del video una vez que cargue
$video.addEventListener('timeupdate', handleTimeUpdate) //Para saber el tiempo de progreso del video

function handleLoaded(){
    $progress.max = $video.duration
    console.log('Ha cargado mi video', $video.duration)
}

function handleTimeUpdate(){
    //Cada vez que se actualiza el tiempo quiero que se mueva el range
    $progress.value = $video.currentTime
    // console.log('Tiempo actual', $video.currentTime)
}

$progress.addEventListener('input', handleInput)

function handleInput(){
    console.log($progress.value)//va a decir en que valor estoy
    $video.currentTime = $progress.value //Al reves que lo anterior, el progress se lo asigno al video
}