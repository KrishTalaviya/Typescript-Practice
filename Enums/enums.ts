//numberic enum
enum Direction{
    NORTH,//Default NORTH=0
    SOUTH,//SOUTH=1
    EAST,//EAST=2
    WEST//WEST=3
}
//string enum
enum Answers{
    NO="No",
    YES="Yes",
    MAYBE="May Be"
}
//Heterogeneous enums
enum myAnswer{
    NO=Answers.NO,
    YES=Answers.YES,
    SURE='Not Sure'
}
/* enum BooleanEnum {
  Yes = true, // ❌ Error: Enum member must have initializer that is a string literal or numeric literal or another enum member.
  No = false,
} */
  enum BooleanLike {//not recommended
    No = 0,
    Yes = "YES",
  }
//const myDirection=Direction.EAST;//myDirection="East" because now myDirection becomes constant
const myDirection:Direction=Direction.EAST
  function isDirectionRight():boolean{
    if(myDirection === Direction.NORTH){//give error because typescript knows that it always return false You're comparing "EAST" with "NORTH" — two literal string types that will never match.
        //So the condition is always false — maybe you made a mistake?
        return true;
    }
    else{
        return false;
    }
  }
  enum OrderStatus{
    PENDING=10,
    DELIVERED,//Default 11
    RETURNED,//Default 12
    SHIPPED//Default 13
  }
  enum Dragons{
    DRACARYS=500,
    RHAEGEL=450,
    VISERION=300,
  }

/* js compilation
var Dragons;
(function (Dragons) {
    Dragons[Dragons["DRACARYS"] = 500] = "DRACARYS";
    Dragons[Dragons["RHAEGEL"] = 450] = "RHAEGEL";
    Dragons[Dragons["VISERION"] = 300] = "VISERION";
})(Dragons || (Dragons = {})); is like below dragon
Dragons={
  "DRACARYS": 500,
  "500": "DRACARYS",
  "RHAEGEL": 450,
  "450": "RHAEGEL",
  "VISERION": 300,
  "300": "VISERION"
} */
  enum DragonNames {
    DRACARYS = "DRACARYS",
  }
  /* js compilation
  var DragonNames = {
    DRACARYS: "DRACARYS"
  }; */
  //to stop compilation these complex code use const before
  const enum DragonOfHouseTargaryen {
    DRACARYS = 500,
    RHAEGEL = 450,
    VISERION = 300,
  }
 /*  js compilation
  const dragonOne={
    name:"Dracarys",
    dragonPoints:DragonOfHouseTargaryen.DRACARYS
}
const dragonOne = {
    name: "Dracarys",
    dragonPoints: 500 // DragonOfHouseTargaryen.DRACARYS 
}; */