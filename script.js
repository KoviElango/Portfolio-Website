gsap.registerPlugin(ScrollTrigger);

gsap.to(".big-text", {
    x: "10vw",
    scrollTrigger: {
        trigger: ".big-text",
        start: "top center",
        end: "bottom center",
        scrub: true
    }
});


document.querySelectorAll('.glow-text').forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.textShadow = '0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #ffffff';
        element.style.color = '#ffffff';
        element.style.transition = 'all 0.3s ease';
    });
    element.addEventListener('mouseout', () => {
        element.style.textShadow = 'none';
        element.style.color = '';
        element.style.transition = 'all 0.3s ease';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // GSAP ScrollTrigger setup
    gsap.registerPlugin(ScrollTrigger);

    // Character-by-character glow effect for the name
    const nameElement = document.querySelector('.wrapper h1');
    if (nameElement) {
        const nameSplit = nameElement.textContent.split('').map(char => 
            `<span class="glow-char">${char}</span>`
        ).join('');
        nameElement.innerHTML = nameSplit;

        document.querySelectorAll('.glow-char').forEach(char => {
            char.addEventListener('mouseover', () => {
                char.style.textShadow = '0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #ffffff';
            });
            char.addEventListener('mouseout', () => {
                char.style.textShadow = 'none';
            });
        });
    }

    // Hero title animation
    gsap.to(".hero__title-left, .hero__title-right", {
        x: "-100vw",
        scrollTrigger: {
            trigger: ".hero__title",
            start: "top 10%",
            end: "bottom top",
            scrub: 1,
        }
    });

    gsap.to(".hero__title-center", {
        x: "100vw",
        scrollTrigger: {
            trigger: ".hero__title",
            start: "top 20%",
            end: "bottom top",
            scrub: 1,
        }
    });
    

    // Project item animations
    document.querySelectorAll('.project-item').forEach((item, index) => {
        gsap.from(item, {
            x: index % 2 === 0 ? "-100%" : "100%",
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "top 80%", // Changed to complete animation when item reaches top 20% of viewport
                scrub: true
            }
        });
    });

    // Typing effect for "I love..." text
    const textElement = document.querySelector('.text');
    if (textElement) {
        const text = "coding, designing, and building cool stuff!";
        let index = 0;

        function typeText() {
            if (index < text.length) {
                textElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeText, 100);
            }
        }

        typeText();
    }
});