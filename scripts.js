const SECOND_CONTAINER = document.querySelector(".second-container")
const inner_second = document.querySelector(".inner-second")

const imageData = [
    {
        name : "Walmart",
        img : "./Assets/Logos/Walmart.svg"
    },
    {
        name : "JP Morgan",
        img : "./Assets/Logos/JP Morgan.svg"
    },
    {
        name : "Visa",
        img : "./Assets/Logos/Visa.svg" 
    },
    {
        name : "Tinder",
        img : "./Assets/Logos/Tinder.svg"
    },
    {
        name : "Samsung",
        img : "./Assets/Logos/Samsung.svg" 
    },
    {
        name : "Verizon",
        img : "./Assets/Logos/Verizon.svg"
    }
]


// imageData.map((data) =>{
//     const createSpan = document.createElement("span")
//     const createImage = document.createElement("img")
//     const leftdiv = document.createElement("div")

//     createImage.src = `${data.img}`
//     createImage.alt = `${data.name}`

//     createSpan.append(createImage)
//     leftdiv.append(createSpan)
//     inner_second.append(div)
//     SECOND_CONTAINER.append(inner_second)
// })