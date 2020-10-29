var canvas = new fabric.Canvas(myCanvas);

var player_object = "";
var player_x = 400;
var player_y = 10;
var block_width = 30;
var block_height = 30;
var block_object = "";

function create() {
    fabric.Image.fromURL("player (1).png", function(Img) {
        player_object = Img;
        player_object.scaleToWidth(10);
        player_object.scaleToHeight(140);
        player_object.set({
            left: player_x,
            right: player_y
        });
        canvas.add(player_object);

    });
}

create();

function blockCreate(get_image) {
    fabric.Image.fromURL( get_image, function(Img) {
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            left: player_x,
            right: player_y
        });
        canvas.add(block_object);

    });
}