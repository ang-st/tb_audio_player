$(document).ready(function(){
/*
        var wavesurfer = Object.create(WaveSurfer);

        wavesurfer.init({
            container: document.querySelector('#wave'),
            waveColor: 'violet',
            progressColor: 'purple'
        });

        wavesurfer.on('ready', function () {
            wavesurfer.play();
        });

        wavesurfer.load('http://radio-parasite.tetaneutral.net:8000/terre_blanque_mp3');

*/
    var WIDTH = 600;
    var HEIGHT = 300;
    var audioElement = document.getElementById("player");
    var context = new (window.AudioContext || window.webkitAudioContext)();
    var analyser = context.createAnalyser();
    var canvas = document.getElementById("wave")
    var canvasCtx = canvas.getContext("2d");
    audioElement.addEventListener("canplay", function() {
                var source = context.createMediaElementSource(audioElement);
                    source.connect(analyser);
                    analyser.connect(context.destination);
                    analyser.fftSize = 2048;
                    var bufferLength = analyser.frequencyBinCount;
                    var dataArray = new Uint8Array(bufferLength);

                    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
                    function draw() {
                            drawVisual = requestAnimationFrame(draw);
                            analyser.getByteTimeDomainData(dataArray);
                            //console.log(dataArray)
                            canvasCtx.fillStyle = 'rgb(0, 0, 0)';
                            canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
                            canvasCtx.lineWidth = 2;
                            canvasCtx.strokeStyle = 'rgb(255,255,255)';
                            canvasCtx.beginPath();
                            var sliceWidth = WIDTH * 1.0 / bufferLength;
                            var x = 0;
                            for(var i = 0; i < bufferLength; i++) {
                                           
                                var v = dataArray[i] / 128.0;
                                var y = v * HEIGHT/2;

                                if(i === 0) {
                                  canvasCtx.moveTo(x, y);
                                } else {
                                 canvasCtx.lineTo(x, y);
                               }

                               x += sliceWidth;
                           }
                           canvasCtx.lineTo(canvas.width, canvas.height/2);
                           canvasCtx.stroke();
                    }
                    draw();
  }); 


})
