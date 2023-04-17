function simpleTime() {
    var d = new Date();
    if(d.getSeconds() < 10)
    {
        document.getElementById('myClock').innerHTML = d.getHours() + ":" + d.getMinutes() + ":0" + d.getSeconds();

    }
    else{
        document.getElementById('myClock').innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    }
}
setInterval(simpleTime, 1000);