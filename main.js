var canvas = new fabric.Canvas("myCanvas");
player_x = 10;
player_y = 10;
block_image_width = 100;
block_image_height = 100;
var player_object = "";
var block_image_object = "";


function player_update() {
    fabric.Image.fromURL("https://cdn3.movieweb.com/i/article/E0JMRM89IuMR12LmP200Pq7vJveapA/1200:100/Avengers-Infinity-War-Jon-Favreau-Executive-Producer.jpg", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y, left: player_x
        });
        canvas.add(player_object);


    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y, left: player_x
        });
        canvas.add(block_image_object);

    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) { 
    keyPressed = e.keyCode;
     console.log(keyPressed);
      if (e.shiftKey == true && keyPressed == '80') {
           console.log("p and shift pressed together");
            block_image_width = block_image_width + 10;
             block_image_height = block_image_height + 10;
              document.getElementById("current_width").innerHTML = block_image_width;
               document.getElementById("current_height").innerHTML = block_image_height;
             } 
             if (e.shiftKey && keyPressed == '77') { console.log("m and shift pressed together");
              block_image_width = block_image_width - 10; 
              block_image_height = block_image_height - 10;
               document.getElementById("current_width").innerHTML = block_image_width;
                document.getElementById("current_height").innerHTML = block_image_height; }

                if(keyPressed == '38') { up();
                     console.log("up");
                     } if(keyPressed == '40') { down();
                         console.log("down");
                         } if(keyPressed == '37') { left();
                             console.log("left"); } if(keyPressed == '39') { right();
                                 console.log("right"); } if(keyPressed == '87')
                                  { 
                                     new_image('https://media.vanityfair.com/photos/5c4ddf0fba532c6650dedf67/1:1/w_1332,h_1332,c_limit/wonder-woman-3-modern.jpg');
                                  console.log("w");
                                 } if(keyPressed == '71') { new_image('https://static.wikia.nocookie.net/marvelcinematicuniverse/images/b/b0/Spider-Man_FFH_Profile.jpg/revision/latest?cb=20190917181733');
                                  console.log("s");
                                 } if(keyPressed == '76') { new_image('https://blog.playstation.com/tachyon/2019/04/unnamed-file-63.jpg?resize=1088,500&crop_strategy=smart');
                                  console.log("i");
                                 } if(keyPressed == '84') { new_image('https://img.cinemablend.com/filter:scale/cb/0/8/8/5/3/6/088536673e7d92d183fcc584f26c5603577ec5886c9f8978e7e49ac9f131bcf5.jpg?fw=1200');
                                  console.log("g");
                                 } if(keyPressed == '82') { new_image('https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/0a823cb0-01a9-4835-a348-c64187783ccb/d37cb96c-805c-4aa2-9f2f-e62d9eb814c7/1280x720/match/image.jpg');
                                   console.log("c");
                                 } if(keyPressed == '89') { new_image('https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Chris_Hemsworth_as_Thor.jpg/220px-Chris_Hemsworth_as_Thor.jpg');
                                  console.log("t");
                                 } if(keyPressed == '68') { new_image('https://i.pinimg.com/originals/18/fe/c2/18fec27db77b40f30ea000ebf85fbfc9.jpg');
                                  console.log("a");
                                 } if(keyPressed == '85') { new_image('https://i.ytimg.com/vi/MAfIvBgChjQ/maxresdefault.jpg');
                                  console.log("h");
                                 } if(keyPressed == '67') { new_image('https://www.denofgeek.com/wp-content/uploads/2015/04/captain-marvel-costume-brie-larson-mcu-movie.png?fit=640%2C409');
                                  console.log("m");
                                 } 
                                }

                                function left() {
                                     if(player_x >0) {
                                          player_x = player_x - block_image_width;
                                           console.log("block image width = " + block_image_width);
                                            console.log("When Left arrow key is pressed, X = " + player_x + " , Y = "+player_y);
                                             canvas.remove(player_object);
                                              player_update();
                                             }
                                             }
                                              function right() {
                                                   if(player_x <=850) { player_x = player_x + block_image_width; 
                                                    console.log("block image width = " + block_image_width);
                                                     console.log("When Right arrow key is pressed, X = " + player_x + " , Y = "+player_y);
                                                      canvas.remove(player_object);
                                                       player_update();
                                                     } 
                                                    }

                                                    function up() {
                                                         if(player_y >=0) {
                                                              player_y = player_y - block_image_height;
                                                               console.log("block image height = " + block_image_height);
                                                                console.log("When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
                                                                 canvas.remove(player_object); player_update();
                                                                 }
                                                                 } 
                                                    function down() { 
                                                        if(player_y <=500) { player_y = player_y + block_image_height;
                                                             console.log("block image height = " + block_image_height);
                                                              console.log("When Down arrow key is pressed, X = " + player_x + " , Y = "+player_y); 
                                                              canvas.remove(player_object); player_update();
                                                             } 
                                                            }