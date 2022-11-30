let slider_content=document.getElementById('box')
let image=['a1' ,'a2' ,'a3']
let i=image.length
function nextImage(){
    if(i>image.length){
        i=i+1
    }else{
        i=1
    }
        slider_content.innerHTML="<img src="+image[i-1]+".jpg"
        console.log(slider_content);
}