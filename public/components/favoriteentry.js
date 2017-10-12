 angular.module('favorite')
.component('favoriteentry',{
controller:function(){
	this.Remove=function (title) {
		 $.ajax({
	 	  async:false,
	 	  type:'post',
    	  url: "/delete",
    	  dataType: 'json',
    	  data:title
    })
     location.reload();
	}

},
  bindings:{
    movie:'<'
  },
	templateUrl:'public/templates/favoriteentry.html'
});



