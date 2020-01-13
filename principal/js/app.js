

	var app = new Vue({

		el: "#app",
		data: {

			mensaje: "Hola Vue", 
			suma: 3 + 6,
			valor: 5,
			esVisible: true, 
			personas: ["Andrés", "Jessica", "Lina", "Yisel"],
			contenidoHtml: "<h1>Hola Vue</h1>",
			fuenteImagen: "img/vue.png",
			textoImagen: "Descripción de la imagen", 
			numero: 36,
			alerta: false

		},

		computed: {

			revertirMensaje: function() {

				return this.mensaje.split("").reverse().join("")

			}

		},
		
		methods: {

			calcularSuma(valor1, valor2) {

				return valor1 + valor2;

			},

			incrementar() {

				this.numero++

			},

			decrementar() {

				this.numero--

			}

		},

		watch: {

			numero: function(variable){

				console.log("Observador " + variable)

			}

		}

	})

