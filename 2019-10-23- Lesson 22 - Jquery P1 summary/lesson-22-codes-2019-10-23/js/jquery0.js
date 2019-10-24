
// global 
$(document).ready(function(){
    // JQ or JS logic
    // alert('JQ is inited');

    // selector - css
    $("#div1").html("Hello jQuery");

    // $("#div1").html("Hello jQuery"); is equal to
    // document.getElementById("div1").innerHTML = "Hello jQuery";

    // ex - selector
    $(".divCls").html(`div is ${'template'}`);

    // $(".divCls.2").html(`div 2 is ${'template'}`);
});

// before JQ
// alert('before JQ inited');
