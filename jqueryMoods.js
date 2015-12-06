$(document).ready(function(){
	var iconTHeight = $('.iconT').height();
	var iconWImgHeight = $('.iconWImg').height();
	var icons = $('.icon');
	var iconMooods = $('.iconMood');
	var iconWishs = $('.iconWish');
	var iconDows = $('.iconDow');
	var iconPods = $('.iconPod');
	var delta = 0;
	var borderOpenHeight = 394;
	var borders = $('.border');
	
	
	//создаем барабан для слайдеров с картинками
	for(var i = 0; i < iconMooods.length; i++) {
		$(iconMooods[i]).css('top', delta + 'px');
		delta = delta + iconWImgHeight;
	}
	delta = 0;
	
	for(var i = 0; i < iconWishs.length; i++) {
		$(iconWishs[i]).css('top', delta + 'px');
		delta = delta + iconWImgHeight;
	}
	delta = 0;
	
	for(var i = 0; i < iconDows.length; i++) {
		$(iconDows[i]).css('top', delta + 'px');
		delta = delta + iconTHeight;
	}
	delta = 0;
	
	for(var i=0; i < iconPods.length; i++) {
		$(iconPods[i]).css('top', delta + 'px');
		delta = delta + iconTHeight;
	}
	delta = 0;
	
	iconHideShow();
	
	//раскрытие барабана
	$(".border").siblings().mouseenter(function(){
		var thisBorder = $(this).siblings(".border");
		thisBorder.addClass('borderActive');
		thisBorder.css({'box-shadow' : '#f7f7f7 4px 4px'});
		thisBorder.css('height', borderOpenHeight + 'px');
		thisBorder.css('top', '0px');
		iconHideShow();	
	})
	
	
	//закрытие барабана
	$(".border").siblings().mouseleave(function(){
		var thisBorder = $(this).siblings(".border");
		thisBorder.css('height', '188px');
		thisBorder.css('top', iconWImgHeight + 'px');
		thisBorder.removeClass('borderActive');
		thisBorder.css({'box-shadow' : '#c9c9c9 4px 4px'});
		iconHideShow();
	})
	
	// $('.sliderMood').mouseleave(function(){
	// 	closeSlider();
	// 	$('.sliderMood').bind("mouseover", openSlider);
	// })
	
	
	
	function iconHideShow() {		
		for (var y=0; y < borders.length; y++) {
			//барабан закрыт
			if($(borders[y]).css('height') < borderOpenHeight + 'px') {
				var iconsOfThisSlider = $(borders[y]).siblings('.icon');
				// console.log(iconsOfThisSlider);
				for (var i = 0; i < iconsOfThisSlider.length; i++) {
					$(iconsOfThisSlider[i]).addClass('nonActive');
				}
				for (var i = 0; i < iconsOfThisSlider.length; i++) {		
					if ($(iconsOfThisSlider[i]).css('top') === (iconTHeight*2) + 'px' || $(iconsOfThisSlider[i]).css('top') === iconWImgHeight + 'px') {
						$(iconsOfThisSlider[i]).removeClass('nonActive');
						//$(iconsOfThisSlider[i]).css({ fill: "#50b4ab" });
					}
				}
			}
			//барабан открыт
			// console.log($(borders[y]).css('height'));
			if($(borders[y]).css('height') === borderOpenHeight + 'px') {
				var iconsOfThisSlider = $(borders[y]).siblings('.icon');
				console.log(iconsOfThisSlider.length);
				for (var i = 0; i < iconsOfThisSlider.length; i++) {
					$(iconsOfThisSlider[i]).addClass('nonActive');
				}
				for (var i = 0; i < iconsOfThisSlider.length; i++) {
					if ('0px' <= $(iconsOfThisSlider[i]).css('top') && $(iconsOfThisSlider[i]).css('top') <= '250px'){
						$(iconsOfThisSlider[i]).removeClass('nonActive');
					}
				}
			}
		}	
	}
})






////////////////////////////////////////////////////////////////////////////////////////////////////////////
// $(document).ready(function() {
// 	var moodIconHeight = $('.moodIcon').height();
// 	var moodIcons = $('.moodIcon');
// 	var moodIconImgs = $('.moodIcon>img');
// 	var delta = 0;
// 	var borderActiveHeight = 394; //взято из .borderActive(height). не ясно как через JQ получить св-во не активного эл-та 
// 	console.log(moodIconImgs);
	
// 	//формируем барабан слайдера
// 	for(var i = 0; i < moodIcons.length; i++) {
// 		$(moodIcons[i]).css('top', delta + 'px');
// 		delta = delta + moodIconHeight;
// 	}
	
// 	moodIconHideShow();
	
// 	$('.btnDown').click(function () {
// 		topImgDown();
// 		moodIconHideShow();
// 	})
	
// 	$('.btnUp').click(function() {
// 		lowImgUp();
// 		moodIconHideShow();
// 	})
	
// 	//выбор картинки, вращение и закрытие барабана
// 	$('.moodIcon').click(function() {
// 		if ($(this).css('top') === moodIconHeight + 'px') {
// 			$('.sliderMood').unbind("mouseover", openSlider);
// 			closeSlider();
           
// 		}
// 		if ($(this).css('top') === '0px') {
// 			$('.sliderMood').unbind('mouseover');
// 			lowImgUp();
// 			closeSlider();			
// 		}
// 		if ($(this).css('top') === (moodIconHeight*2) + 'px') {
// 			$('.sliderMood').unbind('mouseover');
// 			topImgDown();
// 			closeSlider();
// 		}
// 		moodIconHideShow();	
// 	})
	
// 	//раскрытие барабана
// 	$('.sliderMood').mouseover(function() {
// 		openSlider();
// 		$('.sliderMood').unbind('mouseover');
// 	});
	
// 	$('.sliderMood').mouseleave(function(){
// 		closeSlider();
// 		$('.sliderMood').bind("mouseover", openSlider);
// 	})
	


	
// 	function closeSlider() {
// 		$('.border').css('height', '188px');
// 		$('.border').css('top', moodIconHeight + 'px');
// 		$('.border').removeClass('borderActive');
// 		$('.border').css({'box-shadow' : '#c9c9c9 4px 4px'});
// 		moodIconHideShow();
// 	}
	
	
// 	//ващение барабана вверх и перекидывание  верхней головы
// 	function topImgDown() {
// 		$(moodIcons).css('top', '-=' + moodIconHeight + 'px');
// 		if ($(moodIcons).css('top') < 0) {
// 			$(this).css('top', (moodIconHeight * (moodIcons.length - 1)) + 'px');
// 		}
// 		for (var i = 0; i < moodIcons.length; i++) {
// 			if (($(moodIcons[i]).css('top')) < '0px') {
// 				$(moodIcons[i]).css('top', (moodIcons.length-1)*moodIconHeight + 'px');
// 			}
// 		}
// 	}
	
// 	//вращение барабана вниз и перекидывание верхней головы
// 	function lowImgUp() {
// 		$(moodIcons).css('top', '+=' + moodIconHeight + 'px');
// 		for (var i = 0; i < moodIcons.length; i++) {
// 			if ($(moodIcons[i]).css('top') === (moodIconHeight * moodIcons.length) + 'px') {
// 				$(moodIcons[i]).css('top', '0px');
// 			}
// 		}
// 	}
	
// 	//отображение-скрытие иконок
// 	function moodIconHideShow() {
// 		//барабан закрыт
// 		if($('.border').css('height') < borderActiveHeight + 'px') {
// 			moodIconHide();	
// 			for (var i = 0; i < moodIcons.length; i++) {		
// 				if ($(moodIcons[i]).css('top') === moodIconHeight + 'px'){
// 					$(moodIcons[i]).removeClass('nonActive');
// 					$(moodIcons[i]).css({ fill: "#50b4ab" });
// 				}
// 			}
// 		}
// 		//барабан открыт
// 		console.log($('.border').css('height'));
// 		console.log(borderActiveHeight);
// 		if($('.border').css('height') === borderActiveHeight + 'px') {
// 			alert('!');
// 			moodIconHide();
// 			for (var i = 0; i < moodIcons.length; i++) {
// 				if ('0px' <= $(moodIcons[i]).css('top') && $(moodIcons[i]).css('top') <= ((moodIconHeight*2) + 'px')){
// 					$(moodIcons[i]).removeClass('nonActive');
// 				}
// 			}
// 		}
		
// 	}
	
// 	
// }) 