// Conectarse a datoos externos y mostrar en consola
let datos;
const URL = "https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json";
fetch(URL).then(res => res.json()).then(res => {
    console.log('%cmain.js line:59 res','color: #007acc', res)
    datos = res
    console.log('%cmain.js line:59 datos','color: #007acc', datos)

    //lista con los objetos json de los datos
    let datos_array = Array.from(JSON.parse(JSON.stringify(datos))); 

    let lista_categorias = []
    for (i = 0; i < datos_array.length; i++){
        lista_categorias.push(datos_array[i].name)
    }

    //crea la fila con las categorias
    crear_categorias(lista_categorias)


    //crea visualizacion productos
    console.log(datos_array[0].products)

    const categorias_menu = document.getElementById("categorias");
    categorias_menu.addEventListener("click",()=>{
        console.log(categorias_menu)
        mostrar_cat_productos(datos_array[0].products)
        categorias_menu.onclick=changeColor
    })

    

    //mostrar_cat_productos(datos_array[0].products)

    console.log(datos_array)
    console.log(lista_categorias)



})

//Crear tabla de una fila con los nombres de las categorias
function crear_categorias(arreglo){
    const fila_cat = document.getElementById("categorias")
    for (i=0; i<arreglo.length; i++){
        let columna = document.createElement("th")
        let cat = document.createTextNode(arreglo[i])
        columna.appendChild(cat)

        fila_cat.appendChild(columna)
        } 
    }

//tabla donde el titulo es el nombre de la categoria y muestra los productos
function mostrar_cat_productos(arreglo){   
    const tabla = document.getElementById("tbodyC")
    for (let i = 0; i < arreglo.length; i++){
        let fila = document.createElement("tr") // Crea una fila para cada dato
        for (col = 0; col < 2; col++){
            let columna = document.createElement("td")
            if (col == 0){
                let nombre_prod = document.createTextNode(arreglo[i].name) 
                columna.appendChild(nombre_prod) 
            }
            if (col==1){
                let agregar_carro = document.createElement("button");
                agregar_carro.setAttribute("value","agregar");
                agregar_carro.textContent ="agregar"
                agregar_carro.style.width ='80px'
                agregar_carro.style.height ='50px'
                columna.appendChild(agregar_carro)
            }
            
         
        fila.appendChild(columna);
            
        
        }
    tabla.appendChild(fila);
    }
}

function mostrarObj(element){
    let obj = element.target;
    return obj
    //element.target.style.color = 'red'
}


