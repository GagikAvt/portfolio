document.addEventListener("DOMContentLoaded", function() {
    const portfolioSection = document.querySelector('.portfolio');

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            console.log(entry); 
            if (entry.isIntersecting) {
                console.log("Element is in view");
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1 
    });

    observer.observe(portfolioSection);

    if (portfolioSection.getBoundingClientRect().top < window.innerHeight) {
        portfolioSection.classList.add('visible');
    }
});

// toggle button

const certificates = [
  {
    text: 'Educated to "Cybersecurity Essentials" in Microsoft Innovation Center',
    imgSrc: './img/Certificate_2.jpg'
  },
  {
    text: 'Certified "Social Enterprise (SE4Youth) " from CODE • SE HUB',
    imgSrc: './img/Certificate_8.jpg'
  },
  {
    text: 'Certified "SMM Fundamentals and Tools" from Civil Education',
    imgSrc: './img/Certificate_7.jpg'
  },
  {
    text: 'Familiarized with the topic "Employment Rights, Protection Mechanisms" in Solidarity Center',
    imgSrc: './img/Certificate_5.jpg'
  },
  {
    text: 'Certified "Development of emotional recognition and managerial thinking" from Civil Education',
    imgSrc: './img/Certificate_6.jpg'
  },
  {
    text: 'Certified from GortsUp Academy',
    imgSrc: './img/erashxavoragir.jpg'
  },
  {
    text: 'Personal Characteristics from GortsUp Academy',
    imgSrc: './img/bnutagir.jpg'
  }
];

const container = document.getElementById('certificatesContainer');
const toggleBtn = document.getElementById('toggleCertificatesBtn');
const arrow = document.getElementById('arrow');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const captionText = document.getElementById('caption');
const closeModal = document.querySelector('.close');
let isVisible = false;

certificates.forEach(cert => {
  const certBlock = document.createElement('div');
  certBlock.classList.add('certificatesFrame');
  certBlock.innerHTML = `
    <img src="${cert.imgSrc}" alt="${cert.text}">
    <div class="otherCertificateText">${cert.text}</div>
  `;
  container.appendChild(certBlock);

  certBlock.querySelector('img').addEventListener('click', () => {
    openModal(cert.imgSrc, cert.text);
  });
});

function openModal(imgSrc, caption) {
  modal.style.display = 'block'; 
  modalImg.src = imgSrc; 
  captionText.textContent = caption; 
  document.body.classList.add('modal-open'); 
}

closeModal.addEventListener('click', closeModalWindow);
window.addEventListener('click', (event) => {
  if (event.target === modal) closeModalWindow();
});

function closeModalWindow() {
  modal.style.display = 'none'; 
  document.body.classList.remove('modal-open');
}

toggleBtn.addEventListener('click', () => {
  isVisible = !isVisible;
  container.style.maxHeight = isVisible ? container.scrollHeight + 'px' : '0px';
  arrow.textContent = isVisible ? '▲' : '▼';
});
