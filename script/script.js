

// var toastTrigger = document.getElementById('liveToastBtn')
// var toastLiveExample = document.getElementById('liveToast')
// if (toastTrigger) {
//   toastTrigger.addEventListener('click', function () {
//     var toast = new bootstrap.Toast(toastLiveExample)

//     toast.show()
//   })
// }


function toastClick(item){
    var toastLiveExample = document.getElementById('liveToast');
    document.getElementById('toastContent').innerHTML = item;
    var toast = new bootstrap.Toast(toastLiveExample);

    toast.show();
}


$('.form').find('input, textarea').on('keyup blur focus', function (e) {
   
  var $this = $(this),
      label = $this.prev('label');
 
      if (e.type === 'keyup') {
            if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
        if( $this.val() === '' ) {
            label.removeClass('active highlight'); 
            } else {
            label.removeClass('highlight');   
            }   
    } else if (e.type === 'focus') {
       
      if( $this.val() === '' ) {
            label.removeClass('highlight'); 
            } 
      else if( $this.val() !== '' ) {
            label.addClass('highlight');
            }
    }
 
});
 
$('.tab a').on('click', function (e) {
   
  e.preventDefault();
   
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
   
  target = $(this).attr('href');
 
  $('.tab-content > div').not(target).hide();
   
  $(target).fadeIn(600);
   
});
