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
	clickInstructions: {
	'en': `all ${a('http://lacoursieresimon.github.io', 'underlined')} text <br>sections are clickable!`,
	'fr': `les liens ${a('http://lacoursieresimon.github.io', 'soulignées')} <br>sont cliquables!`
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
		'en': 'Full stack software developer wishing to put his knowledge to work & to acquire <br>expertise in the different fields of programming & software development <br>in an Agile environment where quality is a priority.',
		'fr': 'Développeur « full stack » souhaitant mettre à profit ses connaissances & apprendre <br>dans les différents domaines de la programmation & du développement logiciel <br>dans un environnement Agile où la qualité règne.'
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
		'en': 'full stack developer',
		'fr': 'développeur « full stack »'
	},
	programmerAnalyst: {
		'en': 'Programmer analyst',
		'fr': 'Programmeur-analyste'
	},
	softwareDeveloper: {
		'en': 'Full stack developer',
		'fr': 'Développeur « full stack »'
	},
    mantleDate: {
		'en': '<span>(full time)</span> May 2018 to now',
		'fr': '<span>(emploi)</span> Mai 2018 à aujourd\'hui'
	},
	mantleContent: {
		'en': [
			`- Developed ${a('https://www.mantleblockchain.com', 'Mantle')}, a blockchain as a service platform`,
			'- Supervised & trained new employees',
			'- Took charge of front end development (Vue.js)',
			'- Developed full-stack features (.NET Core/MongoDB/Blockchain)',
			`- Built the ${a('https://www.mantleblockchain.com', 'website')} & produced all the ${a('https://www.youtube.com/channel/UC-tikvziELaxX6lWmcVcGvA', 'video content')}`,
		],
		'fr': [
			`- Développer ${a('https://www.mantleblockchain.com', 'Mantle')}, un « SaaS » facilitant l\'intégration blockchain`,
			'- Superviser l\'intégration des nouveaux employés',
			'- Administrer le développement de l\'interface web (Vue.js)',
			'- Développer le « back end » (.NET Core/MongoDB/Blockchain)',
			`- Construire le ${a('https://www.mantleblockchain.com', 'site web')} & produire le ${a('https://www.youtube.com/channel/UC-tikvziELaxX6lWmcVcGvA', 'contenu vidéo')}`,
		]
	},
    gsoftDate: {
		'en': '<span>(full time)</span> Jan. 2018 to Apr. 2018<br/><span>(intern)</span> May 2017 to Aug. 2017<br/><span>(intern)</span> Sept. 2016 to Dec. 2016',
		'fr': '<span>(emploi)</span> Jan. 2018 à avr. 2018 <br/><span>(stage)</span> Mai 2017 à aout 2017<br/><span>(stage)</span> Sept. 2016 à déc. 2016 '
	},
	gsoftContent: {
		'en': [
			`- Developed ${a('https://www.officevibe.com', 'Officevibe')}, an employee engagement SaaS`,
			'- Added new front end features using React/Redux-Saga',
			'- Improved the statistics module for algorithmic efficiency',
			'- Developed back end features using C# .NET & MongoDB',
		],
		fr: [
			`- Développer ${a('https://www.officevibe.com', 'Officevibe')}, un outil d\'engagement employé`,
			'- Développer des fonctionnalités serveur en C# & avec MongoDB',
			'- Améliorer l\'efficacité algorithmique du module de statistiques',
			'- Ajouter de nouvelles fonctionnalités UI avec React/Redux-Saga',
		]
	},
    shotgunDate: {
		'en': '<span>(intern)</span> Jan. 2016 to Apr. 2016',
		'fr': '<span>(stage)</span> Jan. 2016 à avr. 2016'
	},
	shotgunContent: {
		'en': [
			`- Developed ${a('https://www.shotgunsoftware.com', 'Shotgun')}, a film & game production planning SaaS`,
			'- Developed back end features with Ruby on Rails',
			'- Added UI features to support dynamic cuts in the video player',
		],
		fr: [
			`- Développer ${a('https://www.shotgunsoftware.com', 'Shotgun')}, un « SaaS » de planification de projets multimédia`,
			'- Développer des fonctionnalités serveur avec Ruby on Rails',
			'- Développer l\'interface pour supporter coupures vidéo dynamiques',
		]
	},
	coveoDate: {
		'en': '<span>(intern)</span> May 2015 to Oct. 2015',
		'fr': '<span>(stage)</span> Mai 2015 à oct. 2015'
	},
	coveoContent: {
		'en': [
			'- Developed Java microservices for the search engine (SaaS)',
			'- Developed the UI with Backbone.js, Marionette.js & Typescript',
			`- Created a ${a('https://github.com/Coveo/JsAdminMobile', 'mobile front end project' + icn('social-github'))} during a hackathon`,
		],
		fr: [
			'- Développer des microservices Java pour le « SaaS » Coveo',
			'- Développer des interfaces avec TypeScript, Backbone.js & Marionette.js',
			'- Créer ' + a('https://github.com/Coveo/JsAdminMobile', 'un projet' + icn('social-github')) + ' d’interface mobile lors d’un hackathon',
		]
	},
	seikaDate: {
		'en': '<span>(intern)</span> Jan. 2014 to Aug. 2014<br/><span>(intern)</span> June 2013 to Aug. 2013',
		'fr': '<span>(stage)</span>Jan. 2014 à août 2014<br/><span>(stage)</span>Juin 2013 à août 2013'
	},
	seikaContent: {
		'en': [
			'- Optimized the performance of a custom ORM system',
			'- Programmed an employee management app with ASP.NET',
		],
		'fr': [
			'- Améliorer la performance d’un ORM sur mesure',
			'- Programmer un site web de gestion d’employés en ASP.NET',
		]
	},
	uniFormation: {
		'en': 'Bachelor in Computer Science (coop program)',
		'fr': 'Baccalauréat en informatique (régime coop)'
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
		'en': 'Warner Bros. Games excellence grant',
		'fr': 'Bourse d\'excellence Warner Bros. Games'
	},
	entrepreneurshipGrant: {
		'en': 'Entrepreneurship grant for my ' + a('https://www.youtube.com/minimalistik', 'YouTube channel' + icn('social-youtube')),
		'fr': 'Bourse d\'entreprenariat pour ma' + a('https://www.youtube.com/minimalistik', 'chaine YouTube'+ icn('social-youtube'))
	},
	admissionGrant: {
		'en': 'Admission grant for high "R score" students',
		'fr': 'Bourse d\'admission pour cote R remarquable'
	},
	merit2: {
		'en': '"Excellence" Merit, 2<span class="sup">nd</span> place',
		'fr': 'Méritas « Excellence », 2<span class="sup">e</span> place'
	},
	merit1: {
		'en': '"Excellence" Merit, 1<span class="sup">st</span> place',
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
			'Developped a mobile app that helps planning a trip',
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
			'Developped a mobile app that helps saving money at grocery stores'   
		],
		'fr': [
			'Développement d\'une application mobile permettant d\'économiser sur l\'épicerie'
		]
	},
	coveoBlitz: {
		'en': 'Attended Coveo Blitz 2016',
		'fr': 'Participation au Coveo Blitz 2016'
	},
	coveoBlitzContent: {
		'en': [
			'Developped an AI for a competitive game'
		],
		'fr': [
			'Développement d\'une IA pour un jeu compétitif'
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
			'Made an e-signature mobile app for Wolters Kluwer\'s TaxPrep',
			a('http://www.usherbrooke.ca/informatique/accueil/babillard/babillard-details/article/28057/', 'More info on Université de Sherbrooke\'s billboard' + icn('udes'))
		],
		'fr': [
			'Création d\'une application mobile de e-signature pour TaxPrep de Wolters Kluwer',
			a('http://www.usherbrooke.ca/informatique/accueil/babillard/babillard-details/article/28057/', 'Plus de détails sur le babillard de l\'Université de Sherbrooke' + icn('udes'))
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
			'Toutes mes réalisations sont disponibles sur ma ' + a('https://www.youtube.com/user/SimonMusicCovers', ' chaine YouTube' + icn('social-youtube'))
		]
	},
	audioVideoProjectsDate: {
		'en': '2009 to 2015',
		'fr': '2009 - 2015'
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
		{ title: l('frameworks'), content: 'Vue.js + TypeScript<br>.NET Core + LINQ<br>Ionic (Angular)<br>React/Redux<br>LESS/SCSS<br>Node.js' }
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
					title: '<span class="bold">' + l('softwareDeveloper') + `</span> @ ${a('https://www.mantleblockchain.com', 'Mantle')}, Montreal`,
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