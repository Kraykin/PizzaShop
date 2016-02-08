function something()
{
	var x = window.localStorage.getItem('bbb');
	x = x * 1 + 1;
	window.localStorage.setItem('bbb', x);
	alert('Hello ' + x + '!');	
}

function add_to_cart(id)
{
	var key = 'product_' + id;
	var x = window.localStorage.getItem(key);
	x = x * 1 + 1;
	window.localStorage.setItem(key, x);
}

function cart_total()
{
	var total = 0;
	for(var i=0, len=localStorage.length; i<len; i++) {
    	var key = localStorage.key(i);
    	var value = localStorage[key];
    	total = value * 1 + total;
    	console.log(key + " => " + value);    	
    }
    alert('You select ' + total + ' item(s).');
}
