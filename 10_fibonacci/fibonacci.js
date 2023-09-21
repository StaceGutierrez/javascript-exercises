const fibonacci = function(n) {
    if (n > 0) {
        let a = 0
        let b = 1
        let c = 1

        let fibCounter = 1;

        while (fibCounter < n) {
            c = a + b

            fibCounter++
            a = b 
            b = c
            
            
        }
        return c
    } else {
        return "OOPS"
    }


    
};

// Do not edit below this line
module.exports = fibonacci;
