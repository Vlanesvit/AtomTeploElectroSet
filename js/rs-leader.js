/* ====================================
Инициализация слайдера в блоке к rs-leader
==================================== */
function initLeaderSliders() {
	// Перечень слайдеров
	const productSliders = document.querySelectorAll('.rs-leader__slider');

	// Инизиализация главного слайдера (3 блока)
	if (productSliders) {
		let startSlide = 0;

		productSliders.forEach(slider => {
			const product = new Swiper(slider, {
				// // Автопрокрутка
				// autoplay: {
				// 	// Пауза между прокруткой
				// 	delay: 5000,
				// 	// Закончить на последнем слайде
				// 	stopOnLastSlide: false,
				// 	// Отключить после ручного переключения
				// 	disableOnInteraction: false,
				// },

				// Кол-во показываемых слайдов
				slidesPerView: 1,
				// Отступ между слайдами
				spaceBetween: 10,

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 300,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				allowTouchMove: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,
				// // Cобытие touchstart (pointerdown)
				// touchStartPreventDefault: false,

				effect: 'fade',

				// Пагинация
				pagination: {
					el: ".rs-leader__pagination",
					clickable: true,
				},

				// Навигация
				navigation: {
					nextEl: ".rs-leader__button-next",
					prevEl: ".rs-leader__button-prev",
				},

				breakpoints: {
					320: {
						slidesPerView: 1.2,
						spaceBetween: 20,
						effect: 'slide',
						loop: false,
						simulateTouch: true,
						allowTouchMove: true,
					},
					480: {
						slidesPerView: 2,
						spaceBetween: 20,
						effect: 'slide',
						loop: false,
						simulateTouch: true,
						allowTouchMove: true,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 25,
						effect: 'slide',
						loop: false,
						simulateTouch: true,
						allowTouchMove: true,
					},
					992: {
						effect: 'fade',
						slidesPerView: 1,
						spaceBetween: 30,
						simulateTouch: false,
						allowTouchMove: false,
						loop: true,
					},
				},

				// Номер активного слайда
				initialSlide: startSlide,

				on: {
					init: function () {

						// Ставим активный класс для каждого слайдера
						const box = slider.closest('.rs-leader__slider');
						switch (true) {
							// Маленький слайдер
							case box.classList.contains('rs-leader__slider-1'):
								startSlide = 1
								break;

							// Средний слайдер
							case box.classList.contains('rs-leader__slider-2'):
								startSlide = 2
								break;

							// Большой слайдер
							case box.classList.contains('rs-leader__slider-3'):
								startSlide = 3
								break;

							default:
								console.log('Слайдера нет');
								break;
						}
					},
				},
			});
		});
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initLeaderSliders();
});