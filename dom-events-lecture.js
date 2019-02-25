(function () {
    "use strict";

    var button1 = document.getElementById('one');
    var paragraph = document.getElementById('sub');
    var span = document.getElementById('word');

    var popup = function(e){
        alert('You clicked the heading!');
    };

    var buttonClick = function(e){
        alert("You have clicked the button!");
    };

    var spanClick = function(e){
        alert('You have clicked the Span!');
    };

    var paragraphClick = function(e){
        alert("You clicked the paragraph!");
    };




    button1.addEventListener('click',buttonClick, false );
    paragraph.addEventListener('click', paragraphClick, false );
    span.addEventListener('click', spanClick, false);

    var heading = document.getElementById('main-header');

    heading.addEventListener('click', popup, false);

})