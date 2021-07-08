const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart',dragStart)
item.addEventListener('dragend', dragEnd)

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
     event.currentTarget.className='item'
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
    event.currentTarget.append(item)
}