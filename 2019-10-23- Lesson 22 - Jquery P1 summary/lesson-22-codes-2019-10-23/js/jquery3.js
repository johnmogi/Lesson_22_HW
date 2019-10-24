
$(function(){
    $('.divCls').each(function(i,elem){

        $(elem).addClass(`newClass_${i+1}`);
        $(elem).removeClass(`newClass_${i+1}`);
        // $(elem).removeClass('divCls');

    });
});