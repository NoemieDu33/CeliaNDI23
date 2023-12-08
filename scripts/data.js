const sources = [
    "https://www.missionenergie.goodplanet.org/uploads/2019/11/18-decouverte_comment-reduire-les-emissions-mondiales-de-gaz-a-effet-de-serre_college.pdf",
    "https://www.connaissancedesenergies.org/les-capacites-electriques-renouvelables-dans-le-monde-statistiques-2022-230328",
    "https://ourworldindata.org/co2-emissions",
    "https://www.edf.fr/groupe-edf/espaces-dedies/jeunes-enseignants/pour-les-jeunes/lenergie-de-a-a-z/le-developpement-durable/reduire-les-emissions-de-co2-les-solutions",
    "https://reseauactionclimat.org/urgence-climatique/",
    "https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/",
    "https://www.hautconseilclimat.fr/",
    "https://www.greenpeace.fr/nucleaire-solution-climat/"
];

const questions = [
    {
        "category": "L'urgence climatique",
        "question": "C'est quoi, cette urgence climatique?",
        "text": "Basiquement, l'homme génère beaucoup de gaz à effet de serre comme le CO2, qui réchauffent la planète. Ce réchauffement a des conséquences désastreuses: fontes des glaciers, incendies, perte de biodiversité, catastrophes naturelles... Et comme si ce n'était pas assez, chaque année, la planète chauffe de plus en plus. Bien qu'on ait les solutions, on ne les applique pas, ou mal.",
        "sprite": "2f",
        "earth_state": 1
    }, 
    {
        "category": "Le GIEC",
        "question": "C'est quoi, le GIEC?",
        "text": "C'est le Groupe d’experts intergouvernemental sur l’évolution du climat! C'est l'organisme de l'ONU qui évalue les connaissances scientifiques relatives au réchauffement climatique.",
        "sprite":"4f",
        "earth_state": 0
    }, 
    {
        "category": "L'effet de Serre",
        "question": "C'est quoi, l'effet de Serre?",
        "text": "Les gaz à effet de serre forment une sorte de barrière autour de la Terre permettant de conserver une partie de la chaleur émise par le soleil qui vient à nous. C'est grâce à eux que la température de notre planète est vivable depuis des millions d'années, à savoir 15°C en moyenne contre -18°C si on n'avait pas cette barrière.",
        "sprite":"7f",
        "earth_state": 2
    }, 
    {
        "category": "Les objectifs",
        "question": "Quels objectifs, pour sauver notre planète?",
        "text": "Il y en a beaucoup! Mais 195 pays se sont mis d'accord pour viser une limitation à +1.5°C maximum. Or, en réalité, on semble se diriger vers +2.4°C, soit bien au-dessus...",
        "sprite":"1f",
        "earth_state": 0
    }, 
    {
        "category": "L'utilité des arbres",
        "question": "Est-ce que planter des arbres suffit à réduire le réchauffement climatique?",
        "text": "Non! Bien que cette solution soit nécessaire pour atteindre les objectifs climatiques de 1.5°C maximum, elle n'est en aucun cas une alternative à la réduction des émissions.",
        "sprite":"6f",
        "earth_state": 2
    }, 
    {
        "category": "L'utilité du nucléaire",
        "question": "Est-ce qu'au final, le nucléaire ça aide bien pour lutter contre le réchauffement climatique?",
        "text": "Le nucléaire émet très peu de CO2, ne polluant donc quasiment pas l'air. Cependant, son rejet de déchets nucléaires, et le dérèglement des écosystèmes marins dûs  aux piscines de refroidissement laissent questionner sa réelle valeur écologique.",
        "sprite":"11f",
        "earth_state": 1
    }, 
    {
        "category": "La place de la France dans la lutte",
        "question": "Est-ce à la France d'agir, sachant qu'elle ne produit que 1% des émissions de gaz à effet de serre dans le monde?",
        "text": "Eh bien oui! 1% reste beaucoup, la France n'est pas un très bon élève, comme plein de pays dans le monde. Elle doit réduire au plus ses émissions. Au premier semestre 2023, elle est parvenue à réduire de 4.4% ses émissions!",
        "sprite":"8f",
        "earth_state": 2
    },   
    {
        "category": "L'utilité des énergies renouvelables",
        "question": "Est-ce que les énergies renouvelables sont assez efficaces?",
        "text": "Bien sûr! En 2022, 28.3% de l'électricité dans le monde dépendait d'énergies renouvelables. Bien que difficiles à implémenter, elles sont très efficaces si les Etats investissent correctement!",
        "sprite":"12f",
        "earth_state": 1
    },  
    {
        "category": "L'utilité de la technologie",
        "question": "Pouvons-nous compter sur la technologie pour sauver la planète?",
        "text": "Bien qu'il y ait des innovations technologiques pour lutter contre le réchauffement climatique, c'est l'homme qui doit agir pour espérer sauver cette planète. La technologie leur permettra plutôt de fuir de la Terre lorsqu'elle sera irrécupérable.",
        "sprite":"10f",
        "earth_state": 2
    }, 
    {
        "category": "Lutter à notre échelle",
        "question": "Comment, à notre échelle, pouvons-nous réduire les émissions de gaz à effet de serre?",
        "text": "Il y a plein de façons différentes pour réduire ses émissions de CO2! Tout d'abord, privilégiez les transports en commun, voire même la marche ou le vélo. Vous pouvez également limiter votre conso de viande et manger local. Limiter le chauffage avec une bonne isolation chez soi est aussi primordial. Le 6e rapport du GIEC parle d'une alimentation végétarienne, et également d'éviter les vols en avion.",
        "sprite":"12f",
        "earth_state": 0
    },  
    {
        "category": "L'Etat qui lutte à son échelle",
        "question": "Comment un Etat peut-il réduire ses émissions de gaz à effet de serre?",
        "text": "Beaucoup de pays n'ont pas entamé de transition écologique, utilisant donc encore beaucoup d'énergies fossiles. La régulation des industries pour qu'elles soient conformes aux normes est également primordial! Il y a aussi plein d'autres actions à faire à leur échelle.",
        "sprite":"3f",
        "earth_state": 0
    },    
    {
        "category": "Difficile de réduire ses émissions",
        "question": "Est-ce grave si on ne parvient pas à réduire nos émissions?",
        "text": "Ne vous sentez pas coupables si c'est difficile pour vous de réduire vos émissions de CO2. Cela peut être un gros investissement, voire un luxe pour certains, de faire baisser sa conso. De plus, bien que les actions individuelles soient importantes, elles ne sont pas suffisantes.",
        "sprite":"9f",
        "earth_state": 2
    },  
    {
        "category": "La place de la politique",
        "question": "La politique devrait-elle intervenir dans la lutte contre le réchauffement climatique?",
        "text": "Pour rentrer plus en détails, les Etats doivent adopter des législations et une politique plus écologique pour favoriser la baisse de leurs émissions. Des mesures politiques sont nécessaires, c'est pourquoi nous observons des groupes politiques tournant autour de l'écologie.",
        "sprite":"2f",
        "earth_state": 1
    },     
    {
        "category": "La légitimité de l'Etat",
        "question": "L'Etat a-t-elle en réalité grand chose à faire dans cette lutte?",
        "text": "Bien évidemment! L'Etat a beaucoup de choses à faire pour limiter ses émissions. Voici une liste un peu plus exhaustive: Limiter la conso d'énergie dans les logements et rénover les isolations, développer les transports en commun et inciter les gens à prendre le vélo, poursuivre sa transition écologique (on utilise encore du charbon!)...",
        "sprite":"8f",
        "earth_state": 1
    },    
    {
        "category": "L'égalité dans ce combat",
        "question": "Y a-t-il un risque que les mesures écologiques creusent des inégalités sociales?",
        "text": "Malheureusement, oui. Limiter sa conso et s'adapter peut avoir un prix cher, et les foyers les plus modestes ne peuvent pas se le permettre. C'est à l'Etat d'offrir des solutions durables sans déteriorer la vie des citoyens.",
        "sprite":"1f",
        "earth_state": 0
    }
];