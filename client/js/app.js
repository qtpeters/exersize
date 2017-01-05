
window.onload = function() {
	var vm = new Vue({
		el: '#app',
		data: {
			message: "Message From Vue.js",
			exersizes: []
		},
		methods: {
			getExersizes: () => {
				axios.get( '/exersizes' )
				.then( ( result ) => {
					vm.exersizes = result.data.exersizes;
				});
			}
		}
	});
};

