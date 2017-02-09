

$(document).ready(function(){
    $(".project").hover(function(){
        var bg = $(this).css('background-image');
        var new_bg = toggleBWSource(bg);
        $(this).css('background-image', new_bg);
        $(this).find("h2").css('text-shadow', '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black');
        $(this).find("h2").css('color', 'white');
    }, function(){
        var bg = $(this).css('background-image');
        var new_bg = toggleBWSource(bg);
        $(this).css('background-image', new_bg);
        $(this).find("h2").css('text-shadow', '');
        $(this).find("h2").css('color', 'transparent');
    });
    // jQuery methods go here...

});

function toggleBWSource(src) {
    if (src.includes('_bw')) {
        return src.replace('_bw', '');
    }
    return src.replace('.jpg', '_bw.jpg');
}