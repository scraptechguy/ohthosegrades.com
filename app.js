let result_div = document.getElementById("result");

var weight1 = document.getElementById("weight-1");
var weightOutput1 = document.getElementById("output1");
weightOutput1.innerHTML = weight1.value; 

var grade1 = document.getElementById("grade-1")
var gradeOutput1 = document.getElementById("output2");
gradeOutput1.innerHTML = grade1.value;


function main() {
    weight1.oninput = function() {
        weightOutput1.innerHTML = this.value;
    }

    grade1.oninput = function() {
        gradeOutput1.innerHTML = this.value;
    }

    result_div.oninput = function() {
        result_div.innerHTML = (weight1.value/100) * (grade1.value/100)
    }
}

main();
