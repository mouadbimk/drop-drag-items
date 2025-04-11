// dragAndDrop.js
//variable to store the dragged card
let draggedItem = null;
let placeholder = document.createElement('div');
placeholder.classList.add('placeholder');

// start drag event 
function handleDragStart(e) {
    draggedItem = e.target;
    addEventListeners();
}

//handle drag event 
function handleDrag(e) {
    let x = e.clientX || (e.touches && e.touches[0].clientX);
    let y = e.clientY || (e.touches && e.touches[0].clientY);
    let element = document.elementFromPoint(x, y);
    //skip if no element found
    if (!element) return;

    //if Element is a card,update position
    if (element && element.classList.contains('draggedItem') && element !== draggedItem) {
        const parent = element.parentNode;
        parent.insertBefore(placeholder, element);
    }
    if (element.classList.contains('columnItems')) {
        const Items = Array.from(element.querySelectorAll('.draggedItem'));
        if (Items.length === 0) {
            element.appendChild(placeholder);
        } else {
            const lastItem = Items[Items.length - 1];
            if (lastItem !== draggedItem) {
                element.insertBefore(placeholder, lastItem.nextSibling);
            }
        }
    }
}
    //handle drop event
function handleDrop(e) {
    if (placeholder && placeholder.parentNode) {
        placeholder.parentNode.replaceChild(draggedItem, placeholder);
    }
    draggedItem.classList.remove('dragging');
    draggedItem = null;
    removeEventListeners();
}
//add event listeners to the dragged items
function addEventListeners() {
    draggedItem.classList.add('dragging');
    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', handleDrop);
    document.addEventListener('touchmove', handleDrag);
    document.addEventListener('touchend', handleDrop);
}
    //remove event listeners
function removeEventListeners(){
document.removeEventListener('mousemove',handleDrag);
document.removeEventListener('mouseup',handleDrop);
document.removeEventListener('touchmove',handleDrag);
document.removeEventListener('touchend',handleDrop);
}

    //enable dragged items
function enableDraggedItems() {
    document.querySelectorAll('.draggedItem').forEach(card => {
        card.removeEventListener('mousedown', handleDragStart);
        card.removeEventListener('touchstart', handleDragStart);
        card.addEventListener('mousedown', handleDragStart);
        card.addEventListener('touchstart', handleDragStart);
    });
}

module.exports = { enableDraggedItems,handleDragStart,handleDrag,handleDrop };
