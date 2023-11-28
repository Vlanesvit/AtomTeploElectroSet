

function map() {
	ymaps.ready(init);
	function init() {
		// Создание карты.
		let map = new ymaps.Map("map", {
			controls: [],
			// Координаты центра карты
			center: [61.785022, 34.346842],
			// Уровень масштабирования
			zoom: 3.5,
		});

		// Данные каждого маркера
		const branchData = [
			{
				title: 'АТЭС-Нововоронеж',
				text: 'Заводской пр., 1, Нововоронеж',
				link: 'branch-page.html',
				location: [51.309100, 39.215981],
			},
			{
				title: 'АТЭС-Десногорск',
				text: 'Заводской пр., 1, Нововоронеж',
				link: 'branch-page.html',
				location: [54.152351, 33.287881],
			},
			{
				title: 'АТЭС-Полярные зори',
				text: 'Заводской пр., 1, Нововоронеж',
				link: 'branch-page.html',
				location: [67.365788, 32.500975],
			},
			{
				title: 'АТЭС-Заречный',
				text: 'Заводской пр., 1, Нововоронеж',
				link: 'branch-page.html',
				location: [56.814966, 61.320349],
			},
			{
				title: 'АТЭС-Удомля',
				text: 'Заводской пр., 1, Нововоронеж',
				link: 'branch-page.html',
				location: [57.871648, 35.005739],
			},
			{
				title: 'АТЭС-Сосновый бор',
				text: 'Заводской пр., 1, Нововоронеж',
				link: 'branch-page.html',
				location: [59.904225, 29.092210],
			},
		]

		let pinsCollection = new ymaps.GeoObjectCollection({}, {
			// preset: 'islands#blueDotIcon', // все метки синие
			draggable: false, // метки нельзя перемещать
			iconLayout: 'default#imageWithContent', // указать данный тип макета.
			iconImageHref: 'img/icons/map-pin.png', // cвоё изображение иконки метки.
			iconImageSize: [51.2, 51.2], // размеры метки
			iconImageOffset: [-25.6, -25.6], // смещение левого верхнего угла иконки
			iconContentOffset: [0, 0], // cмещение слоя с содержимым относительно слоя с картинкой
		});

		for (let i = 0; i < branchData.length; i++) {
			let marks = new ymaps.Placemark(branchData[i].location, {
				// Зададим содержимое заголовка балуна.
				balloonContentHeader:
					`<h5 class="rst-r-20" style="margin-bottom: 18px; color: #fff;">${branchData[i].title}</h5>`,
				// Зададим содержимое основной части балуна.
				balloonContentBody:
					`<p class="rst-l-18" style="color: #fff;">${branchData[i].text}</p>`,
				// Зададим содержимое нижней части балуна.
				balloonContentFooter:
					`<div style="width: 100%; border-top: 1px solid #fff; padding-top: 20px; margin-top: 20px;">
						<a href="${branchData[i].link}" class="rs-link _rs-icon-chevron-right" style="color: #fff;">Подробнее о филиале</a>
					</div>`
				,
				// Зададим содержимое всплывающей подсказки.
				hintContent: `${branchData[i].title}`,
			}, {
				balloonShadow: false,
				// balloonLayout: MyBalloonLayout,
				// balloonContentLayout: MyBalloonContentLayout,
				balloonPanelMaxMapArea: 0,
				// Не скрываем иконку при открытом балуне.
				hideIconOnBalloonOpen: false,
				// И дополнительно смещаем балун, для открытия над иконкой.
				balloonOffset: [-430, 110]
			})
			pinsCollection.add(marks);
		}

		// Добавим метку на карту.
		map.geoObjects.add(pinsCollection);

		// Закрываем балун по клику по карте
		map.events.add('click', e => e.get('target').balloon.close());

	}
}
map()