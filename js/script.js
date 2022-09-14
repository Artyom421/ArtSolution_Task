function active(id) {
    
    let btn = document.getElementById('menu-btn')
    let tagArr = document.getElementsByClassName('active')
    let ul = document.getElementById('new-menu-ul')

    btn.innerHTML = ''

    if( id === 'home' ) {
        for( let i = 0; i < tagArr.length; i++ ) {
            tagArr[i].removeAttribute('style') 
        }
        btn.innerHTML = '<i class="fa-solid fa-bars"></i> HOME'
    }
    else {
        for( let i = 0; i < tagArr.length; i++ ) {
            if ( i === id - 1 || i === id + 3 ) {
                tagArr[i].setAttribute('style', 'color:#3E86F5;') 
                
                btn.innerHTML = `<i class="fa-solid fa-bars"></i> ${tagArr[i].innerText}`
            }else {
                tagArr[i].removeAttribute('style') 
            }
        }
    }
    ul.classList.remove('visible')
}

$(function() {

    $('#menu-btn').click(function() {
       $('#new-menu-ul').toggleClass('visible') 
    })

    $( "#tabs" ).tabs();

    $( "#second-tabs" ).tabs();
    
    $( "#third-tabs" ).tabs();
    
    function createSecondTab () {
    
        let images = [
            {
                image :'./images/hermansyah-7uXn7nudorc-unsplash-scaled.jpg',
                type : 'Relax'
            },
            {
                image :'./images/ansgar-scheffold-huk2w9fa-jw-unsplash.jpg',
                type : 'Adventure'
            },
            {
                image : './images/simon-migaj-Yui5vfKHuzs-unsplash-copy-2.jpg',
                type : 'Relax'
            },
            {
                image : './images/ansgar-scheffold-huk2w9fa-jw-unsplash.jpg',
                type : 'Relax'
            },
            {
                image : './images/hermansyah-7uXn7nudorc-unsplash-scaled.jpg',
                type : 'Adventure'
            },
            {
                image : './images/simon-migaj-Yui5vfKHuzs-unsplash-copy-2.jpg',
                type : 'Relax'
            },
            {
                image : './images/ansgar-scheffold-huk2w9fa-jw-unsplash.jpg',
                type : 'Adventure'
            },
            {
                image : './images/simon-migaj-Yui5vfKHuzs-unsplash-copy-2.jpg',
                type : 'Relax'
            },
            {
                image : './images/hermansyah-7uXn7nudorc-unsplash-scaled.jpg',
                type : 'Adventure'
            },
            
        ]
    
        let tab1 = $('#second-tabs-1')
        let tab2 = $('#second-tabs-2')
        let tab3 = $('#second-tabs-3')
    
    
        for (let i = 0; i < images.length; i++) {
            if ( i < 3 ) {
                tab1.append(`
                    <div class="chiled">
                        <div  class="image-div">
                            <img src="${images[i].image}" alt="">
                            <h4>18 JUN 2022</h4>
                        </div>
                        <div class="info">
                            <div class="day-nigth">
                                <span>${images[i].type}</span>
                                <p>4 Days, 3 Nigths</p>
                            </div>
                            <h3>Loga Sea</h3>
                            <div class="price">
                                <p>
                                    <span>700$</span>/Person
                                </p>
                                <button>Book Now</button>
                            </div>
                        </div>
                    </div>
                `)
            } else if ( i < 6) {
                tab2.append(`
                    <div class="chiled">
                        <div  class="image-div">
                            <img src="${images[i].image}" alt="">
                            <h4>18 JUN 2022</h4>
                        </div>
                        <div class="info">
                            <div class="day-nigth">
                                <span>${images[i].type}</span>
                                <p>4 Days, 3 Nigths</p>
                            </div>
                            <h3>Loga Sea</h3>
                            <div class="price">
                                <p>
                                    <span>700$</span>/Person
                                </p>
                                <button>Book Now</button>
                            </div>
                        </div>
                    </div>
                `)
            }   
            else {
                tab3.append(`
                    <div class="chiled">
                        <div  class="image-div">
                            <img src="${images[i].image}" alt="">
                            <h4>18 JUN 2022</h4>
                        </div>
                        <div class="info">
                            <div class="day-nigth">
                                <span>${images[i].type}</span>
                                <p>4 Days, 3 Nigths</p>
                            </div>
                            <h3>Loga Sea</h3>
                            <div class="price">
                                <p>
                                    <span>700$</span>/Person
                                </p>
                                <button>Book Now</button>
                            </div>
                        </div>
                    </div>
                `)
            }    
        }

        let spans = $("#second-tabs .chiled .info .day-nigth span")
        
        spans.each(function () {
            if ( $(this).text() === 'Relax' ) {
                $(this).addClass('rose')
            }else if ( $(this).text() === 'Adventure' ) {
                $(this).addClass('blue')
            }
        })

    }

    createSecondTab()
    
    function createThirdTab () {
        let images = [
            'images/cristina-gottardi-CSpjU6hYo_0-unsplash.jpg',
            'images/wil-stewart-K_TbABnVzHo-unsplash.jpg',
            'images/download.jpg',
            'images/Angkor-Wat-Cambodia.jpg',
            'images/cristina-gottardi-CSpjU6hYo_0-unsplash.jpg',
            'images/download.jpg',
            'images/Angkor-Wat-Cambodia.jpg',
            'images/wil-stewart-K_TbABnVzHo-unsplash.jpg',
            'images/wil-stewart-K_TbABnVzHo-unsplash.jpg',
            'images/cristina-gottardi-CSpjU6hYo_0-unsplash.jpg',
            'images/Angkor-Wat-Cambodia.jpg',
            'images/download.jpg'
        ]
    
        let imageDiv = $('article #third-tabs .dest-info .dest-image')
        let x = 0
    
        let tab1 = $('#third-tabs-1')
        let tab2 = $('#third-tabs-2')
        let tab3 = $('#third-tabs-3')
    
    
        for (let i = 0; i < images.length; i++) {
            if ( i < 4 ) {
                tab1.append(`
                    <div class="dest-chiled">
                        <div class="dest-image" style='background-image:url(/${images[i]});'>
                            <div>
                                <i class="fa-solid fa-star"></i>
                                <span>3.4</span>
                            </div>
                        </div>
                        <div class="info">
                            <h4>Kina Mountain</h4>
                            <span><i class="fa-solid fa-location-dot"></i>Cambodia</span>
                        </div>
                    </div>
                `)
            } else if ( i < 8) {
                tab2.append(`
                    <div class="dest-chiled">
                        <div class="dest-image" style='background-image:url(/${images[i]});'>
                            <div>
                                <i class="fa-solid fa-star"></i>
                                <span>3.4</span>
                            </div>
                        </div>
                        <div class="info">
                            <h4>Kina Mountain</h4>
                            <span><i class="fa-solid fa-location-dot"></i>Cambodia</span>
                        </div>
                    </div>
                `)
            }   
            else {
                tab3.append(`
                    <div class="dest-chiled">
                        <div class="dest-image" style='background-image:url(/${images[i]});'>
                            <div>
                                <i class="fa-solid fa-star"></i>
                                <span>3.4</span>
                            </div>
                        </div>
                        <div class="info">
                            <h4>Kina Mountain</h4>
                            <span><i class="fa-solid fa-location-dot"></i>Cambodia</span>
                        </div>
                    </div>
                `)
            }    
        }
    }
    createThirdTab()  


    
        let div = $('.wrapper ul > li')
    
        div.each( function() {
            $(this).append(`
                <div class="chiled">
                    <div class="chiled-info">
                        <p>Our trip to Morocco was truly a onece in a lifetime experience 
                            and we are so grateful to everyone that made it happen seamlessly. 
                            Our travel planner, Jaouad, was increadible.
                        </p>
                        <h5>-Vand D</h5>
                        <span>Happy Trelo</span>
                    </div>
                    <div class="chiled-image">
                        <img src="/images/9cd4f443930499.5801de8934d27.jpg" alt="">
                        <div class="star">
                            <i class="fa-solid fa-star"></i>
                            <span>3.4</span>
                        </div>
                    </div>
                    <svg width="131" height="104" viewBox="0 0 131 104" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <rect x="131" y="104" width="131" height="104" transform="rotate(-180 131 104)" fill="url(#pattern0)" fill-opacity="0.25"/>
                        <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_12_70" transform="translate(-0.0292621) scale(0.000882103 0.00111111)"/>
                        </pattern>
                        
                        </defs>
                    </svg> 
                </div>
                <div class="chiled">
                    <div class="chiled-info">
                        <p>Our trip to Morocco was truly a onece in a lifetime experience 
                            and we are so grateful to everyone that made it happen seamlessly. 
                            Our travel planner, Jaouad, was increadible.
                        </p>
                        <h5>-Vand D</h5>
                        <span>Happy Trelo</span>
                    </div>
                    <div class="chiled-image">
                        <img src="/images/istockphoto-1319763895-170667a.jpg" alt="">
                        <div class="star">
                            <i class="fa-solid fa-star"></i>
                            <span>3.4</span>
                        </div>
                    </div>
                    <svg width="131" height="104" viewBox="0 0 131 104" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <rect x="131" y="104" width="131" height="104" transform="rotate(-180 131 104)" fill="url(#pattern0)" fill-opacity="0.25"/>
                        <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_12_70" transform="translate(-0.0292621) scale(0.000882103 0.00111111)"/>
                        </pattern>
                        <image id="image0_12_70" width="1200" height="900" xlink:href="data:image/png;base64,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"/>
                        </defs>
                    </svg>     
                </div>
            `)
        })
    
    

    // let sTimerLength = 700;
    // let sTimer = sTimerLength;
    // let slideCount = $('.jcarousel ul > li').length;
    // let slideWidth = $('.jcarousel').width();
    // let sliderUlWidth = slideCount * slideWidth;

    // $('.jcarousel ul > li').css({ width: slideWidth });
    // $('.jcarousel ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    // $('.jcarousel ul > li:last-child').prependTo('.jcarousel ul');

    // function moveLeft() {
    //     $('.jcarousel ul').animate({left: + slideWidth}, 400, function() { 
    //         $('.jcarousel ul > li:last-child').prependTo('.jcarousel ul');
    //         $('.jcarousel ul').css('left', '');
    //     });
    //     sTimer = sTimerLength;
    // };

    // function moveRight() {
    //     $('.jcarousel ul').animate({left: - slideWidth}, 400, function() { 
    //     $('.jcarousel ul > li:first-child').appendTo('.jcarousel ul');
    //     $('.jcarousel ul').css('left', '');});
    //     sTimer = sTimerLength;
    // };

    // $('.prev').click(function(){
    //     moveLeft();
    // });
    
    // $('.next').click(function(){
    //     moveRight();
    // });
    
    // setInterval(function() {
    //     if( --sTimer == 0 ) {
    //         moveRight();
    //     }
    // }, 4 );

        $('.jcarousel').jcarousel().jcarouselAutoscroll({
          interval: 3000,
          target: '+=1',
          autostart: true
      });
    
        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });
    
        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
                console.log('kkk');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });
    
        // $('.jcarousel-pagination')
        //     .on('jcarouselpagination:active', 'a', function() {
        //         $(this).addClass('active');
        //     })
        //     .on('jcarouselpagination:inactive', 'a', function() {
        //         $(this).removeClass('active');
        //     })
        //     .jcarouselPagination();
})


// $(window).resize( function() {
//     slideCount = $('#slider ul > a').length;
//     slideWidth = $('#slider').width();
//     sliderUlWidth = slideCount * slideWidth;
//     $('#slider ul > a').css({ width: slideWidth });
//     $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
// });

