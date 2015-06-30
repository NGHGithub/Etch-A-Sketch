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

    $('.row').css("height", 100 / dimensions + "%");
    $('.grid').css('width', 100 / dimensions + "%");

    $('.grid').unbind('mouseenter');
    $('.grid').mouseenter(function () {
        if($(this).css('background-color') );
        $(this).addClass('black');
    });

}

function resizeGrid() {
    var dimensions = parseInt(prompt("What would you like the dimensions of the new grid to be\n(e.g. For a 64x64 grid type 64)"));

    if(isNaN(dimensions) || dimensions < 0) {
        alert("Invalid input, new grid cannot be created");
    }

    else {
        generateNewGrid(dimensions);
    }
}

function resetGrid() {
    generateNewGrid(50);
}

function rainbow() {
    $('.grid').unbind('mouseenter');
    $('.grid').unbind('mouseleave');

    $('.grid').mouseenter(function () {
        var r = parseInt(Math.random() * 256);
        var g = parseInt(Math.random() * 256);
        var b = parseInt(Math.random() * 256);
        if(!($(this).hasClass("black")) && !($(this).hasClass("faded"))) {
            $(this).css('background-color', 'rgb(' + r + ', ' + g + ', ' + b + ')');
        }
    });
}

function black() {
    $('.grid').unbind('mouseenter');
    $('.grid').unbind('mouseleave');

    $('.grid').mouseenter(function () {
         $(this).addClass('black');
    });
}

function faded() {
    $('.grid').unbind('mouseenter');
    $('.grid').unbind('mouseleave');

    $('.grid').mouseenter(function () {
        if($(this).hasClass("faded")) {
            var newAlpha = parseFloat($(this).attr("alpha")) + .1;
            $(this).attr('alpha', newAlpha);
            $(this).css('background-color', 'rgba(0, 0, 0, ' + newAlpha + ')');
        }
        else if(!($(this).hasClass("black")) && !($(this).hasClass("rainbow"))) {
            $(this).addClass("faded");
            $(this).css('background-color', 'rgba(0, 0, 0, .1)');
            $(this).attr('alpha', '.1');
        }
    });
}

function trails() {
    $('.grid').unbind('mouseenter');
    $('.grid').unbind('mouseleave');

    $('.grid').mouseenter(function () {
        $(this).addClass('trail');
    });

    $('.grid').mouseleave(function () {

        if(!($(this).hasClass("black")) && !($(this).hasClass("rainbow")) && !($(this).hasClass("faded"))) {
            $(this).fadeTo(500, 0, function () {
                $(this).removeClass("trail");
                $(this).css("opacity", "1");
            });
        }

        else {
            $(this).removeClass("trail");
        }

    });
}

function eraser() {
    $('.grid').unbind('mouseenter');
    $('.grid').unbind('mouseleave');

    $('.grid').mouseenter(function () {
         $(this).removeClass('black');
         $(this).removeClass('faded');
         $(this).css('background-color', '');
    });
}

function sizeAndPositionGrid($grid) {
    var $etchasketch = $('img');
    var $etchasketchPosition = $etchasketch.offset();

    $grid.css("height", $etchasketch.css("height"));
    $grid.css("width", $etchasketch.css("width"));
    $grid.css("top", $etchasketchPosition.top + "px");
    $grid.css("left", $etchasketchPosition.left + "px");

}
