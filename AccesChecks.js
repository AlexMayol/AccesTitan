var page = require("webpage").create();
var fs = require('fs');
var system = require("system");

page.onConsoleMessage = function(msg) {
  console.log(msg);
};


page.open(system.args[1], function(status){	
	if (status === "success" ) {
		var result = page.evaluate(function(){
			
////////////////Parte 1 - conjunto de funciones			
		function testH4(document){
			var links = document.querySelectorAll("a").length;
			if(links > 0){
				var tabindex = document.querySelectorAll("a[tabindex]").length;
				if(tabindex > 0) return 1;
				return 2;
			}
			return 0;
		}

		function testH25(document){
				if(document.title != null) return 1;
				return 2;
		}

		function testH27(document){
			var obj = document.querySelectorAll("object");
			if(obj.length > 0){
				for(var i = 0; i < obj.length; i++){
					if(obj[i].innerHTML == null) return 2;
				}
				return 1;
			}
			return 0;
		}

		function testH28(document){
			var abbr = document.querySelectorAll("abbr");
			if(abbr.length > 0){
				return 1;
			}
			return 0;
		}
			
		function testH32(document){
			var form = document.querySelectorAll("form");
			if(form.length > 0){
				var input = document.querySelectorAll("input[type='submit']").length;
				var image = document.querySelectorAll("input[type='image']").length;
				var boton = document.querySelectorAll("button[type='submit']").length;
				if(input+image+boton > 0){
					return 1;
				}
				return 2;
			}
			return 3;
		}

		function testH33(document){
			var a = document.querySelectorAll("a");
			if(a.length > 0){
				for(var i = 0; i < a.length; i++){
					if(a[i].innerHTML != null){
						if(a[i].getAttribute("title") == null || a[i].getAttribute("title") == ""){
							return 3;
						}
					}
				}
			}
			return 0;
		}

		function testH35(document){
			var app = document.querySelectorAll("applet");
			if(app.length > 0){
				for(var i = 0; i < app.length; i++){
					if(app[i].innerHTML == null || app[i].getAttribute("alt") == "" || app[i].getAttribute("alt") == null){
						return 2;
					}
				}
				return 1;
			}
			return 0;
		}

		function testH36(document){
			var botones = document.querySelectorAll("input[type='image']");
			if(botones.length > 0){
				for(var i = 0; i < botones.length; i++){
					if(botones[i].getAttribute("alt") == null){
						return 2;
					}
				}
				return 1;
			}
			return 0;
		}

		function testH37(document){
			var im = document.querySelectorAll("img");
			if(im.length > 0){
				for(var i = 0; i < im.length; i++){
					if(im[i].getAttribute("alt") == null){
						return 2;
					}
				}
				return 1;
			}
			return 0;
		}

		function testH42(document){
			var h1 = document.querySelectorAll("h1");
			var h2 = document.querySelectorAll("h2");
			var h3 = document.querySelectorAll("h3");
			
			if(h1.length == 0 || h2.length + h3.length == 0){
				return 2;
			}
			return 1;
		}

		function testH45(document){
			var img = document.querySelectorAll("img[longdesc]").length;
			if(img.length > 0)return 1;
			return 3;
		}

		function testH46(document){
			var emb = document.querySelectorAll("embed");
			if(emb.length > 0){
				for(var i = 0; i < emb.length; i++){
					if(emb[i].getElementsByTagName("noembed").length == 0 || emb[i].nextSibling == null){
						return 2;
					}
				}
				return 1;
			}
			return 0;
		}

		function testH49(document){
			var em = document.querySelectorAll("em");
			var strong = document.querySelectorAll("strong");
			var quote = document.querySelectorAll("quote");
			if(em.length + strong.length + quote.lenght == 0){
				return 2;
			}
			return 1;
		}

		function testH53(document){
			var obj = document.querySelectorAll("object");
			if(obj.length > 0){
				for(var i = 0; i < obj.length; i++){
					if(obj[i].innerHTML == ""){
						return 2;
					}
				}
				return 1;
			}
			return 0;
		}

		function testH57(document){
			var lang = document.querySelectorAll("html[lang]").length;
			if(lang == 0){
				return 2;
			}
			return 1;
		}

		function testH64(document){
			var f = document.querySelectorAll("x").length;
			var ifr = document.querySelectorAll("iframe").length;
			
			if(f+ifr > 0){
				var frame = document.querySelectorAll("frame[title='']").length;
				var iframe = document.querySelectorAll("iframe[title='']").length;
				if(frame+iframe > 0){
					return 2;
				}
				return 1;
			}
			return 0;
		}

		function testH67(document){
			var img = document.querySelectorAll("img[title=null]");
			if(img.length > 0) return 3;
			return 1;
		}

		function testH76(document){
			var meta = document.querySelectorAll("meta[http-equiv='refresh']")
			if(meta.length > 0){
				return 2;
			}
			return 1;
		}

		function testH85(document){
			var form = document.querySelectorAll("form");
			if(form.length > 0){
				for(var i = 0; i < form.length; i++){
					var option = form[i].getElementsByTagName("option");
					if(option != null && option.length > 0){
						var optgroup = form[i].getElementsByTagName("optgroup");
						if(optgroup.length == 0 ){
							return 2;
						} 
					}
				}
				return 1;
			}
			return 0;
		}

		function testG1(document){
			var links = document.querySelectorAll("a");
			for(var i = 0; i < links. length; i++){
				if(links[i].getAttribute("href") == "#main"){
					return 1;
				}
			}
			return 3;
		}

		function testG62(document){
			var glos = document.getElementById("glossary");
			if(glos != null){
				return 1;
			}
			return 3;
		}

		function testG63(document){
			var map = document.getElementById("sitemap");
			if(map != null){
				return 1;
			}
			return 3;
		}

		function testG65(document){
			var trail = document.getElementById("breadcrumb");
			if(trail != null){
				return 1;
			}
			return 3;
		}

		function testG71(document){
			var forms = document.querySelectorAll("form");
			if(forms.length > 0){
				for(var i = 0; i < forms.length; i++){
					if(forms[i].getElementsByTagName("a").length < 1){
						return 2;
					}else{
						var help = forms[i].getElementsByTagName("a");
						for(var i = 0; i < help.length; i++){
							if(help[i].getAttribute("href") == "help.html"){
								return 1;
							}
						}
						return 2;
					}
				}
			}
			return 0;
		}
		function testG88(document){
			if(document.title.length < 25){
				return 2;
			}
			return 1;
		}

		function testG102(document){
			var abbr = document.querySelectorAll("abbr");
			if(abbr > 0){
				for(var i; i < abbr.length; i++){
					if(abbr[i].getAttribute("title") == ""){
						return 2;
					}
				}
				return 3;
			}
			return 0;
		}

		function testG115(document){
			var em = document.querySelectorAll("em");
			var strong = document.querySelectorAll("strong");
			var quote = document.querySelectorAll("quote");
			var blockquote = document.querySelectorAll("blockquote");
			var cite = document.querySelectorAll("cite");
			if(em.length + strong.length + quote.lenght + cite.length + blockquote.length == 0){
				return 3;
			}
			return 1;
		}

		function testG128(document){
			if(document.querySelectorAll("nav").length > 0) return 1;
			return 3;
		}

		function testG141(document){
			if(document.querySelectorAll("h1").length > 0){
				var h2 = document.querySelectorAll("h2");
				if(h2[0].getElementsByTagName("h3").length > 0){
					return 1;
				}
			}
			return 2;
		}

		function testG155(document){
			if(document.querySelectorAll("input[type='submit']").length > 0){
				if(document.querySelectorAll("input[type='checkbox']").length > 0){
					return 1;
				}else{
					return 2;
				}
			}
			return 0;
		}

		function testG161(document){
			var search =  document.getElementById("search");
			if(search == null){
				return 2;
			}
			return 1;
		}
			
		function testF25(document){
			if(document.title.length < 25){
				return 2;
			}
			return 1;
		}

		function testF47(document){
			var blinkElement = document.querySelectorAll("blink");
			if(blinkElement.length > 0){
				return 2;
			}
			return 1;
		}
		
////////////////Parte 2 - Elemento JSON
		var pruebas = 
		[
			{
				descripcion: "H4: Crear un orden de tabulación lógico a través de links, formularios de control y objectos.",
				enlace:"https://www.w3.org/TR/WCAG20-TECHS/H4.html",
				test: testH4,
				resultado: 5,
			},
			{
				descripcion: "H25: Proporcionar un título usando el elemento title.",
				enlace:"https://www.w3.org/TR/WCAG20-TECHS/H25.html",
				test: testH25,
				resultado: 5,
			},
			{
				descripcion: "H27: Proporcionar alternativas textuales y no textuales para los objetos.",
				enlace:"https://www.w3.org/TR/WCAG20-TECHS/H27.html",
				test: testH27,
				resultado: 5,
			},
			{
				descripcion: "H28: Proporcionar definiciones para abreviaturas usando los elementos abbr y acronym.",
				enlace:"https://www.w3.org/TR/WCAG20-TECHS/H28.html",
				test: testH28,
				resultado: 5,
			},
			{
				descripcion: "H32: Proporcionar botones de subida.",
				enlace:"https://www.w3.org/TR/WCAG20-TECHS/H32.html",
				test: testH32,
				resultado: 5,
			},
			{
				descripcion: "H33: Suplementar los links textuales con el atributo title.",
				enlace:"https://www.w3.org/TR/WCAG20-TECHS/H33.html",
				test: testH33,
				resultado: 5,
			},
			{
				descripcion: "H35: Proporcionar alternativas textuales en elementos applet.",
				enlace:"https://www.w3.org/TR/WCAG20-TECHS/H35.html",
				test: testH35,
				resultado: 5,
			},
			{
				descripcion: "H36: Usar el atributo 'alt' en imágenes usadas como botón de subida.",
				enlace:"https://www.w3.org/TR/WCAG20-TECHS/H36.html",
				test: testH36,
				resultado: 5,
			},
			{
				descripcion: "H37: Usar el atributo 'alt' en elementos 'img'.",
				enlace:"https://www.w3.org/TR/WCAG20-TECHS/H37.html",
				test: testH37,
				resultado: 5,
			},
			{
				descripcion: "H42: Usar h1-h6 para identificar encabezados.",
				enlace:"https://www.w3.org/TR/WCAG20-TECHS/H42.html",
				test: testH42,
				resultado: 5,
			},
			{
				descripcion: "H45: Usar longdesc.",
				enlace:"https://www.w3.org/TR/WCAG20-TECHS/H45.html",
				test: testH45,
				resultado: 5,
			},
			{
				descripcion: "H46: Usar noembed con embed.",
				enlace:"https://www.w3.org/TR/WCAG20-TECHS/H46.html",
				test: testH46,
				resultado: 5,
			},
			{
				descripcion: "H49: Usar marcado semántico para marcar texto especial o enfatizado.",
				enlace:"https://www.w3.org/TR/WCAG20-TECHS/H49.html",
				test: testH49,
				resultado: 5,
			},
			{
				descripcion: "H53: Usar el cuerpo del elemento 'object'.",
				enlace:"https://www.w3.org/TR/WCAG20-TECHS/H53.html",
				test: testH53,
				resultado: 5,
			},
			{
				descripcion: "H57: Usar el atributo 'language' en el elemento html.",
				enlace:"https://www.w3.org/TR/WCAG20-TECHS/H57.html",
				test: testH57,
				resultado: 5,
			},
			{
				descripcion: "H64: Usar el atribulo 'title' de los elementos 'frame' e 'iframe'.",
				enlace:"https://www.w3.org/TR/WCAG20-TECHS/H64.html",
				test: testH64,
				resultado: 5,
			},
			{
				descripcion: "H67: Usar texto alternativo nulo y no usar atributo 'título' en elementos 'img' para imágenes que se deben ignorar.",
				enlace:"https://www.w3.org/TR/WCAG20-TECHS/H67.html",
				test: testH67,
				resultado: 5,
			},
			{
				descripcion: "H76: Usar meta refresh para crear una redirección instantánea en el lado del cliente.",
				enlace:"https://www.w3.org/TR/WCAG20-TECHS/H76.html",
				test: testH76,
				resultado: 5,
			},
			{
				descripcion: "H85: Usar OPTGROUP para agrupar elementos OPTION dentro de un SELECT.",
				enlace: "https://www.w3.org/TR/WCAG20-TECHS/H85.html",
				test: testH85,
				resultado: 5,
			},
			{
				descripcion: "G1: Añadir un lunk al principio de una página que dirige directamente al área del contenido principal.",
				enlace: "https://www.w3.org/TR/WCAG20-TECHS/G1.html",
				test: testG1,
				resultado: 5,
			},
			{
				descripcion: "G62: Proporcionar un glosario.",
				enlace: "https://www.w3.org/TR/WCAG20-TECHS/G62.html",
				test: testG62,
				resultado: 5,
			},
			{
				descripcion: "G63: Proporcionar un mapa del sitio.",
				enlace: "https://www.w3.org/TR/WCAG20-TECHS/G63.html",
				test: testG63,
				resultado: 5,
			},
			{
				descripcion: "G65: Ofrecer un camino de migas de pan.",
				enlace: "https://www.w3.org/TR/WCAG20-TECHS/G65.html",
				test: testG65,
				resultado: 5,
			},
			{
				descripcion: "G71: Ofrecer un enlace de ayuda en cada página.",
				enlace: "https://www.w3.org/TR/WCAG20-TECHS/G71.html",
				test: testG71,
				resultado: 5,
			},
			{
				descripcion: "G88: Ofrecer títulos descriptivos para las páginas web.",
				enlace: "https://www.w3.org/TR/WCAG20-TECHS/G88.html",
				test: testG88,
				resultado: 5,
			},
			{
				descripcion: "G102: Ofrecer la expansión o explicación de abreviaturas.",
				enlace: "https://www.w3.org/TR/WCAG20-TECHS/G102.html",
				test: testG102,
				resultado: 5,
			},
			{
				descripcion: "G115: Usar elementos semánticos para marcar la estructura.",
				enlace: "https://www.w3.org/TR/WCAG20-TECHS/G115.html",
				test: testG115,
				resultado: 5,
			},
			{
				descripcion: "G128: Indicar la localización actual mediante barras de navegación.",
				enlace: "https://www.w3.org/TR/WCAG20-TECHS/G128.html",
				test: testG128,
				resultado: 5,
			},
			{
				descripcion: "G141: Organizar una página usando encabezados.",
				enlace: "https://www.w3.org/TR/WCAG20-TECHS/G141.html",
				test: testG141,
				resultado: 5,
			},
			{
				descripcion: "G155: Proporcionar un 'checkbox' en conjunto con un botón de envío.",
				enlace: "https://www.w3.org/TR/WCAG20-TECHS/G155.html",
				test: testG155,
				resultado: 5,
			},
			{
				descripcion: "G161: Ofrecer una función de búsqueda para ayudar a los usuarios a encontrar contenido.",
				enlace: "https://www.w3.org/TR/WCAG20-TECHS/G161.html",
				test: testG161,
				resultado: 5,
			},
			{
				descripcion: "F25: Fallo del Criterio de Conformidad 2.4.2 debido al título de una página que no identifica los contenidos.",
				enlace: "https://www.w3.org/TR/WCAG20-TECHS/F25.html",
				test: testF25,
				resultado: 5,
			},
			{
				descripcion: "F47: Fallo del Criterio de Conformidad 2.2.2 debido al uso del elemento 'blink'.",
				enlace: "https://www.w3.org/TR/WCAG20-TECHS/F47.html",
				test: testF47,
				resultado: 5,
			}
		];
////////////////Parte 3 - bucle de analisis
			for(var i = 0; i < pruebas.length; i++){
				var prueba = pruebas[i];
				prueba.resultado =prueba.test(document); 
			}
			console.log(JSON.stringify(pruebas));
			return JSON.stringify(pruebas);
		});
	
	}else{
		fs.write('exit.json', 'loading failed', 'w');
		phantom.exit();
	}
	fs.write('exit.json', result, 'w');
	phantom.exit();
});