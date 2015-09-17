var lang;
var sideNodes;
var mainNodes;

function a(href, title) {
	return '<a href="' + href + '">' + title + '</a>';
}

function icn(src){
	return '<img src="img/' + src + '.png" class="icon"/>';
}

function l(key) {
	return dict[key][lang];
}

var dict = {
	address: {
		'en': 'actual address',
		'fr': 'adresse actuelle'
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
	coveoDate: {
		'en': 'May 2015 to present',
		'fr': 'Mai 2015 à aujourd’hui'
	},
	coveoContent: {
		'en': [
			'- Developed a Java cloud platform used to configure the Coveo search engine',
			'- Developed dynamic user interfaces with Backbone.js and Marionette.js in Typescript',
			'- Created a mobile UI project during a hackathon and made it ' + a('https://github.com/Coveo/JsAdminMobile', 'open source at Coveo' + icn('social-github')),
			'- Configured cloud instances on Amazon Web Services',
			'- Used Mercurial as a version control and branching system',
			'- Reviewed my peers’ code and had mine reviewed by them as well'
		],
		fr: [
			'- Développer un service infonuagique Java permettant la gestion du moteur de recherche',
			'- Développer des interfaces web en TypeScript avec Backbone.js et Marionette.js',
			'- Créer ' + a('https://github.com/Coveo/JsAdminMobile', 'un projet « open source »' + icn('social-github')) + ' d’interface mobile lors d’un hackathon de Coveo',
			'- Configurer des instances infonuagiques sur Amazon Web Services',
			'- Utiliser le contrôle de version et le système de branches de Mercurial',
			'- Réviser le code de mes collègues et obtenir leurs avis sur le mien'
		]
	},
	seikaDate: {
		'en': 'January 2014 to July 2014',
		'fr': 'Janvier 2014 à juillet 2014 '
	},
	seikaContent: {
		'en': [
			'- Developed algorithms used in custom made software solutions',
			'- Programmed a custom employee managing website using ASP.Net MVC',
			'- Peer reviewed code and algorithms using Microsoft Team Foundation Server',
			'- Optimized the performance of a custom object-relational mapping system',
			'- Conceived automated unit tests to ensure algorithmic efficiency over time',
			'- Optimized, standardized and improved existing code'
		],
		'fr': [
			'- Développer du code et des algorithmes utilisés dans des logiciels sur mesure',
			'- Programmer, concevoir et adapter un site web de gestion d’employés en ASP.Net MVC ',
			'- Réviser du code et des algorithmes entre pairs à l’aide de MS Team Foundation Server',
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
	coveoHackathon: {
		'en': 'Participated at a Coveo hackathon',
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
		'en': 'Participated at the HackSherbrooke hackathon',
		'fr': 'Participation au hackathon HackSherbrooke'
	},
	hackSherbrookeContent: {
		'en': [
			'Made an informative mobile app about Sherbrooke\'s events, services and businesses',
			a('http://github.com/goHub-HackSherbrooke/goHub', 'More info on the project\'s GitHub page' + icn('social-github'))
		],
		'fr': [
			'Création d\'une application mobile à propos des évènements et des services de Sherbrooke',
			a('http://github.com/goHub-HackSherbrooke/goHub', 'Plus de détails sur la page du projet GitHub' + icn('social-github'))
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
		{ title: l('address'), content: '1419, de l’Université<br>Sherbrooke (' + l('quebec') + ')<br>J1K 2P6' },
		{ title: l('permanentAddress'), content: '17, Poirier, Victoriaville<br>(' + l('quebec') + ') G6S 0J1' },
		{ title: 'mobile', content: '(819) 350-8903' },
		{ title: l('links'), content: l('linksValues') },
		{ title: l('languages'), content: l('languageValues') },
		{ title: l('programming'), content: 'JavaScript, HTML/CSS<br>C#, C++, VB.NET<br>Java' },
		{ title: l('database'), content: 'MySQL, MongoDB <br>SQL Server, Oracle<br>PostgreSQL' },
		/*{ title: l('librairies'), content: 'Ionic Framework<br>Underscore.js<br>Marionette.js<br>Backbone.js<br>Angular.js<br>Less.js' },*/
		{ title: l('softwares'), content: 'SourceTree, TortoiseHg<br>Eclipse, Visual Studio<br>VS Code, WebStorm<br>Adobe CS, Pro Tools' }
	];
	
	mainNodes = [
		{
			title: 'interests',
			displayedTitle: l('aboutMe'),
			color: '#6CE0F1',
			content: l('aboutMeValues'),
			list: []
		},
		{
			title: 'experience',
			displayedTitle: l('experience'),
			color: '#FB4485',
			list: [
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
			color: '#FDA333',
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
			color: '#C2E15F',
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
				},
				{
					title: '<span class="bold">' + l('claretainMerit') + '</span>',
					date: '2011',
					content: ['Collège Clarétain']
				},
			]
		},
		{
			title: 'accomplishments',
			displayedTitle: l('accomplishments'),
			color: '#D3A4F9',
			list: [
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
				},
				{
					title: '<span class="bold">' + l('audioVideoProjects') + '</span>',
					date: l('audioVideoProjectsDate'),
					content: l('audioVideoProjectsContent')
				},
				{
					title: '<span class="bold">' + l('oktav') + '</span>',
					date: '2014',
					content: l('oktavContent')
				}
			]
		}
	];
}