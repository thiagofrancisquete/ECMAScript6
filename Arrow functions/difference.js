/*  
var object = {
  f1: function(){
    console.log(this);
    var f2 = function(){console.log(this);}
    f2();
    setTimeout(f2, 1000);
  }
}

object.f1();

*/

console.log(`--------------------------------------------------`);

var object = {
  f1: () => {
    console.log(`${this}`);
    var f2 = () => {
      console.log(`${this}`);
    }
    f2();
    setTimeout(f2, 1000);
  }
}

object.f1();