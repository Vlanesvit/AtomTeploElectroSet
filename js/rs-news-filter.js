function filterNews() {
	// Функционал фильтров
	const formSendClear = document.querySelector('.rs-news__filter_clear');
	const form = document.querySelector('.rs-news__filter_wrapper form');

	// Берем все поля
	const selects = document.querySelectorAll('.rs-news .select');
	selects.forEach(select => {
		if (select) {
			const selectTitle = select.querySelector('.select__title');
			const selectOptionsBody = select.querySelector('.select__options');
			const selectOptions = select.querySelectorAll('.select__option');

			if (selectOptions && form) {
				selectOptions.forEach(options => {
					// Клик на элемент выпадающего списка с проверкой на заполненность поля
					options.addEventListener('click', function () {
						if (options.dataset.value == 0 && options.classList.contains('_select-selected')) {
							// Отключаем перезагрузку страницы/отправку формы и даем классы ошибок для полей
							e.preventDefault();
							select.classList.add('_select-error')
						}
						else if (options.dataset.value != 0 && options.classList.contains('_select-selected')) {
							select.classList.remove('_select-error')
							// Отправка формы
							// form.submit();
						}
					})
				});
			}
		}
	});

	// Открытие фильтров в мою.версии
	const openFilter = document.querySelector('.rs-news__filter_btn');
	const bodyFilter = document.querySelector('.rs-news__filter_body');

	if (openFilter) {
		openFilter.addEventListener('click', function () {
			_slideToggle(bodyFilter, 500);
		})
	}
}
filterNews()


