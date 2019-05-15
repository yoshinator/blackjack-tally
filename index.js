var yourHp = 0;
var needed = 0
diamond = 0;
ruby = 0;
emerald = 0;
wins = 0; 
losses = 0;
saphire = 0;




function init(){
     $("#hp").html(yourHp = 0);
    needed = Math.floor(Math.random() * 100);
    diamond = Math.floor(Math.random()*10);
    ruby = Math.floor(Math.random()*10);
    emerald = Math.floor(Math.random()*10);
    saphire = Math.floor(Math.random()*10);
    $("#random-hp").html(needed);

}

init()





$("#message").hide();


$("#card1").click( function(){
    $("#hp").html((yourHp += diamond));
    play()
})

$("#ruby").click(function() {
  $("#hp").html((yourHp += ruby));
  play()
});

$("#emerald").click(function() {
  $("#hp").html((yourHp += emerals));
  play()
});

$("#saphire").click(function() {
  $("#hp").html((yourHp += saphire));
  play()
});

$("#play-again").click(function() {
    init()
    $("#message").hide();
})


function play(){
    if (yourHp > needed ){
    losses+=1
    $("#message h5:first-child").html(("Sorry You lost"))
    $("#message").show()

    } else if (yourHp === needed){
    wins+=1
    $("#message h5:first-child").html("You won!");
    $("#message").show();
    }

    $("#losses").html(losses)
    $("#wins").html(wins)
}

