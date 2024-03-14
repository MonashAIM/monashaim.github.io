'use strict';


// Code adapated from https://github.com/benkimo6i/vanilla-js-carousel/blob/master/carousel.js
class Carousel {
  constructor(el, id) {
    this.el = el;
    this.id;
    if (id === 1) { this.id = 'leadership'; }
    if (id === 2) { this.id = 'development'; }
    if (id === 3) { this.id = 'education'; }
    if (id === 4) { this.id = 'marketing'; }

    this.carouselOptions = ['previous', 'next'];
    this.carouselData = [
      {
        'id': '1',
        'src': '../images/people/guy1.jpg',
        'name': 'John Doe',
        'role': 'President'
      },
      {
        'id': '2',
        'src': '../images/people/guy2.jpg',
        'name': 'Rose Rose',
        'role': 'Vice President'
      },
      {
        'id': '3',
        'src': '../images/people/guy3.jpg',
        'name': 'Heckler Jr',
        'role': 'Secretary'
      },
      {
        'id': '4',
        'src': '../images/people/guy4.jpg',
        'name': 'Bartholomus Fart',
        'role': 'Development Lead'
      },
      {
        'id': '5',
        'src': '../images/people/guy5.jpeg',
        'name': 'Hermione Granger',
        'role': 'Wizard'
      },
      {
        'id': '6',
        'src': '../images/people/guy6.jpg',
        'name': 'Chosen One',
        'role': 'Unemployed'
      }
    ];
    this.carouselInView = [1, 2, 3];
    this.carouselContainer;
    this.carouselPlayState;
  }

  mounted() {
    this.setupCarousel()
  }

  setupCarousel() {
    const container = document.createElement('div');
    const controls = document.createElement('div');

    this.el.append(container, controls);
    container.className = 'carousel-container';
    controls.className = 'carousel-controls';

    // Making each carousel item
    this.carouselData.forEach((item, index) => {
      const carouselItem = item.src ? document.createElement('div') : document.createElement('div');
      const carouselItemImg = document.createElement('img');
      carouselItemImg.className = 'headshot-image';

      const carouselItemName = document.createElement('div');
      carouselItemName.className = 'name'

      const carouselItemRole = document.createElement('div');
      carouselItemRole.className = 'role';

      carouselItem.append(carouselItemImg);
      carouselItem.append(carouselItemName);
      carouselItem.append(carouselItemRole);

      container.append(carouselItem);

      carouselItem.className = `carousel-item carousel-item-${index + 1} ${this.id}`;

      carouselItemImg.src = item.src;
      carouselItemRole.innerHTML = item.role;
      carouselItemName.innerHTML = item.name

      carouselItemImg.setAttribute('loading', 'lazy');

      carouselItem.setAttribute('data-index', `${index + 1}`);
    });

    this.carouselOptions.forEach((option) => {
      const btn = document.createElement('button');
      const axSpan = document.createElement('span');

      axSpan.innerText = option;
      axSpan.className = 'ax-hidden';
      btn.append(axSpan);

      btn.className = `carousel-control carousel-control-${option}`;
      btn.setAttribute('data-name', option);

      controls.append(btn);
    });

    this.setControls([...controls.children]);

    this.carouselContainer = container;
  }

  setControls(controls) {
    controls.forEach(control => {
      control.onclick = (event) => {
        event.preventDefault();

        // Manage control actions, update our carousel data first then with a callback update our DOM
        this.controlManager(control.dataset.name);
      };

      control.innerText = '';
    });
  }

  controlManager(control) {
    if (control === 'previous') return this.previous();
    if (control === 'next') return this.next();

    return;
  }

  previous() {
    this.carouselData.unshift(this.carouselData.pop());

    this.carouselInView.push(this.carouselInView.shift());


    this.carouselInView.forEach((item, index) => {
      this.carouselContainer.children[index].className = `carousel-item carousel-item-${item} ${this.id}`;
    });

    this.carouselData.slice(0, 3).forEach((data, index) => {
      const item = document.querySelector(`.carousel-item-${index + 1}.${this.id}`);
      item.querySelector('.headshot-image').src = data.src;
      item.querySelector('.role').innerHTML = data.role;
      item.querySelector('.name').innerHTML = data.name;
    });
  }

  next() {
    this.carouselData.push(this.carouselData.shift());

    this.carouselInView.unshift(this.carouselInView.pop());

    this.carouselInView.forEach((item, index) => {
      this.carouselContainer.children[index].className = `carousel-item carousel-item-${item} ${this.id}`;
    });

    this.carouselData.slice(0, 3).forEach((data, index) => {
      const item = document.querySelector(`.carousel-item-${index + 1}.${this.id}`)
      item.querySelector('.headshot-image').src = data.src;
      item.querySelector('.role').innerHTML = data.role;
      item.querySelector('.name').innerHTML = data.name;
    });
  }
}

const c1 = document.querySelector('.leadership-section-carousel');

const c2 = document.querySelector('.development-section-carousel');

const c3 = document.querySelector('.education-section-carousel');

const c4 = document.querySelector('.marketing-section-carousel');


const leadershipCarousel = new Carousel(c1, 1);
const developmentCarousel = new Carousel(c2, 2);
const educationCarousel = new Carousel(c3, 3)
const marketingCarousel = new Carousel(c4, 4)

leadershipCarousel.mounted();
developmentCarousel.mounted();
educationCarousel.mounted();
marketingCarousel.mounted();


console.log('shit')