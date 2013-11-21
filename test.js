$(document).ready(function(){
	var slider = $('#slider').find('ul');
	var transition = 5000; 
	//$( slider ).find('li.active').show();
	nextImage();
	previousImage();
	populateDropdown();
	showDropdownImg();
	
	// Function to handle next image slideshow
	function nextImage(){
		$("#next").on("click",function(){
			var current = $( slider ).find( 'li.active' );
			var nextElement = $( current ).next('li');
			if( nextElement.length != 0 ){
				$( current ).removeClass('active').fadeOut( transition );
				$( nextElement ).addClass('active').fadeIn( transition );
			}
		});
	}
	
	// Function to handle previous image slideshow
	function previousImage(){
		$("#previous").on("click",function(){
			var current = $(slider ).find( 'li.active' );
			var prevElement = $( current ).prev('li');
			if( prevElement.length != 0 ){
				$( current ).removeClass('active').fadeOut( transition );
				$( prevElement ).addClass('active').fadeIn( transition );
			}
		});
	}
	
	//Function to populate dropdown based on alt
	function populateDropdown(){
		var select = document.getElementById("dropdown");
		$('#slider ul li').each(function(){
			var opt = $(this).find('img').attr('alt');
			var el = document.createElement("option");
			el.textContent = opt;
			el.value = opt;
			select.appendChild(el);
		});
	}
	
	//Function to show image based on value selected from dropdown
	function showDropdownImg(){
		$('#dropdown').change(function(){
			var value = $(this).val();
			$('ul li').removeClass("active");
			$('img[alt='+value+']').parent().addClass('active');
		});
	}
});