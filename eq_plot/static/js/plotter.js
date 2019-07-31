var prec = 4;
var listSize = 5000;
var xList = [];
var dataSetsSize = 0;

//Make x values
var x = 0;
for (i = 0; i < listSize; i++) {
    x = Math.random();
    xList.push(x.toFixed(prec));
}
xList.sort()




////////GRAPH     //////////////
var canvas = document.getElementById('myChart');
// The data for our dataset
var data = {
    labels: [],
    datasets: [
        {
            label: "",
            fill: false,

            data: [],
        },



    ]
};



var dynamicColors = function () {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
}
//Invoked when the and button is pressed
function andFuncs() {
    //Getting the equation string, parsing and making a set
    //Also creating a checkbox entry with the equation
    var dataSet = [];
    var funcA = document.getElementById("funcA").value;
    var funcB = document.getElementById("funcB").value;
    var andString = "(" + funcA + ")(" + funcB + ")";

    var datapoints = document.getElementById("noPoints").value;
    var backgroundColor = dynamicColors();
    var borderColor = backgroundColor;

    //put dataset into chart
    dataSet = addDataSet(datapoints, andString, backgroundColor, borderColor);

    //Also creating a checkbox entry with the equation
    var funcCheck = mkFcnEntry(andString, dataSet);
    var lEntry = mkLEntry();


    //Add to list
    addToEqList(andString, funcCheck, lEntry);
}

//Invoked when the or button is pressed
function orFuncs() {
    //Getting the equation string, parsing and making a set
    //Also creating a checkbox entry with the equation
    var dataSet = [];
    var funcA = document.getElementById("funcA").value;
    var funcB = document.getElementById("funcB").value;
    var orString = "(" + funcA + ")(" + funcB + ") + (" + funcA + ") - (" + funcB + ")";

    var datapoints = document.getElementById("noPoints").value;
    var backgroundColor = dynamicColors();
    var borderColor = backgroundColor;

    dataSet = addDataSet(datapoints, orString, backgroundColor, borderColor);

    //Also creating a checkbox entry with the equation
    var funcCheck = mkFcnEntry(orString, dataSet);
    var lEntry = mkLEntry();





    //Add to list
    addToEqList(orString, funcCheck, lEntry);
}

class Queue {
    constructor(s) {
        this.front = -1;
        this.rear = -1;
        this.size = -1;
        this.buf = [s];
    }
    enqueue(val) {
        if (front == -1) {
            front = 0;
            rear = 0;
            buf[rear] = val;
        }
        else if (rear == size - 1 && front != 0) {
            rear = 0;
            buf[rear] = val;
        }
        else {
            rear++;
            buf[rear] = val;
        }

    }
    deQueue() {
        if (front == -1) {

        }
    }

}

//Not Defined
function processChecked() {

    // list of checked elements
    //Take in all the elements of the ul list, id "funcList"
    var eqList = document.getElementById("funcList").getElementsByTagName("LI");
    var chkd = [];
    var eqChild = null;
    var A = "";
    var B = "";
    var C = "";



    for (var i = 0; i < eqList.length; i++) {
        eqChild = eqList[i].children[0];
        if (eqChild.checked == true) {
            chkd.push(eqChild.val);
            funcList.removeChild(eqChild.parentElement);
            i--;


        }
    }



    // Remove from the graph and anywhere else, any of the checked equations

    for (var i = 0; i < chkd.length; i++) {
        let removalIndex = myLineChart.data.datasets.indexOf(chkd[i]); //Locate index of ds1
        if (removalIndex >= 0) { //make sure this element exists in the array
            myLineChart.data.datasets.splice(removalIndex, 1);

        }

    }


    A = chkd[0].label;
    B = chkd[1].label;
    C = chkd[2].label;

    var eqAry = [];

    var c1 = or(and(A, B).label, C);
    var c2 = and(or(A, B).label, C);
    var c3 = and(and(A, B).label, C);
    var c4 = or(or(A, B).label, C);

    var c5 = or(and(A, C).label, B);
    var c6 = and(or(A, C).label, B);
    var c7 = and(and(A, C).label, B);
    var c8 = or(or(A, C).label, B);

    var c9 = or(and(B, C).label, A);
    var c10 = and(or(B, C).label, A);
    var c11 = and(and(B, C).label, A);
    var c12 = or(or(B, C).label, A);

    eqAry.push(c1);
    eqAry.push(c2);
    eqAry.push(c3);
    eqAry.push(c4);
    eqAry.push(c5);
    eqAry.push(c6);
    eqAry.push(c7);
    eqAry.push(c8);
    eqAry.push(c9);
    eqAry.push(c10);
    eqAry.push(c11);
    eqAry.push(c12);


    var sum = 0;
    var greatest = 0;
    var best = [];

    for (var i = 0; i < 12; i++) {
        for (var j = 0; j < c1.data.length; j++) {
            sum += eqAry[i].data[j];
        }
        sum = (sum * 100) / c1.data.length;
        if (sum > (greatest * 100)) {
            best = eqAry[i].slice(0);
        }

    }

    //Getting the equation string, parsing and making a set
    //Also creating a checkbox entry with the equation
    var dataSet = [];
    var funcName = document.getElementById("funcDef").value;// remove
    var datapoints = document.getElementById("noPoints").value;

    var backgroundColor = dynamicColors();
    var borderColor = backgroundColor;

    dataSet = addDataSet(datapoints, bet.label, backgroundColor, borderColor);

    //Also creating a checkbox entry with the equation
    var funcCheck = mkFcnEntry(funcName, dataSet);
    var lEntry = mkLEntry();



    //Set behavior of check list elements


    //Add to list
    addToEqList(funcName, funcCheck, lEntry);



}

function and(eq1, eq2) {




    var andString = "(" + eq1 + ")(" + eq2 + ")";

    var datapoints = document.getElementById("noPoints").value;
    var bckC = dynamicColors();



    //put dataset into chart
    var f = math.parse(andString);
    var simplified = math.simplify(f);
    var xList = [];

    //Make x values
    var x = 0;
    for (var i = 0; i < datapoints; i++) {
        x = i / datapoints;
        //x = Math.random();
        xList.push(x.toFixed(prec));
    }
    xList.sort()
    // This Function is currently unused. Trying to be able to resize and replot the data
    //when a new size is chosen
    if (datapoints < myLineChart.data.datasets[0].data.length) {
        removeExtraData(datapoints, simplified, xList);
    }

    ///Get the function values using the parsed equation
    var fX = 0;
    var fXList = [];
    for (var i = 0; i < datapoints; i++) {
        //This keeps the dataset under '1'(aka in the unit square)
        if (simplified.eval({ x: parseFloat(xList[i]) }) <= 1) {
            fX = simplified.eval({ x: parseFloat(xList[i]) });
            fXList.push(fX.toFixed(prec));
        }
    }

    //Prepare our new dataset.
    var newDataSet = {
        label: andString,
        fill: false,
        backgroundColor: bckC,
        borderColor: bckC,
        data: fXList
    }
    return newDataSet;

}
function or(eq1, eq2) {


    var orString = "(" + eq1 + ")(" + eq2 + ") + (" + eq1 + ") - (" + eq2 + ")";

    var datapoints = document.getElementById("noPoints").value;
    var bckC = dynamicColors();


    //put dataset into chart
    var f = math.parse(orString);
    var simplified = math.simplify(f);
    var xList = [];

    //Make x values
    var x = 0;
    for (var i = 0; i < datapoints; i++) {
        x = i / datapoints;
        //x = Math.random();
        xList.push(x.toFixed(prec));
    }
    xList.sort()
    // This Function is currently unused. Trying to be able to resize and replot the data
    //when a new size is chosen
    if (datapoints < myLineChart.data.datasets[0].data.length) {
        removeExtraData(datapoints, simplified, xList);
    }

    ///Get the function values using the parsed equation
    var fX = 0;
    var fXList = [];
    for (var i = 0; i < datapoints; i++) {
        //This keeps the dataset under '1'(aka in the unit square)
        //if (simplified.eval({ x: parseFloat(xList[i]) }) <= 1) {
          //  fX = simplified.eval({ x: parseFloat(xList[i]) });
            //fXList.push(fX.toFixed(prec));
        //}
        fXList.push(fX.toFixed(prec));
    }

    //Prepare our new dataset.
    var newDataSet = {
        label: orString,
        fill: false,
        backgroundColor: bckC,
        borderColor: bckC,
        data: fXList
    }
    return newDataSet;

}

//Invoked when remove Checked button is pressed
//Removes checked equations
function removeChecked() {

    // list of checked elements

    //Take in all the elements of the ul list, id "funcList"
    var eqList = document.getElementById("funcList").getElementsByTagName("LI");
    var chkd = [];
    var eqChild = null;


    for (var i = 0; i < eqList.length; i++) {
        eqChild = eqList[i].children[0];
        if (eqChild.checked == true) {
            chkd.push(eqChild.val);
            funcList.removeChild(eqChild.parentElement);
            i--;


        }
    }

    // Remove from the graph and anywhere else, any of the checked equations

    for (var i = 0; i < chkd.length; i++) {
        let removalIndex = myLineChart.data.datasets.indexOf(chkd[i]); //Locate index of ds1
        if (removalIndex >= 0) { //make sure this element exists in the array
            myLineChart.data.datasets.splice(removalIndex, 1);

        }

    }
    myLineChart.update();

}

hitEnter("funcDef", "enterDataSet");



///////////////////////////////////////////////////////////////
// Just Entering single stringed equations to become data
function enterDataSet() {

    //Getting the equation string, parsing and making a set
    //Also creating a checkbox entry with the equation
    var dataSet = [];
    var funcName = document.getElementById("funcDef").value;// remove
    var datapoints = document.getElementById("noPoints").value;
    var func = document.getElementById("funcDef").value;
    var backgroundColor = dynamicColors();
    var borderColor = backgroundColor;

    dataSet = addDataSet(datapoints, funcName, backgroundColor, borderColor);

    //Also creating a checkbox entry with the equation
    var funcCheck = mkFcnEntry(funcName, dataSet);
    var lEntry = mkLEntry();



    //Set behavior of check list elements


    //Add to list
    addToEqList(funcName, funcCheck, lEntry);

}
// Supplying the details for and adding a new data set
function addDataSet(datapoints, func, bckC, bordC) {

    var f = math.parse(func);
    var simplified = math.simplify(f);
    var xList = [];

    //Make x values
    var x = 0;
    for (var i = 0; i < datapoints; i++) {
        x = i / datapoints;
        //x = Math.random();
        xList.push(x.toFixed(prec));
    }
    xList.sort()
    // This Function is currently unused. Trying to be able to resize and replot the data
    //when a new size is chosen
    if (datapoints < myLineChart.data.datasets[0].data.length) {
        removeExtraData(datapoints, simplified, xList);
    }

    ///Get the function values using the parsed equation
    var fX = 0;
    var fXList = [];
    for (var i = 0; i < datapoints; i++) {
        //This keeps the dataset under '1'(aka in the unit square)
        fX = simplified.eval({ x: parseFloat(xList[i]) });
        fXList.push(fX.toFixed(prec));

    }

    //Prepare our new dataset.
    var newDataSet = {
        label: func,
        fill: false,
        backgroundColor: bckC,
        borderColor: bordC,
        data: fXList
    }
    myLineChart.data.labels = xList;
    //Push it onto our canvas/chart object
    myLineChart.data.datasets.push(newDataSet);

    //refresh our chart to show new dataset
    myLineChart.update();


    dataSetsSize++;
    return newDataSet;


}
//This function is not used yet but is where i want to be able to replot
// a resized dataset onto the chart
function removeExtraData(dp, s, xL) {

    var toBeRemoved = myLineChart.data.datasets[0].data.length - dp;

    myLineChart.data.datasets.forEach(function (dataset) {

        for (var i = 0; i < toBeRemoved; i++) {
            dataset.data.pop();
        }
        dataset.data = dataset.data.map(function () {
            return s.eval({ x: parseFloat(xL[i]) });
        });
    })
    myLineChart.update();
}

function mkFcnEntry(eqStr, ds) {

    var fcnCk = document.createElement("INPUT");
    fcnCk.setAttribute("type", "checkbox");
    fcnCk.checked = true;
    fcnCk.id = eqStr;
    fcnCk.val = ds;

    return fcnCk;
}

function mkLEntry() {
    var lEnt = document.createElement("LI");
    return lEnt;
}


function addToEqList(eqStr, fcnCk, lEntry) {
    var eqnField = document.createElement("input");
    eqnField.value = eqStr;
    //lEntry.innerHTML = eqStr;
    lEntry.style.display = "block";
    lEntry.style.width = "400px";
    lEntry.appendChild(fcnCk);
    lEntry.appendChild(eqnField);
    document.getElementById("funcList").appendChild(lEntry);
}

///So you can hit 'ENTER' to enter equation
function hitEnter(inputId, btnId) {
    var input = document.getElementById(inputId);
    input.addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById(btnId).click();
        }
    });
}
// Configuration options go here

var options = {
    layout: {
        padding: { left: 0, right: 0, top: 0, bottom: 0 }
    },
    legend: { fullWidth: true, boxWidth: 20 },
    responsive: false,
    maintainAspectRatio: false, title: { display: true, text: 'Data' },
    tooltips: { mode: 'index', intersect: true, },
    hover: { mode: 'nearest', intersect: true },
    scales: {
        xAxes: [{
            display: true, scaleLabel: { display: true, labelString: 'X - Axis' },
            ticks: {
                maxTicksLimit: 10,
                stepSize: .1
            }
        }],
        yAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Y - Axis'
            },
            ticks: {
                beginAtZero: true,
                maxTicksLimit: 10,
                stepSize: .1
            }
        }]
    },

};




var myLineChart = Chart.Line(canvas, {
    data: data,
    options: options
});
