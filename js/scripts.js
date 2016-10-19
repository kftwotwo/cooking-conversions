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

$(document).ready(function() {
  $(".galToLitForm").submit(function(event) {
    var galToLit = $("#galToLit").val();
    $(".galToLit").text(gallonToLiter(galToLit));

    event.preventDefault();
  });
  $(".litToGalForm").submit(function(event) {
    var litToGal = $("#litToGal").val();
    $(".litToGal").text(literToGallon(litToGal));

    event.preventDefault();
  });
  $(".peckToBushForm").submit(function(event) {
    var peckToBush = $("#peckToBush").val();
    $(".peckToBush").text(peckToBushel(peckToBush));

    event.preventDefault();
  });
  $(".bushToPeckForm").submit(function(event) {
    var bushToPeck = $("#bushToPeck").val();
    $(".bushToPeck").text(bushelToPeck(bushToPeck));

    event.preventDefault();
  });
});
