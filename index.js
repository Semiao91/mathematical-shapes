function diagonal (){
    const side = 9;

    console.log(Math.sqrt(2 * Math.pow(side, 2)));
    alert(Math.sqrt(2 * Math.pow(side, 2)))
}

function triangleArea(){
    let a = 5;
    let b = 6;
    let c = 7;

    let s = (a + b + c) / 2;

    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    console.log(area);
    alert(area)
}

function circumference(){
    const radius = 4;
    const pi = Math.PI;

    const circumference = 2 * pi * radius;
    console.log(circumference);  
    alert(circumference) 
}

function surfaceArea(){
    const radius = 4;
    const pi = Math.PI;

    const surfaceArea = pi * Math.pow(radius, 2);
    console.log(surfaceArea);
    alert(surfaceArea)
}

function twoIntegers(){
    const first = document.getElementById("first").value
    const second = document.getElementById("second").value

    if(first > second){
        console.log(first, "is bigger then", second)
    }
    else if(second > first) {
        console.log(second, "is bigger then", first)
    }
    else{
        console.log(first, "&", second, "are both of equal value")
    }
}

function evenOrOdd(){
    const number = document.getElementById("even-or-odd").value

    if(number % 2 === 0){
        console.log("The number you provided is odd")
    }

    else{
        console.log("The number you provided is even")
    }
}