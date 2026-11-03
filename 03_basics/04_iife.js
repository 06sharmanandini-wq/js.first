// Immediately Invoked Function Expressions (IIFE)

(function chai() {      
    // named IIFE                            // by adding () in this will immeditately excute the function
    console.log(`DB CONNECTED`);
}) ();                                        

(  (name)  => {
    // simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} ) ("pratha");




//()()                             // sometimes code is polluted bcoz of global space variables in order to protect it IIFE is used  
//chai()