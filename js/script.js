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

function setActiveFirstTab(id) {

    let firtsLi = document.getElementById('tab-1-first')
    let secondLi = document.getElementById('tab-1-second')
    let firstContent = document.getElementById('tabs-1-first-content')
    let secondContent = document.getElementById('tabs-1-second-content')

    if ( id === 'tab-1-first' ) {
        firtsLi.classList.add('active')
        secondLi.classList.remove('active')

        firstContent.classList.remove('hidden')
        secondContent.classList.add('hidden')

    } else if ( id === 'tab-1-second' ) {
        secondLi.classList.add('active')
        firtsLi.classList.remove('active')

        secondContent.classList.remove('hidden')
        firstContent.classList.add('hidden')
    }
}

function setActiveSecondTab(id) {

    let secondTabLi = document.getElementsByClassName('second-tabs-li')
    let secondTabContents = document.getElementsByClassName('second-tabs-content')

    for ( let i = 1; i <= secondTabContents.length; i++ ) {
        if ( i === id ) {
            secondTabLi[i-1].classList.add('active')
            secondTabContents[i-1].classList.remove('hidden')
        }else {
            secondTabLi[i-1].classList.remove('active')
            secondTabContents[i-1].classList.add('hidden')
        }
    }
}

function isActivThidrTab(id) {

    let thirdTabLi = document.getElementsByClassName('third-tab-li')
    let thirdTabContents = document.getElementsByClassName('third-tab-content')

    for ( let i = 1; i <= thirdTabContents.length; i++ ) {
        if ( i === id ) {
            thirdTabLi[i-1].classList.add('active')
            thirdTabContents[i-1].classList.remove('hidden')
        }else {
            thirdTabLi[i-1].classList.remove('active')
            thirdTabContents[i-1].classList.add('hidden')
        }
    }
}


$(function() {

    $('#menu-btn').click(function() {
       $('#new-menu-ul').toggleClass('visible') 
    })
    
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

