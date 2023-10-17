const accordLinks = document.querySelectorAll('.card-accordion-link');

let activeIndex = -1;
for(let i = 0; i < accordLinks.length; i++) {
    accordLinks[i].addEventListener('click', function(e) {
        parentElement = e.target.parentNode.parentNode;

        if(activeIndex != -1) {
            accordLinks[activeIndex].parentNode.parentNode.classList.remove('show')
        }

        if(activeIndex !== i) {
            parentElement.classList.add('show');
            activeIndex = i;
        } else {
            parentElement.classList.remove('show');
            activeIndex = -1;
        }


    })
}