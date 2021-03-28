const PatientDetails = {
	data(){
		return{
			message : "components",
		}
	},
	
	

	template: `
	<div class="mx-5 px-5">
			<div class="row border border-dark mx-5 ">
					
				<div class="col-4 py-2 pl-5">
					<table>
						<tr>
							<td>ID NO.</td>
							<td>:</td>
							<td>01</td>
						</tr>
						<tr>
							<td>Patient's Name</td>
							<td>:</td>
							<td>SONIA</td>
						</tr>
						<tr>
							<td>Refd. By</td>
							<td>:</td>
							<td>Self</td>
						</tr>
						<tr>
							<td>Specemrnt</td>
							<td>:</td>
							<td>Blood</td>
						</tr>
					</table>
				</div>
				<div class="col-4 "></div>
				<div class="col-4 py-2">
					<table>
						<tr>
							<td>Date</td>
							<td>:</td>
							<td>21 March 2021</td>
						</tr>
						<tr>
							<td>Age</td>
							<td>:</td>
							<td>21</td>
						</tr>
						<tr>
							<td>Sex</td>
							<td>:</td>
							<td>Femail</td>
						</tr>
					</table>
				</div>
			</div>
				
		</div>



	`,
}



