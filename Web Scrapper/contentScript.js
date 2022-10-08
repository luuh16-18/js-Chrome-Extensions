chrome.runtime.onMessage.addListner((msg, sender, response) => {
    if(msg.name == "runCommands"){

        let scrapeObj = msg.data
        getNextItem(obj, 0)

        window.ScraperExt = []
    }
})

function getNextItem(obj, index){
    if(typeof obj[index] !== 'undefined'){
        if(obj[index].type == 'click') {
            clickEvent(obj, index)
        }
    } else{
        chrome.runtime.sendMessage({command: "run-complete", data: window.ScraperExt})
    }
}

function waitEvent(obj, index){
    let item = obj[index]
    let waitTime = parseInt(item.one)


    setTimeout(function(){
        let item = obj[index]
        document.querySelector(item.one).click()

        getNextItem(obj, (index+1))
    }, waitTime)

}

function clickEvent(selector, obj, index){

    let item = obj[index]
    document.querySelector(item.one).click()
    getNextItem(obj, (index+1))
}

function saveEvent(selector, obj, index){

    let item = obj[index]
    let value = document.querySelector(item.one).innerText
    window.ScraperExt.push(value)
    getNextItem(obj, (index+1))
    
}

function enterEvent(selector, obj, index){
    
    let item = obj[index]
    let value = document.querySelector(item.one).value = item.two
    getNextItem(obj, (index+1))
    
    
}