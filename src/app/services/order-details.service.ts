import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { 
  }
  foodDetails = [
    {
      id:1,
      foodName:"Tuna Sandwich",
      foodDetails:"Tuna/ Bread/ Tuna/ Egg/ Tomato",
      foodPrice:14,
      foodImg:"../../assets/images/Sandwich.jpeg"
    },
    {
      id:2,
      foodName:"Cheese Mushroom Pizza",
      foodDetails:"Onion/ Cheese/ Mushroom |Black Peepers/ Sweet Corn/ Cherry Tomato",
      foodPrice:25,
      foodImg:"../../assets/images/pizza.jpeg"
    },
    {
      id:3,
      foodName:"Vegan Pork Dumplings",
      foodDetails:"Vegetables/ Pork/ Flour",
      foodPrice:21,
      foodImg:"../../assets/images/dumplings.jpeg"
    },
    {
      id:4,
      foodName:"Grilled Chicken",
      foodDetails:"Chicken",
      foodPrice:24,
      foodImg:"../../assets/images/grilled-chicken.jpeg"
    },
    {
      id:5,
      foodName:"Avogado Prawn Salad",
      foodDetails:"Avogado/ Prawn/ Onion/ Black Peeper/ Olive Oil/ Egg",
      foodPrice:30,
      foodImg:"../../assets/images/salad.jpeg"
    },
    {
      id:6,
      foodName:"Giant Burger",
      foodDetails:"Burger Bread/ Egg/ Pork",
      foodPrice:18,
      foodImg:"../../assets/images/burger.jpeg"
    },
    {
      id:7,
      foodName:"Pork Belly Gua Bao",
      foodDetails:"Flour/ Egg/ Pork Belly",
      foodPrice:10,
      foodImg:"../../assets/images/gua bao pork belly.jpeg"
    },
    {
      id:8,
      foodName:"Bibimbamp",
      foodDetails:"Rice/ Egg/ Pork/Vegetables",
      foodPrice:13,
      foodImg:"../../assets/images/bibimbamp.jpeg"
    }
  ]
  steps = [
    {
      id:1,
      stepsLevel:"1",
      stepsImg:"../../assets/images/food.png",
      stepsText:"Select Food"
      
    },
    {
      id:2,
      stepsLevel:"2",
      stepsImg:"../../assets/images/data.png",
      stepsText:"Fill Your Data"
      
    },
    {
      id:3,
      stepsLevel:"3",
      stepsImg:"../../assets/images/delivery.png",
      stepsText:"We Deliver in minute"
      
    },
    
  ]
}
