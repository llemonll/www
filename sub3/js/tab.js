
$(document).ready(function(){
    $('.con:eq(0)').show(); 
      $('.a_tab').click(function(e){
          e.preventDefault();   
          var ind = $(this).index('.a_tab');  
          console.log(ind);
          $(".con").hide(); 
          $(".con:eq("+ind+")").show(); 
          
    $('.title_area .tab li').removeClass('current')
    $('.title_area .tab li:eq('+ind+')').addClass('current')
     });
});

