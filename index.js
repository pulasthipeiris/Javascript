$("h1").addClass("big-title margin-50"); //similarly, removeClass, hasClass (boolean)

$("h1").text("bye");

//$("button").text("Don't click me"); // when using $ in jquery, it chooses everything 

$("button").html("<em>heylow</em>");

$("img").attr("src");

$("a").attr("href", "https://www.yahoo.com");

$("h1").click(function(){
    $("h1").css("color", "purple"); //upon clicking h1, it turns purple 
})

$("button").click(function(){
    $("h1").css("color", "orange");
})

$(document).keypress(function(event){
    $("h1").text(event.key);
}
);

$("h1").on("mouseover", function(){
    $("h1").css("color", "purple")
});

$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");