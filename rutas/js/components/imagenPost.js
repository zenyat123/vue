

	Vue.component("imagen-post", {

		template: "<img v-bind:src = 'funcionImagen()'  v-bind:title = 'title' v-bind:alt = 'title'>",
		props: {

			propurl: String

		},

		data: function(){

			return {

				title: "Título de la imagen"

			}

		},

		methods: {

			funcionImagen(){

				if(this.propurl != ""){

					return this.propurl

				}

				return "img/empty.png"

			}

		}

	})

