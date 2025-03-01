/* 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme */

const btn_class_showme = document.querySelector(".showme");
const buttonContent = btn_class_showme.textContent;
console.log(buttonContent);

/*1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado*/
const h1_id_pillado = document.querySelector("#pillado");
const pilladoContent = h1_id_pillado.textContent;
console.log(pilladoContent);

/*1.3 Usa querySelector para mostrar por consola todos los p*/
const all_paragraphs = document.querySelectorAll("p");
for(let ele of all_paragraphs)
{
  console.log(ele.innerText);
}

/*1.4 Usa querySelector para mostrar por consola todos los elementos con
	la clase.pokemon */

const all_hasClass_pokemon = document.querySelectorAll(".pokemon");
for(let ele of all_hasClass_pokemon)
{
  console.log(ele.textContent);
}

/* 1.5 Usa querySelector para mostrar por consola todos los elementos con 
el atributo data-function="testMe". */

const all_hasAttribute_ = document.querySelectorAll("[data-function=testMe]");
for(let ele of all_hasAttribute_)
{
  console.log(ele.innerText);
}

/* 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe". */


const all_hasAttribute_2 = document.querySelectorAll("[data-function=testMe]");
console.log(all_hasAttribute_2[2].innerText);

