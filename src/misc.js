


function convertTime(x){
    let hour = Math.floor(x/60);
    let end = "AM"
    if(hour > 12){
        end = "PM";
        hour-=12;
    } 
    return (hour) +":" +((x%60 < 10)? "0" + (x%60) : (x%60))  + end; 
}

export default {convertTime:convertTime};