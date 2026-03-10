document.addEventListener('DOMContentLoaded', function() {
    // Language translations with SEO-optimized content
    const translations = {
        en: {
            heroHeadline: 'KungfuClaw Empowers Secure AI Agents',
            heroDescription: 'KungfuClaw is a security and infrastructure platform built for AI agents with privacy-first architecture.',
            heroCta: 'Get Started Now',
            featuresTitle: 'Core Features',
            feature4Title: 'Privacy-First Architecture',
            feature4Description: 'Built with privacy at its core, protecting your data throughout its lifecycle.',
            architectureTitle: 'Architecture',
            architectureDescription: 'Our secure, modular architecture provides robust protection for AI agents.',
            aboutTitle: 'About Us',
            aboutDescription: 'KungfuClaw is dedicated to providing robust security and infrastructure solutions for AI agents.',
            contactTitle: 'Contact Us',
            contactLabelName: 'Name:',
            contactLabelEmail: 'Email:',
            contactLabelMessage: 'Message:',
            contactSubmit: 'Send Message',
            footerCopyright: '© 2026 KungfuClaw. All rights reserved.',
            languageToggle: 'Chinese',
            canonicalUrl: 'https://kungfuclaw.ai/'
        },
        zh: {
            heroHeadline: 'KungfuClaw 助力安全的 AI 代理',
            heroDescription: 'KungfuClaw 是一个专为 AI 代理设计的安全和基础设施平台，采用隐私优先架构。',
            heroCta: '立即开始',
            featuresTitle: '核心功能',
            feature4Title: '隐私优先架构',
            feature4Description: '以隐私为中心构建，保护您的数据安全。',
            architectureTitle: '架构',
            architectureDescription: '我们安全、模块化的架构为 AI 代理提供强大保护。',
            aboutTitle: '关于我们',
            aboutDescription: 'KungfuClaw 致力于为 AI 代理提供强大的安全和基础设施解决方案。',
            contactTitle: '联系我们',
            contactLabelName: '姓名:',
            contactLabelEmail: '邮箱:',
            contactLabelMessage: '消息:',
            contactSubmit: '发送消息',
            footerCopyright: '© 2026 KungfuClaw. 保留所有权利。',
            languageToggle: 'English',
            canonicalUrl: 'https://kungfuclaw.ai/zh'
        }
    };

    // Determine initial language based on browser preference and URL
    let currentLanguage = localStorage.getItem('language');
 
    // If no stored language, determine from URL path first, then browser preference
    if (!currentLanguage) {
        const pathLanguage = window.location.pathname === '/zh' ? 'zh' : 'en';
        currentLanguage = pathLanguage;
    }
    
    // Fallback to browser preference if neither URL nor localStorage specifies
    if (currentLanguage === 'en' && navigator.language.startsWith('zh')) {
        currentLanguage = 'zh';
    }
    // Update canonical URL based on language
    function updateCanonicalUrl() {
        const canonicalLink = document.querySelector('link[rel="canonical"]');
        if (canonicalLink && translations[currentLanguage]) {
            canonicalLink.setAttribute('href', translations[currentLanguage].canonicalUrl);
        }
    }

    function updateLanguage() {
        const lang = translations[currentLanguage];
        document.documentElement.lang = currentLanguage;
        
        // Update meta description based on language
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', lang.heroDescription);
        }
        
        // Update Open Graph title and description
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', `KungfuClaw - ${lang.featuresTitle} for Secure AI Agents`);
        }
        if (ogDescription) {
            ogDescription.setAttribute('content', lang.heroDescription);
        }
        
        // Update Twitter card content
        const twitterTitle = document.querySelector('meta[name="twitter:title"]');
        const twitterDescription = document.querySelector('meta[name="twitter:description"]');
        if (twitterTitle) {
            twitterTitle.setAttribute('content', `KungfuClaw - ${lang.featuresTitle} for Secure AI Agents`);
        }
        if (twitterDescription) {
            twitterDescription.setAttribute('content', lang.heroDescription);
        }
        
        // Update page content
        document.getElementById('hero-headline').textContent = lang.heroHeadline;
        document.getElementById('hero-description').textContent = lang.heroDescription;
        document.getElementById('hero-cta').textContent = lang.heroCta;
        document.getElementById('features-title').textContent = lang.featuresTitle;
        document.getElementById('feature-4-title').textContent = lang.feature4Title;
        document.getElementById('feature-4-description').textContent = lang.feature4Description;
        document.getElementById('architecture-title').textContent = lang.architectureTitle;
        document.getElementById('architecture-description').textContent = lang.architectureDescription;
        document.getElementById('about-title').textContent = lang.aboutTitle;
        document.getElementById('about-description').textContent = lang.aboutDescription;
        document.getElementById('contact-title').textContent = lang.contactTitle;
        document.getElementById('contact-label-name').textContent = lang.contactLabelName;
        document.getElementById('contact-label-email').textContent = lang.contactLabelEmail;
        document.getElementById('contact-label-message').textContent = lang.contactLabelMessage;
        document.getElementById('contact-submit').textContent = lang.contactSubmit;
        document.getElementById('footer-copyright').textContent = lang.footerCopyright;
        
        // Update navigation menu items
        const navItems = {
            en: ['Features', 'Architecture', 'About', 'Contact', '中文'],
            zh: ['功能', '架构', '关于我们', '联系我们', 'English']
        };
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach((link, index) => {
            link.textContent = navItems[currentLanguage][index];
        });
        
        updateCanonicalUrl();
    }

    function toggleLanguage() {
        currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
        localStorage.setItem('language', currentLanguage);
        updateLanguage();
        
        // Update URL without reloading for better UX
        window.history.replaceState(null, '', currentLanguage === 'zh' ? '/zh' : '/');
    }

    document.getElementById('language-toggle').addEventListener('click', toggleLanguage);

    updateLanguage();

    // Handle language from URL parameter or path
    const urlParams = new URLSearchParams(window.location.search);
    const urlLanguage = urlParams.get('lang');
    if (urlLanguage && translations[urlLanguage]) {
        currentLanguage = urlLanguage;
        localStorage.setItem('language', currentLanguage);
        updateLanguage();
    }

    // Smooth scrolling with ARIA focus management
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Set focus to the section for accessibility
                setTimeout(() => {
                    targetElement.setAttribute('tabindex', '-1');
                    targetElement.focus();
                    targetElement.removeAttribute('tabindex');
                }, 500);
            }
        });
    });

    function toggleMenu() {
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        
        navMenu.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', !isExpanded);
        hamburger.setAttribute('aria-controls', navMenu.id || 'nav-menu');
        
        // Add ID to nav menu if it doesn't have one
        if (!navMenu.id) {
            navMenu.id = 'nav-menu';
        }
    }

    document.querySelector('.hamburger').addEventListener('click', toggleMenu);
    
    // Form validation with accessibility
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        const submitButton = document.getElementById('contact-submit');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        function validateForm() {
            const isValid = nameInput.value.trim() && 
                          emailInput.value.trim() && 
                          messageInput.value.trim();
            submitButton.disabled = !isValid;
            return isValid;
        }
        
        // Add input event listeners
        [nameInput, emailInput, messageInput].forEach(input => {
            input.addEventListener('input', validateForm);
            input.addEventListener('change', validateForm);
        });
        
        // Handle form submission
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm()) {
                // Simulate form submission
                const originalText = submitButton.textContent;
                submitButton.textContent = 'Sending...';
                submitButton.disabled = true;
                
                setTimeout(() => {
                    alert('Thank you for your message! We will get back to you soon.');
                    contactForm.reset();
                    submitButton.textContent = originalText;
                    submitButton.disabled = true;
                }, 1500);
            }
        });
    }
});
