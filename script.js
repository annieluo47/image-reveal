// 1. have a blank screen
// 2. when the mouse hovers over a section in the blank screen, the image will reveal
// 3. when the mouse exits the image, then the image will go back to hidden

const container = document.getElementById('container');
const images = document.querySelectorAll('.image')
const url = "https://images.unsplash.com/photo-1629233796556-92a60986ea54?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"

// setInterval(removeImage(), 1000)

function showImage() {
    images.forEach((image) => image.addEventListener('mouseover', () => {
        image.classList.remove('hide')
    }))
}

function removeImage() {
    images.forEach((image) => image.addEventListener('mouseout', () => {
    image.classList.add('hide')
    }))
}

function alternate() {
    showImage()
    removeImage()
}


// function createImage() {
//     const img = document.createElement('img')
//     img.src = url
//     img.classList.add('image')
//     container.appendChild(img)
// }

// function createBox() {
//     const box = document.createElement('div')
//     const totalBoxes = 
//     container.appendChild('div')
// }
alternate()