$(document).ready(function() {

/**
 * Toggles "done" class on <li> element
 */
 $(document).on('click', 'li', function(e){
  $(this).toggleClass('done');
})

/**
 * Delete element when delete link clicked
 */
 $(document).on('click', 'a.delete', function(e){
  $(this).parents('li').remove();
})


/**
 * Adds new list item to <ul>
 */
  const addListItem = function (e) {

    const text = $('input').val();

    // rest here...
    $('ul').append(`<li><span>${text}</span><a class="delete">Delete</a></li>`)
  };

// add listener for add
 $(document).on('click', 'a.add-item', function(e){
  addListItem();
})


});