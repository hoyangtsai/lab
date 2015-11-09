$('.item').on('click', function(event) {
  event.preventDefault();
  console.log('click');
});

// $('#list').on('click', '.item', function(event) {
//   event.preventDefault();
//   console.log('click');
// });

// $('#list').delegate('.item', 'click', function(event) {
//   event.preventDefault();
//   console.log('click');
// });

$('#add').on('click', function(event) {
  event.preventDefault();
  $('<li/>', {
    'class': 'item',
    'text' : 'Item'
  }).appendTo('#list');
});