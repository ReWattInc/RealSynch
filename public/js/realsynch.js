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
