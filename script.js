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

// Add more animations here

// Glow effect for text
document.querySelectorAll('.glow-text').forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
    });
    element.addEventListener('mouseout', () => {
        element.style.textShadow = 'none';
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
                char.style.textShadow = '0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00';
            });
            char.addEventListener('mouseout', () => {
                char.style.textShadow = 'none';
            });
        });
    }

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Hero title animation
    gsap.to(".hero__title", {
        x: "10vw",
        scrollTrigger: {
            trigger: ".hero__title",
            start: "top center",
            end: "bottom center",
            scrub: true
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
                end: "top center",
                scrub: true
            }
        });
    });

    // Timeline item animations
    gsap.utils.toArray('.timeline-item').forEach(item => {
        gsap.from(item, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleActions: "play none none reverse"
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

    // Scroll down arrow animation
    const scrollArrow = document.querySelector('.arrow');
    if (scrollArrow) {
        scrollArrow.addEventListener('click', () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
});