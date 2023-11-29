function openFullList() {
	const tariffAbout = document.querySelectorAll('.rs-table-block__content table tbody tr')
	const tariffAdd = document.querySelector('.rs-table-block__more button');

	if (tariffAdd && tariffAbout) {
		tariffAdd.addEventListener('click', function () {
			tariffAbout.forEach(item => {
				item.style.display = "table-row";
			});
			tariffAdd.style.display = "none";
		})
	}
}
openFullList()