function onSubmit(){
    if(getGrade() !== "please enter percentages that add up too 100") {
        document.getElementById("grade").innerHTML = "you have a " + getGrade() + "% in this class, you need a ...";
    } else {
        document.getElementById("grade").innerHTML = getGrade();
    }

}
function getGrade() {
    var hw = document.getElementById("hwScores").value;
    var hwWeight = parseInt(document.getElementById("hwWeight").value);
    var cw = document.getElementById("cwScores").value;
    var cwWeight = parseInt(document.getElementById("cwWeight").value);
    var test = document.getElementById("testScores").value;
    var testWeight = parseInt(document.getElementById("testWeight").value);
    var part = document.getElementById("partScores").value;
    var partWeight = parseInt(document.getElementById("partWeight").value);
    var pro = document.getElementById("proScores").value;
    var proWeight = parseInt(document.getElementById("proWeight").value);
    var finalWeight = parseInt(document.getElementById("finalWeight").value);
    if (finalWeight + hwWeight + cwWeight + testWeight + partWeight + proWeight == 100) {
        var hwVar2 = arrSplit(hw);
        var cwVar2 = arrSplit(cw);
        var testVar2 = arrSplit(test);
        var partVar2 = arrSplit(part);
        var proVar2 = arrSplit(pro);
        var hwAvg = avg(hwVar2);
        var cwAvg = avg(cwVar2);
        var testAvg = avg(testVar2);
        var partAvg = avg(partVar2);
        var proAvg = avg(proVar2);
        colorRow(1, hwAvg);
        colorRow(2, cwAvg);
        colorRow(3, testAvg);
        colorRow(4, partAvg);
        colorRow(5, proAvg);
        return calcGrade(hwAvg, hwWeight, cwAvg, cwWeight, testAvg, testWeight, partAvg, partWeight, proAvg, proWeight, finalWeight);
    } else {
        return "please enter percentages that add up too 100";
    }
}
function arrSplit(str){
    var arr = str.split(",");
    for(i = 0; i < arr.length; i++){
        arr[i] = parseInt(arr[i]);
    }
    return arr;
}
function avg(arr){
    var total = 0;
    for(i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total/(arr.length);
}
function fixWeight(weight, finalWeight){
    return (weight)/(100-finalWeight);
}
function calcGrade(hwAvg, hwWeight, cwAvg, cwWeight, testAvg, testWeight, partAvg, partWeight, proAvg, proWeight, finalWeight) {
    var fixHwWeight = fixWeight(hwWeight, finalWeight);
    var fixCwWeight = fixWeight(cwWeight, finalWeight);
    var fixTestWeight = fixWeight(testWeight, finalWeight);
    var fixPartWeight = fixWeight(partWeight, finalWeight);
    var fixProWeight = fixWeight(proWeight, finalWeight);
    return Math.round(100*(fixHwWeight * hwAvg + fixCwWeight * cwAvg + fixTestWeight * testAvg + fixPartWeight * partAvg + fixProWeight * proAvg))/100;
}
function onClick(){
    var avg = getGrade();
    var desGrade =  document.getElementById("gradeWanted").value;
    var finalWeight =  document.getElementById("finalWeight").value;
    if((desGrade - (avg * (100-finalWeight)/100))/(finalWeight/100) > 0) {
        document.getElementById("finalGrade").innerHTML = "you need a " + Math.round(100*(desGrade - (avg * (100 - finalWeight) / 100)) / (finalWeight / 100))/100 + "% or more too get a " + desGrade + " in this class";
    } else {
        document.getElementById("finalGrade").innerHTML = "please submit percentages that add up too 100, and make sure that the final percentage isn't zero"
    }
}
function reset(){
    document.getElementById("grade").innerHTML = "";
    document.getElementById("finalGrade").innerHTML = "";
    //colors
    document.getElementById(1).style.backgroundColor = "#FFFFF0";
    document.getElementById(2).style.backgroundColor = "#FFFFF0";
    document.getElementById(3).style.backgroundColor = "#FFFFF0";
    document.getElementById(4).style.backgroundColor = "#FFFFF0";
    document.getElementById(5).style.backgroundColor = "#FFFFF0";
    //this is all inputs
    var allInputs = document.getElementsByTagName("input");
    console.log(allInputs);
    for(var i = 0; i<=12; i++){
        allInputs[i].value = ""
    }
}
function colorRow(row, grade){
    if(grade > 100){
        document.getElementById(row).style.backgroundColor = "#00FFFF";
    }
    if(grade >= 90 && grade <= 100){
        document.getElementById(row).style.backgroundColor = "#228B22";
    }
    if(grade < 90 && grade >= 80){
        document.getElementById(row).style.backgroundColor = "#7FFF00";
    }
    if(grade < 80 && grade >= 70){
        document.getElementById(row).style.backgroundColor = "#FFD700";
    }
    if(grade < 70 && grade >= 60){
        document.getElementById(row).style.backgroundColor = "#FF8C00";
    }
    if(grade < 60){
        document.getElementById(row).style.backgroundColor = "#FF0000";
}
}
