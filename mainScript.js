var t1 = 0;
var tn = 0;
var procEl;


function mainFunc()    //диапазон [-1:1]
{
    var numbers = document.getElementById("f1");
    var m = numbers.elements[0].value;
    var p = numbers.elements[1].value;
    var q = numbers.elements[2].value;
    procEl = numbers.elements[3].value;
    var timeMod = numbers.elements[4].value;
    var timeDiff = numbers.elements[5].value;
    var timeSq = numbers.elements[6].value;
    var timeMult = numbers.elements[7].value;
    var timeSum = numbers.elements[8].value;
   
    console.log(m + " " + p + " " + q + " " + procEl);

    var A = [];
    for (var index1 = 0; index1 < p; index1++)
    {
        A[index1] = [];
        for (var index2 = 0; index2 < m; index2++)
        {
            A[index1][index2] = getRandom().toFixed(3);
        }
    }

    var B = [];
    for (var index1 = 0; index1 < m; index1++)
    {
        B[index1] = [];
        for (var index2 = 0; index2 < q; index2++)
        {
            B[index1][index2] = getRandom().toFixed(3);
        }
    }

    var E = [];
    for (var index = 0; index < m; index++)
    {
        E[index] = getRandom().toFixed(3);
    }
    
    console.log("A");
    console.log(A);
    console.log("B");
    console.log(B);
    console.log("E");
    console.log(E);

    var modA = [];
    for (var index1 = 0; index1 < p; index1++)
    {
        modA[index1] = [] ; 
        for (var index2 = 0; index2 < m; index2++)
        {
            modA[index1][index2] = module(A[index1][index2]);   
        }
    }
    getTime(timeMod,p,m);
    console.log("modA");
    console.log(modA);

    var modB = [];

    for (var index1 = 0; index1 < m; index1++)
    {
        modB[index1] = [] ; 
        for (var index2 = 0; index2 < q; index2++)
        {
            modB[index1][index2] = module(B[index1][index2]);
        }
    }
    getTime(timeMod,m,q);
    console.log("ModB = ");
    console.log(modB);
    
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
    getTimeForThree(timeDiff,p,m,q);
    console.log("diffAB");
    console.log(diffAB);

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
    getTimeForThree(timeMod,p,m,q);
    console.log("modDiffAB");
    console.log(modDiffAB);

    var D = [];
    var counterTrue = 0;
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
                    counterTrue++;     
                }
            else 
                {
                    D[indexK][indexI][indexJ] = multiplication(squaring(A[indexI][indexK]),B[indexK][indexJ]);
                    counterFalse++ ;
                }
            }
        }
    }
    getTimeForThree(timeSq,counterTrue,1,1);
    getTimeForThree(timeSq,counterFalse,1,1);
    getTimeForThree(timeMult,counterFalse,1,1);
    console.log("D = ");
    console.log(D);

    var C = [];
    var forSum = 0;
    for (var indexI = 0; indexI < p; indexI++)
    {  
        C[indexI] = [];
        for (var indexJ = 0; indexJ < q; indexJ++)
        {
            C[indexI][indexJ] = 0;
            for (var indexK = 0; indexK < m; indexK++)
            {
                C[indexI][indexJ] = C[indexI][indexJ]+D[indexK][indexI][indexJ];
                forSum++;
            }
        }
    }
    console.log("SUM = " + forSum);
    getTimeForThree(timeSum,forSum,1,1);
    console.log("C = ");
    console.log(C);

    var ky = t1/tn;
    var ey = ky/procEl;

    console.log("Ky = " + ky);
    console.log("ey = " + ey);

}

function getRandom()
{
    return Math.random() * (1 - (-1)) + (-1);
}

function module(elem)
{        
    return Math.abs(elem).toFixed(3);
}

function getTime(time,row, col)
{
    t1 += time * row * col;
    tn += Math.ceil(time * row * col / procEl);
    console.log("T1 = " + t1);
    console.log("Tn = " + tn);
}

function difference(elem1, elem2)
{    
    return (elem1 - elem2).toFixed(3);
}

function summa(elem1, elem2)
{    
    return (elem1 + elem2);
}

function getTimeForThree(time,level,row, col)
{
    t1 += time * row * col * level;
    tn += Math.ceil(time * row * col * level/ procEl);
}

function multiplication(elem1, elem2)
{
    return (elem1 * elem2).toFixed(3);
}

function squaring(elem)
{
    return Math.pow(elem,2).toFixed(3);
}
