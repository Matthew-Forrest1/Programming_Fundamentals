function index() {
  //declare variables
  var OrderedItem = [];
  var OrderedPrice = [];
  var TipPercentage;
  var total = 0;
  var BillTotal = 0;
  var Menu = [];
  var Price = [];
  var keepLooping = true;
  var Tip;
  var input;
  

  //declare arrays
  Menu = ["Hamburger", "Cheeseburger", "Wings", "Fries", "Spinach Dip", "Cheese Curds"];
  Price = [8.99, 9.99, 11.50, 4.99, 3.99, 7.50];

  //while prompt loop
while (keepLooping) {
  input = prompt("Enter one of the menu items to start your order or type 'done' to end you order: " + Menu.join(", "));
  //IF-one: enter done to stop loop, otherwise assign index from input in menu array
  if (input === "done") {
    keepLooping = false;
  } else {
    index = Menu.indexOf(input);
  //IF-two: if menu item is correct, push the order in array and match the price with the correct menu item
   if (index >= 0) { 
    OrderedItem.push(input)
    OrderedPrice.push(Price[index]);
   }else {
    //error message for false input
    alert("You entered an invalid item. Try again or type done if you want to stop the order");
   }
  }
}
  // Display Reciept
  document.write("<br>" + "You entered " + OrderedItem.length + " menu items" + "<br>");
  document.write("Here is your reciept " + "<br>");

  // For loop to display order item and price
for (var i = 0; i < OrderedItem.length; i++) {
  document.write(OrderedItem[i] + " - $" + OrderedPrice[i] + "<br>");
}
  //Another for loop to add the prices to total
for (var i = 0; i < OrderedPrice.length; i++) {
  total += OrderedPrice[i];
}
  //display the total without tip, prompt for tip, round to 2 decimal places, display total with tip
  document.write("Your total is " + "$" + total + "<br>")
  Tip = Number(prompt("Enter the percent that you would like to tip: "));
  document.write("You tipped: " + Tip + "%" + "<br>")
  TipPercentage = (Tip/100)
  BillTotal = ((total * TipPercentage) + total).toFixed(2);
  document.write("Your total with tip is $" + BillTotal)
}
index();