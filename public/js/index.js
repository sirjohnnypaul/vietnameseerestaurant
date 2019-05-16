var menuBottom = false;
var menuRed = false;
var menuBlack = true;
var menuOrange = false;
var mapLoaded = false;

// Main Load
$(".defaultnavbar").hide();
$(".topnavbar").hide().fadeIn("fast");
$(".bottomNavbar").hide().fadeIn("fast");
$(".slideMenu").hide();
$(".pagesection").load("/mainPage").hide().fadeIn();

// Lazy Load
window.addEventListener("scroll", function(){
    var menuImages = document.getElementsByClassName("menuimage");
    // for (var i in menuImages) {
    //     if (menuImages[i].getBoundingClientRect().bottom > document.documentElement.clientHeight){
    //         console.log("new element found", menuImages[i].getBoundingClientRect().bottom);
    //     } 
    // } 

    if (document.getElementById("5").getBoundingClientRect().top < document.documentElement.clientHeight ){
        console.log("Element 5 in vision")
    }
},false);

// Click Actions
$(".defaultlogo").click( function(event){
    event.preventDefault();
    closeRed();
    $(".pagesection").fadeOut(300, function(){
        openOrange();
        $(".pagesection").load("/mainPage").hide().fadeIn();
        if(window.innerWidth > 700){
            $(".bottomnavli").fadeIn("fast").show();
        }
    });
})

$(".defaultlinksPart a").click( function(event){
    event.preventDefault();
    console.log(event.target);
    $(".pagesection").fadeOut(300, function(){
        $(".pagesection").load(event.target.href).fadeIn();
    });
})

$(".iconBottomNavBar").click(function(){
    (menuBottom) ? menuClose() : menuOpen();
});

$(".bottomnavli").click( function(event){
    event.preventDefault();
    closeBlack();
    menuClose();
    closeOrange();
    $(".pagesection").fadeOut(300, function(){
        openRed();
        $(".pagesection").load(event.target.href).fadeIn();
    });
});

$(".checkoffer").click( function(event){
    event.preventDefault();
    closeBlack();
    menuClose();
    closeOrange();
    $(".pagesection").fadeOut(300, function(){
        openRed();
        $(".pagesection").load("/menu",function(){}).hide().fadeIn();
    });
});


// Functions

function menuOpen(){
    $(".descriptiontwo").css("font-size","0px").css("opacity","0");
    $(".description").css("font-size","0px").css("opacity","0");
    $(".checkoffer").css("top","-3%");
    $(".bottomNavbar").height("60%");
    $(".iconBottomNavBar").css("transform","rotate(90deg)").css("top", "2%");
    $(".bottomnavli").fadeIn("fast").show().css("display","block");
    menuBottom = true;
} 

function menuClose(){
    $(".descriptiontwo").css("font-size","3vh").css("opacity","1");
    $(".description").css("font-size","1.4em").css("opacity","1");
    $(".checkoffer").css("top","4%");
    $(".descriptiontwo").fadeIn();
    $(".bottomNavbar").height("13%");
    $(".iconBottomNavBar").css("transform","rotate(-90deg)").css("top", "auto");
    $(".bottomnavli").fadeOut("slow");
    menuBottom = false;
}

function openRed(event){
    new Promise( function(resolve, reject) {
        $(".topnavbar").height("0%").fadeOut("fast", function(){
            $(".topnavbar").hide();
            $(".defaultnavbar").fadeIn().height("12%");
            resolve();
        });
    });
}

function closeRed(event){
    new Promise( function(resolve, reject) {
        $(".defaultnavbar").height("0%").fadeOut("fast", function(){
            $(".defaultnavbar").hide();
            $(".topnavbar").fadeIn().height("auto");
            resolve();
        });
    });
}

function openBlack(){
    new Promise( function(resolve, reject) {
        $(".topnavbar").height("auto").fadeIn("slow", function(){
            menuBlack = true;
            resolve();
        });
    })
}

function closeBlack(){
    new Promise( function(resolve, reject) {
        $(".topnavbar").height("auto").fadeOut( function(){
            $(".topnavbar").hide();
            menuBlack = false;
            resolve();
        });
    })
}
    
function openOrange(){
    new Promise( function(resolve, reject) {
        $(".bottomNavbar").height("13%").fadeIn( function(){
            menuOrange = true;
            resolve();
        });
    })
}

function closeOrange(){
    new Promise( function(resolve, reject) {
        $(".bottomNavbar").height("0%").fadeOut( function(){
            $(".bottomNavbar").hide();
            menuOrange = false;
            resolve();
        });
    })
}

function validateForm(){
    $(".name").val()
    $(".email").val()
    $(".message").val()
    $("#checkText").is(":checked");
}