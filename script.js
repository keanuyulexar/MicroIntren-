// Theme Management
let currentTheme = localStorage.getItem('theme') || 'light';

function initializeTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
}

// Page Management
let currentPage = 'landing';

function showPage(pageName) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    const targetPage = document.getElementById(pageName + 'Page');
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = pageName;
        
        // Update navigation active states
        updateNavigation();
        
        // Load page-specific content
        if (pageName === 'internships') {
            loadInternships();
        }
    }
}

function updateNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if ((link.textContent === 'Home' && currentPage === 'landing') ||
            (link.textContent === 'Internships' && currentPage === 'internships')) {
            link.classList.add('active');
        }
    });
}

// Mobile Menu Management
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

// Mock Data
const mockInternships = [
    {
        id: 1,
        title: "Frontend Bug Fixes",
        company: "TechStart Cape Town",
        skills: ["React", "JavaScript", "CSS"],
        description: "Fix minor UI bugs and improve responsive design across our web application.",
        duration: "1-2 weeks",
        location: "Cape Town, Remote",
        pay: "R3,000-6,000",
        rating: 4.8,
        applicants: 12
    },
    {
        id: 2,
        title: "API Integration",
        company: "DataFlow Johannesburg",
        skills: ["Python", "REST APIs", "JSON"],
        description: "Integrate third-party APIs into existing Python application with proper error handling.",
        duration: "1 week",
        location: "Johannesburg, Remote",
        pay: "R4,500-7,500",
        rating: 4.9,
        applicants: 8
    },
    {
        id: 3,
        title: "Mobile App Testing",
        company: "AppCrafters Durban",
        skills: ["Testing", "Mobile", "QA"],
        description: "Comprehensive testing of new mobile app features and documentation of findings.",
        duration: "3-5 days",
        location: "Durban, Remote",
        pay: "R2,250-3,750",
        rating: 4.7,
        applicants: 15
    },
    {
        id: 4,
        title: "Database Optimization",
        company: "CloudTech Pretoria",
        skills: ["SQL", "PostgreSQL", "Performance"],
        description: "Optimize database queries and improve overall database performance.",
        duration: "1-2 weeks",
        location: "Pretoria, Hybrid",
        pay: "R6,000-9,000",
        rating: 4.9,
        applicants: 6
    },
    {
        id: 5,
        title: "UI/UX Design Review",
        company: "DesignHub Cape Town",
        skills: ["Figma", "UI/UX", "Design"],
        description: "Review and improve user interface designs for better user experience.",
        duration: "1 week",
        location: "Cape Town, Remote",
        pay: "R3,750-5,250",
        rating: 4.6,
        applicants: 10
    },
    {
        id: 6,
        title: "WordPress Plugin Dev",
        company: "WebSolutions Johannesburg",
        skills: ["WordPress", "PHP", "JavaScript"],
        description: "Develop a custom WordPress plugin for enhanced site functionality.",
        duration: "2-3 weeks",
        location: "Johannesburg, Remote",
        pay: "R7,500-12,000",
        rating: 4.8,
        applicants: 9
    }
];

let currentFilter = '';

// Internships Management
function loadInternships() {
    const grid = document.getElementById('internshipsGrid');
    if (!grid) return;
    
    const filteredInternships = currentFilter 
        ? mockInternships.filter(internship => 
            internship.skills.some(skill => 
                skill.toLowerCase().includes(currentFilter.toLowerCase())
            )
          )
        : mockInternships;
    
    grid.innerHTML = filteredInternships.map(internship => `
        <div class="internship-card">
            <div class="internship-header">
                <div>
                    <h3 class="internship-title">${internship.title}</h3>
                    <p class="internship-company">${internship.company}</p>
                </div>
                <div class="internship-rating">
                    <svg class="star-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
                    </svg>
                    ${internship.rating}
                </div>
            </div>
            
            <p class="internship-description">${internship.description}</p>
            
            <div class="skills-list">
                ${internship.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
            
            <div class="internship-details">
                <div class="detail-item">
                    <svg class="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12,6 12,12 16,14"></polyline>
                    </svg>
                    ${internship.duration}
                </div>
                <div class="detail-item">
                    <svg class="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    ${internship.location}
                </div>
                <div class="detail-item">
                    <svg class="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="12" y1="1" x2="12" y2="23"></line>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                    ${internship.pay}
                </div>
                <div class="detail-item">
                    <svg class="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    ${internship.applicants} applicants
                </div>
            </div>
            
            <button class="apply-button" onclick="applyToInternship(${internship.id})">
                Apply Now
            </button>
        </div>
    `).join('');
    
    // Show no results message if needed
    if (filteredInternships.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-secondary);">
                <p>No internships found for "${currentFilter}". Try a different skill filter.</p>
            </div>
        `;
    }
}

function filterInternships(skill) {
    currentFilter = skill;
    
    // Update filter button states
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if ((skill === '' && btn.textContent === 'All Skills') || 
            (skill !== '' && btn.textContent === skill)) {
            btn.classList.add('active');
        }
    });
    
    // Reload internships with new filter
    loadInternships();
}

function applyToInternship(id) {
    const internship = mockInternships.find(i => i.id === id);
    if (internship) {
        alert(`Thanks for your interest in "${internship.title}" at ${internship.company}! This is a demo - in the real app, you would be redirected to the application form.`);
    }
}

// Form Management
function initializeForm() {
    const form = document.getElementById('signupForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        skills: formData.get('skills')
    };
    
    // Simulate form submission
    alert(`Thanks for joining our waitlist, ${data.name}! We'll be in touch soon at ${data.email}.`);
    
    // Reset form
    e.target.reset();
}

// Smooth scrolling for anchor links
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeForm();
    updateNavigation();
    
    // Load internships if we're on that page
    if (currentPage === 'internships') {
        loadInternships();
    }
});

// Handle browser back/forward buttons
window.addEventListener('popstate', function(e) {
    if (e.state && e.state.page) {
        showPage(e.state.page);
    }
});

// Add some interactive animations
function addInteractiveAnimations() {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.feature-card, .internship-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add click animations to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}

// Initialize animations after a short delay
setTimeout(addInteractiveAnimations, 500);