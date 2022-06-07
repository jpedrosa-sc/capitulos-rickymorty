console.log('Inicio')

function getData(){
	let episodios_json = JSON.parse(rym)
	return episodios_json._embedded.episodes;
}



/*
	Función que recoge un array de objetos JSON, lo recorre y lo muestra en el <content>
*/
function displayData(data){
	let episodios_html = '';

	for (var i = 0; i < data.length; i++) {
		// mostrarElemento
		episodios_html += episode_toHTML(data[i])
		if(i< data.length-1 && data[i].season != data[i+1].season){
			episodios_html += "<h2>Cambio Temporada</h2>";
		}
	}
	document.querySelector('content').innerHTML = episodios_html;
}


function displaySeason(data, season){
	let episodios_html = '';

	for (var i = 0; i < data.length; i++) {
		// mostrarElemento
		if(data[i].season == season){
			episodios_html += episode_toHTML(data[i])
		}
	}
	document.querySelector('content').innerHTML = episodios_html;
}


/*
Dado un objeto json de un episodio, devuelve su correspondiente html
*/
function episode_toHTML(episode){
	let amaia = '<article class="episodio temp_'+episode.season+' type_regular" id="'+episode.id+'">\
				<header>\
					<h2>'+episode.name+'</h2>\
					<small>Temporada '+episode.season+' / episodio '+episode.number+'</small>\
					<img src="'+episode.image+'" alt="'+episode.name+'">\
				</header>\
				<content>\
					<strong>Descripción:</strong><br />\
					<p>'+episode.summary+'</p>\
				</content>\
				<footer>\
					Rating: ***\
				</footer>\
			</article>';
	return amaia
}


function main(){
	data = getData(); //Obtenemos los episodios
	displayData(data); //Mostramos los episodios
	//displaySeason(data, 1)
}

main();