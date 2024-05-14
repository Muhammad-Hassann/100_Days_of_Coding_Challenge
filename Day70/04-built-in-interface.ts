// HTML Image Element

const image : HTMLImageElement = document.createElement("img")
image.src = "image.jpg"
image.alt = "Image"

if(image.complete){
    console.log(`Image dimensions: ${image.naturalWidth}x${image.naturalHeight}`);
}else{
    image.addEventListener('load', ()=>{
        console.log(`Image dimensions: ${image.naturalWidth}x${image.naturalHeight}`)
    })
}