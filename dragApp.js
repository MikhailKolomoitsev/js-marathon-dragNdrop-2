export default function dragEnd(event) {
     event.currentTarget.className='item'
}

export default function dragover(event) {
    event.preventDefault()
}
export default function dragenter(event) {
    event.currentTarget.classList.add('hovered')
}
export default function dragleave(event) {
    event.currentTarget.classList.remove('hovered')
}
export default function dragdrop(event) {
    event.currentTarget.classList.remove('hovered')
    event.currentTarget.append(items[0])
}