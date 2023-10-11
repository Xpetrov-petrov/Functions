function solve(arr1, arr2){

    newArray = [];
    for(let i = 0; i < arr1.length; i++){
        let element1 = arr1[i];
        let element2 = arr2[i];
          
        if(i % 2 == 0){
           newArray.push(Number(element1) + Number(element2))
        }else{
            newArray.push(element1 + element2);
        }
    }
    console.log(newArray.join(" - "));
}
 
solve(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);