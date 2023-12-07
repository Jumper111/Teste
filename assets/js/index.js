const body=document.getElementById("body")
const tabela=document.querySelector(".tabela")

let local= JSON.parse(localStorage.getItem("Contactos")) || []
let contador=Math.floor(Math.random() * 1000)
let status_Name=false
let status_Numero=false

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

/**Onchanges */
Input_Nome.onchange= ()=>{
    if(Input_Nome.value.length > 2){
        Input_Nome.setAttribute("style","border-bottom:1px solid green")
        status_Name=true
    }else{
        Input_Nome.setAttribute("style","border-bottom:1px solid red")
        status_Name=false
        alert("Nome precisa ter mais de 2 letras")
    }
    
}

Input_Numero.onchange=()=>{
    let numbers = Input_Numero.value.split("") 
    
    if(parseInt(numbers[0]) === 9 && Input_Numero.value != " " && numbers.length === 9){
    
        if(parseInt(numbers[1]) === 1 || parseInt(numbers[1]) === 2 || parseInt(numbers[1]) === 3 || parseInt(numbers[1]) === 4 || parseInt(numbers[1]) === 9){
            Input_Numero.setAttribute("style","border-bottom:1px solid green")
            status_Numero=true
        }else{
            Input_Numero.setAttribute("style","border-bottom:1px solid red")
            alert("O segundo digito deve ser um desses 1,2,3,4,9")
            status_Numero=false
        }

        }else{
            Input_Numero.setAttribute("style","border-bottom:1px solid red")
            status_Numero=false
            alert("Primeiro digito deve ser 9 / Preencha os campos / Permitidos até 9 digitos")
         }
}

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
        <td><button id=editar onClick=Editar() >Editar</button><button id=deletar onClick= Eliminar(event)>Eliminar</button></td>
    
    ` 
    tabela.appendChild(tr)
    console.log(tr.id);
});
   
}

/**Cadastrar contacto novo */
btn_Adicionar.onclick=()=>{

    if(status_Name && status_Name){
            local.push({
                id:contador,
                nome:Input_Nome.value,
                numero:Input_Numero.value
            })

            localStorage.setItem("Contactos",JSON.stringify(local));
            location.reload();

        }else{
        alert("Resolva seu problema")
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

