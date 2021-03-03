/*Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, 
los datos solicitados son:
nombre
Tipo curasada("libre""presencial""remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
c) El promedio de nota por sexo
d) La edad y nombre del que cursa mas materias que no sean en forma remota

*/
{
	let nombre
	let cursada
	let cantMaterias
	let sexo
	let notaPromedio
	let edad
	let flagMujer=0
	let nombreMejorPromedio
	let mejorPromedioNoBinario
	let flagJovenLibre=0
	let nombreJoven
	let edadMasJoven
	let acumuladorNotaNoBinario=0
	let contadorMasculino=0
	let promedio
	let flagCursaNoRemota=0
	let mayorCantMaterias
	let edadMayorCantMaterias
	let nombreMayorCantMaterias
	let contadorFemenino=0
	let acumuladorNotaM=0
	let acumuladorNotaF=0
	let contadorNoBinario=0
	let respuesta

  
	do {
		do {
			nombre=prompt("Ingrese nombre")
		} while (isNaN(nombre)==false)

		do {
			cursada=prompt("Ingrese cursada (libre-presencial-remota)")
		} while (cursada != "libre" && cursada != "presencial" && cursada != "remota")

		do {
			cantMaterias = parseInt(prompt("Ingrese cantidad de materias"))
		} while (isNaN(cantMaterias) || cantMaterias < 0 || cantMaterias > 8)

		do {
			sexo=prompt("Ingrese sexo (femenino-masculino-no binario)")
		} while (sexo != "femenino" && sexo != "masculino" && sexo != "no binario")
		
		do {
			notaPromedio = parseInt(prompt("Ingrese nota entre 0 y 10"))
		} while (isNaN(notaPromedio)|| notaPromedio < 0 || notaPromedio > 10)

		do {
			edad = parseInt(prompt("Ingrese edad"))
		} while (isNaN(edad) || edad < 18 || edad >50)

		switch (sexo) {
			case "masculino":
				contadorMasculino++
				acumuladorNotaM = acumuladorNotaM + notaPromedio
				break;
			case "no binario":
				contadorNoBinario++
				acumuladorNotaNoBinario = acumuladorNotaNoBinario + notaPromedio
				break;
			case "femenino":
				contadorFemenino++
				acumuladorNotaF = acumuladorNotaF + notaPromedio
				break;	
		}

		if(flagMujer == 0 && sexo != "masculino"){
			flagMujer++
			mejorPromedioNoBinario = notaPromedio
			nombreMejorPromedio = nombre
		}
		else if(notaPromedio > mejorPromedioNoBinario && sexo != "masculino"){
			mejorPromedioNoBinario = notaPromedio
			nombreMejorPromedio = nombre
		}

		if(flagJovenLibre == 0 && cursada == "libre"){
			flagJovenLibre++
			nombreJoven=nombre
			edadMasJoven = edad
		}
		else if(edad < edadMasJoven && cursada == "libre"){
			nombreJoven=nombre
			edadMasJoven = edad
		}

		if(flagCursaNoRemota == 0 && cursada != "remota"){
			flagCursaNoRemota++
			edadMayorCantMaterias = edad
			nombreMayorCantMaterias = nombre
			mayorCantMaterias = cantMaterias
		}
		else if (cantMaterias > mayorCantMaterias && cursada != "remota"){
			edadMayorCantMaterias = edad
			nombreMayorCantMaterias = nombre
			mayorCantMaterias = cantMaterias
		}
	} while (respuesta=confirm("Desea ingresar otro dato?"))

	if(flagMujer != 0){
		document.write("El nombre del mejor promedio no masculino es :"+nombreMejorPromedio+"<br>")
	}

	if(flagJovenLibre != 0){
		document.write("El nombre deel mas joven de los alumnos entre los que la dan libre es :"+nombreJoven+"<br>")
	}

	if(contadorMasculino != 0){
		promedio = acumuladorNotaM / contadorMasculino
		document.write("El promedio por nota del sexo masculino es :"+promedio+"<br>")
	}
	else if(contadorFemenino!= 0){
		promedio = acumuladorNotaF/ contadorFemenino
		document.write("El promedio por nota del sexo femenino es :"+promedio+"<br>")
	}
	else if(contadorNoBinario != 0){
		promedio = acumuladorNotaNoBinario / contadorNoBinario
		document.write("El promedio por nota del sexo no binario es :"+promedio+"<br>")
	}

	if (flagCursaNoRemota != 0){
		document.write("Del que cursa mas materias que no sea en forma remota, edad :"+edadMayorCantMaterias+" nombre :"+nombreMayorCantMaterias)
	}
}