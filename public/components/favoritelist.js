angular.module('favorite',[])
.component('favoritelist',{
	controller:function(){
		this.data=[];
		var x=this;
		 $.ajax({
  		 	  async:false,
              url: "http://desolate-caverns-89800.herokuapp.com/favorit",
              cache: false,
              dataType: 'json',
              success: function(data){
              	console.log(data)
              	x.data=data
            }
            })
	},
	templateUrl:'public/templates/favoritelist.html'
});





