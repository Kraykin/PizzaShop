function something()
{
	var x = window.localStorage.getItem('bbb');

	x = x * 1 + 1;

	window.localStorage.setItem('bbb', x);

	alert('Hello ' + x + '!');	
}

function add_to_cart(id)
{
	alert('You addet pizza with id: ' + id);
}