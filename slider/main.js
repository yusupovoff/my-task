let slider_content=document.getElementById('box')
let image=['a', 'b', 'c']
let i=image.length
function nextImage(){
    if(i>image.length){
        i=i-1
    }else{
        i=1
    }
        slider_content.innerHTML="<img src="+image[i-1]+".jpg"
        console.log(slider_content)
}
function prewImage(){
    if(i>image.length+1 && i>1){
        i=i-1
    }else{
        i=image.length
    }
        slider_content.innerHTML="<img src="+image[i-1]+".jpg"
        console.log(slider_content)
}