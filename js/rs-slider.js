/* ====================================
Инициализация слайдера в блоке rs-slider
==================================== */
function initMainSliders() {
	// Перечень слайдеров
	if (document.querySelector('.rs-slider__slider')) {
		const swiperMain = new Swiper('.rs-slider__slider', {
			// Автопрокрутка
			autoplay: {
				// Пауза между прокруткой
				delay: 10000,
				// Закончить на последнем слайде
				stopOnLastSlide: false,
				// Отключить после ручного переключения
				disableOnInteraction: false,
			},

			// Кол-во показываемых слайдов
			slidesPerView: 1,

			// Обновить свайпер
			// при изменении элементов слайдера
			observer: true,
			// при изменении родительских элементов слайдера
			observeParents: true,
			// при изменении дочерних элементов слайдера
			observeSlideChildren: true,

			// Скорость смены слайдов
			speed: 800,

			// Включение/отключение
			// перетаскивание на ПК
			simulateTouch: true,
			allowTouchMove: true,
			// Чувствительность свайпа
			touchRadio: 1,
			// Угол срабатывания свайпа/перетаскивания
			touchAngle: 45,

			// Цикличность слайдера
			loop: true,

			// Анимация переключения
			effect: 'fade',

			// Пагинация
			pagination: {
				el: '.rs-slider__pagination',
				clickable: true,
			},

			// // Стрелки
			// navigation: {
			// 	nextEl: '.rs-slider__button-next',
			// 	prevEl: '.rs-slider__button-prev',
			// },
		});

		// Вывод количества слайдов и текущего слайда
		if (document.querySelector('.rs-slider__fraction')) {
			const currentNum = document.querySelector('.rs-slider__fraction-count');
			const totalNum = document.querySelector('.rs-slider__fraction-total');

			// Кол-во слайдов
			let indexTotal = swiperMain.slides.length;
			totalNum.innerHTML = `${indexTotal}`;

			if (indexTotal >= 10) {
				totalNum.innerHTML = `${indexTotal}`;
			}

			// Текущий слайд
			swiperMain.on('slideChange', function () {
				let indexSlide = swiperMain.realIndex + 1;
				currentNum.innerHTML = `${indexSlide}`;

				if (indexSlide >= 10) {
					currentNum.innerHTML = `${indexSlide}`;
				}
			});
		}
	}

}
window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initMainSliders();
});