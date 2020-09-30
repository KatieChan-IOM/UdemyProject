// Check if the list is getting clicked, if so apply or remove a strikethrough
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});    

// Check if the trash icon is being clicked, if so remove the to-do task
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(400, function(){
        $(this).remove();
    });
    event.stopPropagation();    // stop event bubbling 
});

// Create new to-do task
$("input[type='text']").keypress(function(event){
    if (event.which === 13) {           // if the enter is hit
        var newTask = $(this).val();  // Grab the text from the input
        $(this).val("");      // clear the input
        // Create a new li and add it to the ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + newTask + "</li>");
    };
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
}); 
