function something()
{
	var x = window.localStorage.getItem('bbb'); // объявдение переменной и присвоение ей по ключу значения из хеша localStorage, аналог в ruby: x = hh['bbb']
	
	x = x * 1 + 1; // x * 1 перевод в integer
	window.localStorage.setItem('bbb', x); // запись в хеш, аналог в ruby: hh['bbb'] = x
	
	alert('Hello ' + x + '!'); // вывод значения 'х' в алерте
}

function add_to_cart(id) // получение переменно id
{
	var key = 'product_' + id;
	
	var x = window.localStorage.getItem(key); // аналог ruby: x = localStorage['key']
	x = x * 1 + 1;
	window.localStorage.setItem(key, x); // аналог ruby: localStorage['key'] = x

	update_orders_input();
}

function cart_get_number_of_items()
{
	var cnt = 0; // объявление переменной
	
	for(var i = 0; i < window.localStorage.length; i++)	// цикл для перебора содержимого хеша localStorage
	{
		var key = window.localStorage.key(i); // получаем ключ, аналог в ruby: hh[key] = x
		var value = window.localStorage.getItem(key); // получаем значение ключа
		
		if(key.indexOf('product_') == 0) // условие: если в ключе 'product_' находится вначале, то... key.indexOf('d') возвращает позицию, на которой находится 'd', т.е. '3'
		{
			cnt = cnt + value * 1;
		}
	}

	return cnt; // вернуть значение cnt
}

function update_orders_input()
{
	var orders = cart_get_orders();
	$('#orders_input').val(orders);
}

function cart_get_orders()
{
	var orders = '';
	
	for(var i = 0; i < window.localStorage.length; i++)
	{
		var key = window.localStorage.key(i);
		var value = window.localStorage.getItem(key);
		
		if(key.indexOf('product_') == 0)
		{
			orders += key + '=' + value + ',';
		}
	}

	return orders;
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
