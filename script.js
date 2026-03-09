document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        en: {
            heroHeadline: 'Secure AI Agents with KungfuClaw',
            heroDescription: 'KungfuClaw is a security and infrastructure platform for AI agents.',
            heroCta: 'Get Started',
            featuresTitle: 'Features',
            feature4Title: 'Privacy-First Architecture',
            feature4Description: 'Built with privacy in mind, protecting your data.',
            architectureTitle: 'Architecture',
            architectureDescription: 'Placeholder for architecture diagram.',
            aboutTitle: 'About Us',
            aboutDescription: 'KungfuClaw is dedicated to providing robust security and infrastructure solutions for AI agents.',
            contactTitle: 'Contact Us',
            contactLabelName: 'Name:',
            contactLabelEmail: 'Email:',
            contactLabelMessage: 'Message:',
            contactSubmit: 'Send Message',
            footerCopyright: '© 2026 KungfuClaw. All rights reserved.',
            languageToggle: 'English'
        },
        zh: {
            heroHeadline: 'KungfuClaw 助力安全的 AI 代理',
            heroDescription: 'KungfuClaw 是一个专为 AI 代理设计的安全和基础设施平台。',
            heroCta: '立即开始',
            featuresTitle: '功能',
            feature4Title: '隐私优先架构',
            feature4Description: '以隐私为中心构建，保护您的数据。',
            architectureTitle: '架构',
            architectureDescription: '架构图占位符。',
            aboutTitle: '关于我们',
            aboutDescription: 'KungfuClaw 致力于为 AI 代理提供强大的安全和基础设施解决方案。',
            contactTitle: '联系我们',
            contactLabelName: '姓名:',
            contactLabelEmail: '邮箱:',
            contactLabelMessage: '消息:',
            contactSubmit: '发送消息',
            footerCopyright: '© 2026 KungfuClaw. 保留所有权利。',
            languageToggle: '中文',
            navFeatures: '功能',
            navArchitecture: '架构',
            navAbout: '关于我们',
            navContact: '联系我们'
        }
    };

    let currentLanguage = localStorage.getItem('language') || (navigator.language.startsWith('zh') ? 'zh' : 'en');

    function updateLanguage() {
        const lang = translations[currentLanguage];
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
        document.querySelectorAll('.nav-link').forEach((link, index) => {
            const navItems = {
                en: ['Features', 'Architecture', 'About', 'Contact'],
                zh: ['功能', '架构', '关于我们', '联系我们']
            };
            link.textContent = navItems[currentLanguage][index];
        });
        document.getElementById('language-toggle').textContent = currentLanguage === 'en' ? '中文' : 'English';
    }

    function toggleLanguage() {
        currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
        localStorage.setItem('language', currentLanguage);
        updateLanguage();
    }

    document.getElementById('language-toggle').addEventListener('click', toggleLanguage);

    updateLanguage();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    function toggleMenu() {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }

    document.querySelector('.hamburger').addEventListener('click', toggleMenu);
});
