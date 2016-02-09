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

	alert('Items in your cart: ' + cart_get_number_of_items());
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

function cart_get_number_of_items()
{
	var cnt = 0;
	
	for(var i = 0; i < window.localStorage.length; i++)	
	{
		var key = window.localStorage.key(i); // получаем ключ, аналог в ruby: hh[key] = x
		var value = window.localStorage.getItem(key); // получаем значение ключа
		
		if(key.indexOf('product_') == 0)
		{
			cnt = cnt + value * 1;
		}
	}

	return cnt;
}