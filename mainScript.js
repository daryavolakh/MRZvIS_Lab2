var t1 = 0;
var tn = 0;
var p, q, m, timeMod, timeSq, timeMult, procEl;


function mainFunc()    //диапазон [-1:1]
{
    var numbers = document.getElementById("f1");
    m = numbers.elements[0].value;
    p = numbers.elements[1].value;
    q = numbers.elements[2].value;
    procEl = numbers.elements[3].value;
    timeMod = numbers.elements[4].value;
    timeSq = numbers.elements[5].value;
    timeMult = numbers.elements[6].value;
   
    console.log(m + " " + p + " " + q + " " + procEl + " " + tact);

    var A = [];
    for (var index1 = 0; index1 < p; index1++)
    {
        A[index1] = [];
        for (var index2 = 0; index2 < m; index2++)
        {
            A[index1][index2] = getRandom();
        }
    }

    var B = [];
    for (var index1 = 0; index1 < m; index1++)
    {
        B[index1] = [];
        for (var index2 = 0; index2 < q; index2++)
        {
            B[index1][index2] = getRandom();
        }
    }

    var C = [];
    for (var index = 0; index < m; index++)
    {
        C[index] = getRandom();
    }
    
    console.log(A);
    console.log(B);
    console.log(C);

    var modA = [];
    for (var index1 = 0; index1 < p; index1++)
    {
        modA[index1] = [] ; 
        for (var index2 = 0; index2 < m; index2++)
        {
            modA[index1][index2] = module(A[index1][index2],p,m);
        }
    }

    console.log(modA);

}

function getRandom(){
    return Math.random() * (1 - (-1)) + (-1);
  }

function module(elem, row, col)
{
    t1 += timeMod * row * col;
    tn += Math.ceil(timeMod * row * col / procEl);
    console.log("T1 = " + t1);
    console.log("Tn = " + tn);
    return Math.abs(elem);
}

function multiplicaion(elem, row, col)
{
    t1 += timeMult * row * col;
    tn += Math.ceil(timeMult * row * col / procEl);
    return mod(elem);
}

function squaring(elem1, elem2, row, col)
{
    t1 += timeSq * row * col;
    tn += Math.ceil(timeMult * row * col / procEl);
    return funkIfTrue(elem1) * elem2;
}

/*function funcIfTrue(elem)
{
    return pow(elem,2);
}

function funcIfFalse(elem1,n, elem2)
{
    return funkIfTrue(elem1) * elem2;
}*/