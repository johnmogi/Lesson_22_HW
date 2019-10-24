
$(function(){
    $(".divCls").each(function(i,elem) {
        // selector inside each
        // get attr - class 
        console.log($(elem).attr('class'));
        $(elem).attr('id',`SHAY_DIV_${i+1001}`);
        console.log($(elem).attr('id'));
    });

    let idOfDiv = 
    $($(".divCls")[2])
    .attr('id');

    // get id with parseInt
    idOfDiv = parseInt(idOfDiv.split('_')[2]);

    $($(".divCls")[2])
    .attr('id',`ELAN_DIV_${idOfDiv+1000}`);

    // console.info($($(".divCls")[2]).attr('id'));
    
    $(".divCls").each(function(i,elem) {
        // one attr for each div
        // $(elem).attr('movieName',`${i}zzz`);
        

        // multi attr for each div
        let mockObj = {
            field1:'value1',
            field2:'value2',
            field3:'value3'
        };

        $(elem).attr(mockObj);

        // remove attr example:
        $(elem).removeAttr('field1 field2 field3');
        
    });

});