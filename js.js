$(document).ready(function() {

    generateNewGrid(50);

});

$(window).resize(function() {
    sizeAndPositionGrid($('#gridContainer'));
});

function generateNewGrid(dimensions) {
    var $containerDiv = $('#gridContainer');
    $containerDiv.empty();
    
    sizeAndPositionGrid($containerDiv);

    for(var i = 0; i < dimensions; i++) {
            $containerDiv.append('<div class="row" id="row' + i + '"></div>');
            var $row = $('#row' + i);

        for(var j = 0; j < dimensions; j++) {
            $row.append('<div class="grid"></div>');
        }
    }

    $('.row').css("height", parseInt($containerDiv.height()) / dimensions + "px");
    $('.grid').css('width', 100 / dimensions + "%");

    $('.grid').mouseenter(function () {
        $(this).addClass('colored');
    });

}

function newGridClick() {
    var dimensions = parseInt(prompt("What would you like the dimensions of the new grid to be\n(e.g. For a 64x64 grid type 64)"));

    console.log(dimensions);

    if(isNaN(dimensions) || dimensions < 0) {
        alert("Invalid input, new grid cannot be created");
    }

    else {
        generateNewGrid(dimensions);
    }
}

function sizeAndPositionGrid(grid) {
    var $etchasketch = $('img');
    var $etchasketchPosition = $etchasketch.offset();


    grid.css("height", $etchasketch.css("height"));
    grid.css("width", $etchasketch.css("width"));
    grid.css("top", $etchasketchPosition.top + "px");
    grid.css("left", $etchasketchPosition.left + "px");

}