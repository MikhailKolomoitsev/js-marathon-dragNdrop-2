const items = document.querySelectorAll('.item')
const placeholders = document.querySelectorAll('.placeholder')
const input = document.querySelector('.js-input-form')

input.addEventListener('submit', addTask)
function addTask(event) {
    let value='Hello'
    let string=`<div class="item" draggable="true">${value}</div>`
    event.preventDefault()
    placeholders[0].insertAdjacentHTML('beforeend', string)
}

items.forEach(item => {
   item.addEventListener('dragstart',(event)=> {
    event.currentTarget.classList.add('hold')
    setTimeout(()=>event.target.classList.add('hide'), 0)
    
})
   item.addEventListener('dragend', dragEnd) 
});

placeholders.forEach(placeholder => {
  placeholder.addEventListener('dragover', dragover)
  placeholder.addEventListener('dragenter', dragenter)
  placeholder.addEventListener('dragleave', dragleave)
  placeholder.addEventListener('drop', dragdrop)
});

function dragStart(event) {
    event.currentTarget.classList.add('hold')
    setTimeout(()=>event.target.classList.add('hide'), 0)
    
}


function dragEnd(event) {
     event.target.className='item'
}

function dragover(event) {
    event.preventDefault()
}
function dragenter(event) {
    event.currentTarget.classList.add('hovered')
}
function dragleave(event) {
    event.currentTarget.classList.remove('hovered')
}
function dragdrop(event) {
    event.currentTarget.classList.remove('hovered')
    event.currentTarget.append(items[0])
}