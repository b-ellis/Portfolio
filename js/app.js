var $ = require('jquery');

var displayContentHover = function(){
	$('.display-container').mouseover(function(){
		$('.link-container').show();
	});
	$('.display-container').mouseleave(function(){
		$('.link-container').hide();
	});
};

var initalChange = function(){
	$('.col-md-2').mouseover(function(){
		$('.initals').hide();
		$('.name').show();
	});
	$('.col-md-2').mouseleave(function(){
		$('.name').hide();
		$('.initals').show();
	});
};

var scrollToTop = function(){
	$('.col-md-2').click(function(){
		$('html,body').animate({scrollTop:0}, 'fast');
	});
};


$(document).ready(function(){

	initalChange();
	scrollToTop();
	displayContentHover();

	var Project = function(image, url, giturl){
		this.image = image;
		this.url = url;
		this.giturl = giturl;
	};

	// var phish = new Project('../images/phish-quiz.png', 'https://b-ellis.github.io/Quiz/', 'https://github.com/b-ellis/Quiz');
	// var toe = new Project('../images/tic-tac-toe.png', 'https://b-ellis.github.io/Tic-Tac-Toe/', 'https://github.com/b-ellis/Tic-Tac-Toe');
	// var list = new Project('../images/shoppinglist.png', 'https://b-ellis.github.io/Shoppinglist/', 'https://github.com/b-ellis/Shoppinglist');
	var jam = new Project('../images/jam-location.png', 'https://b-ellis.github.io/Jam-Location/', 'https://github.com/b-ellis/Jam-Location/tree/gh-pages');
	var Fullstack = new Project('../images/Fullstack-Capstone.png', 'https://thinkfulcapstone.herokuapp.com', 'https://github.com/b-ellis/Fullstack-capstone');
	var Node = new Project('../images/Node-Capstone.png','https://salty-hollows-61107.herokuapp.com/', 'https://github.com/b-ellis/node-capstone');
	var React = new Project('../images/React-Capstone.png','https://react-capstone.herokuapp.com/','https://github.com/b-ellis/react-capstone');

	var projects = [jam, Node, React, Fullstack];
	var currentProjectIndex = 0;

	displayProjects();

	$('.next').click(function(){
		currentProjectIndex++
		$('.img').html('');
		$('.link-container > ul').html('');
		if (currentProjectIndex < projects.length) {
			displayProjects();
		};
		if(currentProjectIndex == projects.length){
			currentProjectIndex = 0;
			displayProjects();
		};
	});

	function displayProjects(){
		var currentProject = projects[currentProjectIndex];
		var projectImg = "<img class='img' src=\"" + currentProject.image + "\">";
		$('.img').html(projectImg);
		var projectUrl = "<li class='chrome'><a href=\"" + currentProject.url + "\"><i class='fa fa-chrome' aria-hidden='true'></i></a></li><li class='githublist'><a href=\"" + currentProject.giturl + "\"><i class='fa fa-github' aria-hidden='true'></i></a></li>";
		$('.link-container > ul').html(projectUrl);

	};
});