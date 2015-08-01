console.log("Your code goes in this document.");

// answer 1:
var arrOfPrices = items.map(function(el) {
  return el.price;
});
var totalPrice = arrOfPrices.forEach(function(el) {});
var sum = 0;
var totalPrice = arrOfPrices.forEach(function(el) {
  sum += el;
  return sum;
});
sum / arrOfPrices.length
var answer1 = sum / arrOfPrices.length
document.getElementById('answer1').innerhtml = Math.round(answer1 * 100) / 100


// answer 2:
var rangeOfTitles = items.map(function(el, idx) {
  if (el.price >= 14 && el.price <= 18) {
    return (" Title: " + el.title)
  }
});
// I want to use the .filter method to filter array, but can't figure it out
var answer2 = rangeOfTitles
document.getElementById('answer2').innerHTML = answer2


//answer 3:
var currencyCode = items.map(function(el, idx) {
  if (el.currency_code === 'GBP') {
    return(" Title: " + el.title + "\n Price: " + el.price)
  }
});
var answer3 = currencyCode
document.getElementById('answer3').innerHTML = answer3


// answer 4:
var woodMaterial = items.map(function(el, idx) {
  if (el.materials.indexOf('wood') !== -1 ) {
    return("\nItems: " + el.title)
  }
});

var answer4 = woodMaterial;
document.getElementById('answer4').innerHTML = answer4


// answer 5:
var eightOrMore = items.map(function(el, idx) {
  if (el.materials.length >= 8)
    return("\nName: " + el.title + "\n# of Materials: " + el.materials.length + "\nMaterial Type: " + el.materials)
});

var answer5 = eightOrMore;
document.getElementById('answer5').innerHTML = answer5


// ansewer 6:
var creatorAndSeller = items.map(function(el) {
  if (el.who_made === "i_did")
    return("\n# of Entrepreneur: " + el.who_made)
});

var answer6 = creatorAndSeller.length
document.getElementById('answer6').innerHTML = answer6
