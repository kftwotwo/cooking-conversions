var gallonToLiter = function(gallons) {
  return gallons * 3.785411784;
};

var literToGallon = function(liters) {
  return liters / 3.785411784;
};

var peckToBushel = function(pecks) {
  return pecks / 4;
};

var bushelToPeck = function(bushels) {
  return bushels * 4;
};

var input = prompt("how many units do you have?");
alert("Here you go... Gallons to liters: " + gallonToLiter(input) + " Liters to gallons: " + literToGallon (input) + " Pecks to bushels: " + peckToBushel (input) + " Bushels to pecks: " + bushelToPeck (input));
