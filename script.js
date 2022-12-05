function edit(){
    if (document.getElementById('btn').value=="ИЗМЕНИТЬ") {
        document.getElementById('btn').value = "СОХРАНИТЬ";
        document.getElementById('fio').disabled=0;
        document.getElementById('male').disabled=0;
        document.getElementById('female').disabled=0;
        document.getElementById('day').disabled=0;
    }
    else{
        document.getElementById('btn').value="ИЗМЕНИТЬ";
        document.getElementById('fio').disabled=1;
        document.getElementById('male').disabled=1;
        document.getElementById('female').disabled=1;
        document.getElementById('day').disabled=1;
        let year= (new Date().getTime() - new Date(document.getElementById('day').value).getTime()) / (24 * 3600 * 365.25 * 1000) |0;
        document.getElementById('year').value = year;
        console.log(year)
    }

}