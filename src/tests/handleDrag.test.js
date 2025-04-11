/**
 * @jest-environment jsdom
 */
const {handleDrag, handleDragStart} = require('../dragAndDrop.js');

describe('handleDrag',()=>{
    let draggedElement, otherElement, placeholder,columnItems;
    beforeEach(()=>{
        document.body.innerHTML = `
            <div class="columnItems" id="column">
                <div class="draggedItem" id="item1"></div>
                <div class="draggedItem" id="item2"></div>
            </div>
        `;
        draggedElement = document.getElementById('item1');
        otherElement = document.getElementById('item2');
        columnItems = document.getElementById('column');

        handleDragStart({target: draggedElement});
        document.elementFromPoint = jest.fn().mockReturnValue(otherElement);
    });
    test('should insert placeholder before other element', () => {
        handleDrag({clientX:0,clientY:0});
        const placeholder = document.querySelector('.placeholder');
        expect(columnItems.contains(placeholder)).toBe(true);
        expect(placeholder.nextSibling).toBe(otherElement);
    })
});