

function sayMyName() {
    console.log("B");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("L");
    }
    
    // sayMyName()
    
    function addTwoNumbers(number1, number2){
        // let result = number1 + number2
        // return result
        //OR
        return number1 + number2
    }
    
    const result = addTwoNumbers(3, 5)
    
    // console.log("Result:", result);
    
    
    
    function loginUserMassage(username = "san"){
        if(!username) {  
            // console.log("Plase enter username");
            return
        }
        return `${username} just logged in`
    }
    
    // console.log(loginUserMassage("Bishal kumar shah"));
    // console.log(loginUserMassage("Bishal kumar shah"));
    
    
    function calculateCardPrice(val1, val2, ...num1){
      return num1
    }
    
    // console.log(calculateCardPrice(200, 400, 500, 2000));
    
    const user = {
        username: "Bishal kumar shah",
        prices:199
    }
    
    function handleObject(anyobject){
        console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    }
    
    // handleObject(user)
    handleObject({
        username:"Vishal",
        price: 399
    })
    
    
    const myNewArray = [200, 400, 100, 600]
    
    function returnSecondValue(getArray){
           return getArray[1]
    }
    
    // console.log(returnSecondValue(myNewArray));
    console.log(returnSecondValue([200, 400, 500, 1000]));