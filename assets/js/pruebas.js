
episodio8_json = {
	"id":1717822,
	"url":"https://www.tvmaze.com/episodes/1717822/ricky-zoom-1x08-little-buster-bunker",
	"name":"Little Buster Bunker",
	"season":1,
	"number":8,
	"type":"regular",
	"airdate":"2019-09-11",
	"airtime":"12:45",
	"airstamp":"2019-09-11T16:45:00+00:00",
	"runtime":15,
	"rating":{
		"average":null
	},
	"image":null,
	"summary":"<p>Officer Bunker's grandson Buster learns from Toot that some rules can be broken, and some are there for a good reason.</p>",
	"_links":{
		"self":{
			"href":"https://api.tvmaze.com/episodes/1717822"
		}
	}
}

episodio9_json = {
	"id":1726903,
	"url":"https://www.tvmaze.com/episodes/1726903/ricky-zoom-1x09-the-wheelford-wheeler",
	"name":"The Wheelford Wheeler",
	"season":1,
	"number":9,
	"type":"regular",
	"airdate":"2019-09-12",
	"airtime":"12:30",
	"airstamp":"2019-09-12T16:30:00+00:00",
	"runtime":15,
	"rating":{
		"average":null
	},
	"image":null,
	"summary":"<p>Maxwell tells the buddies about the famous masked rescue racer The Wheelford Wheeler.</p>",
	"_links":{
		"self":{
			"href":"https://api.tvmaze.com/episodes/1726903"
		}
	}
}


episodio8_html = episode_toHTML(episodio8_json)

//document.querySelector('content').innerHTML = episodio8_html;

episodio9_html = episode_toHTML(episodio9_json)

document.querySelector('content').innerHTML = episodio8_html+episodio9_html;



/*
<article class="episodio temp_1 type_regular" id="1717822">
	<header>
		<h2>Little Buster Bunker</h2>
		<small>Temporada 1 / episodio 8</small>
	</header>
	<content>
		<strong>Descripción:</strong><br />
		<p>Officer Bunker's grandson Buster learns from Toot that some rules can be broken, and some are there for a good reason.</p>
	</content>
	<footer>
		Rating: ***
	</footer>
</article>
*/