
    var calendar2021 = 
    {jan: {1: "Сайхан амарна"}, feb: {1: "Сагсны тэмцээнтэй", 
    3: "Шагнал гардуулна даа", 17: "Жавхлан багшийн лаб 2-ыг хийнэ"}, 
    mar: {2: "Энэ лабынхаа хугацааг сунгах уу яах вэ гэдэгээ шийднэ", 
    6: "Энд юу бичье дээ байз", 8: "Эмэгтэйчүүддээ баяр хүргэнэ дээ"}, 
    apr: {1: "Бүгдээрээ худлаа ярьцаагаагаарай"}, 
    may: {10: "Энэ сард ч ёстой юу ч болдоггүй сар даа"}, 
    jun: {6: "Жавхлан багшийн төрсөн өдөр"},  jul: {4: "Хичээл амарсаан ураа"}, 
    aug: {1: "Хөдөө явдаг цаг даа", 25: "Хичээл сонголт эхэллээ"}, 
    sep: {1: "9-н сарын нэгэн боллоо ерөөсөө бидний баяр даа"}, 
    oct: {13: "Сур сур бас дахин сур"}, nov: {2: "Сурсаар л бай"}, 
    dec: {20: "Өвлийн семистер хаагдах нь дээ", 30: "Дүн гаргаж дууслаа баярлалаа баяртай"} 
}

var monthName = ['January', 'February', 'March'];


function calendarPrint(month){
    var prevMonth = new Date(2021, month -1, 0);
    var current = new Date(2021, 1, 0);
    var dayCountr = 0;
    var htmlCreator = '';
    for(var i = 1; i <= 3; i++){
    htmlCreator += '<div class="may"><h1 class="monthName">'+monthName+'</h1><table class="calendar test" border="1"><tr class="header"><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td><td>Sun</td></tr><tr>';
        for(var i = 0; i <= prevMonth.getDate(); i++){
            dayCountr += 1;
            if(dayCountr % 7 == 0){
                htmlCreator += '</tr><tr>';
                dayCountr = 0;
            }
            if(i >= 27){
            htmlCreator += '<td class="mute">';
            
            htmlCreator += prevMonth.getDate() - prevMonth.getDate() + i;
            
            htmlCreator += '</td>';
            }
        }
        for(var i = 1; i <= current.getDate(); i++){
            dayCountr += 1;
            if(dayCountr % 7 == 0){
                htmlCreator += '</tr><tr>';
                dayCountr = 0;
        }
        if(calendar2021['jan'][i]){
            htmlCreator += '<td class="event">'+i+'</td>';
        }else{
            htmlCreator += '<td>'+i+'</td>';
        }
    } 
    for (var i = 1; i <= 6; i++){
        htmlCreator += '<td class="mute">' + i +'</td>';
    }
}
    htmlCreator += '</tr></table></div>';
   
    document.querySelector('.test').innerHTML = htmlCreator;
    console.log(current);
}

calendarPrint('1');
    //console.log(calendar2021['jan'] [1]);
    
