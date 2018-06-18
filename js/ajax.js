
define("ajax",["jquery-1.7.2.min"],function(){
		var jsone = (url,type) =>{
			var p = new Promise((resolve,reject) => {
				$.ajax({
					"url": "http://web.95ym.cn/api/" + url,
					"type": type || get,
					"dataType": 'json',
					"success": function (data) {
						resolve(data);
					},
					error:function(error){
						reject(error);
					}
				})
			});
			return p;
		};
		return jsone;
});
