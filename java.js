// const list = document.querySelector(`.list`)

// const days = [`Lunes`, `Martes`, `Miercoles`, `Jueves`, `Viernes`, `Sabado`, `Domingo`]


// const fragment = document.createDocumentFragment()
// for(const day of days){
//     const li = document.createElement(`li`)
//     li.textContent = day
//     fragment.appendChild(li)
// }

// list.appendChild(fragment)


// ---------------------------------------------------------------------------------------

// const days = [`Lunes`, `Martes`, `Miercoles`, `Jueves`, `Viernes`, `Sabado`, `Domingo`]

// const fragment2 = document.createDocumentFragment()

// for(const day of days){
//     const option = document.createElement(`option`)
//     option.textContent = day
//     fragment2.appendChild(option)
// }

// select.appendChild(fragment2)

// ----------------------------------------------------------------------------------------

const select = document.getElementById(`select`)
const add = document.getElementById(`add`)
const addfinish = document.getElementById(`addfinish`)
const date = document.getElementById(`date`)

const fragment2 = document.createDocumentFragment()

const addList = []

add.addEventListener(`click`, ()=>{
    if(date.value==``){
        alert(`No hay dato`)
    }else{
        addList.push(date.value)
        date.value = ``
    }
})

addfinish.addEventListener(`click`, ()=>{
    for(const element of addList){
        const option = document.createElement(`option`)
        option.textContent = element
        fragment2.appendChild(option)
    }
    select.appendChild(fragment2)
})

