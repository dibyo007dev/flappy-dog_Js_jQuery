$(function() {
    $("#game-screen").hide();
    $("#start-game").on("click", function() {
        $("#game-screen").fadeIn(300);
    });

    $("#game-screen2").hide();  // score pop-up



    var count=0;

    var pipeno=0;

    $(window).keypress(function() {



      var doggy = $("#dog").offset();
      var obs = $(".pipe").eq(pipeno).offset();
      var dogright = doggy.left + $("#dog").width();
      var obsright = obs.left + $(".pipe").eq(pipeno).width();

        // jump function -----------
        console.log("keypressed");


        console.log("doggy's position :"+ dogright);
        console.log("Obsticle's position :"+obs.left);
        console.log("Obsticle's position :"+obsright);
        console.log("selected pipe number :"+pipeno);
        console.log("Points Count :"+count);

        if ( (dogright <= obs.left - 4 ) && (dogright <= obs.left)  ) {
            // success jump

            $("#dog").css("animation", "jump 0.5s linear both");
            setTimeout(
                function() {
                    $("#dog").css("animation", "none");
                    count++;
                //    $(".pipe").remove();
                }, 500);

            pipeno++;
        }

        else if( dogright < obs.left  ){

           // normal jump

          $("#dog").css("animation", "jump 0.5s linear both");
          setTimeout(
              function() {
                  $("#dog").css("animation", "none");

              }, 500);

        } else if ((dogright > obs.left) && (dogright < obsright + 5) ) {
            // false jump

            $("#dog").css("animation", "out 0.1s linear forwards");
            // stop whole animation
            //cloud
            $("#back").css("animation", "none");
            $("#back1").css("animation", "none");
            $("#back2").css("animation", "none");
            $("#back3").css("animation", "none");
            $("#back4").css("animation", "none");
            //ground
            $("#ground").css("animation", "none");
           //  pop-up of game over -

           // alert("your game is over and your point is : " + count);

           $("#game-screen2").delay(700).fadeIn(200);

            $("#game-screen2 h2 span").append(count);

        }


     else {
        $("#dog").css("animation", "jump 0.5s linear both");
        setTimeout(
            function() {
                $("#dog").css("animation", "none");
            }, 500);
      }
    });


});
