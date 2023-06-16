let estudiantes = [];

function crearEstudiante(nombre, edad, carrera, promedio, estado) {
  return {
    nombre: nombre,
    edad: edad,
    carrera: carrera,
    promedio: promedio,
    estado: estado
  };
}

estudiantes.push(crearEstudiante("Juan", 20, "Ingeniería", 8.5, "Activo"));
estudiantes.push(crearEstudiante("María", 22, "Medicina", 9.2, "Activo"));
estudiantes.push(crearEstudiante("Pedro", 21, "Derecho", 7.8, "Inactivo"));
estudiantes.push(crearEstudiante("Laura", 19, "Psicología", 8.9, "Activo"));

for (let i = 0; i < estudiantes.length; i++) {
  console.log("Estudiante " + (i + 1) + ":");
  console.log("Nombre: " + estudiantes[i].nombre);
  console.log("Edad: " + estudiantes[i].edad);
  console.log("Carrera: " + estudiantes[i].carrera);
  console.log("Promedio: " + estudiantes[i].promedio);
  console.log("Estado: " + estudiantes[i].estado);
  console.log("--------------------------");
}
