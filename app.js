const accordLinks = document.querySelectorAll('.card-accordion-link');

let activeIndex;
let target;
for(let i = 0; i < accordLinks.length; i++) {
    accordLinks[i].parentNode.parentNode.setAttribute('id', `${i}`);
    accordLinks[i].addEventListener('click', function(e) {
        target = e.target.parentNode.parentNode;
        activeIndex = i;
        console.log(target)
    })

}

if(target) {
    target.classList.add('show');
}