function mostrar()
{
    let nombre
	let estadoCivil
	let edad
	let temperaturaCorporal
	let sexo
	let respuesta
	let contadorPasajeros=0
	let importeSinDescuento
	let importeConDescuento
	let descuento
	let contadorViudosMayores=0
	let flag=0
	let edadSolteraJoven
	let nombreSolteraJoven
	let contadorMayores60=0


	do {
		do {
			nombre = prompt("Ingrese su nombre")
		} while (isNaN(nombre) == false)

		do {
			estadoCivil = prompt("Ingrese estado civil (soltero-casado-viudo)")
		} while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")

		do {
			edad = parseInt(prompt("Ingrese su edad(+17)"))
		} while (isNaN(edad) || edad < 17 || edad > 90)

		do {
			temperaturaCorporal = parseInt(prompt("Ingrese temperatura corporal"))
		} while (isNaN(temperaturaCorporal) || temperaturaCorporal < 36 || temperaturaCorporal > 40)

		do {
			sexo = prompt("Ingrese sexo (masculino-femenino)")
		} while (sexo != "masculino" && sexo != "femenino")


		contadorPasajeros++
		if(edad > 60 && estadoCivil == "viudo"){
			contadorViudosMayores++
		}
		else if(edad > 60){
			contadorMayores60++
		}


		if(flag == 0 && estadoCivil == "soltero" && sexo == "femenino"){
			nombreSolteraJoven=nombre
			edadSolteraJoven=edad
			flag++
		}
		else if (estadoCivil == "soltero" && sexo == "femenino" && edad < edadSolteraJoven){
			nombreSolteraJoven=nombre
			edadSolteraJoven=edad
		}

	} while (respuesta = confirm("Desea ingresar mas datos?"))
	
	importeSinDescuento = contadorPasajeros * 600

	if(contadorViudosMayores != 0){
		document.write("La cantidad de viudos mayores a 60 años es :" + contadorViudosMayores + "<br>")
	}

	if(flag != 0){
		document.write("La mujer soltera mas joven es :"+nombreSolteraJoven+" y su edad es: " + edadSolteraJoven + "<br>")
	}

	document.write("El importe final sin descuento es :" + importeSinDescuento + "<br>")

	if(contadorMayores60 != 0){
		comparador = contadorMayores60 * 100 / contadorPasajeros
		if(comparador > 50){
			descuento = 0.25
			importeConDescuento = importeSinDescuento - (importeSinDescuento * 0.25)
			document.write("El precio final con descuento es :" + importeConDescuento)
		}
	}

}