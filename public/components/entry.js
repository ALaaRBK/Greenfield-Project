angular.module('myapp')
.component('entry',{
	controller:function(){

		

		var that=this;
		var session=undefined;

	
		
		this.addcomment=function () {
			var comment = $('#comment').val();
		
			$.ajax({
				type:'POST',
				url:"https://desolate-caverns-89800.herokuapp.com/comment",
				dataType:'json',
				async:false,
				data:{comment:comment,title:that.movie.title, username:session},
				success:function (comments) {
					that.comments=comments
				}

			})

		}
		this.favorite=function(id,title,poster_path){
			//prepare object to send it to node server
			var  obj={id:id,title:title,poster_path:poster_path};
			//checking for username
		    $.ajax({
              		async:false,
              		url: "https://desolate-caverns-89800.herokuapp.com/session",
              		cache: false,
              		dataType: 'json',
              		success: function(user){
              			session=user;
              		}
           	});
			console.log(session)
			if(session===undefined || session===null){
				alert('you are not allowed to add favorite')
			}else{
			  //make ajax request to server to add it to database 
			  $.ajax({
              url: "/add",
              type: "POST",
              data: obj,
              dataType: "html"
             });
             alert('added to favorite')
			}
			}
			
	},
    bindings:{
    	movie:'<'
    },
	templateUrl:'public/templates/entry.html'
});