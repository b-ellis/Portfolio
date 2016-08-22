var displayContentHover = function(){
	$('.display-container').mouseover(function(){
		$('.link-container').show();
	});
	$('.display-container').mouseleave(function(){
		$('.link-container').hide();
	});
};



$(document).ready(function(){
	displayContentHover();

	var projectPhish = {
		image: 'images/phish-quiz.png',
		url: 'https://b-ellis.github.io/Quiz/',
		giturl: 'https://github.com/b-ellis/Quiz'
	}
	var projectToe = {
		image: 'images/tic-tac-toe.png',
		url: 'https://b-ellis.github.io/Tic-Tac-Toe/',
		giturl: 'https://github.com/b-ellis/Tic-Tac-Toe'
	}
	var projectList = {
		image: 'images/shoppinglist.png',
		url: 'https://b-ellis.github.io/Shoppinglist/',
		giturl:'https://github.com/b-ellis/Shoppinglist'
	}
	var projectJam = {
		image: 'images/jam-location.png',
		url: 'https://b-ellis.github.io/Jam-Location/',
		giturl: 'https://github.com/b-ellis/Jam-Location/tree/gh-pages'
	}

	var projects = [projectPhish, projectJam, projectList, projectToe];
	var currentProjectIndex = 0;

	$('.next').click(function(){
		currentProjectIndex++
		$('.img').html('');
		$('.link-container > ul').html('');
		if (currentProjectIndex < projects.length){
			displayProjects();
		}
	});

	var displayProjects = function (){
		var currentProject = projects[currentProjectIndex];
		var projectImg = "<img class='img' src=\"" + currentProject.image + "\">";
		$('.img').html(projectImg);
		var projectUrl = "<li class='chrome'><a href='\"" + currentProject.url + "\"'><i class='fa fa-chrome' aria-hidden='true'></i></a></li><li class='githublist'><a href='\"" + currentProject.giturl + "\"'><i class='fa fa-github' aria-hidden='true'></i></a></li>";
		$('.link-container > ul').html(projectUrl);
	};
})