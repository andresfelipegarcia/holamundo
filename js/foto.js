(function() {

  //Empezamos por encerrar el script entero en una función anónima para evitar las variables globales. Tomamos los elementos HTML que necesitamos y definimos el ancho (width) del video a 320 y la altura (height) a 0, ya que calcularemos la altura apropiada posteriormente.

  var streaming = false,
      video        = document.querySelector('#video'),
      canvas       = document.querySelector('#canvas'),
      photo        = document.querySelector('#photo'),
      startbutton  = document.querySelector('#startbutton'),
      width = 320,
      height = 0;

  //Obtener el video
  //Ahora necesitamos obtener el video desde la cámara web. Actualmente esto está predeterminado para los diferentes navegadores, así que necesitamos comprobar cuál es compatible:    
  navigator.getMedia = ( navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia ||
                         navigator.msGetUserMedia);
  //Le solicitamos al navegador que nos dé un video sin audio y obtenemos una secuencia (stream) en la función de retrollamada:
  navigator.getMedia({
      video: true,
      audio: false
    },
    function(stream) {
      if (navigator.mozGetUserMedia) {
        video.mozSrcObject = stream;
      } else {
        var vendorURL = window.URL || window.webkitURL;
        console.log(video);
        video.src = vendorURL.createObjectURL(stream);
    }
      video.play();
    },
    function(err) {
      console.log("An error occured! " + err);
    }
  );


  /*En estos momentos Firefox Nightly necesita que tu configures la propiedad de mozSrcObject del elemento del video con el fin de reproducirlo; para otros navegadores, configura el atributo src. Mientras que Firefox puede utilizar la secuencia de video directamente, Webkit y Opera necesitan crear un objeto URL desde ella. Todo esto será estandarizado en un futuro cercano.
    Redefinir el tamaño del video
  Luego necesitamos configurar el tamaño del video a las dimensiones deseadas.*/

  video.addEventListener('canplay', function(ev){
    if (!streaming) {
      height = video.videoHeight / (video.videoWidth/width);
      video.setAttribute('width', width);
      video.setAttribute('height', height);
      canvas.setAttribute('width', width);
      canvas.setAttribute('height', height);
      streaming = true;
    }
  }, false);

  function takepicture() {
    canvas.width = width;
    canvas.height = height;
    canvas.getContext('2d').drawImage(video, 0, 0, width, height);
    var data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
  }

  /*Nos subscribimos al evento canplay del video y leemos sus dimensiones utilizando videoHeight y videoWidth. Estas no están disponible realmente hasta que el evento sea iniciado. Establecemos streaming a verdadero (true) para que compruebe esto solo una vez, mientras que el evento canplay  siga en actividad.
    Esto es todo lo que se necesita para que inicie el video.
    Capturar una imagen
    Ahora necesitamos capturar una imagen utilizando un lienzo (canvas). Asignamos un manejador de eventos al botón de inicio para llamar a la función de takepicture.*/

  startbutton.addEventListener('click', function(ev){
      takepicture();
    ev.preventDefault();

  }, false);

})();