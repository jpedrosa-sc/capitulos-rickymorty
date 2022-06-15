console.log('Inicio')

function getData(){
	let episodios_json = JSON.parse(rym)
	let lista_episodios = episodios_json._embedded.episodes;

	let episodios = [];

	for(let i=0; i < lista_episodios.length; i++){
		//ch1 = new Chapter(5,'El principio', 1, 1, '', 'blabla');
		ch = new Chapter(lista_episodios[i].id,
						lista_episodios[i].name,
						lista_episodios[i].season,
						lista_episodios[i].number,
						lista_episodios[i].image,
						lista_episodios[i].summary
			);
		episodios.push(ch);

	}
	return episodios;
}





/*
	Función que recoge un array de objetos JSON, lo recorre y lo muestra en el <content>
*/
function displayData(data){
	let episodios_html = '';

	for (var i = 0; i < data.length; i++) {
		// mostrarElemento
		episodios_html += data[i].toHtml();
		
	}
	document.querySelector('content').innerHTML = episodios_html;
}





function main(){
	data = getData(); //Obtenemos los episodios

	console.log(data);
	displayData(data); //Mostramos los episodios
	//displaySeason(data, 1)
}

main();



/*ch1 = new Chapter(5,'El principio', 1, 1, '', 'blabla');

console.log(ch1)
console.log(ch1.toString())

document.querySelector('content').innerHTML = ch1.toHtml();

*/