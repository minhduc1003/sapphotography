const getImgs = document.querySelectorAll('.main__col-img')
const watchImg = document.querySelector('.watch-img')
const watchImgFullSize = document.querySelector('.watch-img-full-size')


for(let i=0 ;i<getImgs.length;i++){
    let getImg = getImgs[i]
    if(window.innerWidth <700){
        
        
            
            getImg.style.width =`${window.innerWidth /1.2}px`
            getImg.style.height =`${window.innerWidth *1.2}px`
       
    }
    
   getImg.onclick = function(){
       render(i)
        watchImg.style.display ='none'
        watchImgFullSize.style.display= 'flex'
   }
}

watchImgFullSize.onclick = function(){
        watchImg.style.display ='block'
        watchImgFullSize.style.display= 'none'
}
function render (id){
    let html = `
    <img class="img-full-size" src="../img/Step in to offer yourself/${id+1}.jpg" alt="">
    <div class="icon-close"><i class="fa-solid fa-xmark "></i></div>
       `
       let getParent = document.querySelector('.watch-img-full-size')
       getParent.innerHTML = html
       
    
}

