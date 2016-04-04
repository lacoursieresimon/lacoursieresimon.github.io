var lang;
var sideNodes;
var mainNodes;

function a(href, title) {
	return '<a target="_blank" href="' + href + '">' + title + '</a>';
}

function icn(src){
	return '<img src="img/' + src + '.png" class="icon"/>';
}

function l(key) {
	return dict[key][lang];
}

var dict = {
	address: {
		'en': 'address',
		'fr': 'adresse'
	},
	quebec: {
		'en': 'Quebec',
		'fr': 'Québec'
	},
	permanentAddress: {
		'en': 'permanent address',
		'fr': 'adresse permanente'
	},
	links: {
		'en': 'links',
		'fr': 'liens'
	},
	languages: {
		'en': 'languages',
		'fr': 'langages'
	},
	programming: {
		'en': 'programming',
		'fr': 'programmation'
	},
	database: {
		'en': 'database',
		'fr': 'base de données'
	},
	librairies: {
		'en': 'librairies',
		'fr': 'librairies'
	},
	softwares: {
		'en': 'softwares',
		'fr': 'logiciels'
	},
	languageValues: {
		'en': 'french (native)<br>english (fluent)',
		'fr': 'français (natif)<br>anglais (fluent)'
	},
	linksValues: {
		'en':  a('http://simonlacoursiere.me/', 'simonlacoursiere.me' + icn('briefcase')) + a('https://www.linkedin.com/in/lacoursieresimon', 'linkedin' + icn('social-linkedin')) + a('https://github.com/lacoursieresimon', 'github' + icn('social-github')) + a('mailto:simon.lacoursiere@usherbrooke.ca', 'email' + icn('email')),
		'fr': a('http://simonlacoursiere.me/', 'simonlacoursiere.me' + icn('briefcase')) + a('https://www.linkedin.com/in/lacoursieresimon', 'linkedin' + icn('social-linkedin')) + a('https://github.com/lacoursieresimon', 'github' + icn('social-github')) + a('mailto:simon.lacoursiere@usherbrooke.ca', 'courriel' + icn('email'))
	},
	aboutMe: {
		'en': 'about me',
		'fr': 'à propos'
	},
	aboutMeValues: {
		'en': 'Computer science student wishing to put his knowledge to work<br>and to acquire expertise in the different fields of<br>programming and software development.',
		'fr': 'Étudiant au baccalauréat en informatique souhaitant mettre à profit ses connaissances <br>et poursuivre ses apprentissages dans les différents domaines <br>de la programmation et du développement logiciel.'
	},
	education: {
		'en': 'education',
		'fr': 'formation'
	},
	experience: {
		'en': 'professional experience',
		'fr': 'expérience professionnelle'
	},
	accomplishments: {
		'en': 'accomplishments',
		'fr': 'réalisations'
	},
	computerScienceStudent: {
		'en': 'computer science student',
		'fr': 'étudiant au baccalauréat en informatique'
	},
	programmerAnalyst: {
		'en': 'Programmer analyst',
		'fr': 'Programmeur-analyste'
	},
	softwareDeveloper: {
		'en': 'Software developer',
		'fr': 'Développeur logiciel'
	},
    shotgunDate: {
		'en': 'January 2016 to April 2016',
		'fr': 'Janvier 2016 à avril 2016'
	},
	shotgunContent: {
		'en': [
			'- Developed Shotgun, a Film And Game Production Planning Web App',
			'- Added UI features to support film Cuts in the online video player',
			'- Developed features for a Ruby on Rails web server',
			'- Fixed many customer reported bugs',
			'- Used GitHub as a version control and branching system'
		],
		fr: [
			'- Développer Shotgun, un logiciel web de planification de production multimédia',
			'- Développer des fonctionnalités pour un serveur Ruby on Rails',
			'- Développer l\'interface pour supporter les coupures dans le lecteur vidéo',
			'- Régler une multitude de problèmes trouvés par les clients',
			'- Utiliser le contrôle de version et le système de branches GitHub',
		]
	},
	coveoDate: {
		'en': 'May 2015 to October 2015',
		'fr': 'Mai 2015 à octobre 2015'
	},
	coveoContent: {
		'en': [
			'- Developed a Java cloud platform used to configure the Coveo search engine',
			'- Developed dynamic user interfaces with Backbone.js and Marionette.js in Typescript',
			'- Created a mobile UI project during a hackathon and made it ' + a('https://github.com/Coveo/JsAdminMobile', 'open source at Coveo' + icn('social-github')),
			'- Configured cloud instances on Amazon Web Services',
			'- Reviewed my peers’ code and had mine reviewed by them as well'
		],
		fr: [
			'- Développer un service infonuagique Java pour gerer le moteur de recherche',
			'- Développer des interfaces web en TypeScript avec Backbone.js et Marionette.js',
			'- Créer ' + a('https://github.com/Coveo/JsAdminMobile', 'un projet « open source »' + icn('social-github')) + ' d’interface mobile lors d’un hackathon de Coveo',
			'- Configurer des instances infonuagiques sur Amazon Web Services',
			'- Réviser le code de mes collègues et obtenir leurs avis sur le mien'
		]
	},
	seikaDate: {
		'en': 'January 2014 to July 2014',
		'fr': 'Janvier 2014 à juillet 2014 '
	},
	seikaContent: {
		'en': [
			'- Programmed a custom employee managing website using ASP.Net MVC',
			'- Optimized the performance of a custom object-relational mapping system',
			'- Conceived automated unit tests to ensure algorithmic efficiency over time',
			'- Optimized, standardized and improved existing code'
		],
		'fr': [
			'- Programmer, concevoir et adapter un site web de gestion d’employés en ASP.Net MVC ',
			'- Améliorer la performance d’un système de mapping objet-relationnel sur mesure',
			'- Concevoir des tests unitaires automatisés assurant l’efficience des algorithmes',
			'- Optimiser, standardiser et améliorer du code existant'
		]
	},
	uniFormation: {
		'en': 'Bachelor in Computer Science',
		'fr': 'Baccalauréat en informatique'
	},
	uniDate: {
		'en': 'August 2014 to present',
		'fr': 'Aout 2014 à aujourd’hui'
	},
	cegFormation: {
		'en': 'Computer Science Technology',
		'fr': 'Techniques de l’informatique'
	},
	cegDate: {
		'en': 'August 2011 to May 2014',
		'fr': 'Aout 2011 à mai 2014'
	},
	admissionGrant: {
		'en': 'Admission grant',
		'fr': 'Bourse d\'admission'
	},
	merit2: {
		'en': 'Merit "Excellence", 2<span class="sup">nd</span> place',
		'fr': 'Méritas « Excellence », 2<span class="sup">e</span> place'
	},
	merit1: {
		'en': 'Merit "Excellence", 1<span class="sup">st</span> place',
		'fr': 'Méritas « Excellence », 1<span class="sup">ere</span> place'
	},
	mcgillGrant: {
		'en': 'McGill University grant, scientific personality',
		'fr': 'Bourse de l’Université McGill, personnalité scientifique'
	},
	claretainMerit: {
		'en': 'Merit "Perseverance in learning"',
		'fr': 'Méritas « Persévérance dans les apprentissages »'
	},
	cogniboxHackathon: {
		'en': '1<span class="sup">st</span> prize at Cognibox\'s Hackathon 2016',
		'fr': '1<span class="sup">er</span> prix au Hackathon Cognibox 2016'
	},
	cogniboxHackathonContent: {
		'en': [
			'Developped a mobile app that helps its users save money at the grocery store',
			a('http://www.lapresse.ca/le-nouvelliste/actualites/201601/31/01-4945812-defi-hackathon-trente-six-heures-pour-pondre-un-logiciel.php', 
            'More info in this local\'s newspaper article on lapresse.ca')
           
		],
		'fr': [
			'Développement d\'une application mobile permettant de sauver de l\'argent sur l\'épicerie',
			a('http://www.lapresse.ca/le-nouvelliste/actualites/201601/31/01-4945812-defi-hackathon-trente-six-heures-pour-pondre-un-logiciel.php', 
            'Plus d\'information dans cet article de journal local sur lapresse.ca')
		]
	},
	coveoBlitz: {
		'en': 'Participated at Coveo Blitz 2016',
		'fr': 'Participation au Coveo Blitz 2016'
	},
	coveoBlitzContent: {
		'en': [
			'Developped an AI for a game that would compete against other players'
		],
		'fr': [
			'Développement d\'une IA pour un jeu qui était mise au défi contre celle des autres joueurs'
		]
	},
	coveoHackathon: {
		'en': 'Participated in a Coveo hackathon',
		'fr': 'Participation à un hackathon Coveo'
	},
	coveoHackathonContent: {
		'en': [
			'Made a mobile version of the administration console for the search engine',
			a('https://github.com/Coveo/JsAdminMobile', 'More info on the project\'s GitHub page' + icn('social-github'))
		],
		'fr': [
			'Création d\'une version mobile de la console d\'administration pour le moteur de recherche',
			a('https://github.com/Coveo/JsAdminMobile', 'Plus de détails sur la page du projet GitHub' + icn('social-github'))
		]
	},
	hackSherbrooke: {
		'en': 'Participated in the HackSherbrooke hackathon',
		'fr': 'Participation au hackathon HackSherbrooke'
	},
	hackSherbrookeContent: {
		'en': [
			'Made an informative mobile app about Sherbrooke\'s events, services and businesses'
		],
		'fr': [
			'Création d\'une application mobile à propos des évènements et des services de Sherbrooke'
		]
	},
	hackSh: {
		'en': '1<span class="sup">st</span> prize at the "Hack.sh" hackathon',
		'fr': '1<span class="sup">er</span> prix au hackathon « Hack.sh »'
	},
	hackShContent: {
		'en': [
			'Made an e-signature mobile application linked to Wolters Kluwer\'s TaxPrep',
			a('http://www.usherbrooke.ca/informatique/accueil/babillard/babillard-details/article/28057/', 'More info in this article published on Université de Sherbrooke\'s billboard' + icn('udes'))
		],
		'fr': [
			'Création d\'une application mobile de e-signature pour TaxPrep de Wolters Kluwer',
			a('http://www.usherbrooke.ca/informatique/accueil/babillard/babillard-details/article/28057/', 'Plus de détails dans cet article publié sur le babillard de l\'Université de Sherbrooke' + icn('udes'))
		]
	},
	audioVideoProjects: {
		'en': 'Produced many videos and audio recordings',
		'fr': 'Réalisation de clips vidéo et d\'enregistrements audio'
	},
	audioVideoProjectsContent: {
		'en': [
			'All my creations are available on my ' + a('https://www.youtube.com/user/SimonMusicCovers', 'YouTube channel' + icn('social-youtube'))
		],
		'fr': [
			'Toutes mes réalisations sont disponibles sur ma ' + a('https://www.youtube.com/user/SimonMusicCovers', 'chaine YouTube' + icn('social-youtube'))
		]
	},
	audioVideoProjectsDate: {
		'en': '2009 to 2015',
		'fr': '2009 à 2015'
	},
	oktav: {
		'en': 'Launched an audio/video company',
		'fr': 'Lancement d\'une compagnie d\'audio/vidéo'
	},
	oktavContent: {
		'en': [
			'Made a website for it : ' + a('http://oktav.ca', 'oktav.ca' + icn('oktav')),
			a('http://github.com/lacoursieresimon/oktav', 'More info on the project\'s GitHub page' + icn('social-github'))
		],
		'fr': [
			'Création du site web : ' + a('http://oktav.ca', 'oktav.ca' + icn('oktav')),
			a('http://github.com/lacoursieresimon/oktav', 'Plus de détails sur la page du projet GitHub' + icn('social-github'))
		]
	}
};

function calcData(){
	
	lang = $(".lang-dropdown select").val();
	
	sideNodes = [
		{ title: l('address'), content: '17, Poirier, Victoriaville<br>(' + l('quebec') + ') G6S 0J1' },
		{ title: 'mobile', content: '(819) 350-8903' },
		{ title: l('links'), content: l('linksValues') },
		{ title: l('languages'), content: l('languageValues') },
		{ title: l('programming'), content: 'JavaScript, HTML/CSS<br>Java, C++<br>Ruby, C#' },
		{ title: l('database'), content: 'MySQL, MongoDB <br>SQL Server, Oracle<br>PostgreSQL' },
		/*{ title: l('librairies'), content: 'Ionic Framework<br>Underscore.js<br>Marionette.js<br>Backbone.js<br>Angular.js<br>Less.js' },*/
		{ title: l('softwares'), content: 'SourceTree, TortoiseHg<br>Eclipse, Visual Studio<br>VS Code, WebStorm<br>Adobe CS, Pro Tools' }
	];
	
	mainNodes = [
		{
			title: 'interests',
			displayedTitle: l('aboutMe'),
			color: '#c0392b',
			content: l('aboutMeValues'),
			list: []
		},
		{
			title: 'experience',
			displayedTitle: l('experience'),
			color: '#2980b9',
			list: [
				{
					title: '<span class="bold">' + l('softwareDeveloper') + '</span> @ Autodesk, Montreal',
					date: l('shotgunDate'),
					content: l('shotgunContent')
				},
				{
					title: '<span class="bold">' + l('softwareDeveloper') + '</span> @ Coveo Solutions Inc., Quebec',
					date: l('coveoDate'),
					content: l('coveoContent')
				},
				{
					title: '<span class="bold">' + l('programmerAnalyst') + '</span> @ SEIKA Logiciel, Plessisville',
					date: l('seikaDate'),
					content: l('seikaContent')
				}
			]
		},
		{
			title: 'education',
			displayedTitle: l('education'),
			color: '#27ae60',
			list: [
				{
					title: '<span class="bold">' + l('uniFormation') + '</span>',
					date: l('uniDate'),
					content: ['Université de Sherbrooke']
				},
				{
					title: '<span class="bold">' + l('cegFormation') + '</span>',
					date: l('cegDate'),
					content: ['Cégep de Victoriaville']
				}
			]
		},
		{
			title: 'distinctions',
			displayedTitle: 'distinctions',
			color: '#16a085',
			list: [
				{
					title: '<span class="bold">' + l('admissionGrant') + '</span>',
					date: '2014',
					content: ['Université de Sherbrooke']
				},
				{
					title: '<span class="bold">' + l('merit2') + '</span>',
					date: '2014',
					content: ['Cégep de Victoriaville']
				},
				{
					title: '<span class="bold">' + l('merit1') + '</span>',
					date: '2012',
					content: ['Cégep de Victoriaville']
				},
				{
					title: '<span class="bold">' + l('mcgillGrant') + '</span>',
					date: '2011',
					content: ['Collège Clarétain']
				},/*
				{
					title: '<span class="bold">' + l('claretainMerit') + '</span>',
					date: '2011',
					content: ['Collège Clarétain']
				},*/
			]
		},
		{
			title: 'accomplishments',
			displayedTitle: l('accomplishments'),
			color: '#f39c12',
			list: [
				{
					title: '<span class="bold">' + l('cogniboxHackathon') + '</span>',
					date: '2016',
					content: l('cogniboxHackathonContent')
				},
				{
					title: '<span class="bold">' + l('coveoBlitz') + '</span>',
					date: '2016',
					content: l('coveoBlitzContent')
				},
				{
					title: '<span class="bold">' + l('coveoHackathon') + '</span>',
					date: '2015',
					content: l('coveoHackathonContent')
				},
				{
					title: '<span class="bold">' + l('hackSherbrooke') + '</span>',
					date: '2015',
					content: l('hackSherbrookeContent')
				},
				{
					title: '<span class="bold">' + l('hackSh') + '</span>',
					date: '2015',
					content: l('hackShContent')
				},/*
				{
					title: '<span class="bold">' + l('audioVideoProjects') + '</span>',
					date: l('audioVideoProjectsDate'),
					content: l('audioVideoProjectsContent')
				},*/
				{
					title: '<span class="bold">' + l('oktav') + '</span>',
					date: '2014',
					content: l('oktavContent')
				}
			]
		}
	];
}