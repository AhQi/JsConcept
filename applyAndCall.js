/**
 * Created by ah on 2017/9/10.
 */
//Usage of apply and call
//apply: function.apply(arg1,arg2)
//take arg2 as input arg array
//call: function(arg1, arg2)
//change reference destination of "this"
/**********************************************************************************************/
//apply 、 call 、bind 三者都是用来改变函数的this对象的指向的；
//apply 、 call 、bind 三者第一个参数都是this要指向的对象，也就是想指定的上下文；
//apply 、 call 、bind 三者都可以利用后续参数传参；
//bind 是返回对应函数，便于稍后调用；apply 、call 则是立即调用 。
/**********************************************************************************************/
function speak(line) {
    console.log("The " + this.type + " rabbit says '" +
        line + "'");
}
var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: "fat", speak: speak};

whiteRabbit.speak("Oh my ears and whiskers, " +
    "how late it's getting!");
// → The white rabbit says 'Oh my ears and whiskers, how
//   late it's getting!'
fatRabbit.speak("I could sure use a carrot right now.");
// → The fat rabbit says 'I could sure use a carrot
//   right now.'

speak.apply(fatRabbit, ["Burp!"]);
// → The fat rabbit says 'Burp!'
speak.call({type: "old"}, "Oh my.");
// → The old rabbit says 'Oh my.'

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var bindTest = speak.bind({type:"stupid"}, "Prefix");
bindTest("1");
//bind() 方法建立一個新的函數，被呼叫時會將 this 關鍵字設為提供的值，並以一序列的引數作為新函數呼叫時的前導引數。
//fun.bind(thisArg[, arg1[, arg2[, ...]]])
function list() {
    return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]

// Create a function with a preset leading argument
var leadingThirtysevenList = list.bind(undefined, 37);

var list2 = leadingThirtysevenList(); // [37]
var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]