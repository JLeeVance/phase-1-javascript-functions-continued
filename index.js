function saturdayFun (argument1 = `roller-skate`) {
    const string1 = `This Saturday, I want to ${argument1}!`
    return string1;
}


const mondayWork = function (para2 = `go to the office`) {
    const string2 = `This Monday, I will ${para2}.`;
    return string2;
}


//created a function within the first function, and returned it when declaring it
//That allowed me to return the new variable string3 - meaning that function has closure
function wrapAdjective (para1 = `*`) {
    return function accentPoint(para2 = `special`){
        let string3 = `You are ${para1}${para2}${para1}!`;
        return string3;
    }
}