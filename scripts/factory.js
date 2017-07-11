app.factory('CDFactory',function(){
	var CDFactory=function(){
		this.list=[
			{
				name:'Avatar',
				director:'James Cameron',
				producer:'20th Century Fox',
				available:'5',
				price:'249',
				img:'avatar.jpg',
				synopsis:{
					runtime:'2 hours 41 minutes',
					releasedate:'December 10, 2009'
				},
				shortdescription:'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
				tabs:'description',
				rating: '8.7'

			},
			{
				name:'Avengers',
				director:'Joss Whedon',
				producer:'Walt Disney Studio',
				available:'2',
				price:'149',
				img:'avengers.jpg',
				synopsis:{
					runtime:'2 hours 23 minutes',
					releasedate:'April 11, 2012'
				},
				shortdescription:'Earths mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.',				
				tabs:'specification',
				rating: '8.1'
			},
			
		];

	};
	return new CDFactory();
});