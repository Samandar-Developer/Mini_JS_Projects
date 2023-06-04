class Form{
  constructor(divClass, labelClass, inputClass){
    this.divClass = divClass;
    this.labelClass = labelClass;
    this.inputClass = inputClass;
  }

  div(){
    const div = document.createElement("div");
    div.className = this.divClass;
    return div;
  }

  label(labelText){
    const label = document.createElement("label");
    label.className = this.labelClass;
    label.appendChild(document.createTextNode(labelText));
    return label;
  }

  input(name, type){
    const input = document.createElement("input");
    input.className = this.inputClass;
    input.setAttribute("name", name);
    input.setAttribute("type", type);
    return input;
  }
}
const formTemplate = document.getElementById("dynamic-form");
const formGen = new Form("divClass", "labelClass", "inputClass");

let formClasses = [
  {
    label:"Дата",
    input:{
      name:"material_date[]",
      type:"date"
    }
  },
  {
    label:"Товар",
    input:{
      name:"material_product[]",
      type:"text"
    }
  },
  {
    label:"Количество",
    input:{
      name:"material_amount[]",
      type:"number"
    }
  },
  {
    label:"Цена за ед.",
    input:{
      name:"material_price[]",
      type:"number"
    }
  },
];

formClasses = formClasses.reverse();
function makeInputField(){
  for(let singleClass of formClasses){
    const div = formGen.div();
    
    const label = formGen.label(singleClass.label);
    
    const input = formGen.input(singleClass.input.name, singleClass.input.type);
    
    div.appendChild(label);
    div.appendChild(input);
    

    formTemplate.insertAdjacentElement("afterbegin", div);
  }
}

document.querySelector(".add-new-input").addEventListener("click", makeInputField);
