// Item Controller
const ItemCtrl = (function(){

  const Item = function(id, name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  const data = {
    item:[
      {id:0, name:"Plov", calories:1500},
      {id:1, name:"Shashlik", calories:900},
      {id:2, name:"Somsa", calories:700}
    ],
    currentItem: null,
    totalCalories: 0
  }

  return {
    getData:function(){
      return data;
    }
  }
})();

// UI Controller

const UICtrl = (function(){
  return {}
})();

// App Controller

const App = (function(){

// public methods
return {
  init:function(){
    console.log("Initializing App...");
  }
}

})();

App.init();