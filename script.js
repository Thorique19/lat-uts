// Wait until DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Remove loading screen after 2 seconds
    setTimeout(function() {
        document.getElementById('loading-screen').style.opacity = '0';
        document.getElementById('loading-screen').style.visibility = 'hidden';
    }, 2000);

    // Initialize particles.js
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#0ff'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#0ff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    
        const mobileLinks = document.querySelectorAll('.mobile-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault(); // mencegah perilaku default anchor
        
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
        
                // Tutup menu dulu
                mobileMenu.classList.add('translate-x-full');
        
                // Scroll ke section setelah animasi selesai (delay match transition 300ms)
                setTimeout(() => {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }, 200);
            });
        });
        
    
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    
        // Scroll to top button
        const scrollTopBtn = document.getElementById('scrollToTop');
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('active');
            } else {
                scrollTopBtn.classList.remove('active');
            }
        });
        
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    
        // Initialize skill bars animation
        const skillItems = document.querySelectorAll('.skill-item');
        
        skillItems.forEach(item => {
            const progress = item.querySelector('.skill-progress');
            const percentage = item.querySelector('.skill-percentage').textContent;
            progress.style.setProperty('--width', percentage);
        });
    
        // Initialize circular progress animation
        const circularProgressBars = document.querySelectorAll('.circular-progress');
        
        circularProgressBars.forEach(progressBar => {
            const value = progressBar.getAttribute('data-value');
            const outer = progressBar.querySelector('.outer');
            
            outer.style.background = `conic-gradient(var(--color-primary) ${value * 3.6}deg, rgba(0, 0, 0, 0.1) 0deg)`;
        });
    
        // Project filtering
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectItems = document.querySelectorAll('.project-item');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                projectItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 100);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    
        // Project load more button (for demonstration)
        const loadMoreBtn = document.querySelector('.btn-load-more');
        
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                // For demonstration purposes, we'll just show a notification
                // In a real project, you would load more projects via AJAX
                this.textContent = 'No More Projects';
                setTimeout(() => {
                    this.textContent = 'Load More Projects';
                }, 2000);
            });
        }
    
        // Form submission (prevent default)
        const contactForm = document.querySelector('.contact-form form');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Here you would usually send the form data to a server
                // For demonstration, we'll just clear the form
                const inputs = this.querySelectorAll('input, textarea');
                inputs.forEach(input => input.value = '');
                
                // Show a success message
                alert('Message sent successfully!');
            });
        }
    
        // Intersection Observer for scroll animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
    
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
    
        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    
        // Add animation classes
        document.querySelectorAll('.section-header').forEach(header => {
            header.classList.add('fade-in');
        });
    
        // Typewriter effect for hero section (optional)
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            
            type();
        }
    
        // Optionally uncomment to add typewriter effect to a specific element
        /*
        const typewriterElement = document.querySelector('.hero-content p');
        if (typewriterElement) {
            const originalText = typewriterElement.textContent;
            typeWriter(typewriterElement, originalText, 50);
        }
        */
    
        // Add hover effect to nav links
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('mouseover', function() {
                const letter = Array.from(this.textContent);
                let html = '';
                
                letter.forEach(l => {
                    html += `<span>${l}</span>`;
                });
                
                this.innerHTML = html;
            });
            
            link.addEventListener('mouseout', function() {
                this.innerHTML = this.textContent;
            });
        });
    
        // Add glitch effect on hover for hero title
        const glitchElement = document.querySelector('.glitch');
        
        if (glitchElement) {
            glitchElement.addEventListener('mouseover', function() {
                this.classList.add('hover');
            });
            
            glitchElement.addEventListener('mouseout', function() {
                this.classList.remove('hover');
            });
        }
    
        // Custom cursor (optional)
        /*
        const cursor = document.createElement('div');
        cursor.classList.add('cursor');
        document.body.appendChild(cursor);
        
        document.addEventListener('mousemove', e => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        */
    
        // Preload images for better performance
        function preloadImages() {
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                const src = img.getAttribute('src');
                if (src) {
                    const newImg = new Image();
                    newImg.src = src;
                }
            });
        }
        
        preloadImages();
    });