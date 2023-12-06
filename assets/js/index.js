const body=document.getElementById("body")
const tabela=document.querySelector(".tabela")

let local= JSON.parse(localStorage.getItem("Contactos")) || []
let contador=Math.floor(Math.random() * 1000)

let telaEscura= document.createElement("div")
let telPrincipal= document.createElement("div")
let h3 = document.createElement("h3")
let Inputs=document.createElement("div")
let Input_Nome = document.createElement("input")
let Input_Numero = document.createElement("input")

const btn_Adicionar= document.createElement("button")

/*Tipologia*/

Input_Nome.type="text"
Input_Numero.type="number"

/* Valores e places */
btn_Adicionar.innerHTML="Adicionar"
h3.innerHTML="ADICONANDO NOVO CONTACTO"
Input_Nome.placeholder="Insira o nome"
Input_Numero.placeholder="Insira o numero"

/*Classes*/
telaEscura.className="tela_escura"
telPrincipal.className="tela_add"
Inputs.className="inputs"

/**Fazer aparecer a tela de adicionar */

function Exibir_Tela(){
   
    telaEscura.setAttribute("style","display:flex")

    telPrincipal.appendChild(h3)
    telPrincipal.appendChild(Inputs)
    telPrincipal.appendChild(btn_Adicionar)
    Inputs.appendChild(Input_Nome)
    Inputs.appendChild(Input_Numero)
    telaEscura.appendChild(telPrincipal)
    body.appendChild(telaEscura)

}   

/**Apresentar */

function Ready(){
    
    local.forEach(e => {
        const tr=document.createElement("tr")
        tr.id=e.id
        tr.innerHTML=`
        <td>${e.nome}</td>
        <td>${e.numero}</td>
        <td><button onClick=Editar()>Editar</button><button onClick= Eliminar(event)>Eliminar</button></td>
    
    ` 
    tabela.appendChild(tr)
    console.log(tr.id);
});
   
}

/**Cadastrar contacto novo */
btn_Adicionar.onclick=()=>{

    if(Input_Nome.value != "" && Input_Numero.value != "" ){
    local.push({
        id:contador,
        nome:Input_Nome.value,
        numero:Input_Numero.value
    })

    localStorage.setItem("Contactos",JSON.stringify(local));
    location.reload();
    }else{
        alert("Preencha os campos")
    }
}

/**Eliminar */
function Eliminar({target}){
   let id = target.closest("tr").getAttribute("id")    
   let tr=document.getElementById(id)
  

   let newLocal = local.filter((contacto)=>(
        contacto.id != id
   ))
    localStorage.setItem("Contactos",JSON.stringify(newLocal))
    location.reload()
}
Ready()

/**Validando se  */

