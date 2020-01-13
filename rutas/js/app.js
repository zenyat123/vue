

	const inicio = { template: "<div>Inicio</div>" }
	const acercade = { template: "<div>Acerca De</div>" }
	const contacto = { template: "<div>Contacto</div>" }

	const router = new VueRouter({

		base: "rutas",
		routes: [

			{ path: "/", component: inicio },

			{ path: "/acerca-de", component: acercade },

			{ path: "/lista-personas", component: listaPersonas },

			{ path: "/lista-frameworks", component: listaFrameworks },

			{ path: "/contacto", component: contacto }

		]

	})

	var app = new Vue({

		el: "#app",
		router,
		data: {

			filtroExperiencia: 10,
			formacion: [

				{ empresa: "luction sas", area: "electricidad", experiencia: "12" },
				{ empresa: "ñerma", area: "mecanica", experiencia: "1" },
				{ empresa: "light sas", area: "electricidad", experiencia: "15" },
				{ empresa: "metrica", area: "mecanica", experiencia: "30" },
				{ empresa: "construct sa", area: "construcción", experiencia: "10" }

			],
			copiaFormacion: [],
			imagenPixabay: "img/post.jpg",
			noticia: "Vue Native fue creado"

		},

		created: function(){

			console.log("Mensaje inicial");

			this.copiaFormacion = this.formacion;

		},

		methods: {

			filtrarEmpresas: function(){

				this.formacion = this.copiaFormacion;

				this.formacion = this.formacion.filter(

					campo => {

						return parseInt(campo.experiencia) > this.filtroExperiencia;

					}

				)

			}

		}

	})
	
