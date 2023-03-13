let ingredient_list = ["Noodle", { list: ["maggi", "yippee", "Akka Noodles"] }]
console.log(ingredient_list)

let ingredient_list_deepcopy=JSON.parse(JSON.stringify(ingredient_list))

// Change the value of the 'list' property in ingredients_list_deepcopy.

ingredient_list_deepcopy[1].list = ["milk", "Curd", "Cheese"]
console.log(ingredient_list_deepcopy[1].list);
console.log(ingredient_list_deepcopy);
console.log(ingredient_list[1].list);
console.log(ingredient_list)
