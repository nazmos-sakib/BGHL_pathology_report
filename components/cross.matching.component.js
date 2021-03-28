const CrossMatching = {
	data(){
		return{
			message : "components",
		}
	},
	
	

	template: `
	<div > 
		<div class="report-title content-center">
			<span>Cross Matching and screening Report</span>
		</div>
		<slot></slot>
		<br>
		<br>
		<div class="report-title content-center">
			<span>Blood Bag NO: 01</span>
		</div>
		<br>
		<br>
		<br>
		<div class="add-padding-left1">

			<div>
				<table class="report-table">
					<tr>
						<td  class="report-table-data"><b> Blood of pt. Name </b>	</td>
						<td  class="report-table-data"><b> Age </b></td>
						<td  class="report-table-data"><b> Sex </b></td>	
					</tr>	
					<tr>
						<td  class="report-table-data">AMBIA</td>
						<td  class="report-table-data">30 Year(s)</td>
						<td  class="report-table-data">Female</td>
					</tr>
				</table>
			</div>
			<br>
			<div>
				<table class="report-table">
					<tr>
						<td class="report-table-data"><b>Name of Test</b></td>
						<td class="report-table-data"><b>Result</b></td>
					</tr>
					<tr>
						<td class="report-table-data" rowspan="2">Blood Grouping</td>
						<td class="report-table-data" ><p>ABO Blood group :        'O'</p></td>
					</tr>
					<tr>
						<td class="report-table-data" ><p>Rh typing : Anti-D    Positive (+Ve)</p></td>
					</tr>
				</table>
			</div>
			<br>
			<div>
				<table class="report-table">
					<tr>
						<td  class="report-table-data"><b> Name of Donor </b>	</td>
						<td  class="report-table-data"><b> Age </b></td>
						<td  class="report-table-data"><b> Sex </b></td>	
					</tr>	
					<tr>
						<td  class="report-table-data">Nahid</td>
						<td  class="report-table-data">30 Year(s)</td>
						<td  class="report-table-data">Male</td>
					</tr>
				</table>
			</div>
			<br>
			<br>
			<div>
				<table class="report-table ">
					<tr>
						<td class="report-table-data"><b>Name of Test</b></td>
						<td class="report-table-data"><b>Result</b></td>
					</tr>
					<tr>
						<td class="report-table-data" rowspan="2">Blood Grouping</td>
						<td class="report-table-data" ><p>ABO Blood group :        'O'</p></td>
					</tr>
					<tr>
						<td class="report-table-data" ><p>Rh typing : Anti-D    Positive (+Ve)</p></td>
					</tr>
					<tr>
						<td class="report-table-data">HBsAg</td>
						<td class="report-table-data">Negative</td>
					</tr>
					<tr>
						<td class="report-table-data">HCV</td>
						<td class="report-table-data">Negative</td>
					</tr>
					<tr>
						<td class="report-table-data">HIV </td>
						<td class="report-table-data">Negative</td>
					</tr>
					<tr >
						<td class="report-table-data">VDRL</td>
						<td class="report-table-data text-center-class" >Non-reactive</td>
					</tr>
				</table>
			</div>
		</div>
		<br>	
	</div>

	`,
}

