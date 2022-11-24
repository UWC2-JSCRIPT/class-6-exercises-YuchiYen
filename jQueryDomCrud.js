$(document).ready(function() {

// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>
    const $a = $('<a>');
    $a.text('Buy Now!');
    $a.attr('id','cta')
    
    // let lastP = $('p').last();
    // lastP.append($a);
    $('main').append($a);
  
// Access (read) the data-color attribute of the <img>,
// log to the console

//var color = $('img').attr('data-color');
console.log(`img data-color is: ${$('img').attr('data-color')} `);

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"
//$('li:eq(2)').attr('class','highlight');
$('li:eq(2)').addClass('highlight');

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
 $('p:last').remove();

// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"

$a.click(function() {
    $a.text('Added to cart');
  });
});