 angular.module('favorite')
.component('favoriteentry',{
controller:function(){
	this.Remove=function (title) {
		 $.ajax({
	 	  async:false,
	 	  type:'post',
    	  url: "http://desolate-caverns-89800.herokuapp.com/delete",
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



