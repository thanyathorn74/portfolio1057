/* main.js (Updated to handle Active State on scroll and click) */

(function($) {

    // 1. Play initial animations on page load.
    $(window).on('load', function() {
        // Remove is-preload class if it exists (for CSS transitions)
        $('body').removeClass('is-preload');
        
        // กำหนดให้ Home เป็น Active เมื่อโหลดหน้าจอ index.html ครั้งแรก
        if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
            $('#nav li').removeClass('active');
            $('#nav-home').addClass('active');
        }
    });

    // 2. Simple internal link scrolling + Active Class Toggle (เฉพาะใน index.html)
    if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
        $('a[href^="#"]').on('click', function(e) {
            var targetId = $(this).attr('href');
            
            if (targetId !== '#') {
                e.preventDefault();
                var target = $(targetId);
                
                // ลบคลาส active ออกจากทุกเมนู
                $('#nav li').removeClass('active');
                
                // เพิ่มคลาส active ให้เมนูที่ถูกคลิก
                $(this).parent().addClass('active');
                
                // ทำ Smooth Scroll
                $('html, body').animate({
                    // ปรับให้เลื่อนไปถึงด้านบนของส่วนนั้นๆ โดยหักลบความสูงของแถบนำทาง (nav-height)
                    scrollTop: target.offset().top - 70 
                }, 800);
            }
        });

        // 3. Active Class Toggle for Home when scrolling to the top
        $(window).on('scroll', function() {
            var scrollPosition = $(window).scrollTop();
            var navHeight = 70; // ต้องตรงกับค่า --nav-height ใน main.css

            // ตำแหน่งของ Resume Section (ส่วนที่ต้องการให้ Resume เป็น Active)
            var resumeTop = $('#resume-section').offset().top - navHeight;
            
            if (scrollPosition < resumeTop) {
                // ถ้าอยู่เหนือส่วน Resume (คือส่วน Home/Header)
                $('#nav li').removeClass('active');
                $('#nav-home').addClass('active');
            } else {
                // ถ้าเลื่อนลงมาถึงส่วน Resume
                $('#nav li').removeClass('active');
                $('#nav-resume').addClass('active');
            }
        });
    }
    
})(jQuery);