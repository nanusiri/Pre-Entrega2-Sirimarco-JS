const alumnos = [
    {nombre: "Santiago Lopez", edad: 22, peso: 76, altura: 179},
    {nombre: "Jeronimo Colombres", edad: 25, peso: 81, altura: 175},
    {nombre: "Nicolas Ruiz", edad: 32, peso: 69, altura: 167}
]
alumnos.push({nombre: "Maximiliano Perez", edad: 15, peso: 63, altura: 170})

//Mostrar quienes son los alumnos:
let nombres = ""
for (let i = 0; i < alumnos.length; i++){
    nombres += alumnos[i].nombre + "\n"
}
alert("Los alumnos que tenemos actualmente son:\n" + nombres)

//Sumar el peso de alumnos:
function sumarPesos(alumnos){
    let santiago = alumnos.find(function(alumno){
        return alumno.nombre === "Santiago Lopez"
    });
    let nicolas = alumnos.find(function(alumno){
        return alumno.nombre === "Nicolas Ruiz"
    });
    let sumaPesos = santiago.peso + nicolas.peso
    return sumaPesos
}
let resultadoSuma = sumarPesos(alumnos)
alert("La suma del peso de Santiago y Nico es: " + resultadoSuma)

//Mostrar alumnos mayores de 22 años:
let resultadoFiltro = alumnos.filter((alumno) => alumno.edad > 22)
let nombre = resultadoFiltro.map((alumno) => " " + alumno.nombre)
alert("Los alumnos mayores a 22 años son:\n" + nombre)

//Generarle una fecha aleatoria de inicio de entrenamiento con nosotros
function generarFechaInicioAleatoria(anio) {
    const fechaInicio = new Date(anio, 0, 1).getTime()
    const tiempoMs = new Date(anio, 11, 31).getTime() - fechaInicio
    const fechaRandomMs = fechaInicio + Math.random() * tiempoMs
    const fechaRandom = new Date(fechaRandomMs)
    return fechaRandom
}
alumnos.forEach(alumno => {
    alumno.fechaInicio = generarFechaInicioAleatoria(2022)
})
alert("El alumno " + alumnos[3].nombre + " lleva entrenando con nosotros desde : " + alumnos[3].fechaInicio)

//Sacar la diferencia de hace cuanto entrena maximiliano y jeronimo
let inicioMaxi = alumnos[3].fechaInicio
let inicioJero = alumnos[1].fechaInicio
const milisegundosPorDia = 86400000
let diferenciaTiempo1 = (inicioMaxi - inicioJero) / milisegundosPorDia
let diferenciaTiempo2 = (inicioJero - inicioMaxi) / milisegundosPorDia
if (diferenciaTiempo1 >= 0){
    alert("Jeronimo viene entrenando " + Math.round(diferenciaTiempo1) + " dias mas que Maximiliano")
} else{
    alert("Maximiliano viene entrenando " + Math.round(diferenciaTiempo2) + " dias mas que Jeronimo")
}

