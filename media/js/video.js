  $(document).ready(function() {
  	var screenSize = $(window).width();
		var screenHeight = $(window).height();
  	var current=false;
  
    $(".videoBox").css('height', screenHeight);
		$("#content").css('margin-top',screenHeight);

    // $("#headerArea").css('height', '90px');
    
    if (screenSize > 768){
        $("#videoBG").show();
        $("#imgBG").hide();
      }
    if (screenSize <= 768){
        $("#videoBG").hide();
        $("#videoBG").attr('src','');
        $("#imgBG").show();
      }
  	
   $(window).resize(function(){ 
      screenSize = $(window).width(); 
      screenHeight = $(window).height();
     $(".videoBox").css('height', screenHeight);
		  $("#content").css('margin-top',screenHeight);
		 
      if( screenSize > 768 && current==false){
      	
        $("#videoBG").show();
        $("#videoBG").attr('src','images/moana_in.mp4');
        $("#imgBG").hide();
        current=true;
      }
     if (screenSize <= 768){
        $("#videoBG").hide();
        $("#videoBG").attr('src','');
        $("#imgBG").show();
        current=false;
      }
    }); 
		$('.down').click(function(){
			  screenHeight = $(window).height();
			  $('html,body').animate({'scrollTop':screenHeight -80}, 1000);
		});	
  });