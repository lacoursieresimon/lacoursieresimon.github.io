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
		'en': 'location',
		'fr': 'location'
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
		'fr': 'langues'
	},
	programming: {
		'en': 'programming',
		'fr': 'programmation'
	},
	database: {
		'en': 'database',
		'fr': 'base de données'
	},
	frameworks: {
		'en': 'frameworks',
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
		'en':  a('http://lacoursieresimon.github.io', 'github.io' + icn('briefcase')) + 
				a('http://minimalistik.tech', 'minimalistik.tech' + icn('camera')) + 
				a('https://www.youtube.com/minimalistik', 'youtube' + icn('social-youtube')) + 
				a('https://www.linkedin.com/in/lacoursieresimon', 'linkedin' + icn('social-linkedin')) + 
				a('https://github.com/lacoursieresimon',  'github' + icn('social-github')) + 
				a('mailto:lacoursieresimon@gmail.com', 'email' + icn('email')),
		'fr': a('http://lacoursieresimon.github.io', 'github.io' + icn('briefcase')) + 
				a('http://minimalistik.tech', 'minimalistik.tech' + icn('camera')) + 
				a('https://www.youtube.com/minimalistik', 'youtube' + icn('social-youtube')) + 
				a('https://www.linkedin.com/in/lacoursieresimon', 'linkedin' + icn('social-linkedin')) + 
				a('https://github.com/lacoursieresimon', 'github' + icn('social-github')) + 
				a('mailto:lacoursieresimon@gmail.com', 'courriel' + icn('email'))
	},
	aboutMe: {
		'en': 'about me',
		'fr': 'à propos'
	},
	aboutMeValues: {
		'en': 'I love great UXs & efficient code!<br>Full-stack software developer wishing to put his knowledge to work & to acquire <br>expertise in the different fields of programming & software development.',
		'fr': 'J\'adore les UX hors-pair & le code efficace !<br>Développeur « full-stack » souhaitant mettre à profit ses connaissances & apprendre <br>dans les différents domaines de la programmation & du développement logiciel.'
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
		'en': 'software developer',
		'fr': 'développeur logiciel'
	},
	programmerAnalyst: {
		'en': 'Programmer analyst',
		'fr': 'Programmeur-analyste'
	},
	softwareDeveloper: {
		'en': 'Software developer',
		'fr': 'Développeur logiciel'
	},
    mantleDate: {
		'en': 'May 2018 to now',
		'fr': 'Mai 2018 à aujourd\'hui'
	},
	mantleContent: {
		'en': [
			`- Developed ${a('https://www.mantleblockchain.com', 'Mantle')}, a blockchain as a service platform`,
			'- Supervised & trained new employees',
			'- Took charge of front end development (Vue.js)',
			'- Developed full-stack features (.NET Core + MongoDB + Blockchain)',
			`- Built the ${a('https://www.mantleblockchain.com', 'website')} with ${a('https://designers.hubspot.com/docs/hubl/intro-to-hubl', 'Hubspot HubL')} & produced all the ${a('https://www.youtube.com/channel/UC-tikvziELaxX6lWmcVcGvA', 'video content')}`,
		],
		'fr': [
			`- Développer ${a('https://www.mantleblockchain.com', 'Mantle')}, une application facilitant l\'intégration blockchain`,
			'- Superviser l\'intégration des nouveaux employés',
			'- Administrer le développement de l\'interface web Vue.js',
			'- Développement de fonctionnalités « full-stack » (.NET Core + MongoDB + Blockchain)',
			`- Construire le ${a('https://www.mantleblockchain.com', 'site web')} avec ${a('https://designers.hubspot.com/docs/hubl/intro-to-hubl', 'Hubspot HubL')} & produire le ${a('https://www.youtube.com/channel/UC-tikvziELaxX6lWmcVcGvA', 'contenu vidéo')}`,
		]
	},
    gsoftDate: {
		'en': 'Jan. 2018 to April 2018<br/>May 2017 to Aug. 2017<br/>Sept. 2016 to Dec. 2016',
		'fr': 'Jan. 2018 à avril 2018 <br/>Mai 2017 à aout 2017<br/>Sept. 2016 à déc. 2016 '
	},
	gsoftContent: {
		'en': [
			`- Developed ${a('https://www.officevibe.com', 'Officevibe')}, an employee engagement tool`,
			'- Added new front end features using React/Redux-Saga',
			'- Improved the statistics module for algorithmic efficiency',
			'- Developed back end features using C# .NET & MongoDB',
		],
		fr: [
			'- Développer des fonctionnalités serveur en C# & avec MongoDB',
			'- Améliorer l\'efficacité algorithmique du module de statistiques',
			'- Développer l\'interface de nouvelles fonctionnalités avec React/Redux-Saga',
			`- Développer ${a('https://www.officevibe.com', 'Officevibe')}, un outil d\'engagement employé`,
		]
	},
    shotgunDate: {
		'en': 'Jan. 2016 to April 2016',
		'fr': 'Janvier 2016 à avril 2016'
	},
	shotgunContent: {
		'en': [
			`- Developed ${a('https://www.shotgunsoftware.com', 'Shotgun')}, a Film And Game Production Planning Web App`,
			'- Developed back end features with Ruby on Rails',
			'- Added front end features to support live film cuts in the web video player',
		],
		fr: [
			`- Développer ${a('https://www.shotgunsoftware.com', 'Shotgun')}, un logiciel web de planification de projets multimédia`,
			'- Développer des fonctionnalités serveur avec Ruby on Rails',
			'- Développer l\'interface pour supporter la lecture de clips édités en temps réel',
		]
	},
	coveoDate: {
		'en': 'May 2015 to Oct. 2015',
		'fr': 'Mai 2015 à octobre 2015'
	},
	coveoContent: {
		'en': [
			'- Developed Java microservices used to configure the Coveo search engine',
			'- Developed user interfaces with Backbone.js, Marionette.js & Typescript',
			`- Created a ${a('https://github.com/Coveo/JsAdminMobile', 'mobile front end project' + icn('social-github'))} during a hackathon`,
		],
		fr: [
			'- Développer des microservices Java pour gérer le moteur de recherche',
			'- Développer des interfaces web en TypeScript avec Backbone.js & Marionette.js',
			'- Créer ' + a('https://github.com/Coveo/JsAdminMobile', 'un projet « open source »' + icn('social-github')) + ' d’interface mobile lors d’un hackathon',
		]
	},
	seikaDate: {
		'en': 'January 2014 to August 2014<br/>June 2013 to August 2013',
		'fr': 'Janvier 2014 à août 2014<br/>Juin 2013 à août 2013'
	},
	seikaContent: {
		'en': [
			'- Optimized the performance of a custom ORM system',
			'- Conceived unit tests to ensure algorithmic efficiency',
			'- Programmed an employee management app using ASP.Net MVC',
		],
		'fr': [
			'- Améliorer la performance d’un ORM sur mesure',
			'- Programmer un site web de gestion d’employés en ASP.Net MVC',
			'- Concevoir des tests unitaires assurant l’efficience des algorithmes',
		]
	},
	uniFormation: {
		'en': 'Bachelor in Computer Science',
		'fr': 'Baccalauréat en informatique'
	},
	uniDate: {
		'en': 'August 2014 to Dec 2017',
		'fr': 'Août 2014 à Déc 2017'
	},
	cegFormation: {
		'en': 'Computer Science Technology',
		'fr': 'Techniques de l’informatique'
	},
	cegDate: {
		'en': 'August 2011 to May 2014',
		'fr': 'Août 2011 à mai 2014'
	},
	wbGrant: {
		'en': 'WB Games excellence grant',
		'fr': 'Bourse d\'excellence WB Games'
	},
	entrepreneurshipGrant: {
		'en': 'Entrepreneurship grant for my ' + a('https://www.youtube.com/minimalistik', 'YouTube channel' + icn('social-youtube')),
		'fr': 'Bourse d\'entreprenariat pour ma' + a('https://www.youtube.com/minimalistik', 'chaine YouTube'+ icn('social-youtube'))
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
		'fr': 'Bourse de l’Université McGill'
	},
	claretainMerit: {
		'en': 'Merit "Perseverance in learning"',
		'fr': 'Méritas « Persévérance dans les apprentissages »'
	},
	cogniboxHackathon2017: {
		'en': '2<span class="sup">nd</span> prize at Cognibox\'s Hackathon 2017',
		'fr': '2<span class="sup">e</span> prix au Hackathon Cognibox 2017'
	},
	cogniboxHackathon2017Content: {
		'en': [
			'Developped a mobile app that helps planning a vacation in Shawinigan',
			a('http://ici.radio-canada.ca/nouvelle/1013798/hackathon-shawinigan-application-programmeurs', 
            'More info in this newspaper article on radio-canada.ca')
           
		],
		'fr': [
			'Développement d\'une application mobile planifiant un séjour à Shawinigan',
			a('http://ici.radio-canada.ca/nouvelle/1013798/hackathon-shawinigan-application-programmeurs', 
            'Plus d\'information dans cet article radio-canada.ca')
		]
	},
	cogniboxHackathon: {
		'en': '1<span class="sup">st</span> prize at Cognibox\'s Hackathon 2016',
		'fr': '1<span class="sup">er</span> prix au Hackathon Cognibox 2016'
	},
	cogniboxHackathonContent: {
		'en': [
			'Developped a mobile app that helps its users to save money at the grocery store'   
		],
		'fr': [
			'Développement d\'une application mobile permettant de sauver de l\'argent sur l\'épicerie'
		]
	},
	coveoBlitz: {
		'en': 'Attended Coveo Blitz 2016',
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
		'en': 'Participated at the HackSherbrooke hackathon',
		'fr': 'Participation au hackathon HackSherbrooke'
	},
	hackSherbrookeContent: {
		'en': [
			'Made an informative mobile app about Sherbrooke\'s events, services & businesses'
		],
		'fr': [
			'Création d\'une application mobile à propos des évènements & des services de Sherbrooke'
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
		'en': 'Produced many videos & audio recordings',
		'fr': 'Réalisation de clips vidéo & d\'enregistrements audio'
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
		{ title: l('address'), content: 'Montreal, QC<br>Canada' },
		{ title: 'mobile', content: '(819) 350-8903' },
		{ title: l('links'), content: l('linksValues') },
		{ title: l('languages'), content: l('languageValues') },
		{ title: l('programming'), content: 'JavaScript, C#<br>Java, Python' },
		{ title: l('database'), content: 'MongoDB, SQL<br>' },
		{ title: l('frameworks'), content: 'Vue.js, React/Redux<br>.NET Core, LINQ<br>Ionic (Angular)<br>LESS/SCSS' }
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
					title: '<span class="bold">' + l('softwareDeveloper') + `</span> @ ${a('https://www.mantleblockchain.com', 'Mantle')} (startup), Montreal`,
					date: l('mantleDate'),
					content: l('mantleContent')
				},
				{
					title: '<span class="bold">' + l('softwareDeveloper') + `</span> @ ${a('https://www.gsoft.com', 'GSoft')}, Montreal`,
					date: l('gsoftDate'),
					content: l('gsoftContent')
				},
				{
					title: '<span class="bold">' + l('softwareDeveloper') + `</span> @ ${a('https://www.autodesk.com', 'Autodesk')}, Montreal`,
					date: l('shotgunDate'),
					content: l('shotgunContent')
				},
				{
					title: '<span class="bold">' + l('softwareDeveloper') + `</span> @ ${a('https://www.coveo.com', 'Coveo')}, Quebec`,
					date: l('coveoDate'),
					content: l('coveoContent')
				},
				{
					title: '<span class="bold">' + l('programmerAnalyst') + `</span> @ ${a('http://seika.ca', 'SEIKA Logiciel')}, Plessisville`,
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
					title: '<span class="bold">' + l('entrepreneurshipGrant') + '</span>',
					date: '2017',
					content: ['Université de Sherbrooke']
				},
				{
					title: '<span class="bold">' + l('wbGrant') + '</span>',
					date: '2016',
					content: ['Université de Sherbrooke']
				},
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
				},/*
				{
					title: '<span class="bold">' + l('mcgillGrant') + '</span>',
					date: '2011',
					content: ['Collège Clarétain']
				},
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
					title: '<span class="bold">' + l('cogniboxHackathon2017') + '</span>',
					date: '2017',
					content: l('cogniboxHackathon2017Content')
				},
				{
					title: '<span class="bold">' + l('cogniboxHackathon') + '</span>',
					date: '2016',
					content: l('cogniboxHackathonContent')
				},
				{
					title: '<span class="bold">' + l('coveoBlitz') + '</span>',
					date: '2016',
					content: l('coveoBlitzContent')
				},/*
				{
					title: '<span class="bold">' + l('coveoHackathon') + '</span>',
					date: '2015',
					content: l('coveoHackathonContent')
				},
				{
					title: '<span class="bold">' + l('hackSherbrooke') + '</span>',
					date: '2015',
					content: l('hackSherbrookeContent')
				},*/
				{
					title: '<span class="bold">' + l('hackSh') + '</span>',
					date: '2015',
					content: l('hackShContent')
				},/*
				{
					title: '<span class="bold">' + l('audioVideoProjects') + '</span>',
					date: l('audioVideoProjectsDate'),
					content: l('audioVideoProjectsContent')
				},
				{
					title: '<span class="bold">' + l('oktav') + '</span>',
					date: '2014',
					content: l('oktavContent')
				}*/
			]
		}
	];
}