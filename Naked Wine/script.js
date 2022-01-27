const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav')[0]
const navLinks = document.querySelectorAll("ul a")

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})



const liItem = document.querySelectorAll('.navigation ul li');
const imgItem = document.querySelectorAll('.products .product-card');

liItem.forEach(li => {
    li.onclick = function() {
    //active
    liItem.forEach(li => {
        li.className = "";
    })
    li.className = "active";
    

    //Filter
    const value = li.textContent;
    imgItem.forEach(img=> {
        img.style.display = 'none';
        if (img.getAttribute('data-filter') == value.toLowerCase() || value == "All Wines") {
            img.style.display = 'block';
            img.style.height = "400px"
            }
        })
    }
});


AOS.init();
