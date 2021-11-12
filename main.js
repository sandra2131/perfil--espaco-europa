window.onload=function(){

 const respostaCerta= document.getElementById("resposta-certa");
 const coment = document.getElementById('coment');
 //respostaCerta.addEventListener('click' , (event) =>{console.log("Estou aqui");})

 respostaCerta.addEventListener("click", (event) =>{
   coment.innerHTML = "<strong>Correcto</strong>";
 });

 const respostasErradas= document.querySelectorAll('.resposta-errada');


//Iterar sobre todas as respostas: ciclo for each:


respostasErradas.forEach((resposta) => {
	
	resposta.addEventListener('click', (event) =>{
		let item_cont="<strong> Ops, Errado!</strong>"
		



         if (resposta.id==="resposta-html"){
	     item_cont+= "Esta linguagem permite-nos dar estrutura à nossa página"
         } else if(resposta.id ==="resposta-css"){
	     item_cont+= "Esta linguagem permite-nos dar estilo à nossa página"
	 }

    })

})


}

