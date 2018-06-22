
	
		$(".icon").click(function(){
				console.log("111");
				$(this).siblings(".btns").toggle();
			})
			$('.play').click(function(){
				console.log("111");
				$(this).hide().siblings(".play").show()
			})