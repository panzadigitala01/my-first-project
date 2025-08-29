{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red13\green15\blue19;\red255\green255\blue255;}
{\*\expandedcolortbl;;\cssrgb\c5490\c7451\c9412;\cssrgb\c100000\c100000\c100000;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // Typing animation\
        const texts = ['Horatiu', 'a Developer', 'a Designer', 'Creative'];\
        let textIndex = 0;\
        let charIndex = 0;\
        let isDeleting = false;\
        const typingElement = document.getElementById('typingText');\
\
        function typeText() \{\
            const currentText = texts[textIndex];\
            \
            if (isDeleting) \{\
                typingElement.textContent = currentText.substring(0, charIndex - 1);\
                charIndex--;\
            \} else \{\
                typingElement.textContent = currentText.substring(0, charIndex + 1);\
                charIndex++;\
            \}\
\
            if (!isDeleting && charIndex === currentText.length) \{\
                setTimeout(() => isDeleting = true, 2000);\
            \} else if (isDeleting && charIndex === 0) \{\
                isDeleting = false;\
                textIndex = (textIndex + 1) % texts.length;\
            \}\
\
            setTimeout(typeText, isDeleting ? 50 : 100);\
        \}\
\
        typeText();\
\
        // Smooth scrolling for navigation links\
        document.querySelectorAll('a[href^="#"]').forEach(anchor => \{\
            anchor.addEventListener('click', function (e) \{\
                e.preventDefault();\
                const target = document.querySelector(this.getAttribute('href'));\
                if (target) \{\
                    target.scrollIntoView(\{\
                        behavior: 'smooth',\
                        block: 'start'\
                    \});\
                \}\
            \});\
        \});\
\
        // Contact form submission\
        document.getElementById('contactForm').addEventListener('submit', function(e) \{\
            e.preventDefault();\
            \
            // Simulate form submission\
            const button = this.querySelector('button[type="submit"]');\
            const originalText = button.textContent;\
            \
            button.textContent = 'Sending...';\
            button.disabled = true;\
            \
            setTimeout(() => \{\
                button.textContent = 'Message Sent!';\
                setTimeout(() => \{\
                    button.textContent = originalText;\
                    button.disabled = false;\
                    this.reset();\
                \}, 2000);\
            \}, 1500);\
        \});\
\
        // Mobile menu toggle\
        document.getElementById('menuBtn').addEventListener('click', function() \{\
            // Mobile menu functionality would go here\
            console.log('Mobile menu clicked');\
        \});\
\
        // Animate skill bars on scroll\
        const observerOptions = \{\
            threshold: 0.5,\
            rootMargin: '0px 0px -100px 0px'\
        \};\
\
        const observer = new IntersectionObserver((entries) => \{\
            entries.forEach(entry => \{\
                if (entry.isIntersecting) \{\
                    const skillBars = entry.target.querySelectorAll('.skill-bar');\
                    skillBars.forEach(bar => \{\
                        const width = bar.style.width;\
                        bar.style.width = '0%';\
                        setTimeout(() => \{\
                            bar.style.width = width;\
                        \}, 200);\
                    \});\
                \}\
            \});\
        \}, observerOptions);\
\
        const skillsSection = document.querySelector('#about');\
        if (skillsSection) \{\
            observer.observe(skillsSection);\
        \}\
\
        // Add scroll effect to navigation\
        window.addEventListener('scroll', () => \{\
            const nav = document.querySelector('nav');\
            if (window.scrollY > 100) \{\
                nav.classList.add('shadow-lg');\
            \} else \{\
                nav.classList.remove('shadow-lg');\
            \}\
        \});}