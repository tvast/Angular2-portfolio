var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: 160
});

var $stamp = $grid.find('.stamp');
var isStamped = false;

$('.stamp-button').on( 'click', function() {
  // stamp or unstamp element
  if ( isStamped ) {
    $grid.masonry( 'unstamp', $stamp );
  } else {
    $grid.masonry( 'stamp', $stamp );
  }
  // trigger layout
  $grid.masonry('layout');
  // set flag
  isStamped = !isStamped;
});
