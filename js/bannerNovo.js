// Criar os Bullets
(function(){
var containerImagens;
var numeroBullets;
var imagemAtual = 0;
var larguraBanner;
var posicaoTransform;
var numeroImagens = document.querySelectorAll(".container img").length-1;

(function() {
	// Controle do banner
	var elementosBannerControle = document.createElement("div");
	elementosBannerControle.setAttribute("id", "controleBanner");
	// quantidades de bullets
	numeroBullets = document.querySelectorAll(".container img").length;
	// Elementos criados dinamicamente
	var elementoBulletsUL = document.createElement("ul");
	elementoBulletsUL.setAttribute("id", "bullets");
	for(var i=0; i< numeroBullets; i++){
		var elementoBulletsLI = document.createElement("li");
		elementoBulletsUL.appendChild(elementoBulletsLI);
	}
	// adicionando ao corpo da página
	document.body.appendChild(elementosBannerControle);
	elementosBannerControle.appendChild(elementoBulletsUL);
	// tamanho dinamico da ul
	var el = document.getElementById("bullets").querySelectorAll("li")[0];
	function outerWidth(el) {
	  var width = el.offsetWidth;
	  var style = getComputedStyle(el);

	  width += parseInt(style.marginLeft) + parseInt(style.marginRight);
	  return width;
	}
	var larguraElementoBullets = outerWidth(el);
	// fim da estilização dinamica para os bullets
	elementoBulletsUL.style.width = (larguraElementoBullets * numeroBullets) + "px";
	// Adicionando classe ativa ao primeiro bullet
	var elementoAtivoInicial = document.getElementById("bullets").querySelector("li");
	elementoAtivoInicial.setAttribute("class", "active");
})();



var bulletsClassesNovo = document.getElementById("bullets").childNodes;

// Controle botão anterior
(function() {
	containerImagens = document.getElementsByClassName("container")[0];
	var st = window.getComputedStyle(containerImagens, null);
	var existeTransformacao = st.getPropertyValue("-webkit-transform") ||
			 st.getPropertyValue("-moz-transform") ||
			 st.getPropertyValue("-ms-transform") ||
			 st.getPropertyValue("-o-transform") ||
			 st.getPropertyValue("transform") ||
			 "Either no transform set, or browser doesn't do getComputedStyle";
	//console.log(existeTransformacao);
	
	if(existeTransformacao == "none"){
		document.querySelector(".prev").style.display = "none";
	}

	document.querySelector(".prev").addEventListener("click", function(){
		if( imagemAtual > 0){
			imagemAtual--;
			posicaoTransform = posicaoTransform - larguraBanner;
			containerImagens.style.transform = "translateX("+ (-posicaoTransform) +"px)";
			console.log(imagemAtual);
			console.log(posicaoTransform);
			
			for(var i=0; i< bulletsClassesNovo.length; i++ ){
				bulletsClassesNovo[i].setAttribute("class", "");
			}
			bulletsClassesNovo[imagemAtual].setAttribute("class", "active");
			
		}
		
		if(imagemAtual != numeroImagens){
			document.querySelector(".next").style.display = "block";
		}
		
		if(imagemAtual == 0){
			document.querySelector(".prev").style.display = "none";
		}
		
	})
	
})();

// Controle botão proximo
(function() {
	larguraBanner = containerImagens.offsetWidth;
	document.querySelector(".next").addEventListener("click", function(){
		if(imagemAtual < numeroImagens){
			imagemAtual++;
			posicaoTransform = larguraBanner * imagemAtual;
			containerImagens.style.transform = "translateX("+-posicaoTransform+"px)"; 
			
			var st = window.getComputedStyle(containerImagens, null);
			var existeTransformacao = st.getPropertyValue("-webkit-transform") ||
			st.getPropertyValue("-moz-transform") ||
			st.getPropertyValue("-ms-transform") ||
			st.getPropertyValue("-o-transform") ||
			st.getPropertyValue("transform") ||
			"Either no transform set, or browser doesn't do getComputedStyle";
			if(existeTransformacao != "none"){
				document.querySelector(".prev").style.display = "block";
			}
			console.log(imagemAtual);
			console.log(posicaoTransform);
			

			for(var i=0; i< bulletsClassesNovo.length; i++ ){
				bulletsClassesNovo[i].setAttribute("class", "");
			}
			bulletsClassesNovo[imagemAtual].setAttribute("class", "active");
			
			}
		
		if(imagemAtual == numeroImagens){
			document.querySelector(".next").style.display = "none";
		}
	})
	
})();


// Clicar Bullets
(function() {

var botoes = document.getElementById('bullets');
for (var i = 0, len = botoes.children.length; i < len; i++)
{
	(function(index){
        botoes.children[i].onclick = function(){
            //console.log(index);
			posicaoTransform = larguraBanner * index;
			containerImagens.style.transform = "translateX("+-posicaoTransform+"px)";
			for(var i=0; i< bulletsClassesNovo.length; i++ ){
				bulletsClassesNovo[i].setAttribute("class", "");
			}
			bulletsClassesNovo[index].setAttribute("class", "active");
			
			
			if(index == numeroImagens){
				document.querySelector(".next").style.display = "none";
				document.querySelector(".prev").style.display = "block";
			}
			
			if(index == 0){
				document.querySelector(".prev").style.display = "none";
				document.querySelector(".next").style.display = "block";
			}
			
			imagemAtual = index;
			console.log(imagemAtual);
			
        }    
    })(i);
}
	
})();


})();
