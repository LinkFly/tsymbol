/**
 * Created by LinkFly-user on 15.12.2014.
 */

var syms = {};
function TSymbol(name) {
    var sym = syms[name];
    if(sym === undefined) {
        sym = {name: name};
        syms[name] = sym;
        return sym;
    } else return syms[name];
}
var symCount = 0;
TSymbol.gensym = function() {
    return TSymbol('' + symCount++);
}

var uuidLib;
TSymbol.globalGensym = function() {
    if(typeof uuidLib === 'undefined')
        uuidLib = require('./libs/node-uuid/');
    return TSymbol(uuidLib.v1());
}

var sym1 = TSymbol("sym1");
var sym1_2 = TSymbol("sym1");
console.log(sym1 == sym1_2);
console.log(TSymbol.gensym() != TSymbol.gensym());
console.log(TSymbol.globalGensym() != TSymbol.globalGensym());

module.exports = TSymbol;
