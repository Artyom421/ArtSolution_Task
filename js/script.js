function setActiveNavItem(id) {
    
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
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '+=1'
        });
})

