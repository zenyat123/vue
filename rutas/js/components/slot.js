

	Vue.component("modal", {

		template: `

			<div class = "modal fade" role = "dialog" id = "modal">
		
				<div class = "modal-dialog" role = "document">
					
					<div class = "modal-content">
						
						<div class = "modal-header">					

							<slot name = "titulo"></slot>

							<button class = "close" data-dismiss = "modal" aria-label = "close">
								
								<span aria-hidden = "true">&times;</span>

							</button>

						</div>

						<div class = "modal-body">

							<slot></slot>

						</div>

						<div class = "modal-footer">
							
							<slot name = "pie"></slot>

						</div>

					</div>

				</div>

			</div>

		`

	})

