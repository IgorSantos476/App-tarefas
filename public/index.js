const drop_btn = document.querySelector('.drop-btn');
const icon_bars = document.querySelector('#icon_bars');
const icon_x = document.querySelector('#icon_x');

icon_bars.addEventListener('click', () => {
    icon_bars.style.display = 'none';
    icon_x.style.display = 'block';

    drop_btn.style.display = 'block';
});

icon_x.addEventListener('click', () => {
    icon_x.style.display = 'none';
    icon_bars.style.display = 'block';

    drop_btn.style.display = 'none';
});