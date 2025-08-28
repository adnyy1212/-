/**
 * 个人作品集网站的主要JavaScript文件
 * 包含汉堡菜单交互、平滑滚动和section显示动画
 */

// 等待DOM完全加载后执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取汉堡菜单和移动导航元素
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');
    const navLinks = document.querySelectorAll('.desktop-nav a, .mobile-nav a');
    const sections = document.querySelectorAll('section');

    // 汉堡菜单点击事件
    hamburgerMenu.addEventListener('click', function() {
        // 切换汉堡菜单和移动导航的活动状态
        this.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });

    // 为所有导航链接添加平滑滚动效果
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 阻止默认的锚点跳转行为
            e.preventDefault();
            
            // 获取目标section的ID
            const targetId = this.getAttribute('href');
            
            // 滚动到目标section
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
            
            // 如果是在移动视图中，点击链接后关闭菜单
            if (mobileNav.classList.contains('active')) {
                hamburgerMenu.classList.remove('active');
                mobileNav.classList.remove('active');
            }
        });
    });

    // 监听滚动事件，实现section的显示动画
    function checkSections() {
        const triggerBottom = window.innerHeight * 0.8;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            
            if (sectionTop < triggerBottom) {
                section.classList.add('show');
            }
        });
    }

    // 页面加载时检查一次sections
    checkSections();
    
    // 滚动时检查sections
    window.addEventListener('scroll', checkSections);
});