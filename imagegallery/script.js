let scrollContainer = document.querySelector(".gallery");
let BackBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');

nextBtn.addEventListener('click' , () =>{
    scrollContainer.style.scrollBehaviour = "smooth"
    scrollContainer.scrollLeft += 900;

})
BackBtn.addEventListener('click' , () =>{
    scrollContainer.style.scrollBehaviour = "smooth"

    scrollContainer.scrollLeft -= 900;
})