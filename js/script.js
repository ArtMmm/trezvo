document.querySelectorAll('.tabs__item').forEach((item) => 
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');

        document.querySelectorAll('.tabs__item').forEach(
            (child) => child.classList.remove('tabs__item-active')
        );
        document.querySelectorAll('.tabs__block').forEach(
            (child) => child.classList.remove('tabs__block-active')
        );

        item.classList.add('tabs__item-active');
        document.getElementById(id).classList.add('tabs__block-active');
    })
);

document.querySelector('.tabs__item-active').click();


document.querySelectorAll('.tabs__item-cases').forEach((item) => 
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');

        document.querySelectorAll('.tabs__item-cases').forEach(
            (child) => child.classList.remove('tabs__item-cases-active')
        );
        document.querySelectorAll('.tabs__block').forEach(
            (child) => child.classList.remove('tabs__block-cases-active')
        );

        item.classList.add('tabs__item-cases-active');
        document.getElementById(id).classList.add('tabs__block-cases-active');
    })
);

document.querySelector('.tabs__item-cases-active').click();
