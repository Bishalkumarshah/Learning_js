//  Immediately Invoked  Function Expresions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();  // IIFE always close ';' then you run next IIFE

( () => {
    // Simple IIFE
    console.log(`DB CONNECTED TWO`);
})();  // IIFE always close ';' then you run next IIFE


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Bishal");