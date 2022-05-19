let month = document.querySelector('.price-toggler .month');
let year = document.querySelector('.price-toggler .year');
let monthAmount = document.querySelectorAll('.cards .card .month');
let yearAmount = document.querySelectorAll('.cards .card .year');

year.onclick = () =>{
    year.classList.add('active');
    month.classList.remove('active');

    monthAmount.forEach(mo =>{ mo.style.display = 'none' });
    yearAmount.forEach(yr =>{ yr.style.display = 'block' });
};

month.onclick = () =>{
    year.classList.remove('active');
    month.classList.add('active');

    monthAmount.forEach(mo =>{ mo.style.display = 'block' });
    yearAmount.forEach(yr =>{ yr.style.display = 'none' });
};

