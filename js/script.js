const alumnos = [
    {nombre: prompt("Ingrese el nombre del alumno 1:"), 
    edad: parseInt(prompt("Ingrese la edad del alumno 1:")),
    peso: parseInt(prompt("Ingrese el peso del alumno 1:")),
    altura: parseInt(prompt("Ingrese la altura del alumno 1:"))
    },
    {nombre: prompt("Ingrese el nombre del alumno 2:"), 
    edad: parseInt(prompt("Ingrese la edad del alumno 2:")),
    peso: parseInt(prompt("Ingrese el peso del alumno 2:")),
    altura: parseInt(prompt("Ingrese la altura del alumno 2:"))
    },
]
alumnos.push({nombre: "Maximiliano Perez", edad: 15, peso: 63, altura: 170})


//Mostrar quienes son los alumnos:
let nombres = ""
for (let i = 0; i < alumnos.length; i++){ 
    nombres += alumnos[i].nombre + "\n"
}
alert("Los alumnos que tenemos actualmente son:\n" + nombres)
alert("Ya teniamos un alumno, se llama Maxi tiene 15 años, pesa 63kg y mide 1.70")

//Mostrar alumno mas alto:
let alumnoMasAlto = alumnos.reduce((alumnoPrevio, alumnoActual) => {
    if (alumnoActual.altura > alumnoPrevio.altura) {
      return alumnoActual
    } else {
      return alumnoPrevio
    }
  })
  
  alert("El alumno más alto es: " + alumnoMasAlto.nombre)

//Mostrar alumnos mayores de 18 años:
let resultadoFiltro = alumnos.filter((alumno) => alumno.edad > 18)
let nombre = resultadoFiltro.map((alumno) => " " + alumno.nombre)
alert("Los alumnos mayores a 18 años son:\n" + nombre)

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
alert("El alumno " + alumnos[2].nombre + " lleva entrenando con nosotros desde : " + alumnos[2].fechaInicio)

//Sacar la diferencia de hace cuanto entrena maximiliano y jeronimo
alert("Le generamos una fecha aleatoria de incio de entrenamiento a " + alumnos[0].nombre)
alert("Y su fecha de inicio es" + alumnos[0].fechaInicio)
let inicioMaxi = alumnos[2].fechaInicio
let inicioAlumno1 = alumnos[0].fechaInicio
const milisegundosPorDia = 86400000
let diferenciaTiempo1 = (inicioMaxi - inicioAlumno1) / milisegundosPorDia
let diferenciaTiempo2 = (inicioAlumno1 - inicioMaxi) / milisegundosPorDia
if (diferenciaTiempo1 >= 0){
    alert(alumnos[0].nombre + " viene entrenando " + Math.round(diferenciaTiempo1) + " dias mas que Maximiliano")
} else{
    alert("Maximiliano viene entrenando " + Math.round(diferenciaTiempo2) + " dias mas que " + alumnos[0].nombre)
}

