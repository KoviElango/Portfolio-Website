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
        const message = {
            message: [
                'Making Mobile Apps;', 
                'Robotics and Autonomous Vehicles;', 
                'Astronomy and Anime;', 
                'Designing;',
                'AI and Machine Learning;',
                'கொத்து பரோட்டா;'
            ],
            counterS: 0,
            counterL: 0,
            deleteS: false,

            init: function() {
                this.cacheElem();
                this.type();
            },

            cacheElem: function() {
                this.element = textElement;
            },

            type: function() {
                const currentText = this.message[this.counterS].substring(0, this.counterL);
                this.element.textContent = currentText;

                if (!this.deleteS && this.counterL < this.message[this.counterS].length) {
                    this.counterL++;
                    setTimeout(() => this.type(), 100);
                } else if (!this.deleteS && this.counterL === this.message[this.counterS].length) {
                    setTimeout(() => {
                        this.deleteS = true;
                        this.type();
                    }, 1000);
                } else if (this.deleteS && this.counterL > 0) {
                    this.counterL--;
                    setTimeout(() => this.type(), 50);
                } else if (this.deleteS && this.counterL === 0) {
                    this.deleteS = false;
                    this.counterS = (this.counterS + 1) % this.message.length;
                    setTimeout(() => this.type(), 200);
                }
            }
        };

        message.init();
    }

    // Timeline item hover effects
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.querySelector('h3').style.color = '#e3e3e3';
            item.querySelector('h4').style.color = '#e3e3e3';
            item.querySelector('span').style.color = '#ffa500';
        });

        item.addEventListener('mouseleave', () => {
            item.querySelector('h3').style.color = '';
            item.querySelector('h4').style.color = '';
            item.querySelector('span').style.color = '';
        });
    });

    // Function to toggle between light and dark mode
    function toggleTheme() {
        const body = document.body;
        const button = document.getElementById('theme-toggle-button');

        // Toggle light mode class
        body.classList.toggle('light-mode');

        // Update button text based on current theme
        if (body.classList.contains('light-mode')) {
            button.textContent = '🌙 Dark Mode';
        } else {
            button.textContent = '☀️ Light Mode';
        }

        // Save the current theme in local storage
        localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
    }

    // Load the saved theme on page load
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const button = document.getElementById('theme-toggle-button');

    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        button.textContent = '🌙 Dark Mode';
    } else {
        // Default to dark mode
        button.textContent = '☀️ Light Mode';
    }

    // Add event listener to the toggle button
    button.addEventListener('click', toggleTheme);

    // Smooth scroll to projects section
    const exploreWorkLink = document.querySelector('a[href="#home__projects"]');
    if (exploreWorkLink) {
        exploreWorkLink.addEventListener('click', function(e) {
            e.preventDefault();
            const projectsSection = document.querySelector('.home__projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Book a meeting button functionality
    const bookMeetingButton = document.getElementById('book-meeting-button');
    if (bookMeetingButton) {
        bookMeetingButton.addEventListener('click', function() {
            window.open('https://calendly.com/kovendhanelango/15min', '_blank');
        });
    }
});
