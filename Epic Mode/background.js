chrome.runtime.onMesaage((msg, sender, response) => {
    
    if(msg.name == "playTrack" ){
        
        let trackName = msg.track
        let audoiFile = document.querySelector('audio-element')
        audioEle.src = 'track'+Number+'mp3'
        audioEle.play()

    }

    if(msg.name == "pauseTrack") {
        let audoiFile = document.querySelector('audio-element')
        audioEle.pause()
    }
})