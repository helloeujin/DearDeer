// WRITING POEM
// var poem = "MY POEM<br><br>by Rich Accetta-Evans<br><br>My poem delights me.<br>My poem is mine.<br><br>It is like fresh bread<br>When I bake it myself.<br><br>It is like my son<br>The day he was born.<br><br>I laughed as I wrote it,<br>And clapped my hands.<br><br>I will stop a stranger<br>To show him my poem.<br><br>Because it delights me.<br>Because it is mine.<br><br>September 11, 1993.";
// var poem = "MY POEM<br><br>My poem delights me.<br>My poem is mine.<br><br>It is like fresh bread<br>When I bake it myself.<br><br>It is like my son<br>The day he was born.<br><br>I laughed as I wrote it,<br>And clapped my hands.<br><br>I will stop a stranger<br>To show him my poem.<br><br>Because it delights me.<br>Because it is mine.";
var poem = "<span id='q2'>MY POEM</span><br><br><span id='q2'>My poem</span> delights me.<br><span id='q2'>My poem</span> is mine.<br><br>It is like <span id='q3'>fresh bread</span><br>When <span id='q4'>I bake it</span> myself.<br><br>It is like <span id='q5'>my son</span><br>The day <span id='q5'>he</span> was born.<br><br>I <span id='q6'>laughed</span> as I wrote it,<br>And clapped my hands.<br><br>I will stop a stranger<br>To show him my poem.<br><br>Because it delights me.<br>Because it is mine.";
// <span id='q1'>by Rich Accetta-Evans</span>

$(function(){
    d3.select('#logoImg').transition().duration(3000)
    	.style('opacity', 1);

    setTimeout(function () {
    	typingPoem(); 

    	d3.select('#logoImg').transition().duration(10000)
    	.style('opacity', 0.0);
    }, 3000);

});

function typingPoem () {
    $("#typed").typed({
    	strings: [poem],
    	typeSpeed: 60,
    	backDelay: 400,
    	loop: false,
    	contentType: 'html',
    	loopCount: false
    });
};

var height = $(window).height();  

$(document).ready(function() {

	// Right
	$('#rightArrow').click(function() {

		$('#rightArrow').css('visibility', 'hidden');
		$('#leftArrow').css('visibility', 'visible');

		console.log('right clicked');
		showViz();
	});

	// Left
	$('#leftArrow').click(function() {

		$('#leftArrow').css('visibility', 'hidden');
		$('#rightArrow').css('visibility', 'visible');

		console.log('left clicked');
		hideViz();
	});
});

function showViz() {

	$('body').css('background-color', '#000');
	$('#viz2').css('visibility', 'visible');
	$('#logoImg').css('visibility', 'hidden');
	$('.poem').css('visibility', 'hidden');

	Move();
}

function hideViz() {

	$('body').css('background-color', '#000');
	$('#viz2').css('visibility', 'hidden');
	$('#logoImg').css('visibility', 'visible');
	$('.poem').css('visibility', 'visible');
}
