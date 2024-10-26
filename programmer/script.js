const skills = [
    {
        name: 'HTML5',
        icon: 'fab fa-html5'
    },
    {
        name: 'CSS3',
        icon: 'fab fa-css3-alt'
    },
    {
        name: 'Less',
        icon: 'fa-brands fa-less'
    },
    {
        name: 'JavaScript',
        icon: 'fab fa-js'
    },
    {
        name: 'React',
        icon: 'fab fa-react'
    },
    {
        name: 'Node.js',
        icon: 'fab fa-node-js'
    },
    {
        name: 'Python',
        icon: 'fab fa-python'
    },
    {
        name: 'Git',
        icon: 'fab fa-git-alt'
    }
];

const projects = [
    {
        title: 'Business card',
        description: 'Social media business card',
        date: '2024',
        image: './img/card.png',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://gagikavt.github.io/my_social_medias/'
    },
    {
        title: 'Sales Manager Portfolio',
        description: 'Portfolio for sales manager',
        date: '2024',
        image: './img/sales.png',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://gagikavt.github.io/portfolio/sales/index.html'
    },
    {
        title: 'Notepad App',
        description: 'Real-time notepad application with documentation and API',
        date: '2023',
        image: './img/notepad.png',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'With API'],
        link: 'https://github.com/GagikAvt/Notepad-APP'
    },
    {
        title: 'Mixed tools',
        description: 'Responsive mixed tools website in ARMENIAN language',
        date: '2020',
        image: './img/all.png',
        technologies: ['HTML', 'CSS', 'Less', 'JavaScript', 'Json', 'localStorage'],
        link: 'https://gagikavt.github.io/mixedTools/'
    },
    {
        title: 'Calculator in JS',
        description: 'Responsive Calculator website more functionality',
        date: '27.03.2020',
        image: './img/calcJs.png',
        technologies: ['HTML', 'CSS', 'Less', 'JavaScript'],
        link: 'https://gagikavt.github.io/jsCalc/'
    },
    {
        title: 'Calculator',
        description: 'Calculator .exe file',
        date: '22.05.2019',
        image: './img/calc.png',
        technologies: ['C#'],
        link: 'https://github.com/GagikAvt/fenixCalc'
    },
    {
        title: 'W3 template',
        description: 'Hotel booking template',
        date: '29.10.2019',
        image: './img/w3.png',
        technologies: ['HTML', 'CSS', 'Less'],
        link: 'No link'
    },
];

const diplomas = [
    {
        title: 'Master of Computer Science and Programmer',
        institution: 'Eurasia International University',
        year: '2023 - 2027',
        description: 'Advanced web development',
        icon: '../sales/img/evrasia.jpeg'
    },
    {
        title: 'Cybersecurity Essentials',
        institution: 'Microsoft Innovation Center of Armenia',
        year: '2023',
        description: 'Associate Level Certification',
        icon: '../sales/img/microsoft.png'
    },
    {
        title: 'Technician Programmer',
        institution: 'National Polytechnic University of Armenia',
        year: '2017 - 2021',
        description: 'Specialized in Software Engineering and Web Technologies',
        icon: '../sales/img/politechnic.jpg'
    }
];

function renderSkills() {
    const container = document.getElementById('skills');
    if (!container) return;

    container.innerHTML = skills.map(skill => `
        <div class="skill-card">
            <i class="${skill.icon}"></i>
            <h3>${skill.name}</h3>
        </div>
    `).join('');
}

function renderProjects() {
    const container = document.getElementById('projects');
    if (!container) return;

    container.innerHTML = projects.map((project, index) => `
        <div class="project-card" style="--index: ${index}">
            <div class="project-card-inner">
                <div class="project-card-front">
                    <img src="${project.image}" alt="${project.title}">
                    <h3 style="text-align:center; margin-top:15px">${project.title}</h3>
                </div>
                <div class="project-card-back">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-technologies">
                        ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                    <p class="project-technologies">${project.date}</p>
                    <a href="${project.link}" target="_blank" class="project-link">View Project</a>
                </div>
            </div>
        </div>
    `).join('');
}

function renderDiplomas() {
    const container = document.getElementById('diplomas');
    if (!container) return;

    container.innerHTML = diplomas.map(diploma => `
        <div class="diploma-card">
            <div class="diploma-icon">
                <img src="${diploma.icon}">
            </div>
            <div class="diploma-content">
                <h3>${diploma.title}</h3>
                <h4>${diploma.institution}</h4>
                <p class="diploma-year">${diploma.year}</p>
                <p class="diploma-description">${diploma.description}</p>
            </div>
        </div>
    `).join('');
}

function initCarousel() {
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.project-card');
    let currentIndex = 0;
    const cardWidth = 300; 
    const gap = 32;

    function updateCarousel() {
        const offset = -(currentIndex * (cardWidth + gap));
        carousel.style.transform = `translateX(${offset}px)`;
    }

    document.querySelector('.carousel-btn.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel();
    });

    document.querySelector('.carousel-btn.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderProjects();
    renderDiplomas();
    initCarousel();
});