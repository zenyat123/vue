

	const listaPersonas = {

		name: "listaPersonas",
		data: function(){

			return {

				personas: ["Andrés", "Jessica", "Lina", "Yisel"]

			}

		},
		
		template: `

			<div>

				<lista-alertas></lista-alertas>

				<ul>

					<li v-for = "persona in personas">{{ persona }}</li>

				</ul>

			</div>

		` 	

	}

