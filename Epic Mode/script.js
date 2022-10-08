document.querySelector('button.play').addEventListener('click', function() {
    let selTrack = document.querySelector('select').value

    chrome.runtime.sendMessage({
        name: "playtrack", track: selTrack}, (response) => {
        })
})

document.querySelector('button.pause').addEventListener('click', function() {

    chrome.runtime.sendMessage({name: "pauseTrack"})
})