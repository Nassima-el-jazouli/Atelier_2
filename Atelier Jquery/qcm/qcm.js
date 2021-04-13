$(document).ready(function(){
var note=0;
$('#envoyer').click(function(){
    valid=true;
     
    //la coleur orange
       let result=$('input[name="bootstrap"]:checked') ;
    if(result.length==0)
      {    
     $("#q1").css("color","orange");
        valid =false;
      }
    else{
    //la couleur des questions
    let r = $("input[name='bootstrap']:checked").val();
    if(r=="11"){
    $("#q1").css( "color", "green");
    note++;
    
    valid=false;
    }else{
    $("#q1").css("color","red");
    valid=false;
    }
    //la couleur des réponces
    $("#q11").css("color","green");
    if(r=="12")
    {
      $("#q12").css("color","red");
    }else if(r=="13")
    $("#q13").css("color","red");
    }
   return valid;
   
});



// pour la 2 ème question :
$('#envoyer').click(function(){
  valid=true;
   
  //la coleur orange
    let result=$('input[name="jquery"]:checked') ;
  if(result.length==0)
    {    
   $("#q2").css("color","orange");
      valid =false;
    }
  else{
  //la couleur des questions
  let r = $("input[name='jquery']:checked").val();
  if(r=="22"){
  $("#q2").css( "color", "green");
  note++;
 
  valid=false;
  }else{
  $("#q2").css("color","red");
  valid=false;
  }
  //la couleur des répances
  $("#q22").css("color","green");
  if(r=="21")
  {
    $("#q21").css("color","red");
  }else if(r=="23")
  $("#q23").css("color","red");
  }
 return valid;
 
});





 //pour la 3 ème question :
$('#envoyer').click(function(){
  valid=true;
   
  //la coleur orange
    let result=$('input[name="laravel"]:checked') ;
  if(result.length==0)
    {    
   $("#q3").css("color","orange");
      valid =false;
    }
  else{
  //la couleur des questions
  let r = $("input[name='laravel']:checked").val();
  if(r=="33"){
  $("#q3").css( "color", "green");
  note++;

  valid=false;
  }else{
  $("#q3").css("color","red");
  valid=false;
  }
  //la couleur des répances
  $("#q33").css("color","green");
  if(r=="31")
  {
    $("#q31").css("color","red");
  }else if(r=="32")
  $("#q32").css("color","red");
  }
 return valid;
 
});








//pour la 4 ème question :

$('#envoyer').click(function(){
  valid=true;
   
  //la coleur orange
    let result=$('input[name="react"]:checked') ;
  if(result.length==0)
    {    
   $("#q4").css("color","orange");
      valid =false;
    }
  else{
  //la couleur des questions
  let r = $("input[name='react']:checked").val();
  if(r=="41"){
  $("#q4").css( "color", "green");
  note++;
  
  valid=false;
  }else{
  $("#q4").css("color","red");
  valid=false;
  }
  //la couleur des répances
  $("#q41").css("color","green");
  if(r=="42")
  {
    $("#q42").css("color","red");
  }else if(r=="43")
  $("#q43").css("color","red");
  }
 return valid;
 
});




//pour la 5 ème question :

$('#envoyer').click(function(){
  valid=true;
   
  //la coleur orange
    let result=$('input[name="qcm"]:checked') ;
  if(result.length==0)
    {    
   $("#q5").css("color","orange");
      valid =false;
    }
  else{
  //la couleur des questions
  let r = $("input[name='qcm']:checked").val();
  if(r=="52"){
  $("#q5").css( "color", "green");
  note++;

  valid=false;
  }else{
  $("#q5").css("color","red");
  valid=false;
  }
  //la couleur des répances
  $("#q52").css("color","green");
  if(r=="51")
  {
    $("#q51").css("color","red");
  }else if(r=="53")
  $("#q53").css("color","red");
  }







  $("#q6").html("mon score est : " + note + "/5");
 return valid;
 
});


});