require(["ajax","vue.min"],function(ajax,Vue){
	// console.log(ajax("people/collection.html","get"));
	function Found(){
		this.data= ajax("/search/getlist.html","get");
		this.init();
		this.vue();
		console.log(this.data);
	}
	Found.prototype = {
		constructor:Found,
		init:function(){
				this.hotSearch()
			.then(function(data){
	    			this.historicalSearch()
			}.bind(this))
		},
		hotSearch:() =>{
			let p = ajax("/search/getlist.html","get").then((data)=>{
				console.log(data)
			})
			return p;
		},
		historicalSearch:()=>{
			let p = ajax("/photographe/getlist.html","get").then((data)=>{
//				console.log(data)
			})
			return p;
		},
		vue:function(){
			var slef = this;
			new Vue({
				el: '#inp',
		  		data: { 
		  			message: 'Hello Vue.js!' ,
		  			apiUrl: 'http://211.149.193.19:8080/api/customers'
		  		},
		  		
		  		methods: {
		  			foucs:function(){
						console.log(a.data.data)
						
				           


		  			},
		  			blur:function(){
		  				console.log("2")
		  			},
		  			change:function(){
		  				console.log(3)
		  			}
		  		 }
			})
		}
	};
	var a = new Found();
});
	