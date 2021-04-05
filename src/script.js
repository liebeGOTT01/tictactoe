
$(document).ready(function () {
    $("#p1-turn").show()
    $("#p2-turn").hide()


    var turn = 0;
    var x = '<img class="x-img" src="../src/imgs/x.png" alt="">';
    var o = '<img class="o-img" src="../src/imgs/o.png" alt="">';

    var hasWinner = false;

    var s0 = $("#s0");
    var s1 = $("#s1");
    var s2 = $("#s2");
    var s3 = $("#s3");
    var s4 = $("#s4");
    var s5 = $("#s5");
    var s6 = $("#s6");
    var s7 = $("#s7");
    var s8 = $("#s8");



    $(".square").on("click", function () {
  
        console.log(turn)

        if ( hasWinner == false && turn==8) {
            restart();
            $("#result").text("GAME IS TIED!");
        }
        if (turn % 2 == 0) {
            setTimeout(
                function () {
                    $("#p2-turn").show()
                    $("#p1-turn").hide()
                        ;
                }, 300);
            $(this).append(x)
           

        } else {
            setTimeout(
                function () {
                    $("#p2-turn").hide()
                    $("#p1-turn").show()
                        ;
                }, 300);

            $(this).append(o);
           
        }
        turn++;
        
        if (s0.html() == x && s1.html() == x && s2.html() == x ||
            s3.html() == x && s4.html() == x && s5.html() == x ||
            s6.html() == x && s7.html() == x && s8.html() == x ||
            s0.html() == x && s3.html() == x && s6.html() == x ||
            s1.html() == x && s4.html() == x && s7.html() == x ||
            s2.html() == x && s5.html() == x && s8.html() == x ||
            s0.html() == x && s4.html() == x && s8.html() == x ||
            s2.html() == x && s4.html() == x && s6.html() == x) {
            hasWinner == true;
            restart()
            $("#result").text("PLAYER 1 WON!");
        }

        if (s0.html() == o && s1.html() == o && s2.html() == o ||
            s3.html() == o && s4.html() == o && s5.html() == o ||
            s6.html() == o && s7.html() == o && s8.html() == o ||
            s0.html() == o && s3.html() == o && s6.html() == o ||
            s1.html() == o && s4.html() == o && s7.html() == o ||
            s2.html() == o && s5.html() == o && s8.html() == o ||
            s0.html() == o && s4.html() == o && s8.html() == o ||
            s2.html() == o && s4.html() == o && s6.html() == o) {
            hasWinner == true;
            restart()
            $("#result").text("PLAYER 2 WON!");
        }

       

        function restart() {
            setTimeout(
                function () {
                    $("#restart").removeClass("hide");
                    $("#restart").addClass("animate");
                },100);

        }
        $(this).css("pointer-events", "none");
    });


    $("button").on('click', function () {
        location.reload();
    })

});