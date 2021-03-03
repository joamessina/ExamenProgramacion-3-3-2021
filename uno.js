/*
	</br>	Debemos realizar la carga de una compra de 5(cinco) productos de desinfección 
	<br>de cada una debo obtener los siguientes datos: <br>
	el nombre del producto
	el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"), 
	<br>el precio (validar entre 100 y 300),
	<br>la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), 
	<br>
	el tipo de inflamable("ignífugo", "combustible", "explosivo" )
	y la Marca. 

	Se debe Informar al usuario lo siguiente:

	a) El promedio de cantidad por tipo de producto<br>
	b) El tipo de inflamable con más cantidad de unidades en total de la compra <br>
	c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total <br>
	d) la marca y tipo del más caro de los productos<br>
*/
function mostrar()
{
	let producto
	let precioProducto
	let unidadesProducto
	let inflamable
	let marca
	let acumuladorCantAlcohol = 0
	let acumuladorCantIac = 0
	let acumuladorCantQuat = 0
	let contadorAlcohol= 0
	let contadorIac =0
	let contadorQuat =0
	let promedioAlco
	let promedioIac
	let promedioQuat
	let acumuladorCantIacMenor =0
	let maxUnidades
	let nombreTipoMasCant
	let marcaMasCara
	let tipoMasCaro
	let precioMasCaro
	let banderaInflamable=0
	let banderaMasCaro=0


	for (let i = 0; i <3; i++) {
		do {
			producto=prompt("ingrese producto a comprar: alcohol, iac o quat")
		} while(producto!="alcohol" && producto!= "iac" && producto!= "quat" )

		do {
			precioProducto=parseInt(prompt("Ingrese el precio (entre 100 y 300)"))
		} while (precioProducto < 100 || precioProducto > 300 || isNaN(precioProducto));

		do {
			unidadesProducto = parseInt(prompt("Ingrese cantidad del producto (1 entre 1000)"))
		} while (unidadesProducto < 1 || unidadesProducto > 1000 || isNaN(unidadesProducto));

		do {
			inflamable = prompt("ingrese el tipo inflamable (ignifugo, combustible, explosivo)")
		} while (inflamable != "ignifugo" && inflamable != "combustible"  && inflamable != "explosivo" );

		do {
			marca = prompt("Ingrese la marca del producto")
		} while (isNaN(marca)==false);
			
			switch (producto) {
				case "alcohol":
					contadorAlcohol++
					acumuladorCantAlcohol += unidadesProducto
					break;
				case "iac":
					contadorIac++
					acumuladorCantIac += unidadesProducto
					if(precioProducto <= 200){
						acumuladorCantIacMenor += unidadesProducto
					}
					break;
				case "quat":
					contadorQuat++
					acumuladorCantQuat += unidadesProducto
					break;
			}

			if(contadorAlcohol > 0) {
				promedioAlco = acumuladorCantAlcohol / contadorAlcohol
			} else if(contadorIac > 0) {
				promedioIac = acumuladorCantIac / contadorIac
			} else if (contadorQuat > 0){
				promedioQuat = acumuladorCantQuat / contadorQuat
			}

			if (banderaInflamable == 0 || unidadesProducto > maxUnidades) {
				maxUnidades = unidadesProducto
				nombreTipoMasCant= inflamable
				banderaInflamable++
			}

			if (banderaMasCaro == 0 || precioProducto > precioMasCaro) {
				marcaMasCara = marca
				tipoMasCaro = producto
				precioMasCaro = precioProducto
				banderaMasCaro++
			}
				
			if (promedioQuat == 0) {
				promedioQuat = "No se compro Quat"
			}

			if (promedioIac == 0) {
				promedioQuat = "No se compro Iac"
			}

				document.write("Iac comprados con menor valor: " + acumuladorCantIacMenor + "<br>")
				document.write("promedio Alcohol " + promedioAlco + "<br>")
				document.write("promedio Iac " + promedioIac + "<br>")
				document.write("promedio Quat " + promedioQuat + "<br>")
				document.write("El tipo inflamable mas comprado es:"+ nombreTipoMasCant + "<br>")
				document.write("la marca y tipo mas caro son : " + marcaMasCara  +" // " + tipoMasCaro  + " al precio: " + precioMasCaro+"<br>")

		}

}
/*
			a) El promedio de cantidad por tipo de producto X
			b) El tipo de inflamable con más cantidad de unidades en total de la compra 
			c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total  X
			d) la marca y tipo del más caro de los productos
			*/