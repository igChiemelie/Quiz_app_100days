// setTimeout(function() {
// 	document.getElementById('demo').innerHTML = 'Hello World!';
// }, 2000);

// setTimeout(function() {
// 	$('#demo').html('Hello World Again');
// }, 5000);


/******SELECT HTML ELEMENT */
// SELECT HTML EL: id
$('#demo');
// SELECT HTML EL: class
$('.demo');
// SELECT HTML EL: compound selectors
var ainLastDiv = $('div:last-child p a');

/**SETTING AND GETTING HTML ELEMENT CONTENT */
// SET
//$('#demo').html('<p>Hello World Again</p>');
$('#demo').text('<p>Hello World Again</p>');

// GET
// var x = $('#demo').html();
// var y = $('#demo').text();

// console.log(x);

//USE CASE: Check if element with demo class contains an image

    // QUESTION ..........
function checkForImg(el) {
    var y = $('.' + el).html();
    // console.log($('.' + el).html());
    
    var threeCharAfterTheFirstChar = y.substring(1, 4);
    if (threeCharAfterTheFirstChar == 'img') {
        return 'this element contains an img';
    } else {
        return "this element doesn't contains an img";
    }
}
//note: the element to pass to this function must be a class
var response = checkForImg('par');
console.log(response);

//RESPOND TO EVENTS
// $('p a').click(function (e) {
//     e.preventDefault();
// });
// $('p a').dblclick(function (e) {
//     e.preventDefault();
//     alert('clicked');
// });

$('input[name="uName"]').keyup(function () {
    var a = $('input[name="uName"]').val();
    if (a.length >= 8) {
        $('button').prop('disabled', false);
    } else {
        $('button').prop('disabled', true);
    }

});



// SUBSTRING TUT
var anim = 'Leopard';
//var res = anim.substring(3, 7);
var res = anim.slice(-4);
//console.log(res);
//#LabourChallenge
