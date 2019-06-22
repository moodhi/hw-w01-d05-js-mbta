const subway ={
    red :
    ['South_Station','Park_Street','Kendall','Central','Harvard','Porter','Davis','Alewife',],
    green :
    ['Government_Center','Park_Street','Boylston','Arlington','Copley','Hynes','Kenmore',],
    orang :
    ['North_Station','Haymarket','Park_treet', 'State','Downtown_Crossing', 'Chinatown','Back_Bay','Forest_Hills',]
    }
    
    
    
    function stopsBetweenStations(station1, point1, station2, point2){
     
       
        let total = 0, val1 = 0, val2 = 0;
       
        val1 = subway[station1].indexOf(point1) + 1;
        val2 = subway[station2].indexOf(point2) + 1;
       
        if(station1 === station2){
            if(val2 > val1){
                total = (val2 - val1) - 1;
            } else if(val1 > val2){
                total = (val1 - val2) - 1;
            } else{
                total = 0;
            }
        } else {
            switch(station1){
                case "red":
                    if(station2 == "green"){
                        total = (( subway['red'].length) - val1) - 2;
                    } else if(station2 == "orang "){
                        total = ((val2 + subway['red'].length + subway['green'].length) - val1) - 1;
                    }
                    break;
                case "green":
                    if(station2 == "red"){
                        total = ((val1 + subway['red'].length) - val2) - 1;
                    } else if(station2 == "orang "){
                        total = ((val2 + subway['green'].length) - val1) - 1;
                    }
                    break;
                case "orang":
                    if(station2 == "green"){
                        total = ((val1 + subway['green'].length) - val2) - 1;
                    } else if(station2 == "red"){
                        total = ((val1 + subway['green'].length + subway['red'].length) - val2) - 1;
                    }
                    break;
            }
        }
    return total;    
    }
    stopsBetweenStations('red', 'Alewife', 'red', 'Alewife')
    //stopsBetweenStations('red', 'Alewife', 'red', 'South Station')
    //stopsBetweenStations('red', 'South Station', 'green', 'Kenmore')