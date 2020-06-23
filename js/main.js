'use strict';


//EVENTOS DEL FORMULARIO
document.querySelector('form[id = "form"]').addEventListener('submit',(e)=>{

	e.preventDefault();
	const name = document.querySelector('input[id = "name"]').value;
	const price = document.querySelector('input[id = "price"]').value;
	const year = document.querySelector('input[id = "year"]').value;
	const description = document.querySelector('textarea[id = "description"]').value;

	const product = new Product(name,price,year,description);

	const ui = new Interface();
	ui.addProduct(product);
	ui.resetForm();
});



//EVENTOS DEL CONTENEDOR DE PRODUCTOS
document.querySelector('div[id="products"]').addEventListener('click',e =>{

	const ui = new Interface();
	ui.deleteProduct(e.target);

});



//CONSTRUCTOR DE PRODUCTOS
class Product{

	constructor(name,price,year,description){
		this.name = name;
		this.price = price;
		this.year = year;
		this.description = description;
	}
}



//METODOS DE LA INTERFAZ
class Interface {

	addProduct(product){
		const products = document.querySelector('div[id="products"]');
		const item = document.createElement('div');
		item.id = product.name;
		item.classList = 'card text-center mb-4';
		item.innerHTML = `
		<h5 class="mt-3">${product.name}</h5>
		<div class="card-body">
		<p><span><strong>Precio:</strong> ${product.price}</span>
		<span><strong>Año:</strong> ${product.year}</span></p>
		<p>${product.description}</p>
		<button class="btn btn-danger" name="${product.name}">Borrar</button>
		</div>
		`;

		products.appendChild(item);

	}

	deleteProduct(element){

		if(element.name){
			const container = document.querySelector(`div[id="${element.name}"]`);
			container.remove();
		}

	}

	showMessage(){


	}

	resetForm(){
		document.querySelector('form[id = "form"]').reset();
	}
}
