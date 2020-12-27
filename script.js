let oldpixelNo = document.querySelector('#box-number').defaultValue;
oldpixelNo = 10;
for (i = 0; i < oldpixelNo*oldpixelNo ; i++) {
    const container = document.querySelector('#draw-board');
    const pixel = document.createElement('div');

    pixel.classList.add('pixels');
    pixel.style.width = `${480 / oldpixelNo }px`;
    pixel.style.height = `${480 / oldpixelNo}px`;
    pixel.style.background = 'transparent';
    container.appendChild(pixel)
}
const pixelNo = document.querySelector('#box-number');

pixelNo.addEventListener('change', (e) => {
    
    const oldPixels = document.querySelectorAll('.pixels')
    const pixelNo = document.querySelector('#box-number').value;

    oldPixels.forEach(pixel => {
        pixel.remove()
    });

    for (i = 0; i < pixelNo * pixelNo; i++) {
        const container = document.querySelector('#draw-board');
        const pixel = document.createElement('div');

        pixel.classList.add('pixels');
        pixel.style.cssText = `
            width: ${480 / pixelNo }px;
            height: ${480 / pixelNo }px;
            background: transparent;
            margin: 0;
            pading: 0;
        `
        container.appendChild(pixel)
    }
    const boxes = document.querySelectorAll('.pixels');

    boxes.forEach(box => {
        box.addEventListener('mouseover', (e) => {
            const color = document.querySelector('#pen-color').value;
            e.target.style["background"] = `${color}`;
            e.target.style.border = 'none';
        })
    })
    const clearButton = document.querySelector('#clear');

    clearButton.addEventListener('click', (e) => {
        boxes.forEach(box => {
            box.style["background"] = 'transparent';
            box.style.border = '1px solid #aaa';
        })
})
})

const boxes = document.querySelectorAll('.pixels');

boxes.forEach(box => {
    box.addEventListener('mouseover', (e) => {
        const color = document.querySelector('#pen-color').value;
        e.target.style["background"] = `${color}`;
        e.target.style.border = 'none';
    })
})

//let's add the clear functionality

const clearButton = document.querySelector('#clear');

clearButton.addEventListener('click', (e) => {
    boxes.forEach(box => {
        box.style["background"] = 'transparent';
        box.style.border = '1px solid #aaa';
    })
})