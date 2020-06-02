var i = 0                 // Loop through images
var images = []
var time = 3000           // Time between image switch

// Image list
images[0] = 'img/swank4.jpg'
images[1] = 'img/swank7.jpg'
images[2] = 'img/slideimage2.jpg'
images[3] = 'img/slideimage.jpg'

// Change image
function changeImg(){
    document.getElementById('slide').src= images[i]

    if(i < images.length - 1){
        i++
    }   else {
        i = 0
    }
     setTimeout("changeImg()", time)    //Runs function every 3 seconds
}

window.onload = changeImg          //Runs initially when page loads