//var myCenter = new google.maps.LatLng(35.1166667, -80.7238889);
//
//function initialize() {
//var mapProp = {
//  center:myCenter,
//  zoom:15,
//  scrollwheel:true,
//  draggable:true,
//  mapTypeId:google.maps.MapTypeId.ROADMAP
//  };
//
//var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
//
//var marker = new google.maps.Marker({
//  position:myCenter,
//  });
//
//marker.setMap(map);
//}
//
//google.maps.event.addDomListener(window, 'load', initialize);


// google maps
function initMap() {
        var uluru = {lat: 35.116500, lng: -80.719596};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
// end google maps    
        
        

$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})