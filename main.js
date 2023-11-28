import DATA from './mocks.json' assert { type: "json" };

const tableContainer = document.getElementById("table-body")
const tableButtons = document.querySelectorAll("thead tr th");
let isSorted = false
let array = DATA.data 
let searchBar = document.getElementById("search-bar")

displayOffices(array)

let newArray 
tableButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
        let id = e.target.id
        isSorted = !isSorted
        if(isSorted) {
            newArray = array.sort((a, b) => typeof a[id] === "string" ? (a[id]).localeCompare(b[id]) : (a[id]) - (b[id]))
        }else{
            newArray = array.sort((a, b) => typeof a[id] === "string" ? (b[id]).localeCompare(a[id]) : (b[id]) - (a[id]))
        }
        console.log("hi")
        displayOffices(newArray)
    })
})

function displayOffices (oficinas) {
    tableContainer.innerHTML = ""
    oficinas.map((oficina) => {    
        tableContainer.innerHTML += 
        `<th>${oficina.fianza}</th>
        <th>${oficina.movimiento}</th>
        <th>${oficina.fiado}</th>
        <th>${oficina.antiguedad}</th>
        <th>${oficina.diasVencimiento}</th>
        <th>${oficina.importe}</th>` 
    })
}

searchBar.addEventListener("keyup", function (e) {
    const oficinasFiltradas = array.filter((oficina) => (oficina.fiado).toLowerCase().includes((e.target.value).toLowerCase()))
    newArray = oficinasFiltradas
    displayOffices(newArray)
})