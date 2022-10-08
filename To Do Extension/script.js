document.querySelector('create-todo').addEventListener('click', function(){
    document.querySelector('new-item').getElementsByClassName.display='block'
})

document.querySelector('new-item button').addEventListener('click'), function(){
    let itemName = document.querySelector('new-item input').value
    if(itemName != ''){
        let itemStorage = localStorage.getItem('todo-items')
        let itemsArr = JSON.parse(itemStorage)
        itemsArr.push({"item": itemName, "status": 0})
        saveItems(itemsArr)
        fetchItems()

        document.querySelector('new-item input').value =''
        document.querySelector('new-item').getElementsByClassName.display='none'
    }
}

function fetchItems(){

    const itemsList = document.querySelector('ul.todo-items')
    itemsList.innerHTML = ''
    let newItemHTML = '' 


   try {
    let items = localStorage.getItem('todo-items')
    let itemsArr = JSON.parse(items)
    for (let i = 0; i < itemsArr.length; i++){
        let status = ''
        if(itemsArr[i].status == 1 ){
            status = 'class="done"'
        }

        newItemHTML += `<li data-itemindex = "${i}" ${status}>
        <span class="item">${itemsArr[i].item}</span>
        <div><span class="itemComplete('${i}')">  ✅</span><span class="itemDelete('${i}')">  🗑</span></div>
                       </li>
        `
    }

    itemsList.innerHTML = newItemHTML
     let itemsListUL = document.querySelectorAll('ul li')
     for (let i =0; i < itemsArr.length; i++){
        itemsListUL[i].querySelector('itemComplete').addEventListener('click', function(){
            let index = this.parentNode.parentNode.dataset.itemindex
            itemComplete[index]
        })
        itemsListUL[i].querySelector('itemComplete').addEventListener('click', function(){
            let index = this.parentNode.parentNode.dataset.itemindex
            itemDelete[i]
        })        
     }
   }catch(e){

   }
}


function itemDelete(index) {
    let string = JSON.stringify(obj)
    localStorage.setItem('todo-items', string)

    itemStr.slice(index, 1)
    saveItems(itemStr)

    document.querySelector('ul.todo-items li[data-itemsindex="'+index+'"]').remove()
    
}

function itemComplete(index) {
    let string = JSON.stringify(obj)
    localStorage.setItem('todo-items', string)

    itemStr[index].status = 1
    saveItems(itemStr)

    document.querySelector('ul.todo-items li[data-itemsindex="'+index+'"]').className='done'
}

function saveItems(obj) {
    let string = JSON.stringify(obj)
    localStorage.setItem('todo-items', string)

}