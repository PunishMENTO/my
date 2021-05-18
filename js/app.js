$(function() {
	/*/ ----- MODAL ----- /*/

	const modalCall = $("[data-modal]");
	const modalClose = $("[data-close1]");


	modalCall.on("click", function(event) {
		event.preventDefault();
		let $this = $(this);
		let modalId = $this.data('modal');


		$(modalId).addClass('show');
		$("body").addClass('no-scroll')

		


		console.log(modalId);
	});

	modalClose.on("click", function(event) {
		event.preventDefault();
		let $this = $(this);
		let modalParent = $this.parents('.modal');

		modalParent.removeClass('show');
		$("body").removeClass('no-scroll');

	});

	$(".modal").on("click", function(event) {
		$(this).removeClass('show');
		$("body").removeClass('no-scroll');
	});

	$(".modal_dialog").on("click", function(event) {
		event.stopPropagation();
	});




	$(".revies_about1").click(function(){
		$(".revie_text2, .revies_item2").hide();
		$(".revie_text3, .revies_item3").hide();
		$(".revie_text1, .revies_item1").show(300);
		$(".phantom_block1").hide();
		$(".phantom_block2").show();
		$(".phantom_block3").show();
		$(".revies_about2, .revies_about3").addClass('scaleless');
		$(".revies_about1").addClass('scalegrow');
		$(".revies_about2, .revies_about3").removeClass('scalegrow');
		$(".revies_info2, .revies_info3").css('background','white');
		$(".revis_name_property2, .revis_name_property3").css('color','black');
		$(".revies_info1").css('background','black');
		$(".revis_name_property1").css('color','white');

	});

	$(".revies_about2").click(function(){
		$(".revie_text3, .revies_item3").hide();
		$(".revie_text1, .revies_item1").hide();
		$(".revie_text2, .revies_item2").show(300);
		$(".phantom_block2").hide();
		$(".phantom_block3").show();
		$(".phantom_block1").show();
		$(".revies_about3, .revies_about1").addClass('scaleless');
		$(".revies_about2").addClass('scalegrow');
		$(".revies_about1, .revies_about3").removeClass('scalegrow');
		$(".revies_info1, .revies_info3").css('background','white');
		$(".revis_name_property1, .revis_name_property3").css('color','black');
		$(".revies_info2").css('background','black');
		$(".revis_name_property2").css('color','white');
	});

	 $(".revies_about3").click(function(){
		$(".revie_text1, .revies_item1").hide();
		$(".revie_text2, .revies_item2").hide();
		$(".revie_text3, .revies_item3").show(300);
		$(".phantom_block3").hide(); 
		$(".phantom_block2").show();
		$(".phantom_block1").show();
		$(".revies_info1, .revies_info2").css('background','white');
		$(".revies_about1, .revies_about2").addClass('scaleless');
		$(".revies_about3").addClass('scalegrow');
		$(".revies_about1, .revies_about2").removeClass('scalegrow');
		$(".revis_name_property1, .revis_name_property2").css('color','black');
		$(".revies_info3").css('background','black');
		$(".revis_name_property3").css('color','white'); 
	}); 



	 $(".size_container").click(function() {
		$(".size_filter_content").slideToggle(300);
	 	$(".arrow4 img").toggleClass('transform');
	 });

	let size_click = document.querySelectorAll('.size_filter');
	for (let i = 0; i < size_click.length; i++) {
		size_click[i].onclick = function () {
			$(".arrow4 img").toggleClass('transform');
			let filter_box = document.querySelectorAll('.filter_box');
			filter_box.forEach(elem => {
				$(filter_box).hide("slow");
			});
			let size_number = document.querySelectorAll('.size' + i);
			size_number.forEach(elem => {
				$(size_number).show("slow");
				$(".size_filter_content").slideUp(300);
			})
		}
	}



	   $(".all_filter").click(function () {
		$("[class*=houses_item1],[class^=houses_item2],[class^=houses_item3],[class^=houses_item4],[class^=houses_item5],[class^=houses_item6]").show("100");

	 });




	$(".showers_container").click(function() {
	 	$(".showers_filter_content").slideToggle(300);
	 	$(".arrow3 img").toggleClass('transform');
	 });


	let showers_click = document.querySelectorAll('.showers_filter');
	for (let i = 0; i < showers_click.length; i++) {
		showers_click[i].onclick = function () {
			$(".arrow3 img").toggleClass('transform');
			let filter_box = document.querySelectorAll('.filter_box');
			filter_box.forEach(elem => {
				$(filter_box).hide("slow");
			});
			let showers_number = document.querySelectorAll('.showers' + i);
			showers_number.forEach(elem => {
				$(showers_number).show("slow");
				$(".showers_filter_content").slideUp(300);
			})
		}
	}




	 $(".beds_container").click(function() {
		$(".beds_filter_content").slideToggle(300);
	 	$(".arrow2 img").toggleClass('transform');
	 }); 


	let bed_click = document.querySelectorAll('.beds_filter');
	for (let i = 0; i < bed_click.length; i++) {
		bed_click[i].onclick = function () {
			$(".arrow2 img").toggleClass('transform');
			let filter_box = document.querySelectorAll('.filter_box');
			filter_box.forEach(elem => {
				$(filter_box).hide("slow");
			});
			let bed_number = document.querySelectorAll('.beds' + i);
			bed_number.forEach(elem => {
				$(bed_number).show("slow");
				$(".beds_filter_content").slideUp(300);
			})
		}
	}


	$(".all_filter_container").click(function() {
		$(".bed-amount").html('Beds');
		$(".shower-amount").html('Showers');
		$(".size-amount").html('Size');
	})

													 /*/ Scroll menu /*/


	const scrollLinks = document.querySelectorAll('a[href^="#"]');
	for (let scrollLink of scrollLinks) {
	    scrollLink.addEventListener('click', function (e) {
	        e.preventDefault();
	        const id = scrollLink.getAttribute('href');
	        document.querySelector(id).scrollIntoView({
	            behavior: 'smooth',
	            block: 'start'
	        });
	    });
	};

													/*/ Burger menu /*/

	$(".menu_list").click(function () {
		$(".menu_list-item").addClass('menu_list-item-active-middle');
		$(".menu_list-item").addClass('menu_list-item-active');
		setTimeout(function() {
			$(".menu_list-item").addClass('menu_list-item-active-rotate');
		}, 300);
		if ($(".menu_list-item").hasClass('menu_list-item-active-rotate')) {
			setTimeout(function() {
				$(".menu_list-item").removeClass('menu_list-item-active-rotate');
				setTimeout(function(){
					$(".menu_list-item").removeClass('menu_list-item-active');
					$(".menu_list-item").removeClass('menu_list-item-active-middle');
				}, 300);
			}, 300);
		}		
		$(".nav_link_adaptive_container").toggleClass('nav_link_adaptive_container-active');	
	});


													/*/ Slider houses /*/



});


