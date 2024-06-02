    function solve(days) {
        daysOfWeek=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
        result="";
        switch(days){
            case 1:result=daysOfWeek[0];break;
            case 2:result=daysOfWeek[1];break;
            case 3:result=daysOfWeek[2];break;
            case 4:result=daysOfWeek[3];break;
            case 5:result=daysOfWeek[4];break;
            case 6:result=daysOfWeek[5];break;
            case 7:result=daysOfWeek[6];break;
            default:result="Invalid day!";break;
        }
        console.log(result);
    }
solve(35);