var stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
	amount = Number(amount) -1;
	if(amount == 1) //only one left, remove the 's'
	  unit = unit.slice(0, unit.length -1);
	else if(amount == 0)
	  amount = "no";
	else if(amount == 100)
	//if 100 is met then line below will print
	  return 'zillions of eggs';
	return amount + "  " + unit;


}
print(stock.replace(/(\d+) (\w+)/g, minusOne));
