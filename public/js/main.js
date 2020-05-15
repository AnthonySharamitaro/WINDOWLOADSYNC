$(function(main){
  var c = document.getElementById('a');
  console.log(c);
});

$(document).ready();

function main( jQuery ){
  // Control speed-time better with your web app & website to coordinate with a vistor's hardware and/or computer system by loading Javascript elements with other user experience browser components, in example display:none on HTML5 elements load time coordinates with favicon load time in vistor's window/browser and/or others. -- Anthony J. Sharamitaro
  //  OPTION 1
  var c = document.getElementById('a');
  c.style.display = 'none';
  //  or:
  //  OPTION 2
  // document.getElementById('a').style.display = 'none';;
};

$(window).on('load', main);
