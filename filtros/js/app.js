

	var app = new Vue({

		el: "#app",
		data: {

			meses: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
			filtraMes: "",
			formacion: [

				{ empresa: "luction sas", area: "electricidad", experiencia: "12", estado: true },
				{ empresa: "ñerma", area: "mecanica", experiencia: "1", estado: false },
				{ empresa: "light sas", area: "electricidad", experiencia: "15", estado: true },
				{ empresa: "metrica", area: "mecanica", experiencia: "30", estado: true },
				{ empresa: "construct sa", area: "construcción", experiencia: "30", estado: true }

			],
			filtroEmpresa: "",
			filtroExperiencia: "",
			filtroActivos: 0,
			filtroInactivos: 0,
			seleccionExperiencia: "=="

		},

		methods: {

			filtro(mes){

				return mes.toLocaleLowerCase().indexOf(this.filtraMes.toLocaleLowerCase()) >= 0

			},

			filtrarEmpresas(empresa){				

				var show = true;

				if(empresa.empresa.toLocaleLowerCase().indexOf(this.filtroEmpresa.toLocaleLowerCase()) < 0)
				{

					show = false;

				}
				else if(this.filtroExperiencia != "")
				{

					show = eval(this.filtroExperiencia + this.seleccionExperiencia + empresa.experiencia);

				}
				else if(empresa.estado == false && this.filtroActivos)
				{

					show = false;

				}
				else if(empresa.estado == true && this.filtroInactivos)
				{

					show = false;
					
				}

				return show;

			}

		}

	})

