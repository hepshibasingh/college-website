document.addEventListener
("DOMContentLoaded", function() { function createSliderAnimation(sliderId) { const slider = document.getElementById(sliderId); let scrollAmount = 0;

    function scrollSlider() {
            if (scrollAmount >= slider.scrollWidth / 2) {
                scrollAmount = 0;
                slider.style.transform = "translateX(0)";
            } else {
                scrollAmount += 1;
                slider.style.transform = 'translateX(-${scrollAmount}px)';
            }
        }
        setInterval(scrollSlider, 30);
    }
    createSliderAnimation("college-slider")
    createSliderAnimation("courses-slider");
    createSliderAnimation("exams-slider");
    
    });
    function scrollLeft(id) {
        let container = document.getElementById(id);
        container.scrollLeft -= 200;
    }
    
    function scrollRight(id) {
        let container = document.getElementById(id);
        container.scrollLeft += 200;
    }
    document.addEventListener("DOMContentLoaded", function () {
        const viewMoreBtns = document.querySelectorAll(".view-more-btn");
    
        viewMoreBtns.forEach(button => {
            button.addEventListener("click", function (event) {
                event.preventDefault(); // Prevent default link action
                const targetPage = button.getAttribute("href");
    
                button.style.transform = "scale(1.1)";
                button.style.boxShadow = "0px 8px 20px rgba(255, 85, 0, 0.7)";
    
                setTimeout(() => {
                    window.location.href = targetPage;
                }, 300); // Smooth effect before redirecting
            });
        });
    });