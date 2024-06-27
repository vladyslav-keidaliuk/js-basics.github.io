// Конструктор для родительского объекта
function Animal() {
    this.eats = true;
  }
  
  Animal.prototype.walk = function() {
    console.log("Animal walks");
  };
  
  // Конструктор для дочернего объекта
  function Rabbit() {
    Animal.call(this);  // Вызов конструктора родительского объекта
    this.jumps = true;
  }
  
  // Устанавливаем Animal.prototype как прототип для Rabbit.prototype
  Rabbit.prototype = Object.create(Animal.prototype);
  
  // Восстанавливаем конструктор Rabbit, т.к. Object.create меняет его
  Rabbit.prototype.constructor = Rabbit;
  
  const rabbit = new Rabbit();
  
  console.log(rabbit.eats);  // true (унаследовано от Animal)
  rabbit.walk();  // "Animal walks" (унаследовано от Animal)
  console.log(rabbit.jumps);  // true (собственное свойство rabbit)
  