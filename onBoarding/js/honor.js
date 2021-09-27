import data from "./data.js"
let filterData = data.filter(item => item.tag === "認證與獲獎");
console.log(data);
const nav = document.querySelector('.timeline-nav');
const caption = document.querySelector('.timeline-slider');
const btns = document.querySelector('.btn-group');


function render(arr) {
    let paginationStr = "";
    let slideStr = "";
    arr.forEach(item => {
        paginationStr += `<div class="timeline-nav__item">${item.year}</div>`;
        slideStr += `<div class="timeline-slide" style="background-image: url(${item.img})" data-year="${item.year}">      <span class="timeline-year">${item.year}</span>
    <div class="timeline-slide__content">
      <h4 class="timeline-title">${item.event}</h4>
      <p class="timeline-text">${item.text}</p>
    </div>
  </div>`
    });
    nav.innerHTML = paginationStr;
    caption.innerHTML = slideStr;
}


function slick() {
    $('.timeline-nav').slick({
        slidesToShow: 12,
        slidesToScroll: 1,
        asNavFor: '.timeline-slider',
        centerMode: false,
        focusOnSelect: true,
        mobileFirst: true,
        arrows: false,
        infinite: false,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 8,
                }
            },
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                }
            }
        ]
    });
    $('.timeline-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.timeline-nav',
        centerMode: true,
        cssEase: 'ease',
        edgeFriction: 0.5,
        mobileFirst: true,
        speed: 500,
        responsive: [{
                breakpoint: 0,
                settings: {
                    centerMode: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: true
                }
            }
        ]
    });
}

$(function () {
    render(filterData);
    slick();
});