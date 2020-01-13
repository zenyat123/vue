

	Vue.component("noticias", {

		props: {

			mensaje: {

				type: String,
				default: "Noticias revisadas"

			}

		},

		template: `

			<div class = "alert alert-info" role = "alert">

				{{ mensaje }}

			</div>

		`

	})

