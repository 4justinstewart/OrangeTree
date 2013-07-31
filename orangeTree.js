//////// Your Code ///////////////////////////////////////////////
function OrangeTree(){
  this.oranges = [];
  this.age = 0;
  this.height = 0;
};

OrangeTree.prototype = {
  hasOranges: function(){
    return this.oranges.length > 0;
  },

  incrementAge: function(){
    if (this.age > 3) {
      for(var i = 0; i < 3; i++) {
        this.oranges.push({diameter: Math.floor(Math.random()*4 + 1)});
      }
    }
    this.height += 12;
    this.age++;
  },

  isAlive: function(){
    return this.age <= 100;
  },

  pickOrange: function(){
    return this.oranges.pop();
  }
};


/////// Driver Code /////////////////////////////////////////////

var tree = new OrangeTree();

while (!tree.hasOranges()) {
  tree.incrementAge();
}

console.log("Tree is " + tree.age + " years old and " + tree.height/12 + " feet tall");

while(tree.isAlive()) {
  var basket = [];

  while(tree.hasOranges()) {
    basket.push(tree.pickOrange());
  }

  var avgDiameter = function() {
    // create this method
    return basket.reduce(function(previous, current){
      return previous + current.diameter;
    }, 0)/basket.length;
  };

  console.log("Year " + tree.age + " Report");
  console.log("Tree height: " + tree.height/12 + " feet");
  console.log("Harvest: " + basket.length + " oranges with an average diameter of " + avgDiameter() + " inches");
  console.log("");

  tree.incrementAge();

}

console.log("Alas, the tree, she is dead!");
