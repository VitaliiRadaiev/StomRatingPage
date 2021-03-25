//var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

$(document).ready(function() {
	// === Burger Handler =====================================================================
{
	let isOpen = false;

	function burgerBtnAnimation(e) {
		$('.burger span:nth-child(1)').toggleClass('first');
		$('.burger span:nth-child(2)').toggleClass('second');
		$('.burger span:nth-child(3)').toggleClass('third');
		$('.burger span:nth-child(4)').toggleClass('fourth');
		let classNameElem = document.querySelector('.burger').dataset.activel;
		let elem = document.querySelector(`.${classNameElem}`);
		if(!isOpen) {
			elem.classList.add('open');
			 document.querySelector('.header').classList.add('open');
			 _slideDown(elem);
			isOpen = true;
		} else {
			elem.classList.remove('open');
			 document.querySelector('.header').classList.remove('open');
			 _slideUp(elem);
			isOpen = false;
		}

	}
	$('.burger').click((e) => burgerBtnAnimation(e));
}
// === Burger Handler =====================================================================	;
	document.querySelector('body').classList.add('isload');

// === Проверка, поддержка браузером формата webp ==================================================================

	function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

	if (support == true) {
	document.querySelector('body').classList.add('webp');
	}else{
	document.querySelector('body').classList.add('no-webp');
	}
	});

// === // Проверка, поддержка браузером формата webp ==================================================================

//RATING
$('.rating.edit .star').hover(function() {
		var block=$(this).parents('.rating');
	block.find('.rating__activeline').css({width:'0%'});
		var ind=$(this).index()+1;
		var linew=ind/block.find('.star').length*100;
	setrating(block,linew);
},function() {
		var block=$(this).parents('.rating');
	block.find('.star').removeClass('active');
		var ind=block.find('input').val();
		var linew=ind/block.find('.star').length*100;
	setrating(block,linew);
});
$('.rating.edit .star').click(function(event) {
		var block=$(this).parents('.rating');
		var re=$(this).index()+1;
		block.find('input').val(re);
		var linew=re/block.find('.star').length*100;
	setrating(block,linew);
});
$.each($('.rating'), function(index, val) {
		var ind=$(this).find('input').val();
		var linew=ind/$(this).parent().find('.star').length*100;
	setrating($(this),linew);
});
function setrating(th,val) {
	th.find('.rating__activeline').css({width:val+'%'});
}


// ==== accordion =======================================================
if ($('.accordion').length>0) {
	$.each($('.spoller.active'), function (index, val) {
		$(this).next().show();
	});
	$('body').on('click', '.spoller', function (event) {
		if ($(this).hasClass('mob') && !isMobile.any()) {
			return false;
		}

		if ($(this).parents('.one').length > 0) {
			$(this).parents('.one').find('.spoller').not($(this)).removeClass('active').next().slideUp(300);
			$(this).parents('.one').find('.spoller').not($(this)).parent().removeClass('active');
		}

		if ($(this).hasClass('closeall') && !$(this).hasClass('active')) {
			$.each($(this).closest('.spollers').find('.spoller'), function (index, val) {
				$(this).removeClass('active');
				$(this).next().slideUp(300);
			});
		}
		$(this).toggleClass('active').next().slideToggle(300, function (index, val) {
			if ($(this).parent().find('.slick-slider').length > 0) {
				$(this).parent().find('.slick-slider').slick('setPosition');
			}
		});
		return false;
	});
}

// ==== // accordion =======================================================



// === Плавная прокрута якорей ==================================================================
if($('.anchor').length>0) {

	$(".anchor").click(function() {
	  var elementClick = $(this).attr("href")
	  var destination = $(elementClick).offset().top -100;
	  jQuery("html:not(:animated),body:not(:animated)").animate({
		scrollTop: destination
	  }, 400);
	  return false;
	});

}
// === // Плавная прокрута якорей ==================================================================



// === закрытие фильтра ==================================================================
window.addEventListener('click', (e) => {
	if(!e.target.closest('.filter')) {
		let elem = document.querySelector('.filter__toggle-collapse');
		document.querySelector('.filter').classList.remove('_active');
		_slideUp(elem,300);
	}
})
// === // закрытие фильтра ==================================================================


//OPTION
$.each($('.option.active'), function(index, val) {
	$(this).find('input').prop('checked', true);
});
$('.option').click(function(event) {
	if(!$(this).hasClass('disable')){
			var target = $(event.target);
		if (!target.is("a")){
			if($(this).hasClass('active') && $(this).hasClass('order') ){
				$(this).toggleClass('orderactive');
			}
				$(this).parents('.options').find('.option').removeClass('active');
				$(this).toggleClass('active');
				$(this).children('input').prop('checked', true);
		}
	}
});

// === slider-reviews ==================================================================
{
	let slider = document.querySelector('.slider-reviews');
	if(slider) {
		$('.slider-reviews').slick({
		  infinite: false,
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  prevArrow: '<div class="slick-arrow slick-prev"><span class=""><img src="img/icons/slider-arrow-left.svg" alt=""></span></div>',
		  nextArrow: '<div class="slick-arrow slick-next"><span class=""><img src="img/icons/slider-arrow-right.svg" alt=""></span></div>',

		  responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 900,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 650,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        adaptiveHeight: true
		      }
		    }
		  ]
		});
			
	}
}

{
	let reviews = document.querySelectorAll('.item-slider-reviews');
	if(reviews) {
		reviews.forEach(item => {
			let text = item.querySelector('.item-slider-reviews__text > p');
			let a = item.querySelector('.item-slider-reviews__text a');
			a.style.display = "none";
			let txt = text.innerText; 
			if(txt.length > 414) {
				text.innerText = [...text.innerText].slice(0, 400).join('') + ' ';
				a.style.display = "block";
				text.append(a);
				a.addEventListener('click', (e) => {
					e.preventDefault();
					a.style.display = "none";
					text.innerText = txt;
				})
			}

		})
	}
}


{
	let slider = document.querySelector('.slider-reviews-2');
	if(slider) {
		$('.slider-reviews-2').on('init', function(slick) {
			let slider = document.querySelector('.slider-reviews-2 .slick-track');
			if(slider.children.length <= 2) {
				document.querySelector('.slider-reviews-2').classList.add('_two-items');
			}

			if(document.documentElement.clientWidth <= 649) {
				document.querySelectorAll('.item-slider-reviews').forEach((item) => {
					let span = item.querySelector('.item-slider-reviews__name > span');
					let boxMobile = item.querySelector('.item-slider-reviews__mobile-date');
					if(span) {

						boxMobile.append(span);
					}
				})
			}
		})
		.slick({
		  infinite: false,
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  prevArrow: '<div class="slick-arrow slick-prev"><span class=""><img src="img/icons/slider-arrow-left.svg" alt=""></span></div>',
		  nextArrow: '<div class="slick-arrow slick-next"><span class=""><img src="img/icons/slider-arrow-right.svg" alt=""></span></div>',

		  responsive: [
		    {
		      breakpoint: 650,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        adaptiveHeight: true
		      }
		    }
		  ]
		})
		.on('breakpoint', function(slick, bp) {
			if(bp.breakpoints[0] == 650) {
				document.querySelectorAll('.item-slider-reviews').forEach((item) => {
					let span = item.querySelector('.item-slider-reviews__name > span');
					let boxMobile = item.querySelector('.item-slider-reviews__mobile-date');
					if(span) {

						boxMobile.append(span);
					}
				})
			}
		})	
		
	}
}
// === // slider-reviews ==================================================================


// === slider-analogs ==================================================================
{
	let slider = document.querySelector('.slider-analogs');
	if(slider) {
		$('.slider-analogs').slick({
		  infinite: false,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  arrows: false,
		  dots: true,
		  daptiveHeight: true,
		  responsive: [
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 650,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        adaptiveHeight: true
		      }
		    }
		  ]
		});
	}
}
// === // slider-analogs ==================================================================



// === lecturers dinamic adaptive text ==================================================================
{
	let itemLecurers = document.querySelectorAll('.item-lecturers');
	if(itemLecurers) {

		const adaptive = () => {
			itemLecurers.forEach((item) => {
				let label = item.querySelector('.item-lecturers__label');
				let text = item.querySelector('.item-lecturers__text');
				let boxMobile = item.querySelector('.item-lecturers__mobile-box');

				if(label) {
					boxMobile.append(label);
				}

				if(text) {
					boxMobile.append(text);
				}

			})
		}

		if(document.documentElement.clientWidth <= 575) {
			adaptive();
		}


		window.addEventListener('resize', () => {
			if(document.documentElement.clientWidth <= 575) {
				adaptive();
			}
		});
	}
}
// === // lecturers dinamic adaptive text ==================================================================



// === pagination handler mobile ==================================================================
{
	let paginationBlock = document.querySelector('.webinar-categories-block__pagination');
	if(paginationBlock) {
		if(paginationBlock.children.length > 5) {
			paginationBlock.classList.add('_many-elements')
		}
	}
}
// === // pagination handler mobile ==================================================================


// ===  reviews-block_2 ==================================================================
{
	let reviewsBlock = document.querySelector('.reviews-block_2');
	if(reviewsBlock) {
		if(document.documentElement.clientWidth <= 649) {
			document.querySelectorAll('.item-slider-reviews').forEach((item) => {
				let span = item.querySelector('.item-slider-reviews__name > span');
				let boxMobile = item.querySelector('.item-slider-reviews__mobile-date');
				if(span) {

					boxMobile.append(span);
				}
			})
		}
	}
}
// === //  reviews-block_2 ==================================================================



// === reviews-form handler ==================================================================
{
	let reviewForm = document.querySelector('.review-form');

	if(reviewForm) {
		let textarea = document.querySelector('.review-form .textarea');
		let infoBlock = document.querySelector('.review-form .review-form__textarea-info > span');
		let inputFile = document.querySelector('.review-form input[type="file"]');

		textarea.addEventListener('input', () => {
			infoBlock.innerText = textarea.value.length;
		})

		if(inputFile) {
			let label2 = document.createElement('label');
			label2.htmlFor = inputFile.id;
			label2.className = 'btn-default-2';
			label2.innerText = 'Выберите файл';
			inputFile.after(label2);

			inputFile.addEventListener('change', function(e) {
				if(this.files.length >= 1) {
					label2.innerText = 'Выбрано ' + this.files[0].name
				} else {
					label2.innerText = 'Выберите файл';
				}
			});
		}
	}

}

// === //  reviews-form handler ==================================================================


// === //  reviews-form handler ==================================================================

{ 
	let list = document.querySelector('.lecturers__list');
	if(list) {
		document.querySelectorAll('.item-lecturers').forEach(item => {
			let text = item.querySelector('.item-lecturers__text > p');
			let a = item.querySelector('.item-lecturers__text a');
			a.style.display = "none";
			let txt = text.innerText; 
			if(txt.length > 414) {
				text.innerText = [...text.innerText].slice(0, 400).join('') + ' ';
				a.style.display = "block";
				text.append(a);
				a.addEventListener('click', (e) => {
	    			e.preventDefault();
	    			a.style.display = "none";
	    			text.innerText = txt;
				})
			}

		})
	}
}

// === //  reviews-form handler ==================================================================



// === form filter handler ==================================================================
{
	let form = document.querySelector('.filter');

	if(form) {
	let btnClear = form.querySelector('.filter__clear > a');
		const removeActive = () => {
			form.querySelectorAll('.option').forEach(item => {
				item.classList.remove('active');
			})
		}

		btnClear.addEventListener('click', (e) => {
			e.preventDefault();
			removeActive();

			form.querySelectorAll('.options').forEach(item => {

				let option = item.firstElementChild;
				option.classList.add('active');
				let radio = item.firstElementChild.firstElementChild.checked;
				radio.checked = true;
			})


			$.each($('.option.active'), function(index, val) {
				$(this).find('input').prop('checked', true);
			});
			$('.option').click(function(event) {
				if(!$(this).hasClass('disable')){
						var target = $(event.target);
					if (!target.is("a")){
						if($(this).hasClass('active') && $(this).hasClass('order') ){
							$(this).toggleClass('orderactive');
						}
							$(this).parents('.options').find('.option').removeClass('active');
							$(this).toggleClass('active');
							$(this).children('input').prop('checked', true);
					}
				}
			});
		})

	}


}
// === // form filter handler ==================================================================

// === form-search ==================================================================
{
	let form = document.querySelector('.search'); 
	if(form) {
		form.querySelector('.input').addEventListener('focus', function() {
			this.classList.add('_focus');
			this.parentElement.classList.add('_focus');
		});

		form.querySelector('.input').addEventListener('blur', function() {
			this.classList.remove('_focus');
			this.parentElement.classList.remove('_focus');
		})
	}
}
// === // form-search  ==================================================================

$('img.img-svg').each(function(){
	var $img = $(this);
	var imgClass = $img.attr('class');
	var imgURL = $img.attr('src');
	$.get(imgURL, function(data) {
	  var $svg = $(data).find('svg');
	  if(typeof imgClass !== 'undefined') {
		$svg = $svg.attr('class', imgClass+' replaced-svg');
	  }
	  $svg = $svg.removeAttr('xmlns:a');
	  if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
		$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
	  }
	  $img.replaceWith($svg);
	}, 'xml');
  });

});

// ====  google map ===============

// {


// 	let isMap = document.getElementById("map");
// 	if(isMap) {
// 		var map;

// 		let center = {
// 			lat: 58.254286,
// 			lng: 22.489827,
// 		}

// 		let markerPosition = {
// 			lat: 58.254286,
// 			lng: 22.489827,
// 		}

// 		// Функция initMap которая отрисует карту на странице
// 		function initMap() {

// 			// В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
// 			map = new google.maps.Map(document.getElementById('map'), {
// 				// При создании объекта карты необходимо указать его свойства
// 				// center - определяем точку на которой карта будет центрироваться
// 				center: {lat: center.lat, lng: center.lng},
// 				// zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.

// 				zoom: 17,

// 				// Добавляем свои стили для отображения карты
// 				//styles: 
// 			});

// 			// Создаем маркер на карте
// 			var marker = new google.maps.Marker({

// 				// Определяем позицию маркера
// 			    position: {lat: markerPosition.lat, lng: markerPosition.lng},

// 			    // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
// 			    map: map,

// 			    // Пишем название маркера - появится если навести на него курсор и немного подождать
// 			    title: 'бульвар Генерала Карбышева',
// 			    label: '',

// 			    // Укажем свою иконку для маркера
// 			   // icon: 'img/contact/googlMarker.svg',
// 			});

// 		}
// 	}
// }

