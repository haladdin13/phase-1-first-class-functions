function receivesAFunction(callback){
    callback1()
    callback()
}

function callback1(){
    console.log("I'm Called")
}

function callback2(){
    console.log("I'm Called 2")
}

receivesAFunction(callback2);

function returnsANamedFunction() {
    return function namedFunc() {
        callback1()
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        callback1()
    }
}