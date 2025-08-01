document.addEventListener('DOMContentLoaded', function() {
    // Sample project data with likes count and sort date
    let projectsData = [
        {
            id: 1,
            image_link: 'https://via.placeholder.com/600x400/FF6B6B/FFFFFF?text=E-Commerce',
            project_name: 'E-Commerce Platform',
            description: 'A full-featured online store with payment integration and inventory management.',
            tags: ['React', 'Node.js', 'MongoDB', 'E-commerce'],
            link: '#',
            likes: 15,
            is_liked: true,
            date: '2023-10-15',
            sort_date: '2023-10-15'
        },
        {
            id: 2,
            image_link: 'https://via.placeholder.com/600x400/4ECDC4/FFFFFF?text=Task+App',
            project_name: 'Task Management App',
            description: 'Productivity application with team collaboration features and real-time updates.',
            tags: ['Vue.js', 'Firebase', 'Tailwind CSS', 'Productivity'],
            link: '#',
            likes: 12,
            is_liked: true,
            date: '2023-09-22',
            sort_date: '2023-09-22'
        },
        {
            id: 3,
            image_link: 'https://via.placeholder.com/600x400/45B7D1/FFFFFF?text=Fitness+Tracker',
            project_name: 'Health & Fitness Tracker',
            description: 'Mobile application for tracking workouts, nutrition, and health metrics.',
            tags: ['React Native', 'GraphQL', 'TypeScript', 'Health'],
            link: '#',
            likes: 8,
            is_liked: true,
            date: '2023-08-30',
            sort_date: '2023-08-30'
        },
        {
            id: 4,
            image_link: 'https://via.placeholder.com/600x400/FF9E00/FFFFFF?text=Recipe+App',
            project_name: 'Recipe Finder',
            description: 'Discover recipes based on ingredients you have at home.',
            tags: ['JavaScript', 'API', 'CSS', 'Food'],
            link: '#',
            likes: 5,
            is_liked: false,
            date: '2023-07-15',
            sort_date: '2023-07-15'
        },
        {
            id: 5,
            image_link: 'https://via.placeholder.com/600x400/6A4C93/FFFFFF?text=Portfolio',
            project_name: 'Portfolio Template',
            description: 'A customizable portfolio template for designers and developers.',
            tags: ['HTML', 'CSS', 'JavaScript', 'Template'],
            link: '#',
            likes: 3,
            is_liked: false,
            date: '2023-06-10',
            sort_date: '2023-06-10'
        },
        {
            id: 6,
            image_link: 'https://via.placeholder.com/600x400/1982C4/FFFFFF?text=Weather',
            project_name: 'Weather Dashboard',
            description: 'Real-time weather information with 5-day forecast.',
            tags: ['React', 'API', 'Chart.js', 'Weather'],
            link: '#',
            likes: 7,
            is_liked: false,
            date: '2023-05-05',
            sort_date: '2023-05-05'
        },
        {
            id: 7,
            image_link: 'https://via.placeholder.com/600x400/8AC926/FFFFFF?text=Blog',
            project_name: 'Tech Blog',
            description: 'A blog platform with markdown support and syntax highlighting.',
            tags: ['Node.js', 'Express', 'MongoDB', 'Blogging'],
            link: '#',
            likes: 4,
            is_liked: false,
            date: '2023-04-18',
            sort_date: '2023-04-18'
        },
        {
            id: 8,
            image_link: 'https://via.placeholder.com/600x400/6A4C93/FFFFFF?text=Chat+App',
            project_name: 'Real-time Chat',
            description: 'Instant messaging application with rooms and emoji support.',
            tags: ['Socket.io', 'React', 'Node.js', 'Communication'],
            link: '#',
            likes: 9,
            is_liked: false,
            date: '2023-03-12',
            sort_date: '2023-03-12'
        },
        {
            id: 9,
            image_link: 'https://via.placeholder.com/600x400/1982C4/FFFFFF?text=Dashboard',
            project_name: 'Admin Dashboard',
            description: 'Analytics dashboard with interactive charts and data visualization.',
            tags: ['Vue.js', 'D3.js', 'Firebase', 'Analytics'],
            link: '#',
            likes: 6,
            is_liked: false,
            date: '2023-02-28',
            sort_date: '2023-02-28'
        },
        {
            id: 10,
            image_link: 'https://via.placeholder.com/600x400/FF595E/FFFFFF?text=Game',
            project_name: 'Memory Game',
            description: 'Classic card matching game with score tracking.',
            tags: ['JavaScript', 'CSS', 'HTML5', 'Game'],
            link: '#',
            likes: 2,
            is_liked: false,
            date: '2023-01-15',
            sort_date: '2023-01-15'
        },
        {
            id: 11,
            image_link: 'https://via.placeholder.com/600x400/FFCA3A/FFFFFF?text=Social',
            project_name: 'Social Media App',
            description: 'A minimal social network with posts and comments.',
            tags: ['React', 'Redux', 'Node.js', 'Social'],
            link: '#',
            likes: 11,
            is_liked: false,
            date: '2022-12-05',
            sort_date: '2022-12-05'
        },
        {
            id: 12,
            image_link: 'https://via.placeholder.com/600x400/8AC926/FFFFFF?text=Learning',
            project_name: 'E-Learning Platform',
            description: 'Online courses with video lessons and quizzes.',
            tags: ['Laravel', 'Vue.js', 'MySQL', 'Education'],
            link: '#',
            likes: 10,
            is_liked: false,
            date: '2022-11-20',
            sort_date: '2022-11-20'
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
        nav.classList.toggle('show');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                nav.classList.remove('show');
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
    const paginationContainer = document.querySelector('.pagination-container');
    let currentPage = 1;
    let itemsPerPage = 6;
    let filteredProjects = [...projectsData];
    let sortBy = 'default'; // 'default', 'likes', 'date'
    
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
                    <select id="sort-by">
                        <option value="default">Sort by Default</option>
                        <option value="likes">Sort by Likes</option>
                        <option value="date">Sort by Date</option>
                    </select>
                    <button id="show-liked">
                        <i class="fas fa-heart"></i> Favorites
                    </button>
                </div>
            </div>
        `;
        
        document.querySelector('.projects').insertAdjacentHTML('afterbegin', controlsHTML);
        
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
        
        document.getElementById('sort-by').addEventListener('change', function() {
            sortBy = this.value;
            sortProjects();
            renderProjects();
            updatePagination();
        });
        
        document.getElementById('show-liked').addEventListener('click', function() {
            this.classList.toggle('active');
            filterProjects(document.getElementById('project-search').value.toLowerCase());
        });
    }
    
    // Filter projects based on search term and liked status
    function filterProjects(searchTerm = '') {
        const showLiked = document.getElementById('show-liked')?.classList.contains('active');
        
        filteredProjects = projectsData.filter(project => {
            // SQL-like ILIKE search (partial match in name, description, or tags)
            const matchesSearch = 
                project.project_name.toLowerCase().includes(searchTerm) ||
                project.description.toLowerCase().includes(searchTerm) ||
                project.tags.some(tag => tag.toLowerCase().includes(searchTerm));
            
            const matchesLiked = showLiked ? project.is_liked : true;
            
            return matchesSearch && matchesLiked;
        });
        
        sortProjects();
        currentPage = 1;
        renderProjects();
        updatePagination();
    }
    
    // Sort projects based on current sort option
    function sortProjects() {
        if (sortBy === 'likes') {
            filteredProjects.sort((a, b) => b.likes - a.likes);
        } else if (sortBy === 'date') {
            filteredProjects.sort((a, b) => new Date(b.sort_date) - new Date(a.sort_date));
        } else {
            // Default sort: liked first, then by likes and date
            filteredProjects.sort((a, b) => {
                if (a.is_liked && !b.is_liked) return -1;
                if (!a.is_liked && b.is_liked) return 1;
                if (b.likes !== a.likes) return b.likes - a.likes;
                return new Date(b.sort_date) - new Date(a.sort_date);
            });
        }
    }
    
    // Render projects based on current page and items per page
    function renderProjects() {
        projectsGrid.innerHTML = '';
        
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = itemsPerPage === 0 ? filteredProjects.length : startIndex + itemsPerPage;
        const projectsToShow = filteredProjects.slice(startIndex, endIndex);
        
        if (projectsToShow.length === 0) {
            projectsGrid.innerHTML = `
                <div class="no-projects">
                    <i class="fas fa-folder-open"></i>
                    <p>No projects found matching your criteria</p>
                </div>
            `;
            return;
        }
        
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
                    <div class="project-meta">
                        <span>${new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                        <span class="project-likes">
                            <i class="fas fa-heart"></i> ${project.likes}
                        </span>
                    </div>
                    <a href="${project.link}" class="project-link">View Project <i class="fas fa-arrow-right"></i></a>
                </div>
                <button class="like-btn ${project.is_liked ? 'liked' : ''}">
                    <i class="${project.is_liked ? 'fas' : 'far'} fa-heart"></i>
                </button>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
        
        // Add event listeners to like buttons
        document.querySelectorAll('.like-btn').forEach((btn, index) => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const actualIndex = startIndex + index;
                const project = filteredProjects[actualIndex];
                
                project.is_liked = !project.is_liked;
                project.likes += project.is_liked ? 1 : -1;
                
                // Update the main projectsData array
                const mainProjectIndex = projectsData.findIndex(p => p.id === project.id);
                if (mainProjectIndex !== -1) {
                    projectsData[mainProjectIndex].is_liked = project.is_liked;
                    projectsData[mainProjectIndex].likes = project.likes;
                }
                
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
                
                // Update likes count display
                const likesElement = this.closest('.project-card').querySelector('.project-likes');
                if (likesElement) {
                    likesElement.innerHTML = `<i class="fas fa-heart"></i> ${project.likes}`;
                }
                
                // Re-sort if needed
                if (sortBy === 'likes' || sortBy === 'default') {
                    sortProjects();
                    renderProjects();
                    updatePagination();
                }
                
                // Send like to backend (simulated)
                sendLikeToBackend(project.id, project.is_liked);
                
                // Update localStorage
                localStorage.setItem('projectsData', JSON.stringify(projectsData));
            });
        });
    }
    
    // Simulate sending like to backend
    function sendLikeToBackend(projectId, isLiked) {
        // In a real application, you would make an API call here
        console.log(`Sending like update to backend: Project ${projectId} - ${isLiked ? 'Liked' : 'Unliked'}`);
        
        // Example of how you might structure the API call:
        /*
        fetch('/api/projects/like', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                project_id: projectId,
                liked: isLiked
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Like updated:', data);
        })
        .catch(error => {
            console.error('Error updating like:', error);
        });
        */
    }
    
    // Update pagination controls
    function updatePagination() {
        paginationContainer.innerHTML = '';
        
        const totalPages = itemsPerPage === 0 ? 1 : Math.ceil(filteredProjects.length / itemsPerPage);
        if (totalPages <= 1) return;
        
        const pagination = document.createElement('div');
        pagination.className = 'pagination';
        
        const prevBtn = document.createElement('button');
        prevBtn.id = 'prev-page';
        prevBtn.disabled = currentPage === 1;
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevBtn.addEventListener('click', function() {
            if (currentPage > 1) {
                currentPage--;
                renderProjects();
                updatePagination();
                window.scrollTo({
                    top: document.querySelector('.projects').offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
        
        const pageInfo = document.createElement('span');
        pageInfo.className = 'page-info';
        pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
        
        const nextBtn = document.createElement('button');
        nextBtn.id = 'next-page';
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextBtn.addEventListener('click', function() {
            if (currentPage < totalPages) {
                currentPage++;
                renderProjects();
                updatePagination();
                window.scrollTo({
                    top: document.querySelector('.projects').offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
        
        pagination.appendChild(prevBtn);
        pagination.appendChild(pageInfo);
        pagination.appendChild(nextBtn);
        paginationContainer.appendChild(pagination);
    }
    
    // Check for saved projects data in localStorage
    const savedProjects = localStorage.getItem('projectsData');
    if (savedProjects) {
        const parsedProjects = JSON.parse(savedProjects);
        // Merge with our default data to ensure all projects are included
        projectsData.forEach((project, index) => {
            const savedProject = parsedProjects.find(p => p.id === project.id);
            if (savedProject) {
                project.is_liked = savedProject.is_liked;
                project.likes = savedProject.likes || project.likes;
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
    
    // Form submission with SweetAlert
    const contactForm = document.getElementById('contactForm');
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
            
            // Example of how you might structure the API call:
            /*
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    showSuccessMessage();
                    this.reset();
                } else {
                    showErrorMessage(data.message);
                }
            })
            .catch(error => {
                showErrorMessage('An error occurred. Please try again later.');
            });
            */
            
            // For demo purposes, we'll just show the success message
            showSuccessMessage();
            this.reset();
        });
    }
    
    function showSuccessMessage() {
        Swal.fire({
            title: 'Thank You!',
            text: 'Your message has been sent successfully. I will get back to you soon.',
            icon: 'success',
            confirmButtonColor: '#4361ee',
            confirmButtonText: 'OK',
            backdrop: `
                rgba(67, 97, 238, 0.4)
                url("/images/nyan-cat.gif")
                left top
                no-repeat
            `
        });
    }
    
    function showErrorMessage(message) {
        Swal.fire({
            title: 'Error',
            text: message || 'There was a problem sending your message. Please try again later.',
            icon: 'error',
            confirmButtonColor: '#4361ee',
            confirmButtonText: 'OK'
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
    
    .no-projects {
        grid-column: 1 / -1;
        text-align: center;
        padding: 50px 0;
        opacity: 0.7;
    }
    
    .no-projects i {
        font-size: 50px;
        margin-bottom: 20px;
        color: var(--primary-color);
    }
    
    .no-projects p {
        font-size: 18px;
        color: var(--text-dark);
    }
`;
document.head.appendChild(style);