/**
 * All properties that we create by simply assigning to them are enumerable.
 * The standard properties in Object.prototype are all nonenumerable, which is why they do not show up in such a for/in loop.
 *It is possible to define our own nonenumerable properties by using the Object.defineProperty function,
 * which allows us to control the type of property we are creating.
 */
var map = {};
function storePhi(event, phi) {
    map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
Object.prototype.nonsense = "hi";
for (var name in map)
    console.log(name);
// → pizza
// → touched tree
// → nonsense
Object.defineProperty(Object.prototype, "hiddenNonsense",
    {enumerable: false, value: "hi"});
for (var name in map)
    console.log(name);
// → pizza
// → touched tree
console.log(map.hiddenNonsense);
// → hi



//This method tells us whether the object itself has the property, without looking at its prototypes.
// This is often a more useful piece of information than what the in operator gives us.
console.log(map.hasOwnProperty("toString"));
// → false