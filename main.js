var typed = new Typed(".text", {
    strings: ["Experienced Full Stack Developer", "PMP Certified"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})


document.getElementById("hireMe")?.addEventListener('click', ()=>{
    window.location = "mailto:varshu1112@gmail.com"
});

if(screen.availWidth < 768){
    document.getElementsByClassName("navbar")[0].classList.add('hide-nav');

    document.getElementsByClassName("header")[0].addEventListener('click',()=>{
        let _navbar = document.getElementsByClassName("navbar");
        if(_navbar && !Array.from(_navbar[0]?.classList).includes('hide-nav')) {
            _navbar[0].classList.add('hide-nav');
        } else {
            _navbar[0].classList.remove('hide-nav')
        }
    })
}


// fetch('https://api.unsplash.com/photos/random/?count=5&client_id=52d8369eb3e2576a5f5b6423865e074e9c7045761bff1ac5664ff3e0bdb57a1d') 
//   .then(response => response.json())
//   .then(data => {
//     data.forEaach(function(image, i) {
//       document.querySelector("#slide-" + (i+1)).innerHTML = `
//         <img src="${image.urls.regular}" alt="">
//         <p class="author-info">
//           <a href="${image.links.html}?utm_source=slider-thing&utm_medium=referral&utm_campaign=api-credit">Photo by ${image.user.name}</a> on <a href="https://unsplash.com/">Unsplash</a>
//         </p>
//       `;
//     });
//   });