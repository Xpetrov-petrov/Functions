function solve(a, b, operator){ //  OFF
    

    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;

    let operations = [
        add,
        subtract,
        multiply,
        divide
    ];

    let opNames = [
        "add",
        "subtract",
        "multiply",
        "divide"
    ];

    let index;

    for(let i = 0; i < opNames.length; i++){
        if(opNames[i] == operator){
            index = i;
        }
    }

    let operator = operations[index];
    console.log(operation(a, b));
}
    solve(5,5,'multiply');
    solve(12,19,'add');
    solve(50,13,'subtract');
    solve(40,8,'divide');



    Off