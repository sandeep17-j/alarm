
  const dropdown = document.getElementById('hours');
  for (let i = 0; i <= 12; i++) {
      const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    dropdown.appendChild(option);
  }
  const dropdown1 = document.getElementById('minutes');
  for (let i = 0; i <= 60; i++) {
    var length=i.toString().length;
    if(length<=1){
    const option = document.createElement('option');
    option.value = '0'+i;
    option.textContent = '0'+i;
    dropdown1.appendChild(option);
  }
  else{
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    dropdown1.appendChild(option);
  }
}
const dropdown2 = document.getElementById('seconds');
for (let i = 0; i <= 60; i++) {
  var length=i.toString().length;
  if(length<=1){
  const option = document.createElement('option');
  option.value = '0'+i;
  option.textContent = '0'+i;
  dropdown2.appendChild(option);
}
else{
  const option = document.createElement('option');
  option.value = i;
  option.textContent = i;
  dropdown2.appendChild(option);
}
}
var y,time;
  $("#float").hide();
  $("#timer").click(function(){$("#float").show();});
  function timeout(){
  var x=new Date();
  y=x.toLocaleTimeString();
  console.log(y);
  if(y==time){
    audios();
  }
  }
  $('#confirm-text').hide();
  $('#turn-off').hide();
  function ok(){
    var HH=document.getElementById('hours').value;
    var MM=document.getElementById('minutes').value;
    var SS=document.getElementById('seconds').value;
    var AMPM=document.getElementById('ampm').value;
   time=HH+':'+MM+':'+SS+' '+AMPM;
    console.log(time);
    setInterval(timeout,1000);
  }
  function audios(){
  var a=document.getElementById('file').path;
  audio =new Audio('song.mp3');
audio.play();
$('#confirm-text').show();
$('#turn-off').show();
$('#turn-off').click(function(){
  var c=$('#confirm-text').val();
  if(c=='ABCD'){audio.pause();}
  else{window.alert('enter ABCD properly');}
})
console.log(c);
}

 


    
