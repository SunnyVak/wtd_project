$(document).ready(function(){

	var iconHeight = 98;
	var date = new Date();	
	 
	$(".slider").mouseleave(closeSlider);
	
	
	$(".btnUp").click(function() {
		rotateUp( $(this) );
		var thisSlider = $(this).parent();
		hideShow(thisSlider);	
	})
	
	$(".btnDown").click(function(){
		rotateDown( $(this) );
		var thisSlider = $(this).parent();
		hideShow(thisSlider);
	})
	
	//chose of icon by click on it
	$(".icon").click(function(){
		var nbrOfIconClicked = parseInt($(this).css('top')) / iconHeight;
		if (nbrOfIconClicked == 0) {
			closeSlider; rotateDown( $(this) );
		} else if (nbrOfIconClicked == 1){
			closeSlider;
		} else {
			closeSlider; rotateUp( $(this) ); 
		}
		var thisSlider = $(this).parent();
		hideShow(thisSlider);
	})
	
	//ordering slider
	// var iconHeight = parseInt($('.icon').height());
	$(".icon").each(function(){
		$(this).css("top", iconHeight*($(this).index()))
		// console.log(iconHeight*($(this).index()));
	});
	
	//setting day of week
	var thisArrow = $(".sliderDow > .btnUp");
	var dow = date.getDay();
	for (var i = 2; i < dow; i++) {
		rotateUp(thisArrow);
		i += 1;
		console.log(i);
	}
	
	// //setting time of day
	// var thisPod;
	// var hours = date.getHours();
	// if (5 <= hours < 8) {
	// 	thisPod = 6;
	// } else if (8 < hours < 9) {
	// 	thisPod = 0;
	// } else if (9 <= hours < 17) {
	// 	thisPod = 1;
	// } else if (17 <= hours < 20) {
	// 	thisPod = 2;
	// }  else if (20 <= hours < 23) {
	// 	thisPod = 3;
	// 	// пщздний вечер
	// }  else if (23 <= hours < 1) {
	// 	thisPod = 4;
	// 	// ночь
	// } else (1 <= hours < 5) {
	// 	thisPod = 4;
	// 	//глубокая ночь
	// }
	
	//opening slider
	$(".slider").mouseenter(function(){
		$(this).parent().removeClass("inactive").addClass("active");
		$(this).css("top", "0px");
		hideShow($(this));
	});
	
	//hiding icons
	var sliders = $(this).find(".slider");
	sliders.each(function(){
		hideShow($(this));
	})
	
	//closing slider
	function closeSlider(thisObj){
		$(this).parent().removeClass("active").addClass("inactive");
		$(this).css("top", "-101px")
		hideShow($(this));
	}
	
	//control with arrows
	function rotateUp(thisObj){
		var parnt = thisObj.parent();
		// var iconHeight = parseInt($('.icon').height()); //not working properly
		var iconHeight = 98;
		var arrHeight = ($(parnt).find('.icon').length - 1) * iconHeight;
		$(parnt).find('.icon').each(function(){
			var top = parseInt($(this).css('top'));
			if (top < iconHeight) {
					$(this).css('top', arrHeight);
				} 
				else {
					$(this).css('top', top - iconHeight);
			}
		});
	}
	
	function rotateDown(thisObj){
		var parnt = $(thisObj).parent();
		var iconHeight = 98;
		var arrHeight = ($(parnt).find('.icon').length - 1) * iconHeight;
		$(parnt).find('.icon').each(function(){
			var top = parseInt($(this).css('top'));
			if (top >= arrHeight) {
				$(this).css('top', '0');
			} 
			else {
				$(this).css('top', top + iconHeight);
			}
		});
	}
	
	function hideShow(thisObj){
		var icons = thisObj.children('.icon');
		if (thisObj.parent().hasClass("inactive") == false){
			icons.each(function(){
				$(this).css("visibility", 'hidden');
				if (parseInt($(this).css('top')) == 0){
					$(this).css("visibility", 'visible');
				}
				else if (parseInt($(this).css('top')) == iconHeight){
					$(this).css("visibility", 'visible');
				}
				else if (parseInt($(this).css('top')) == (iconHeight * 2)){
					$(this).css("visibility", 'visible');
				} 
			});	
		}
		else {
			icons.each(function(){
				$(this).css("visibility", 'hidden');
				if (parseInt($(this).css('top')) == iconHeight){
					$(this).css("visibility", 'visible');
				}
			});	
		}
	}

})


$(document).ready(function() {
 
 
  
//Slider Main
  //b - ширина картинки или окно
  var b = 1200;
  var delta = 0;
  var a = $(".sliders");
  for (var i=0; i < a.length; i++) {
    $(a[i]).css("left", delta + "px");
    delta = delta + b;
  }
  //действия при клике next
  $(".go").click(function() {
    // Удаляем стрелочку вперед 
    $(".go").addClass("nonActive");
    $(a).animate ({left: "-=1200px"}, 1000, "linear", check)
      
  });
  
  function check () {
    if($(this).css("left") === "-1200px") {
      $(this).css("left", b*(a.length-1)+"px");
    }
    // меняем текст заголвка 
    $(".headerTextPageTwo").removeClass("nonActive");
    $(".headerTextPageOne").addClass("nonActive"); 
  // Возвращаем стрелочку назад 
     $(".goBack").removeClass("nonActive");
  }
  
  //действия при клике back
  
  $(".goBack").click(function() {
  //Удаляем стрелочку назад 
     $(".goBack").addClass("nonActive");
	for (var i = 0; i < a.length; i++) {
	 if ($(a[i]).css("left") === "1200px"){
	  $(a[i]).css("left", "-1200px")
    }
  }
    $(a).animate({left: "+=1200px"}, 1000, "linear", btnBack)
});
  
  function btnBack () {
    // Появляется стралочка вперед 
    $(".go").removeClass("nonActive");
    //Меняем текст в заголовке 
    $(".headerTextPageTwo").addClass("nonActive");
    $(".headerTextPageOne").removeClass("nonActive"); 
  }


  
  // центруем картинки 

    var picsResult = $('.picResult>img');
	var textsResult = $('.textResult');
	var iconHeight = 226;
  
  $('.picResult>img').each(function(){
    var picHeight = $(picsResult).height();
    // var iconHeight = $(".resultIconPic").height();
    var center = (iconHeight - picHeight)/2;
 

    if (picHeight < (iconHeight/2)) {
      $(this).css({"padding-top": "13px" });
    }
    else {
    $(this).css({"padding-top": center + "px" });
    }
  });


// Переворачиваем картинки - текст 
  $(".resultIconPic").mouseover(function() {
    $(this).children(":first").removeClass("nonActive");
  });
  $(".resultIconPic").mouseout(function() {
    $(this).children(":first").addClass("nonActive");
  });
  

});