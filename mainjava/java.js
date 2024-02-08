

/* colocando o video para redimensionar conforme a pagina */ 

  function resizeVideo() {
      var videoContainer = document.getElementById('video-container');
      var video = document.getElementById('myVideo');

      var aspectRatio = 16 / 9; // Proporção desejada (16:9)

      var newWidth = window.innerWidth;
      var newHeight = window.innerHeight;

      var newAspectRatio = newWidth / newHeight;

      if (newAspectRatio > aspectRatio) {
        // Ajusta a largura do vídeo
        video.style.width = '100%';
        video.style.height = 'auto';
      } else {
        // Ajusta a altura do vídeo
        video.style.width = 'auto';
        video.style.height = '100%';
      }
    }

    // Atualiza o tamanho do vídeo quando a janela é redimensionada
    window.addEventListener('resize', resizeVideo);

    // Inicializa o tamanho do vídeo
    window.addEventListener('load', resizeVideo);