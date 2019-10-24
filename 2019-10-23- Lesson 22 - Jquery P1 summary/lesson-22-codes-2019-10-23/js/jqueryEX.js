
$(function(){

    // multi attr for each div
    let index = 1;
    $('.divCls').each(function(){

        let mockObj = {
            id:`div_id_${index}`,
            name:`abc_${index}_def`
        };

        $(this).html(mockObj.name);
        $(this).attr(mockObj);

        index++;
    });
});

function removeClasses(){
    $('.divCls').each(function(){
        $(this).removeAttr('class');
    });
}
