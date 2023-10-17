
    
    let videoPlayer = document.getElementById('video-player');
    let videoControl = document.getElementById('video-control');
    let PausePlay = function () {
      if (videoPlayBack === true) {
        videoPlayer.pause();
        videoPlayer.setAttribute('class', '--overlay')
        // article_hide class not added to pause state for persistent play button visibility
        videoControl.setAttribute('class', 'videoControls playVideoBtn');
        videoPlayBack = false;
      } else {
        videoPlayer.play();
        videoPlayer.setAttribute('class', '')
        videoControl.setAttribute('class', 'videoControls --hide pauseVideoBtn');
        videoPlayBack = true;
      }

    }
    //Mobile breakpoint playback controls are hidden by default
    //In order to show controls, user must tap/click video player to reveal button.
    videoPlayer.addEventListener('click', function () {

      videoControl.setAttribute('style', 'display: block');
      // styles are removed to fall back on default article_hide class after 3 seconds
      setTimeout(() => {
        videoControl.setAttribute('style', '');
      }, 3000);

    })