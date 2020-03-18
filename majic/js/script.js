let dots = document.getElementsByClassName('dots__item'),
	dotsArea = document.getElementsByClassName('dots__block')[0],
	slides = document.getElementsByClassName('slides-item'),
	prevBtn = document.getElementById('left__button'),
	nextBtn = document.getElementById('right__button'),
	slideIndex = 1;


showSlides(slideIndex);


function showSlides(n){
	if (n < 1) {
		slideIndex = slides.length;
	} else if (n > slides.length) {
		slideIndex = 1;
	}

	for (let i = 0 ; i < slides.length; i++){
		slides[i].style.display = 'none';
	}

	for (let i = 0 ; i < dots.length; i++){
		dots[i].classList.remove( 'active' );
	}

	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].classList.add('active');
}

//позволяет перелистывать слайды
function plusSlides(n){
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

//перелистывание слайдов по клику на стрелки
prevBtn.onclick = function() {
	plusSlides(-1);
}

nextBtn.onclick = function () {
	plusSlides(1);
}

dotsArea.onclick = function (e) {
	for (let i = 0; i < dots.length + 1; i++) {
		if (e.target.classList.contains('dots__item') && e.target == dots[i - 1]) {
			currentSlide(i);
		}
	}
}

