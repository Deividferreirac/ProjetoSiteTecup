// ################# INSTAGRAM :)
// CRIAR VARIÁVEIS PARA GUARDAR INFORMAÇÕES:
// let - De bloco / var - Global / const - Única 
let token = "15632113326.b037a19.e5f1f64d6e0c4237b77c19ac72692fc0";
let qtdImagens = 20;
let bloco = document.getElementById("instagram");
let galeria = document.createElement("script");
// CRIAR FUNÇÃO PARA CARREGAR O CONTEÚDO
window.galeriaInsta = function(objeto){
	
	
	for(let x in objeto.data){
		
		//console.log(objeto.data[x].tags);
		bloco.innerHTML += `<div class="slide">
			<a href="${objeto.data[x].link}" target="_blank">
				<img src="${objeto.data[x].images.thumbnail.url}" alt="${objeto.data[x].tags}">
			</a>
		</div>`
		
	}
	
	var largura = window.innerWidth;
	
	window.addEventListener('resize', function(){
		console.log("Largura" + largura);
	});
	
	//console.log("Largura - " + largura);
	
	// Largura Mobile
	if(largura <= 480){ // SE
		var qtdImg = 2;
	
	// Largura Tablet
	}else if(largura <= 768){ // SENÃO SE
		var qtdImg = 3;	
	
	// Largura Desktop
	}else if(largura <= 1200){// SENÃO
		var qtdImg = 4;
		
	}else if(largura <= 1400){// SENÃO
		var qtdImg = 5;
		
	// Largura Acima de 1200
	}else{
		var qtdImg = 8;
	};
	
	$('.instaCar').slick({
		slidesToShow: qtdImg,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
	});
	
};
galeria.setAttribute("src", "https://api.instagram.com/v1/users/self/media/recent?access_token=" + token + "&count=" + qtdImagens + "&callback=galeriaInsta");
document.body.appendChild(galeria);