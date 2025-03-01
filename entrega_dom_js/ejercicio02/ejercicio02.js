/*2.1 Inserta dinamicamente en un html un div vacio con javascript.*/
const newDiv = document.createElement("div");
document.body.appendChild(newDiv);

/*2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.*/

const newDiv_wp = document.createElement("div");
document.body.appendChild(newDiv_wp);
const new_p = document.createElement("p");
newDiv_wp.appendChild(new_p);
document.body.appendChild(newDiv_wp);

/*2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
	loop con javascript. */

const div_w_ps = document.createElement("div");
for(let i = 0; i < 5; i++)
{
  const in_p = document.createElement("p");
  div_w_ps.appendChild(in_p);
}

/* 2.4 Inserta dinamicamente con javascript en un html una p con el 
	texto 'Soy dinámico!'. */

const dinamycP = document.createElement("p");
dinamycP.textContent = "Soy dinamico!";
document.body.appendChild(dinamycP);

/*2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.*/

const please_help_me = document.querySelector(".fn-insert-here");
please_help_me.textContent = "Wubba Lubba dub dub";

/*2.6 Basandote en el siguiente array crea una lista ul > li con
los textos del array.*/
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const apps_list = document.createElement("ul");
for(let i = 0; i < apps.length; i++)
{
  const apps_ele = document.createElement("li");
  apps_ele.textContent = apps[i];
  apps_list.appendChild(apps_ele);
}
document.body.appendChild(apps_list);

/*2.7 Elimina todos los nodos que tengan la clase .fn-remove-me*/

document.querySelectorAll(".fn-remove-me").forEach(el => el.remove());

/*2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
	Recuerda que no solo puedes insertar elementos con .appendChild. */

const midPara = document.createElement("p");
midPara.textContent = "Voy en medio!";
const getDiv = document.querySelectorAll("div");
getDiv[0].insertAdjacentElement("afterend", midPara);

/*2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
	.fn-insert-here */

//TODO--- Fix this
const insertPara1 = document.createElement("p");
const insertPara2 = document.createElement("p");
insertPara1.textContent = "Voy dentro!";
insertPara2.textContent = "Voy dentro!";
document.querySelectorAll(".fn-insert-here").forEach(el => el.appendChild(insertPara1));
document.querySelectorAll(".fn-insert-here").forEach(el => el.appendChild(insertPara2));
