document.addEventListener("DOMContentLoaded", async () => {
    const linkslist= document.getElementById('linkslist')
    const url = 'https://jqq-utils.netlify.app/api/recentYTVideos'
    const copy = (e) => {
        const str = e.target.dataset.url
        const el = document.createElement('textarea')
        el.value = str
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.removeChild(el)
    }
    try {
        const res = await fetch(url)
        const videos = await res.json()
        const vidoesHtml = videos.map(video => {
            const videoUrl = `https://www.youtube.com/watch?v=${video.videoId}`
            return `<li class="video-link">
                <button class="btn" data-url="${videoUrl}">Copy Link</button>
                <a class"btn" href="${videoUrl}" rel="noopener noreferrer target="_blank">Watch</a>
                ${video.title}
            </li>`
        })
        .join('')
        linkslist.innerHTML = vidoesHtml 
        const videoLinks = [...document.querySelectorAll('.vidoe-link')]
        videoLinks.forEach((link) => link.addEventListener('click', copy))
    } catch (err){
        console.error(err)
    }
})