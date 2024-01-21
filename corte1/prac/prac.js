const estudiantes = [];

for (let i = 0; i < 100; i++) {
    const estudiante = {
            matricula: generarMatricula(),
            nombre: nombreRandom(), 
            apellido: apellidoRandom(),
            calificacion: Math.floor(Math.random() * 101),
            grado: Math.floor(Math.random() * 10 + 1),
    };

    estudiantes.push(estudiante);
        }function generarMatricula() {
            let nuevaMatricula;
            do {           nuevaMatricula = Math.floor(Math.random() * 230000);
            } while (estudiantes.some(estudiante => estudiante.matricula === nuevaMatricula));
            return nuevaMatricula;
        }
        function buscarReprobados(estudiantes) { 
            return estudiantes.filter(estudiante => estudiante.calificacion < 70);
        }

        function nombreRandom() {
            const nombres = ["Isai", "Jose", "Edgar", "Maria", "Juan", "Leonardo"];
            return nombres[Math.floor(Math.random() * nombres.length)];
        }

function apellidoRandom() {
    const apellidos = [
        "Lopez", "Gomez", "Diaz", "Juarez", "Macias", "Ballinas",
        "Ramirez", "Gonzalez", "Hernandez", "Martinez", "Perez",
        "Castillo", "Vargas", "Fernandez", "Torres", "Gutierrez",
        "Mendoza", "Ruiz", "Silva", "Ortiz", "Jimenez",
    ];
    
    
    
    return apellidos[Math.floor(Math.random() * apellidos.length)];
}

function buscarAceptados(estudiantes) {
    return estudiantes.filter(estudiante => estudiante.calificacion >= 70);
}

function calcularPromedio(estudiantes) {
    const totalCalificaciones = estudiantes.reduce((acumulador, estudiante) => acumulador + estudiante.calificacion, 0);
    return totalCalificaciones / estudiantes.length;
}




function main() {
    const reprobados = buscarReprobados(estudiantes);
    const aceptados = buscarAceptados(estudiantes);

    console.log("Alumnos reprobados:");
    console.log(reprobados);

    console.log("Alumnos aceptados:");
    console.log(aceptados);

    console.log("Promedio de todos los alumnos:");
    console.log(calcularPromedio(estudiantes));

    console.log("Promedio de alumnos no reprobados:");
    console.log(calcularPromedio(aceptados));

    console.log("Promedio de alumnos reprobados:");
    console.log(calcularPromedio(reprobados));

    console.log("Alumnos aprobados de 100:");
    console.log(aceptados.filter(estudiante => estudiante.calificacion >= 70).length);
}

main();