

	const listaFrameworks = {

		name: "listaFrameworks",
		data: function(){

			return {

				frameworks: ["Laravel", "Vue", "Bootstrap"]

			}

		},

		template: `

			<div>

				<ul>

					<li v-for = "framework in frameworks">{{ framework }}</li>

				</ul>

			</div>	

		`

	}
	
