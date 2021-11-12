//
$(document).ready(function (){
//Sliders
    $('.first-slider__main').slick({
        slidesToShow: 5,
        arrows:false,
        infinite:false,
        draggable:false,
        swipe:false,
        centerMode:true,
        adaptiveHeight: true,


        responsive:[
            {
                breakpoint:767,
                settings:{
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    arrows:true,

                }
            }
        ]
    })

$(".second-slider_main").slick({
    slidesToShow:5,
    centerMode: true,
    infinite: false,
    arrows:false,
    responsive:[{
        breakpoint: 930,
        settings:{
            slidesToShow:1,
            arrows:true
        }
    }

    ]
})

$(".third-slider__main").slick({
    slidesToShow:5,
    centerMode:true,
    arrows:false,
    infinite:false,
    responsive:[
        {
            breakpoint:1200,
            settings:{
                slidesToShow:1,
                arrows:true

            }
        }
    ]
})

 })
