//////// Your Code ///////////////////////////////////////////////



/////// Driver Code /////////////////////////////////////////////

var tree = new OrangeTree();

while (!tree.hasOranges()) {
  tree.incrementAge();
}

console.log("Tree is " + tree.age + " years old and " + tree.height + " feet tall");

while(tree.isAlive()) {
  var basket = [];

  while(tree.hasOranges()) {
    basket.push(tree.pickOrange());
  }

  var avgDiameter = function() {
    // create this method
  };

  console.log("Year " + tree.age + " Report");
  console.log("Tree height: " + tree.height + " feet");
  console.log("Harvest: " + basket.length + " oranges with an average diameter of " + avgDiameter() + " inces");
  console.log("");

  tree.incrementAge();

}

console.log("Alas, the tree, she is dead!");
