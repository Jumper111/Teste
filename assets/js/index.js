const body=document.getElementById("body")
const tabela=document.querySelector(".tabela")
const contactos=[]

let telaEscura= document.createElement("div")
let telPrincipal= document.createElement("div")
let h3 = document.createElement("h3")
let Inputs=document.createElement("div")
let Input_Nome = document.createElement("input")
let Input_Numero = document.createElement("input")

const btn_Adicionar= document.createElement("button")

Input_Nome.type="text"
Input_Numero.type="number"

btn_Adicionar.innerHTML="Adicionar"
h3.innerHTML="ADICONANDO NOVO CONTACTO"
Input_Nome.placeholder="Insira o nome"
Input_Numero.placeholder="Insira o numero"

telaEscura.className="tela_escura"
telPrincipal.className="tela_add"
Inputs.className="inputs"



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

btn_Adicionar.onclick=()=>{
    const tr=document.createElement("tr")
    const btn_editar = document.createElement('button')
    btn_editar.innerText = 'Editar'
    btn_editar.addEventListener('click' , editar())


    tr.innerHTML=`
    <td>${Input_Nome.value}</td>
    <td>${Input_Numero.value}</td>
    <td></td>
    <td></td>
    `
    tabela.appendChild(tr)
    
    contactos.push({
        nome:Input_Nome.value,
        numero:Input_Numero.value
    })

    localStorage.setItem("Contactos",JSON.stringify(contactos))
    telaEscura.setAttribute("style","display:none")
    Input_Nome.value=""
    Input_Numero.value=""

}

function editar() {
     console.log('editou...');
}