$(function () {

 
    $("#inscrire").click(function(){
      var valider = true;
      if ($("#nom").val() == "") {
         $("#nom").next(".message").fadeIn().text('*veuillez entrer votre nom');
        valider = false;
      }
     else if (!$("#nom").val().match(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u)) {
         $("#nom").next(".message").fadeIn().text('*veuillez entrer un nom convenable');
        valider = false;
      }
      else {
        $("#nom").next(".message").fadeOut();
      }
  
  
      if ($("#prénom").val() == "") {
         $("#prénom").next(".message").fadeIn().text('*veuillez entrer votre prénom');
        valider = false;
      }
     else if (!$("#prénom").val().match(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u)) {
         $("#prénom").next(".message").fadeIn().text('*veuillez entrer un prénom convenable');
        valider = false;
      }
      else {
        $("#prénom").next(".message").fadeOut();
      }
  
  
  
      if ($("#adresse").val() == "") {
         $("#adresse").next(".message").fadeIn().text('*veuillez entrer votre adresse');
        valider = false;
      }
     else if (!$("#adresse").val().match(/^[#.0-9a-zA-Z\s,-]+$/)) {
         $("#adresse").next(".message").fadeIn().text('*veuillez entrer une adresse convenable');
        valider = false;
      }
      else {
        $("#adresse").next(".message").fadeOut();
      }
  
  
  
      if ($("#mail").val() == "") {
         $("#mail").next(".message").fadeIn().text('*veuillez entrer votre mail');
        valider = false;
      }
     else if (!$("#mail").val().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
         $("#mail").next(".message").fadeIn().text('*veuillez entrer une adresse mail convenable');
        valider = false;
      }
      else {
        $("#mail").next(".message").fadeOut();
      }
  
  
      if ($("#nom").val() == "") {
        $("#nom").next(".message").fadeIn().text('*veuillez entrer votre nom');
       valider = false;
     }
    else if (!$("#nom").val().match(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u)) {
        $("#nom").next(".message").fadeIn().text('*veuillez entrer un nom convenable');
       valider = false;
     }
     else {
       $("#nom").next(".message").fadeOut();
     } 


      if ($("#password").val() == "") {
         $("#password").next(".message").fadeIn().text('*veuillez entrer votre mot de passe');
        valider = false;
      }
     else if (!$("#password").val().match(/^[A-Za-z0-9]{8,}$/i)) {
         $("#password").next(".message").fadeIn().text('*veuillez entrer une mot de passe convenable');
        valider = false;
      }
      else {
        $("#password").next(".message").fadeOut();
      }
  
      if ($("#Copassword").val() == "") {
         $("#Copassword").next(".message").fadeIn().text('*veuillez confirmer votre mot de passe');
        valider = false;
      }
     else if ($("#Copassword").val() != $('#password').val()) {
         $("#Copassword").next(".message").fadeIn().text('*le mot de passe doit être identique au précédent');
        valider = false;
      }
      else {
        $("#Copassword").next(".message").fadeOut();
      }
  
  
  
      if ($("#télé").val() == "") {
         $("#télé").next(".message").fadeIn().text('*veuillez entrer votre numéro de téléphone');
        valider = false;
      }
     else if (!$("#télé").val().match(/^((\+2126|06)|(\+2127|07))([ \-_/]*)(\d[ \-_/]*){8}$/i)) {
         $("#télé").next(".message").fadeIn().text('*veuillez entrer un numéro convenable');
        valider = false;
      }
      else {
        $("#télé").next(".message").fadeOut();
      }
  
      if ($("#civilité").val() == "") {
         $("#civilité").next(".message").fadeIn().text('*veuillez choisir votre civilité');
        valider = false;
      }
      else {
        $("#civilité").next(".message").fadeOut();
      }
  
  
      if ($("#pays").val() == "") {
         $("#pays").next(".message").fadeIn().text('*veuillez choisir votre pays');
        valider = false;
      }
      else {
        $("#pays").next(".message").fadeOut();
      }
     
      return valider;
  
    });
       
  
  });
/*  ********************** Sticky navbar on scroll ********************** */
// $(window).on("scroll", function()
// {
//     if($(window).scrollTop())
//     {
//       $('#navbar').addClass('black');
//     }
//     else
//     {
//       $('#navbar').removeClass('black');
//     }
// });