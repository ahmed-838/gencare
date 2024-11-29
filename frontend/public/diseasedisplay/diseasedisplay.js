document.addEventListener('DOMContentLoaded', () => {
  const cardList = document.querySelector('.card-list');
  const detailsSection = document.querySelector('.Disease_detail_content');
  const diseaseImg = detailsSection.querySelector('.Disease_img img');
  const diseaseName = detailsSection.querySelector('.name span');
  const diseaseDescription = detailsSection.querySelector('.description span');

  let fetchedDiseases = []; 

  async function fetchDiseases() {
      try {
          const response = await fetch('/diseasesManagement/getdata'); 
          if (!response.ok) {
              throw new Error('Failed to fetch data');
          }
          fetchedDiseases = await response.json();
          displayDiseases(fetchedDiseases); 
      } catch (error) {
          console.error('Error fetching diseases:', error);
      }
  }

  function displayDiseases(diseases) {
      if (!diseases || diseases.length === 0) {
          console.error('No diseases found');
          return;
      }

      diseases.forEach((disease, index) => {
          const cardItem = document.createElement('li');
          cardItem.classList.add('card-item', 'swiper-slide');
          cardItem.innerHTML = `
              <a class="card-link">
                  <img src="${disease.disease_image}" class="card-image">
                  <p class="badge">${disease.expected_pregnancy_period}</p>
                  <h2 class="card-title">${disease.disease_name}</h2>
                  <p class="description">${disease.disease_summary}</p>
                  <button class="card-btn material-symbols-rounded" data-index="${index}">arrow_forward</button>
              </a>
          `;
          cardList.appendChild(cardItem);
      });

      new Swiper('.card-wrapper', {
          loop: true,
          spaceBetween: 30,
          pagination: { el: '.swiper-pagination' },
          navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
          breakpoints: {
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
          },
      });

      displayDiseaseDetails(0);
  }

  function displayDiseaseDetails(index) {
      const disease = fetchedDiseases[index]; 
      diseaseImg.src = disease.disease_image;
      diseaseName.textContent = disease.disease_name;
      diseaseDescription.textContent = disease.disease_body;
  }

  cardList.addEventListener('click', (event) => {
      const btn = event.target.closest('.card-btn');
      if (!btn) return;

      const index = btn.getAttribute('data-index');
      displayDiseaseDetails(index); 

      document.querySelector('#DiseaseDetails').scrollIntoView({ behavior: 'smooth' });
  });

  fetchDiseases();
});
