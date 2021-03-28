



const app = Vue.createApp({
	data() {
		return {
			message :"sfdsfsd",
		}
	},
	mounted() {
		
	},


	updated(){
		
	},


	watch: {
		
	},



	methods: {
	}
			
})


app.component('test-list-component', PathologyTestList)
const vm = app.mount('#app')



