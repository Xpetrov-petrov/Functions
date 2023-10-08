       function myMath(x, y){
        let result = 1;
        for(let i = 0; i < y; i++){
            result = multiplyTwoNumbers(result, x);
        }
    
        function multiplyTwoNumbers(a, b){
            let result = a * b;
            return result;
        }
        return result;
    }
    console.log(myMath(2,8));
