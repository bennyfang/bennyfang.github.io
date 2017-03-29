$(document).ready(function() {
    $(".nav a").on("click", function(e)
    {
        //e.preventDefault();
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });
});