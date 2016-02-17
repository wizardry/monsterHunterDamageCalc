$(function(){
    var sharpnessColor = ['白', '青', '緑', '黄', '橙', '赤'];
    var critical = 125;
    var specialcritical = 140;
    var badCritical = 75;
    var sharpness = app.const.SHARPNESS;
    sharpness.reverse();
    var th = $('<tr/>');
    var table = $('#damegeList');
    th.append($('<th/>'))
    for (var i = 150; i < 310; i = i+10) {
        th.append($('<th>').text(i));
    };
    table.find('thead').append(th);

    $.each(sharpnessColor,function(index,color){
        var row = $('<tr/>')
        var row_in_row2 = $('<tr/>');
        var row_in_row3 = $('<tr/>');
        var row_in_row4 = $('<tr/>');
        row_in_row2.addClass('cri');
        row_in_row3.addClass('badcri');
        row_in_row4.addClass('specri');
        row.append($('<th/>').text(color).attr('rowspan',4));
        for (var i = 150; i < 310; i = i+10) {
            var atack = i;
            console.log('1:'+ (i * (sharpness[index].physics*100)) /10000)
            row.append($('<td/>').text( (i * (sharpness[index].physics*100)) /100));
            row_in_row2.append($('<td/>').text( (i * (sharpness[index].physics*100) * critical) /10000 ));
            row_in_row3.append($('<td/>').text( (i * (sharpness[index].physics*100) * badCritical) /10000)) ;
            row_in_row4.append($('<td/>').text( (i * (sharpness[index].physics*100) * specialcritical) /10000)) ;
        };
        table.find('tbody').append(row);
        table.find('tbody').append(row_in_row2);
        table.find('tbody').append(row_in_row3);
        table.find('tbody').append(row_in_row4);
    })
})