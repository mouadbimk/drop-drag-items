# Drop & Drag Items

A small and lightweight package to add drag-and-drop effects to your UI elements. It allows you to easily make elements draggable and droppable by adding a few classes and including a script.

## Installation

You can install it via npm:

```bash
npm install drop-drag-items
```
# How To Use
- after install package add this line in top tag **</body>**
```js
<script src="./node_modules/drop-drag-items/dist/drop-drag-items.min.js"></script>
```
- and in your js file add
```js
   DropDrag.enableDraggedItems();
```
- and your html code add
```html
<div class="columnItems">
    <div class="draggedItem" data-id="1">Item 1</div>
    <div class="draggedItem" data-id="2">Item 2</div>
    <div class="draggedItem" data-id="3">Item 3</div>
</div>
```
# Additional Notes
- Ensure that the **drop-drag-items.min.js** file is located correctly in the **node_modules** folder relative to your HTML file.
- The package automatically detects elements with the appropriate classes to enable drag-and-drop interactions.
-You can style the draggable and droppable elements using custom CSS to fit your UI needs.


