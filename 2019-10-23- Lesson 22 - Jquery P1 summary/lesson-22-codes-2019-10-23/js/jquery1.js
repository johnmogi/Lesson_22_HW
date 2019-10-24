// global
let elems=[];
let parentOfDiv;

$(function(){

    // doc ready logic
    // $(".divCls").html(`div is template`);
    
    // elems = $(".parentDiv").children();

    // chaining example:
    // parentOfDiv =
    // $(".parentDiv")
    // .parent()
    // .children();

    // console.info(parentOfDiv);
    
    // each command example:
    $(".divCls").each(function(i,elem) {
        // selector inside each
        $(elem).html(`div number is ${i+1}`);
    });

    // each command without params example:
    let index =0;
    $(".divCls").each(function() {
        // $(this) will work only in 
        // each command and in JQ 

        $(this).html(`div number is ${index+1}`);
        console.info($(this).html());
        index+=1;
    });

});