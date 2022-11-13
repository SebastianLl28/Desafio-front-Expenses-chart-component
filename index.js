const data = await fetch('./data.json')
const lista = await data.json();

const barras = document.querySelector('.body__bars');

lista.map((value)=>{
    barras.innerHTML += `
    <div class="bar">
        <div class="bar__body">
            <label for="" class="bar__price">${value.amount}</label>
        </div>
        <p class="bar__day">${value.day}</p>
    </div>
    `
})



const valorMax = ((lista)=>{
    let valor = 0;
    lista.map((value)=>{
        if(value.amount>valor){
            valor = value.amount;
        }
    })
    return valor;
})

const mayor = valorMax(lista);


let bars = document.querySelectorAll('.bar__body');
bars = [...bars];

bars.map((value, indice)=>{

    const altura = (lista[indice].amount * 110 / mayor).toFixed();
    value.style.height = `${altura}px`

    
    if(altura == 110){
        value.style.backgroundColor="hsl(186, 34%, 60%)"
    }
    


    value.addEventListener('mouseover', (event)=>{
        event.target.childNodes[1].style.display = 'block'
    })

    value.addEventListener('mouseout', (event)=>{
        event.target.childNodes[1].style.display = 'none'
    })
})

