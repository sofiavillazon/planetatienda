/*==================================================*/
/*1.-sidebar click options..........................*/
/*==================================================*/

$('a.clickOp').on('click', function(){
  // $(".principalSubmenu").toggleClass('open')
  $(this).parent().find( "ol" ).toggleClass('open')
  $(this).find( ".icon-arrow-down-l" ).toggleClass('rotateElm')
});

 // HANDLER MOBILE
 $('.handlerSide2').on('click', function(){
  $('.sidebar').toggleClass('ocultomov');
});

// DROPIFY
$('.dropify').dropify({ messages: {
    'default': 'Arrastra tus imágenes',
    // 'default2': 'Los formatos admitidos son los siguientes: .png, .jpg, .docx, .doc, .pdf..  ',
    'default2': '  ',
    'replace': 'Haga Click o arrastre para remmplazar el archivo',
    'remove':  'Eliminar',
    'error':   'Lo sentimos, algo no salió bien.'
  }
});