/**
 * @jest-environment jsdom
 */
const {handleDragStart} = require('../dragAndDrop.js');
test('should add dragging class on drag start', () => {
    const element = document.createElement('div');
    element.classList.add('draggedItem');
    handleDragStart({target:element});
    expect(element.classList.contains('dragging')).toBe(true)
})