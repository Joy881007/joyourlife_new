$(function(){

    $('.Block2').hide();
    $('.Block3').hide();

    $(window).scroll(function(){
  
      var N = $(window).scrollTop();
      console.log(N);
      if(N > 140){
        $('.top').addClass('smallTop').animate({top: 0, opacity: 1}, 500);
        $('.kv').css('marginTop',140);
        $('#logo').attr('src', 'img/logo_small.png');
      }else{
        $('.top').removeClass('smallTop').stop(true,false).removeAttr('style');
        $('.kv').removeAttr('style');
        $('#logo').attr('src', 'img/329817.png');
      }
  
    })

    $('.btn1').click(function(){
        $('.Block1').show('slow');
        $('.Block2').hide('slow');
        $('.Block3').hide('slow');
    })

    $('.btn2').click(function(){
        $('.Block2').show('slow');
        $('.Block1').hide('slow');
        $('.Block3').hide('slow');
    })

    $('.btn3').click(function(){
        $('.Block3').show('slow');
        $('.Block1').hide('slow');
        $('.Block2').hide('slow');
    })
    
  })