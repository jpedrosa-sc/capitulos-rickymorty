class Chapter{

	constructor(id, name, season, number, image, summary){
		this.id = id;
		this.name = name;
		this.season = season;
		this.number = number;
		this.image = image;
		this.summary = summary;

	}


	toString(){
		return this.id+' - '+this.name+' - '+this.season+' - '+this.number;
	}


	/*
	Dado un objeto json de un episodio, devuelve su correspondiente html
	*/
	toHtml(){
		let html = '<article class="episodio temp_'+this.season+' type_regular" id="'+this.id+'">\
				<header>\
					<h2>'+this.name+'</h2>\
					<small>Temporada '+this.season+' / episodio '+this.number+'</small>\
					<img src="'+this.image+'" alt="'+this.name+'">\
				</header>\
				<content>\
					<strong>Descripción:</strong><br />\
					<p>'+this.summary+'</p>\
				</content>\
				<footer>\
					Rating: ***\
				</footer>\
			</article>';
		return html
	}



}