  ioConnect();
  function ioConnect(){
  	var socket=io('ws://stm22.srvstm.com:9358');
  	socket.on('connect_error', function(e) {
		socket.io.reconnection(false);
	});
    updateMusic(true);
    socket.on('playerRefresh',function(data){
      updateMusic(false);
    });socket.on('disconnect',function(){});
  }
  function updateMusic(start){

    $.getJSON('/playerN/php/status.php', function(data) {
      //data = $.parseJSON(data);
      if (data.locutor === "Offline"){

      }else if(start === true){

      }else{

        $( "#player" ).effect( "shake");
      }
  });
  }



  $("#reload-btn").click(function(){
    updateMusic(true);
  });
  $("#player").draggable({axis:"x",containment:"#area_player",scroll:false,handle:".handle"});
 
  $(".o-c").click(function(){
    $("#player").toggleClass("minimize");
  });


  $(".play").click(function(){
  	 updateMusic(true);
    $(".play").toggleClass("pause");
  });

  // PLAYER CONTROLER
    var Player = {
      toggleP:function(){
        if ($('#audio').hasClass('pause') === true){
          $("#demo").html();
          $("#demo").html('<audio id="audio" src="http://stm22.srvstm.com:9358/;stream.mp3" ></audio>');
          var currentVolume = ($('#volumeHidden').html())/100;
          $("#audio").prop("volume", currentVolume).trigger('play');

        }else{
            $("#audio").trigger("pause");
            $("#audio").addClass('pause');
        }
      }

    }
  // FIM PLAYER CONTROLER

  //ALERT CONTROLER

    var Alert = {
      show: function(time, html, minimeizeDiv, minimeizeClass){
          $("#alertContent").html(html);
          $("#player-alert").removeClass('minimize-alert');
          setTimeout(function(){ 
            $("#alertContent").html("");
            $("#player-alert").addClass('minimize-alert');
            $(minimeizeDiv).addClass(minimeizeClass);
            $(".player").fadeIn('fast');
        }, time);
        
      }
    }

  //FIM ALERT CONTROLLER
  $(function(){

//VOLUME
 $("#volume > #barra").slider({
  min: 0,
  max: 100,
  value: 100,
  range: "min",
  animate: true,
  slide: function(event, ui) {
     var currentVolume = (ui.value)/100;
     $("#volumeHidden").html(ui.value);
     $("#audio").prop("volume", currentVolume);
  }
 });

//FIM VOLUME


});