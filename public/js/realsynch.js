// $('.chosen-select').chosen({width: "100%"});


// $(window).load(function() {

    // $('.grid').masonry({
    //     // options
    //     itemSelector: '.grid-item',
    //     columnWidth: 20,
    //     gutter: 5
    // });

var $container = $('.grid');

// initialize Masonry after all images have loaded  
$container.imagesLoaded( function() {
     $container.masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: 20,
        gutter: 5
    });
});


      $(".page-scroll").on('click', function(event) {
        alert("x");
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });

