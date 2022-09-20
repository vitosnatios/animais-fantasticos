import SlideNav from './slide.js';

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addArrow('button.prev', 'button.next');
slide.addControl('.custom-controls');
