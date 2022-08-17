function receivesAFunction(callBackFunction){
    return callBackFunction();
}

function returnsANamedFunction(){

    return function foo(){'before all'};
}

function returnsAnAnonymousFunction(){

    return function(){'before all'};
}