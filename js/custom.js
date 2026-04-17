$(function () {
    lucide.createIcons();





    // main_visual 슬라이드
    const swiper = new Swiper('.main_visual_slider', {
        effect: 'slide',
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

    $('.header utills').on('click', function () {
        $('.side_menu').addClass('on');
    });

    $('.header utills').on('click', function () {
        $('.side_menu').removeClass('on');
    });




    // 메인인포 애니메이션
    $(function () {

        function check() {
            let sct = $(window).scrollTop();
            let winH = $(window).height();
            let top = $('.main_info').offset().top;

            if (sct > top - winH + 100) {
                $('.main_info').addClass('on');
            } else {
                $('.main_info').removeClass('on'); // 👈 이거 추가
            }
        }

        $(window).on('scroll', check);
        check();
    });



    // 탭메뉴
    $('.tab_menu>li').on('click', function () {
        let idx = $(this).index();

        $('.tab_menu>li').removeClass('on');
        $(this).addClass('on');

        $('.tab_content>li').removeClass('on');
        $('.tab_content>li').eq(idx).addClass('on')
    })



    // top버튼
    $(function () {

        $('.top_btn').hide();

        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 200) {
                $('.top_btn').fadeIn();
            } else {
                $('.top_btn').fadeOut();
            }
        });

        $('.top_btn').on('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

    });
})


