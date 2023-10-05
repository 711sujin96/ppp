$(document).ready(function(){
    
    
    //1번>>> $('.p-btn').click(function(){
    //     $('.p-text').slideToggle()
    // })

    // 2번>>>
    // const mouse = document.querySelector('.mouse')
    // document.addEventListener('mousemove', (e)=>{
        // 마우스 좌표>> clientX,Y

    //     const mouseX = e.clientX
    //     const mouseY = e.clientY
    //     mouse.style.left = mouseX + 'px'
    //     mouse.style.top = mouseY + 'px'

    // })

    
    $('.p-btn').click(()=>{
        $('.con-menu').toggleClass('to')
    })
    $('.p-btn a').click(function(e){
        // e=>> a가 동작되는거 막아주삼
        e.preventDefault();
        $('.p-btn i').toggleClass('fa-heart fa-solid fa-heart fa-flip')
        $('.p-btn a').click('active')
    })

    $('.p-btn').mouseleave(()=>{
        $('.mainwrap').fadeOut()
    })

    // -------메뉴이벤트----------

    



//     $('.pj1').mouseenter(function(e){
//     e.preventDefault();    
//     $('.wrap').append(`<video src="video/v1.mp4" autoplay muted class="pj1video"></video>`)
// })    

// $('.pj1').mouseleave((e)=>{    
//     e.preventDefault();
//     $('.pj1video').fadeOut(1000)
// })    


$('.pj1').click(function(e){
    e.preventDefault();    
    $('.page1').show()
    $('.front_show h1').fadeIn(500)
    $('.prof').hide()
})    
$('.pj2').click(function(e){
    e.preventDefault();    
    $('.page2').show()
})    


$('.about').click(function(e){
    e.preventDefault();    
    $('.prof').fadeIn(500)
    $('.front_show h1').hide()
})    



// -----------------------------------

// $('.pj2').mouseenter(function(e){
//     e.preventDefault();
//     $('.wrap').append(`<video src="video/v2.mp4" autoplay muted class="pj2video"></video>`)
// })

// $('.pj2').mouseleave((e)=>{    
//     e.preventDefault();
//     $('.pj2video').fadeOut(1000)
// })
$('.pj2').click((e)=>{    
    e.preventDefault();
    $('.work_wrap').append(1000)
})




// -----------------------------------

$('.p-btn').find('i').removeClass('active')
// tab nav에 있는 li의 a를 찾아서 active라는 클래스를 없애조
$(this).find('i').addClass('active')
// 내가 선택한 li의 a를 찾아서 active를 추가해주셈

$('.nav .main-nav-dep li').click(function(e){ // tabnav에 있는 li를 클릭했을때
    e.preventDefault();  // 작동 멈춰~~~

    $('.nav .main-nav-dep li').find('a').removeClass('active')
    // tab nav에 있는 li의 a를 찾아서 active라는 클래스를 없애조
    $(this).find('a').addClass('active')
    // 내가 선택한 li의 a를 찾아서 active를 추가해주셈

    $('.work-page').hide();
    //tabitem을 숨기고 
    const idx = $(this).index();
    // idx라는 변수에 내 번호를 매겨쥬
    $('.work-page').eq(idx).show();
    // tabitem에 있는 내 번호를 보여죠
})

$('.nav .main-nav-dep li').eq(0).trigger('click')
// li에 0번째 클릭 이벤트를 실행하겟음 ㅇㅅㅇ


$('.gnb .pj1').click(function(){
    $('.mainwrap').show()
})



// 영상pop

$('.card').click(function(e){
    e.preventDefault();    
    $('.show-pop').show()
})    
$('.show-pop button').click(function(e){
    e.preventDefault();
    $('.show-pop').fadeOut()
    $('video').prop('muted', 'true')
})

$('.card2').click(function(e){
    e.preventDefault();    
    $('.show-pop2').show()
})    
$('.show-pop2 button').click(function(e){
    e.preventDefault();    
    $('.show-pop2').fadeOut()
    $('video').prop('muted', 'true')
})

$('.card3').click(function(e){
    e.preventDefault();    
    $('.show-pop3').show()
})    
$('.show-pop3 button').click(function(e){
    e.preventDefault();    
    $('.show-pop3').fadeOut()
    $('video').prop('muted', 'true')
})

$('.card4').click(function(e){
    e.preventDefault();    
    $('.show-pop4').show()
})    
$('.show-pop4 button').click(function(e){
    e.preventDefault();    
    $('.show-pop4').fadeOut()
    $('video').prop('muted', 'true')
})

$('.card5').click(function(e){
    e.preventDefault();    
    $('.show-pop5').show()
})    
$('.show-pop5 button').click(function(e){
    e.preventDefault();    
    $('.show-pop5').fadeOut()
    $('video').prop('muted', 'true')
})

$('.card6').click(function(e){
    e.preventDefault();    
    $('.show-pop6').show()
})    
$('.show-pop6 button').click(function(e){
    e.preventDefault();    
    $('.show-pop6').fadeOut()
    $('video').prop('muted', 'true')
})

$('.card7').click(function(e){
    e.preventDefault();    
    $('.show-pop7').show()
})    
$('.show-pop7 button').click(function(e){
    e.preventDefault();    
    $('.show-pop7').fadeOut()
    $('video').prop('muted', 'true')
})

$('.pagebox').mouseenter(function(){})

$('.flip').mouseenter(function(){
    $('.pagebox .flip').css({
        'opacity': '0.3'
    })
    $(this).css({
        'opacity': '1'
    })
})



// $('.show-pop').append(`<video src="video/AKMU - ‘Love Lee’ M_V.mp4" autoplay muted class="pj2video"></video>`)
})



