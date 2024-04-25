var tabela =['braza03'];
var posicao = 0
var imagem = document.getElementById('imgCarrocel');


functio move_direita () {
posicao++; // posicao=posicao+;
	if (posicao>3){
	posicao=0;
	}

var nova_imagem='imagens/'+ tabela[posicao];
imagem.src=nova_imagem;
}

functio move_esquera () {
posicao++; // posicao=posicao+;
	if (posicao<0){
	posicao=3;
	}

var nova_imagem='imagens/'+ tabela[posicao];
imagem.src=nova_imagem;
}