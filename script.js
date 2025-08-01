document.addEventListener('DOMContentLoaded', function() {
    // Sample project data
    const projectsData = [
        {
            image_link: 'data:image/jpeg;base64,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',
            project_name: 'E-Commerce Platform',
            description: 'A full-featured online store with payment integration and inventory management.',
            tags: ['React', 'Node.js', 'MongoDB'],
            link: '#',
            is_liked: true,
            date: '2023-10-15'
        },
        {
            image_link: 'https://via.placeholder.com/600x400/4ECDC4/FFFFFF?text=Task+App',
            project_name: 'Task Management App',
            description: 'Productivity application with team collaboration features and real-time updates.',
            tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
            link: '#',
            is_liked: true,
            date: '2023-09-22'
        },
        {
            image_link: 'https://via.placeholder.com/600x400/45B7D1/FFFFFF?text=Fitness+Tracker',
            project_name: 'Health & Fitness Tracker',
            description: 'Mobile application for tracking workouts, nutrition, and health metrics.',
            tags: ['React Native', 'GraphQL', 'TypeScript'],
            link: '#',
            is_liked: true,
            date: '2023-08-30'
        },
        {
            image_link: 'https://via.placeholder.com/600x400/FF9E00/FFFFFF?text=Recipe+App',
            project_name: 'Recipe Finder',
            description: 'Discover recipes based on ingredients you have at home.',
            tags: ['JavaScript', 'API', 'CSS'],
            link: '#',
            is_liked: false,
            date: '2023-07-15'
        },
        {
            image_link: 'https://via.placeholder.com/600x400/6A4C93/FFFFFF?text=Portfolio',
            project_name: 'Portfolio Template',
            description: 'A customizable portfolio template for designers and developers.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            link: '#',
            is_liked: false,
            date: '2023-06-10'
        },
        {
            image_link: 'https://via.placeholder.com/600x400/1982C4/FFFFFF?text=Weather',
            project_name: 'Weather Dashboard',
            description: 'Real-time weather information with 5-day forecast.',
            tags: ['React', 'API', 'Chart.js'],
            link: '#',
            is_liked: false,
            date: '2023-05-05'
        },
        {
            image_link: 'https://via.placeholder.com/600x400/8AC926/FFFFFF?text=Blog',
            project_name: 'Tech Blog',
            description: 'A blog platform with markdown support and syntax highlighting.',
            tags: ['Node.js', 'Express', 'MongoDB'],
            link: '#',
            is_liked: false,
            date: '2023-04-18'
        },
        {
            image_link: 'https://via.placeholder.com/600x400/6A4C93/FFFFFF?text=Chat+App',
            project_name: 'Real-time Chat',
            description: 'Instant messaging application with rooms and emoji support.',
            tags: ['Socket.io', 'React', 'Node.js'],
            link: '#',
            is_liked: false,
            date: '2023-03-12'
        },
        {
            image_link: 'https://via.placeholder.com/600x400/1982C4/FFFFFF?text=Dashboard',
            project_name: 'Admin Dashboard',
            description: 'Analytics dashboard with interactive charts and data visualization.',
            tags: ['Vue.js', 'D3.js', 'Firebase'],
            link: '#',
            is_liked: false,
            date: '2023-02-28'
        },
        {
            image_link: 'https://via.placeholder.com/600x400/FF595E/FFFFFF?text=Game',
            project_name: 'Memory Game',
            description: 'Classic card matching game with score tracking.',
            tags: ['JavaScript', 'CSS', 'HTML5'],
            link: '#',
            is_liked: false,
            date: '2023-01-15'
        },
        {
            image_link: 'https://via.placeholder.com/600x400/FFCA3A/FFFFFF?text=Social',
            project_name: 'Social Media App',
            description: 'A minimal social network with posts and comments.',
            tags: ['React', 'Redux', 'Node.js'],
            link: '#',
            is_liked: false,
            date: '2022-12-05'
        },
        {
            image_link: 'https://via.placeholder.com/600x400/8AC926/FFFFFF?text=Learning',
            project_name: 'E-Learning Platform',
            description: 'Online courses with video lessons and quizzes.',
            tags: ['Laravel', 'Vue.js', 'MySQL'],
            link: '#',
            is_liked: false,
            date: '2022-11-20'
        }
    ];

    // Theme Toggle
    const toggle = document.getElementById('toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme preference or use system preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
        document.body.setAttribute('data-theme', 'dark');
        toggle.checked = true;
    }
    
    // Theme toggle event listener
    toggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                nav.style.display = 'none';
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update copyright year
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Project Management
    const projectsGrid = document.querySelector('.projects-grid');
    const viewAllBtn = document.querySelector('.view-all');
    const projectsSection = document.querySelector('.projects');
    let currentPage = 1;
    let itemsPerPage = 6;
    let filteredProjects = [...projectsData];
    
    // Create project controls
    function createProjectControls() {
        const controlsHTML = `
            <div class="project-controls">
                <div class="search-box">
                    <input type="text" placeholder="Search projects..." id="project-search">
                    <i class="fas fa-search"></i>
                </div>
                <div class="project-filters">
                    <select id="items-per-page">
                        <option value="6">Show 6</option>
                        <option value="12">Show 12</option>
                        <option value="18">Show 18</option>
                        <option value="0">Show All</option>
                    </select>
                    <button id="show-liked">Show Favorites</button>
                </div>
            </div>
            <div class="pagination">
                <button id="prev-page" disabled><i class="fas fa-chevron-left"></i></button>
                <span id="page-info">Page 1 of ${Math.ceil(filteredProjects.length / itemsPerPage)}</span>
                <button id="next-page" ${filteredProjects.length <= itemsPerPage ? 'disabled' : ''}><i class="fas fa-chevron-right"></i></button>
            </div>
        `;
        
        projectsSection.insertAdjacentHTML('afterbegin', controlsHTML);
        
        // Add event listeners for controls
        document.getElementById('project-search').addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            filterProjects(searchTerm);
        });
        
        document.getElementById('items-per-page').addEventListener('change', function() {
            itemsPerPage = parseInt(this.value);
            currentPage = 1;
            renderProjects();
            updatePagination();
        });
        
        document.getElementById('show-liked').addEventListener('click', function() {
            this.classList.toggle('active');
            filterProjects(document.getElementById('project-search').value.toLowerCase());
        });
        
        document.getElementById('prev-page').addEventListener('click', function() {
            if (currentPage > 1) {
                currentPage--;
                renderProjects();
                updatePagination();
            }
        });
        
        document.getElementById('next-page').addEventListener('click', function() {
            const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                renderProjects();
                updatePagination();
            }
        });
    }
    
    // Filter projects based on search term and liked status
    function filterProjects(searchTerm = '') {
        const showLiked = document.getElementById('show-liked')?.classList.contains('active');
        
        filteredProjects = projectsData.filter(project => {
            const matchesSearch = 
                project.project_name.toLowerCase().includes(searchTerm) ||
                project.description.toLowerCase().includes(searchTerm) ||
                project.tags.some(tag => tag.toLowerCase().includes(searchTerm));
            
            const matchesLiked = showLiked ? project.is_liked : true;
            
            return matchesSearch && matchesLiked;
        });
        
        currentPage = 1;
        renderProjects();
        updatePagination();
    }
    
    // Render projects based on current page and items per page
    function renderProjects() {
        projectsGrid.innerHTML = '';
        
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = itemsPerPage === 0 ? filteredProjects.length : startIndex + itemsPerPage;
        const projectsToShow = filteredProjects.slice(startIndex, endIndex);
        
        // Sort projects - liked first, then by date (newest first)
        projectsToShow.sort((a, b) => {
            if (a.is_liked && !b.is_liked) return -1;
            if (!a.is_liked && b.is_liked) return 1;
            return new Date(b.date) - new Date(a.date);
        });
        
        projectsToShow.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            
            const tagsHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');
            
            projectCard.innerHTML = `
                <div class="project-image" style="background-image: url('${project.image_link}')"></div>
                <div class="project-info">
                    <h3>${project.project_name}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">${tagsHTML}</div>
                    <a href="${project.link}" class="project-link">View Project <i class="fas fa-arrow-right"></i></a>
                </div>
                <div class="like-btn ${project.is_liked ? 'liked' : ''}">
                    <i class="${project.is_liked ? 'fas' : 'far'} fa-heart"></i>
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
        
        // Add event listeners to like buttons
        document.querySelectorAll('.like-btn').forEach((btn, index) => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const actualIndex = startIndex + index;
                projectsData[actualIndex].is_liked = !projectsData[actualIndex].is_liked;
                
                const icon = this.querySelector('i');
                if (icon.classList.contains('fas')) {
                    icon.classList.remove('fas');
                    icon.classList.add('far');
                    this.classList.remove('liked');
                } else {
                    icon.classList.remove('far');
                    icon.classList.add('fas');
                    this.classList.add('liked');
                    
                    // Create floating heart animation
                    const floatingHeart = document.createElement('div');
                    floatingHeart.className = 'floating-heart';
                    floatingHeart.innerHTML = '<i class="fas fa-heart"></i>';
                    this.appendChild(floatingHeart);
                    
                    setTimeout(() => {
                        floatingHeart.remove();
                    }, 1000);
                }
                
                // Update localStorage
                localStorage.setItem('projectsData', JSON.stringify(projectsData));
            });
        });
    }
    
    // Update pagination controls
    function updatePagination() {
        const totalPages = itemsPerPage === 0 ? 1 : Math.ceil(filteredProjects.length / itemsPerPage);
        const pageInfo = document.getElementById('page-info');
        const prevBtn = document.getElementById('prev-page');
        const nextBtn = document.getElementById('next-page');
        
        if (pageInfo) pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
        if (prevBtn) prevBtn.disabled = currentPage === 1;
        if (nextBtn) nextBtn.disabled = currentPage === totalPages || totalPages === 0;
    }
    
    // Check for saved projects data in localStorage
    const savedProjects = localStorage.getItem('projectsData');
    if (savedProjects) {
        const parsedProjects = JSON.parse(savedProjects);
        // Merge with our default data to ensure all projects are included
        projectsData.forEach((project, index) => {
            if (parsedProjects[index]) {
                project.is_liked = parsedProjects[index].is_liked;
            }
        });
    }
    
    // Initialize projects section
    createProjectControls();
    filterProjects();
    
    // Add floating animation to decorative shapes in hero section
    const shapes = document.querySelectorAll('.shape-1, .shape-2, .shape-3');
    
    shapes.forEach((shape, index) => {
        // Random initial position and animation
        const randomX = Math.random() * 20 - 10;
        const randomY = Math.random() * 20 - 10;
        const duration = 5 + Math.random() * 5;
        const delay = Math.random() * 5;
        
        shape.style.transform = `translate(${randomX}px, ${randomY}px)`;
        shape.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(this);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
});

// Add floating animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0) rotate(0deg);
        }
        50% {
            transform: translateY(-20px) rotate(5deg);
        }
        100% {
            transform: translateY(0) rotate(0deg);
        }
    }
    
    .project-controls {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        gap: 20px;
    }
    
    .search-box {
        position: relative;
        flex: 1;
        min-width: 250px;
    }
    
    .search-box input {
        width: 100%;
        padding: 10px 15px 10px 40px;
        border: 1px solid #ddd;
        border-radius: 50px;
        font-family: 'Inter', sans-serif;
        background-color: var(--card-bg-light);
        color: var(--text-dark);
        transition: var(--transition);
    }
    
    .search-box input:focus {
        outline: none;
        border-color: var(--primary-color);
        box-shadow: 0 0 0 2px rgba(67, 97, 238, 0.2);
    }
    
    .search-box i {
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--text-dark);
        opacity: 0.7;
    }
    
    .project-filters {
        display: flex;
        gap: 15px;
        align-items: center;
    }
    
    .project-filters select {
        padding: 10px 15px;
        border: 1px solid #ddd;
        border-radius: 50px;
        font-family: 'Inter', sans-serif;
        background-color: var(--card-bg-light);
        color: var(--text-dark);
        transition: var(--transition);
    }
    
    .project-filters select:focus {
        outline: none;
        border-color: var(--primary-color);
    }
    
    .project-filters button {
        padding: 10px 15px;
        border-radius: 50px;
        font-weight: 600;
        transition: var(--transition);
        cursor: pointer;
        border: none;
        background-color: var(--card-bg-light);
        color: var(--text-dark);
        border: 1px solid #ddd;
    }
    
    .project-filters button.active {
        background-color: var(--primary-color);
        color: white;
        border-color: var(--primary-color);
    }
    
    .project-filters button:hover {
        transform: translateY(-2px);
    }
    
    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin-top: 30px;
    }
    
    .pagination button {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: var(--primary-color);
        color: white;
        cursor: pointer;
        transition: var(--transition);
    }
    
    .pagination button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    
    .pagination button:hover:not(:disabled) {
        background-color: var(--secondary-color);
        transform: translateY(-2px);
    }
    
    .like-btn {
        position: absolute;
        top: 15px;
        right: 15px;
        width: 30px;
        height: 30px;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 2;
        transition: all 0.3s ease;
    }
    
    .like-btn:hover {
        transform: scale(1.1);
    }
    
    .like-btn i {
        color: #ff4757;
    }
    
    .like-btn.liked i {
        color: #ff4757;
    }
    
    .floating-heart {
        position: absolute;
        top: 15px;
        right: 15px;
        animation: float-up 1s ease-out forwards;
    }
    
    .floating-heart i {
        color: #ff4757;
    }
    
    @keyframes float-up {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-50px) scale(1.5);
            opacity: 0;
        }
    }
    
    .project-image {
        background-size: cover;
        background-position: center;
    }
`;
document.head.appendChild(style);