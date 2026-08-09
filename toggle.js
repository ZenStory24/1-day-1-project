const btn = document.getElementById('btn');
const h2 = document.getElementById('h2');
const body = document.querySelector('.light');

const swapToLight = () => {
    body.classList.remove('dark');
    body.classList.add('light');
    h2.style.color = '#2c3e50';
    btn.innerHTML = 'Light Mode☀️';
}

const swapToDark = () => {
    body.classList.remove('light');
    body.classList.add('dark');
    h2.style.color = '#aafff4';
    btn.innerHTML = 'Dark Mode🌙';
}

btn.addEventListener('click', function() {
    if (body.classList.contains('light')) {
        swapToDark();
    } else {
        swapToLight();
    }
});