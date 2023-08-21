function countdown(){
    const date=new Date();
    const currentyear= date.getFullYear();
    const nextyear=new Date(`January 01 ${currentyear+1} 00:00:00`);
    let currentdate=new Date();

    let difference=nextyear-currentdate;
    let days=Math.floor(difference/1000/60/60/24);
    let hours=Math.floor((difference/1000/60/60)%24);
    let minutes=Math.floor((difference/1000/60)%60);
    let seconds=Math.floor((difference/1000)%60);

    days=days<10?"0"+days: days;
    hours=hours<10?"0"+hours:hours;
    minutes=minutes<10?"0"+minutes:minutes;
    seconds=seconds<10?"0"+seconds:seconds;

    document.querySelector("#days").innerHTML=days;
    document.querySelector("#hours").innerHTML=hours;
    document.querySelector("#mins").innerHTML=minutes;
    document.querySelector("#secs").innerHTML=seconds;
    document.querySelector("#newyear").innerHTML=currentyear+1;
}

setInterval(function(){
    countdown();
});
