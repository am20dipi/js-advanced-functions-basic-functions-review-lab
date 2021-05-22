// Your code here

function saturdayFun(a, b="roller-skate") {
    if (a === undefined) {
        return "This Saturday, I want to " + b + "!"
    } else {
        return "This Saturday, I want to bathe my dog!"
    }
};

function mondayWork(x, activity="go to the office") { 
    if (x === undefined) {
        return "This Monday, I will " + activity + "."
    } else {
        return "This Monday, I will work from home."
    }
};

let wrapAdjective = function(whatever="*") {
    return function(target= "special") {
        return "You are " + whatever + target + whatever + "!"
    }
};

let Calculator = { 
    
    add : function () {
        return (1 + 3)
    },
    
    subtract : function() {
        return (1 - 3)
    },
    
    multiply : function() {
        return (1 * 3)
    },
    
    divide : function() {
        return (10 / 5)
    }
};




let actionApplyer = function(startingPoint, array) {
    let a = startingPoint
  
    for (let i = 0; i < array.length; i++ ){
      a = array[i](a)
    }
  
    return a
  }