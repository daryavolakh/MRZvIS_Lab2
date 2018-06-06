/*
    Author: Volakh Darya
*/




var t1 = 0;
var tn = 0;
var procEl;
var m;
var p;
var q;
var timeSum;
var numOfSum = 0;


function createTables(table,mainTable,rows,columns,header)
{  
    var body = document.querySelector("body");    
    var firstTable = document.querySelector("table");
    var table = document.createElement("table");
    var height = 100;
    var width = 150;
    var newRow = "";
    var data = ""; 
    var head = "";

    table.setAttribute("width",width);
    table.setAttribute("border","1.5px");  
    table.setAttribute("bordercolor","black"); 

    newRow = document.createElement("tr");    
    newRow.setAttribute("bgcolor","#FBF0DB");

    head = document.createElement("th");    
    text = document.createTextNode(header);

    head.setAttribute("colspan",columns);
    head.appendChild(text);
    newRow.appendChild(head);

    table.appendChild(newRow);

    if (rows == 1)
    {
        newRow = document.createElement("tr");
        for (var tempCol = 0; tempCol < columns; tempCol++)
        {
            data = document.createElement("td");
            data.id = (header + "." + rows + "." + (tempCol + 1));
            newRow.appendChild(data);
            data.setAttribute("height",height);
        }
        table.appendChild(newRow);    
        return mainTable.appendChild(table);
    }

    else
    {
        for (var tempRow = 0 ; tempRow < rows; tempRow++)
        {
            newRow = document.createElement("tr");
            for (var tempCol = 0; tempCol < columns; tempCol++)
            {
                data = document.createElement("td");
                data.id = (header + "." + (tempRow+1) + "." + (tempCol + 1));
                newRow.appendChild(data);
                data.setAttribute("height",height);
            }
            table.appendChild(newRow);
        }
        return mainTable.appendChild(table);
    }
   
}


function createTableResults(mainTable)
{  
    var body = document.querySelector("body");    
    var firstTable = document.querySelector("table");
    var table = document.createElement("table");
    var rows = 5;
    var columns = 2;
    var height = 100;
    var width = 100;
    var newRow = "";
    var data = ""; 
    var head = "";

    table.setAttribute("width",width);
    table.setAttribute("border","1.5px");  
    table.setAttribute("bordercolor","black"); 

    newRow = document.createElement("tr");    
    newRow.setAttribute("bgcolor","#FFDAB9");

    head = document.createElement("th");    
    text = document.createTextNode("Результаты");

    head.setAttribute("colspan",columns);
    head.appendChild(text);
    newRow.appendChild(head);

    table.appendChild(newRow);

    for (var tempRow = 0 ; tempRow < rows; tempRow++)
    {
        newRow = document.createElement("tr");
        for (var tempCol = 0; tempCol < columns; tempCol++)
            {
                data = document.createElement("td");
                data.id = ("res." + (tempRow + 1) + "." + (tempCol + 1));
                newRow.appendChild(data);
                data.setAttribute("height",height);
            }
        table.appendChild(newRow);   
    } 
    return mainTable.appendChild(table);   
}

function createTableD(table,mainTable)
{  
    var body = document.querySelector("body");    
    var firstTable = document.querySelector("table");
    var table = document.createElement("table");
    var rows = m*p*q;
    var columns = 4;
    var height = 60;
    var width = 300;
    var newRow = "";
    var data = ""; 
    var head = "";

    table.setAttribute("width",width);
    table.setAttribute("border","1.5px");  
    table.setAttribute("bordercolor","black"); 

    newRow = document.createElement("tr");    
    newRow.setAttribute("bgcolor","#FBF0DB");

    head = document.createElement("th");      
    text = document.createTextNode("D");
    head.setAttribute("colspan","4");  
    head.appendChild(text);
    newRow.appendChild(head);

    table.appendChild(newRow);

    newRow = document.createElement("tr");
    newRow.setAttribute("bgcolor","#FFDAB9");

    head = document.createElement("th");
    text = document.createTextNode("k");        
    head.appendChild(text);
    newRow.appendChild(head);

    head = document.createElement("th");
    text = document.createTextNode("i");
    head.appendChild(text);
    newRow.appendChild(head);

    head = document.createElement("th");
    text = document.createTextNode("j");
    head.appendChild(text);
    newRow.appendChild(head);

    head = document.createElement("th");
    text = document.createTextNode("D[k][i][j]");
    head.appendChild(text);
    newRow.appendChild(head);
    
    table.appendChild(newRow);

    for (var tempRow = 0 ; tempRow < rows; tempRow++)
    {
        newRow = document.createElement("tr");
        for (var tempCol = 0; tempCol < columns; tempCol++)
        {
            data = document.createElement("td");
            data.id = ("D" + "." + (tempRow+1) + "." + (tempCol + 1));
            newRow.appendChild(data);
            data.setAttribute("height",height);
        }
        table.appendChild(newRow);
    }
    return mainTable.appendChild(table);
}

function createMainTable(A,B,E,D,C,t1,tn,ky,ey,d)
{
    var body = document.querySelector("body");
    var mainTable = document.createElement("mainTable");
    var row = document.createElement("tr");
    var data = document.createElement("td");    
    var firstTable = document.querySelector("mainTable");

   createTables(A,data,p,m,"A");
   row.appendChild(data);

   data = document.createElement("td");
   createTables(B,data,m,q,"B");
   row.appendChild(data);

   data = document.createElement("td");
   createTables(E,data,1,m,"E");
   row.appendChild(data);

   data = document.createElement("td");
   createTableD(D,data);   
   row.appendChild(data);

   data = document.createElement("td");
   createTables(C,data,p,q,"C");   
   row.appendChild(data);

   data = document.createElement("td");
   createTableResults(data,t1,tn,ky,ey,d);
   row.appendChild(data);
   mainTable.appendChild(row);

   body.appendChild(mainTable);

   
   if (firstTable == null)
   {
       return body.appendChild(mainTable);
   }
   else
   {
       var newTable = body.appendChild(mainTable);
       return document.body.replaceChild(newTable, firstTable);
   }
}

function addResults(t1,tn,ky,e,d)
{
    var rows = 5;
    var masOfHeaders = ["T1","Tn","Ky","e","D"];
    
    var masOfResults = [t1,tn,ky,e,d];
    var tempCol = 0;
    for (var tempRow = 0; tempRow < rows; tempRow++)
    {
        document.getElementById("res." + (tempRow + 1) + "." + (tempCol + 1)).innerHTML = "<b>" + masOfHeaders[tempRow];
        document.getElementById("res." + (tempRow + 1) + "." + (tempCol + 2)).innerHTML = "<b>" + masOfResults[tempRow];
        
    }
}

function addToTable(matr,header,rows,columns)
{
    if (rows == 1)
    {
        for (var tempCol = 0; tempCol < columns; tempCol++)
        {
            document.getElementById(header + "." + rows + "." + (tempCol + 1)).innerHTML = matr[0][tempCol];
        }
    }
    else 
    {
        for (var tempRow = 0; tempRow < rows; tempRow++)
        {
            for (var tempCol = 0; tempCol < columns; tempCol++)
            {
                document.getElementById(header + "." + (tempRow + 1) + "." + (tempCol + 1)).innerHTML = matr[tempRow][tempCol];
            }
        }
    }
}

function addToTableE(E)
{
    var columns = m;
    for (var tempCol = 0; tempCol < columns; tempCol++)
        {
            document.getElementById( "E.1." + (tempCol + 1)).innerHTML = E[tempCol];
        }
}


function addToTableD(D)
{
    var columns = 0;
    var rows = 1;
    for (var tempK = 0; tempK < m; tempK++)
    {
        for (var tempI = 0; tempI < p; tempI++)
        {
            for (var tempJ = 0; tempJ < q; tempJ++)
            {
                document.getElementById("D" + "." + (rows + tempJ) + "." + (columns + 1)).innerHTML = tempK;
                document.getElementById("D" + "." + (rows + tempJ) + "." + (columns + 2)).innerHTML = tempI;
                document.getElementById("D" + "." + (rows + tempJ) + "." + (columns + 3)).innerHTML = tempJ;
                document.getElementById("D" + "." + (rows + tempJ) + "." + (columns + 4)).innerHTML = D[tempK][tempI][tempJ];
                
                if (tempJ == q - 1)
                {
                    rows += tempJ + 1;
                    columns = 0;
                }
            }
        }
    }
}

function mainFunc()    
{
    t1 = 0;
    tn = 0;
    procEl;
    numOfSum = 0;
    var regexp = new RegExp();
    regexp = /([1-9]+)/;

    var numbers = document.getElementById("f1");

    for (var index = 0; index < 10; index++)
    {
        if (regexp.test(parseInt(numbers.elements[index].value)) == false)
        {
            alert("Пожалуйста, заполните все поля натуральными числами!");  
            return;
        }
    }
    
    m = numbers.elements[0].value;
    p = numbers.elements[1].value;
    q = numbers.elements[2].value;
    procEl = numbers.elements[3].value;
    var timeMod = numbers.elements[4].value;
    var timeDiff = numbers.elements[5].value;
    var timeCompare = numbers.elements[6].value;
    var timeSq = numbers.elements[7].value;
    var timeMult = numbers.elements[8].value;
    timeSum = numbers.elements[9].value;  

    timeSum = parseInt(timeSum);

    var modA = [];
    for (var index1 = 0; index1 < p; index1++)
    {
        modA[index1] = [] ; 
        for (var index2 = 0; index2 < m; index2++)
        {
            modA[index1][index2] = module(A[index1][index2]);   
        }
    }
    getTime(timeMod,p,m,1);

    var modB = [];
    

    for (var index1 = 0; index1 < m; index1++)
    {
        modB[index1] = [] ; 
        for (var index2 = 0; index2 < q; index2++)
        {
            modB[index1][index2] = module(B[index1][index2]);
        }
    }
    getTime(timeMod,m,q,1);
    
    var diffAB = [];
    for (var indexK = 0; indexK < m; indexK++)
    {
        diffAB[indexK] = [] ; 
        for (var indexI = 0; indexI < p; indexI++)
        {  
            diffAB[indexK][indexI] = [] ;
            for (var indexJ = 0; indexJ < q; indexJ++)
            {
                diffAB[indexK][indexI][indexJ] = difference(modA[indexI][indexK], modB[indexK][indexJ]);
            }
        }
    }
    
    getTime(timeDiff,p,m,q);

    var modDiffAB = [];
    for (var indexK = 0; indexK < m; indexK++)
    {
        modDiffAB[indexK] = [] ; 
        for (var indexI = 0; indexI < p; indexI++)
        {  
            modDiffAB[indexK][indexI] = [] ;
            for (var indexJ = 0; indexJ < q; indexJ++)
            {
                modDiffAB[indexK][indexI][indexJ] = module(diffAB[indexK][indexI][indexJ]);
            }
        }
    }
    
    getTime(timeMod,p,m,q);

    var D = [];
    var counterFalse = 0;
    for (var indexK = 0; indexK < m; indexK++)
    {
        D[indexK] = [] ; 
        for (var indexI = 0; indexI < p; indexI++)
        {  
            D[indexK][indexI] = [] ; 
            for (var indexJ = 0; indexJ < q; indexJ++)
            {
                if (modDiffAB[indexK][indexI][indexJ] < E[indexK])
                {
                    D[indexK][indexI][indexJ] = squaring(A[indexI][indexK]);      
                }
            else 
                {
                    D[indexK][indexI][indexJ] = multiplication(squaring(A[indexI][indexK]),B[indexK][indexJ]);
                    counterFalse++ ;
                }
            }
        }
    }
    getTime(timeCompare,m,p,q);
    getTime(timeSq,m,p,q);
    getTime(timeMult,counterFalse,1,1);

    var C = [];
    
    for (var indexI = 0; indexI < p; indexI++)
    {  
        C[indexI] = [];
        for (var indexJ = 0; indexJ < q; indexJ++)
        {
            var tempSum = [];
            for (var indexK = 0; indexK < m; indexK++)
            {
                tempSum.push(D[indexK][indexI][indexJ]);
            }
            C[indexI][indexJ] = summa(tempSum);            
        }
    }

    var ky = (t1/tn).toFixed(3);
    var ey = (ky/procEl).toFixed(3);

    var numOfDiff = 2*m*p*q;
    var numOfCompare = 2*m*p*q;
    var numOfMod = p*m + m*q + m*p* q;
    var numOfSq = m*p*q;
    var numOfMult = 2*counterFalse;
    var r = m*p*q;
    var d = (tn/((2*numOfSum*timeSum + numOfDiff*timeDiff + numOfMod*timeMod + numOfSq*timeSq + numOfMult*timeMult + numOfCompare*timeCompare)/r)).toFixed(3);

    createMainTable(A,B,E,D,C,t1,tn,ky,ey,d);
    addToTable(A,"A",p,m);
    addToTable(B,"B",m,q);    
    addToTableE(E);
    addToTableD(D);
    addToTable(C,"C",p,q);
    addResults(t1,tn,ky,ey,d);
}

function getRandom()
{
    return Math.random() * (1 - (-1)) + (-1);
}

function module(elem)
{        
    return Math.abs(elem).toFixed(3);
}

function getTime(time,row, col, pl)
{
    t1 += time * row * col * pl;
    tn += Math.ceil(time * row * col * pl/ procEl);
}

function summa(tempSum)
{
    var Cij = [];
    if (tempSum.length != 1)
    {    
        if (tempSum.length > 2 * procEl)
        {
            for (var tempInd = 0; tempInd < 2 * procEl; tempInd += 2)
            {
                var firstSummand = parseFloat(tempSum[tempInd]);
                var secondSummand = parseFloat(tempSum[tempInd + 1]);
                var tempRes = (firstSummand + secondSummand).toFixed(3);
                Cij.push(tempRes);
                t1 += timeSum;
                numOfSum++;              
            }
            tn += timeSum;
            for (var tempInd = 2 * procEl; tempInd < tempSum.length; tempInd ++)
                Cij.push(tempSum[tempInd]);
        }
        
        else
        {
            var ost = tempSum.length % 2;
            if (ost == 1)
            {
                Cij.push(tempSum[tempSum.length - 1]);
            }

            var tempNum = 0;         
            for (var tempInd = 0; tempInd < (tempSum.length - ost); tempInd += 2)
            {
                var firstSummand = parseFloat(tempSum[tempInd]);
                var secondSummand = parseFloat(tempSum[tempInd + 1]);
                var tempRes = (firstSummand + secondSummand).toFixed(3);
                Cij.push(tempRes);
                t1 += timeSum;
                tempNum ++;
                numOfSum++;                
            }           
            tn += Math.ceil(timeSum * tempNum/ procEl);     
        }
        return summa(Cij);
    }
    else
    {
        return tempSum[0];

    }
}

function difference(elem1, elem2)
{    
    return (elem1 - elem2).toFixed(3);
}

function multiplication(elem1, elem2)
{
    return (elem1 * elem2).toFixed(3);
}

function squaring(elem)
{
    return Math.pow(elem,2).toFixed(3);
}