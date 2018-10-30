$(function(){
    //var heightRectangle = 50;
  $('#10px').click(function(){
    if ($('#rectangle').height() < 100) {
      $('#rectangle').css('height', '+=10');
    } else {
      $('#rectangle').css('height', '10px');
    }
    //$('canvas').height(heightRectangle);
  });
  $('#green').click(function(){
    $('#rectangle').css('background', 'green');
  });
  $('#init').click(function(){
    $('#rectangle').css('background', '');
  });
  $('#hide').click(function(){
    $('#rectangle').hide();
  });
  $('#show').click(function(){
    $('#rectangle').show();
  });
});
