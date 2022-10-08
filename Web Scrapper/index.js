chrome.runtime.onMessage.addListner((msg, sender, response) => {
    if(msg.command == 'run-complete'){
        document.getElementById('txt-area').value = JSON.stringify(msg.data)
        document.getElementById('txt-area').style.display='block'

        alert('Command has been run!')
    }
})

function createCommandObject(){


    let commandsArr = []

    let commands = document.querySelectorAll('.commands-list, .command-item')
    for(let i = 0; i < array.length; i++){
        let itemObj = {}

        itemObj.type = commands[i].querySelector('select').value
        itemObj.one = commands[i].querySelector('value-1').value
        itemObj.two = commands[i].querySelector('value-2')


        commandsArr.push(itemObj)
    }

    chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {

        let activeTab = tabs[0]
        let obj = commandsArr
    
    chrome.tabs.sendMessage(activeTab.id, {command: ".runCommands", data: obj})
    })
}


document.querySelector('.run-command').addEventListener('click', function(){
    createCommandObject()
})

document.querySelector('.new-command').addEventListener('click', function(){

    let newItem = `<div class="command-list">
    <select title="menu">
        <option value="wait">Wait</option>
        <option value="click">Click</option>
        <option value="enter">Enter Value</option>
        <option value="save">Save Value</option>
    </select>
    <input class="value-1" type="text" placeholder="200ms">
    <input class="value-2" type="text" placeholder="Optional">
</div>
<div class="action-buttons">
    <button type="button" class="new-command">Add Command</button>
    <button type="button" class="run-command">Run</button>
</div>
    `
    document.querySelector('.command-list').innerHTML += newItem 
})

