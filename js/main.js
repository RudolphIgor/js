const tabsE = document.querySelectorAll('.tabs__btn');
const contentsE = document.querySelectorAll('.content');
console.log(tabsE);
for (const iterator of tabsE) {
	iterator.addEventListener('click', e => {
		console.log(iterator);
		for (const iterator of tabsE) {
			iterator.classList.remove('tabs__btn_active');
		}
		iterator.classList.add('tabs__btn_active');
		const currTab = e.target.dataset.btn;
		for (const iterator of contentsE) {
			iterator.classList.remove('content_active');
			if (iterator.dataset.content == currTab) {
				iterator.classList.add('content_active')
			}
		}
	})
}
// Удаление и добавление классов для tabs
const changeClass = el => {
	// console.log(el);
	for (let i = 0; i < tabs.children.length; i++) {
		tabs.children[i].classList.remove('tabs__btn_active');
	}
	el.classList.add('tabs__btn_active');
}

// MODAL
const btnModal = document.getElementById('btn-modal');
const modalWrapper = document.getElementById('wrapper-modal');
const overlay = document.getElementById('overlay');

btnModal.addEventListener('click', () => {
	modalWrapper.classList.add('active');
})

overlay.addEventListener('click', () => {
	modalWrapper.classList.remove('active');
})

// SLIDER
const btnPrev = document.getElementById('btn-prev');
btnNext = document.getElementById('btn-next');
slides = document.querySelectorAll('.slide');
dots = document.querySelectorAll('.dot');
sliderWrapper = document.querySelectorAll('.slider-wrapper');

let index = 1;

const activeSlide = n => {
	for (const slide of slides) {
		slide.classList.remove('slide_active');
	}
	slides[n].classList.add('slide_active')
}

const activeDot = n => {
	for (const dot of dots) {
		dot.classList.remove('dot_active');
	}
	dots[n].classList.add('dot_active')
}

const prepareSlide = i => {
	activeSlide(i);
	activeDot(i);
}

const nextSlide = () => {
	if (index == slides.length - 1) {
		index = 0;
		prepareSlide(index);

	} else {
		index++;
		prepareSlide(index);
	}
}

const prevSlide = () => {
	if (index == 0) {
		index = slides.length - 1;
		prepareSlide(index);

	} else {
		index--;
		prepareSlide(index);
	}
}

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);

dots.forEach((item, indexDot) => {
	item.addEventListener('click', () => {
		index = indexDot;
		prepareSlide(index);
	})
});

// const interval = setInterval(nextSlide, 2500);
