const States = [
	{
		state: "alabama",
		cities: {
			auburn: "auburn",
			birmingham: "bham",
			dothan: "dothan",
			"florence shoals": "shoals",
			"gadsden-anniston": "gadsden",
			"huntsville": "huntsville",
			mobile: "mobile",
			montgomery: "montgomery",
			tuscaloosa: "tuscaloosa"
		}
	},
	{
		state: "alaska",
		cities: {
			anchorage: "anchorage",
			fairbanks: "fairbanks",
			"kenai peninsula": "kenai",
			"southeast alaska": "juneau"
		}
	},
	{
		state: "arizona",
		cities: {
			flagstaff: "flagstaff",
			"mohave county": "mohave",
			phoenix: "phoenix",
			prescott: "prescott",
			"show low": "showlow",
			"sierra vista": "sierravista",
			tucson: "tucson",
			yuma: "yuma"
		}
	},
	{
		state: "arkansas",
		cities: {
			fayar: "fayar",
			"fort smith": "fortsmith",
			jonesboro: "jonesboro",
			"little rock": "littlerock",
			texarkana: "texarkana"
		}
	},
	{
		state: "california",
		cities: {
			bakersfield: "bakersfield",
			chico: "chico",
			fresno: "fresno",
			"gold county": "goldcounty",
			"hanford-corcoran": "hanford",
			"humboldt county": "humboldt",
			"imperial city": "imperial",
			"inland empire": "inlandempire",
			"los angeles": "losangeles",
			mendocino: "mendocino",
			merced: "merced",
			modesto: "modesto",
			"monterey bay": "monterey",
			"orange county": "orangecounty",
			"palm springs": "palmsprings",
			redding: "redding",
			sacramento: "sacramento",
			"san diego": "sandiego",
			"san francisco bay area": "sfbay",
			"san luis obispo": "slo",
			"santa barbara": "santabarbara",
			"santa maria": "santamaria",
			"siskiyou county": "siskiyou",
			stockton: "stockton",
			susanville: "susanville",
			"ventura county": "ventura",
			"visalia-tulare": "visalia",
			"yubasutter-sutter": "yubasutter"
		}
	},
	{
		state: "colorado",
		cities: {
			boulder: "boulder",
			"colorado springs": "cosprings",
			denver: "denver",
			"east co": "eastco",
			"fort collins": "fortcollins",
			"high rockies": "rockies",
			pueblo: "pueblo",
			"western slope": "westslope"
		}
	},
	{
		state: "conneticut",
		cities: {
			"eastern conneticut": "newlondon",
			hartford: "hartford",
			"new haven": "newhaven",
			"northwest conneticut": "nwct"
		}
	},
	{
		state: "delaware",
		cities: {
			delaware: "delaware"
		}
	},
	{
		state: "District of Columbia",
		cities: {
			"washington dc": "washingtondc"
		}
	},
	{
		state: "Florida",
		cities: {
			"boward county": "miami",
			"daytona beach": "daytona",
			"florida keys": "keys",
			"fort lauderdale": "fortlauderdale",
			"fort myers": "fortmyers",
			gainseville: "gainseville",
			"heartland florida": "cfl",
			jacksonville: "jacksonville",
			lakeland: "lakeland",
			miami: "miami",
			"north central florida": "lakecity",
			ocala: "ocala",
			okaloosa: "okaloosa",
			orlando: "orlando",
			"panama city": "panamacity",
			pensacola: "pensacola",
			"sarasota-bradenton": "sarasota",
			"south florida": "miami",
			"space coast": "spacecoast",
			"st augustine": "staugustine",
			tallahassee: "tallahassee",
			"tampa bay area": "tampa",
			"treasure coast": "treasure",
			"palm beach county": "miami"
		}
	},
	{
		state: "georgia",
		cities: {
			albany: "albanyga",
			athens: "athensga",
			atlanta: "atlanta",
			augusta: "augusta",
			brunswick: "brunswick",
			columbus: "columbusga",
			macon: "macon",
			"northwest georgia": "nwga",
			savannah: "savannah",
			statesboro: "statesboro",
			valdosta: "valdosta"
		}
	},
	{
		state: "Hawaii",
		cities: {
			hawaii: "honolulu"
		}
	},
	{
		state: "idaho",
		cities: {
			boise: "boise",
			"east idaho": "eastidaho",
			lewiston: "lewiston",
			"twin falls": "twinfalls"
		}
	},
	{
		state: "illinois",
		cities: {
			"bloomington-normal": "bn",
			"champaign urbana": "chambana",
			chicago: "chicago",
			decatur: "decatur",
			"la salle co": "lasalle",
			"mattoon-charleston": "mattoon",
			peoria: "peoria",
			rockford: "rockford",
			"southern illinois": "carbondale",
			springfield: "springfieldil",
			"western IL": "quincy"
		}
	},
	{
		state: "indiana",
		cities: {
			bloomington: "bloomington",
			evansville: "evansville",
			"fort wayne": "fortwayne",
			indianapolis: "indianapolis",
			kokomo: "kokomo",
			"lafayette west lafayette": "tippercanoe",
			"muncie anderson": "muncie",
			richmond: "richmondin",
			"south bend michiana": "southbend",
			"terre haute": "terrehaute"
		}
	},
	{
		state: "iowa",
		cities: {
			ames: "ames",
			"cedar rapids": "cedarrapids",
			"des moines": "desmoines",
			dubuque: "dubuque",
			"fort dodge": "fortdodge",
			"iowa city": "iowacity",
			"mason city": "masoncity",
			"quad cities": "quadcities",
			"sioux city": "siouxcity",
			"southeast IA": "ottumwa",
			"waterloo cedar falls": "waterloo"
		}
	},
	{
		state: "kansas",
		cities: {
			lawrence: "lawrence",
			manhattan: "ksu",
			"northwest KS": "nwks",
			salina: "salina",
			"southeast KS": "seks",
			"southwest KS": "swks",
			topeka: "topeka",
			wichita: "wichita"
		}
	},
	{
		state: "kentucky",
		cities: {
			"bowling green": "bgky",
			"eastern kentucky": "eastky",
			lexington: "lexington",
			louisville: "louisville",
			owensboro: "owensboro",
			"western KY": "westky"
		}
	},
	{
		state: "Louisiana",
		cities: {
			"baton rouge": "batonrouge",
			"central louisiana": "cenla",
			houma: "houma",
			lafayette: "lafayette",
			"lake charles": "lakecharles",
			monroe: "monroe",
			"new orleans": "neworleans",
			shreveport: "shreveport"
		}
	},
	{
		state: "maine",
		cities: {
			maine: "maine"
		}
	},
	{
		state: "maryland",
		cities: {
			annapolis: "annapolis",
			baltimore: "baltimore",
			"eastern shore": "easternshore",
			frederick: "frederick",
			"southern maryland": "smd",
			"western maryland": "westmd"
		}
	},
	{
		state: "Massachusetts",
		cities: {
			boston: "bston",
			"cape cod islands": "capecod",
			"south coast": "southcoast",
			"western massachusetts": "westernmass",
			"worcester central MA": "worcester"
		}
	},
	{
		state: "michigan",
		cities: {
			"ann arbor": "annarbor",
			"battle creek": "battlecreek",
			"central michigan": "centralmich",
			"detroit metro": "detroit",
			flint: "flint",
			"grand rapids": "grandrapids",
			holland: "holland",
			jackson: "jxn",
			kalamazoo: "kalamazoo",
			lansing: "landsing",
			monroe: "monroemi",
			muskegon: "miskegon",
			"northern michigan": "nmi",
			"port huron": "porthuron",
			"saginaw-midland-baycity": "saginaw",
			"southwest michigan": "swmi",
			"the thumb": "thumb",
			"upper peninsula": "up"
		}
	},
	{
		state: "minnesota",
		cities: {
			bemidji: "bemidji",
			brainerd: "brainerd",
			"duluth superior": "duluth",
			mankato: "manktao",
			"minneapolis st paul": "minneapolis",
			rochester: "rmn",
			"southwest MN": "marshall",
			"st cloud": "stcloud"
		}
	},
	{
		state: "minnesota",
		cities: {
			"gulfport biloxi": "gulfport",
			hattiesburg: "hattiesburg",
			jackson: "jackson",
			meridian: "meridian",
			"north mississippi": "northmiss",
			"southwest MS": "natchez"
		}
	},
	{
		state: "Missouri",
		cities: {
			"columbia jeff city": "columbiamo",
			joplin: "joplin",
			"kansas city": "kansascity",
			kirksville: "kirksville",
			"lake of the ozarks": "loz",
			"southeast missouri": "semo",
			springfield: "springfield",
			"st joseph": "stjoseph",
			"st louis": "stlouis"
		}
	},
	{
		state: "montana",
		cities: {
			billings: "billings",
			bozeman: "bozeman",
			butte: "butte",
			"great falls": "greatfalls",
			helena: "helena",
			kalispell: "kalispell",
			missoula: "missoula",
			"eastern montana": "montana"
		}
	},
	{
		state: "nebraska",
		cities: {
			"grand island": "grandisland",
			lincoln: "linocoln",
			"north platte": "northplatte",
			"omaha council bluffs": "omaha",
			"scottsbluff panhandle": "scottsbluff"
		}
	},
	{
		state: "nevada",
		cities: {
			elko: "elko",
			"las vegas": "lasvegas",
			"reno  tahoe": "reno"
		}
	},
	{
		state: "New Hampshire",
		cities: {
			"New Hampshire": "nh"
		}
	},
	{
		state: "New Jersey",
		cities: {
			"central NJ": "cnj",
			"jersey shore": "jerseyshore",
			"north jersey": "newjersey",
			"south jersey": "southjersey"
		}
	},
	{
		state: "New mexico",
		cities: {
			albuquerque: "albuquerque",
			"clovis portales": "clovis",
			farmington: "farmington",
			"las cruces": "lascruces",
			"roswell carlsbad": "roswell",
			"santa fe taos": "santafe"
		}
	},
	{
		state: "New york",
		cities: {
			albany: "albany",
			binghamton: "binghamton",
			buffalo: "buffalo",
			catskills: "catskills",
			chautauqua: "chautauqua",
			"elmira-corning": "elmira",
			"finger lakes": "fingerlakes",
			"glens falls": "glenfalls",
			"hudson valley": "hudsonvalley",
			ithaca: "ithaca",
			"long island": "longisland",
			"new york city": "newyork",
			oneonta: "oneonta",
			"plattsburgh-adirondacks": "plattsburgh",
			"potsdam-canton-massena": "potsdam",
			rochester: "rochester",
			syracuse: "syracuse",
			"twin tiers NY PA": "twintiers",
			"utica-rome-oneida": "utica",
			watertown: "watertown"
		}
	},
	{
		state: "North Carolina",
		cities: {
			asheville: "asheville",
			boone: "boone",
			charlotte: "charlotte",
			"eastern NC": "eastnc",
			fayetteville: "fayetteville",
			greensboro: "greensboro",
			"hickory lenoir": "hickory",
			jacksonville: "onslow",
			"outer banks": "outerbanks",
			"raleigh durham CH": "raleigh",
			wilmington: "wilmington",
			"winston-salem": "winstonsalem"
		}
	},
	{
		state: "North Dakota",
		cities: {
			bismarck: "bismarck",
			"fargo moorhead": "fargo",
			"grand forks": "grandforks",
			"north dakota": "nd"
		}
	},
	{
		state: "Ohio",
		cities: {
			"akron canton": "akron",
			ashtabula: "ashtabula",
			athens: "athensohio",
			chillicothe: "chillicothe",
			cincinnati: "cincinnati",
			cleveland: "cleveland",
			columbus: "columbus",
			"dayton springfield": "dayton",
			"lima findlay": "limaohio",
			mansfield: "mansfield",
			sandusky: "sandusky",
			toledo: "toledo",
			"tuscarawas co": "tuscarawas",
			youngstown: "youngstown",
			"zanesville cambridge": "zanesville"
		}
	},
	{
		state: "Oklahoma",
		cities: {
			lawton: "lawon",
			"northwest OK": "enid",
			"oklahoma city": "oklahomacity",
			stillwater: "stillwater",
			tulsa: "tulsa",
		}
	},
	{
		state: "oregon",
		cities: {
			bend: "bend",
			corvallis: "corvallis",
			"east oregon": "eastoregon",
			eugene: "eugene",
			"klamath falls": "klamath",
			"medford-ashland": "medford",
			"oregon coast": "oregoncoast",
			portland: "portland",
			rosebud: "rosebud",
			salem: "salem"
		}
	},
	{
		state: "Pennsylvania",
		cities: {
			"altoona-johnstown": "altoona",
			"cumberland valley": "chambersburg",
			erie: "erie",
			harrisburg: "harrisburg",
			lancaster: "lancaster",
			"lehigh valley": "allentown",
			meadville: "meadville",
			philadelphia: "philadelphia",
			pittsburgh: "pittsburgh",
			poconos: "poconos",
			reading: "reading",
			"scranton wilkes-barre": "scranton",
			"state college": "pennstate",
			williamsport: "williamsport",
			york: "york"
		}
	},
	{
		state: "Rhode Island",
		cities: {
			"rhode island": "providence"
		}
	},
	{
		state: "South Carolina",
		cities: {
			charleston: "charleston",
			columbia: "columbia",
			florence: "florencesc",
			"greenville upstate": "greenville",
			"hilton head": "hiltonhead",
			"myrtle beach": "myrtlebeach"
		}
	},
	{
		state: "South Dakota",
		cities: {
			"northeast SD": "nesd",
			"pierre central SD": "csd",
			"rapid city west SD": "rapidcity",
			"sioux falls SE SD": "siouxfalls",
			"south dakota": "sd"
		}
	},
	{
		state: "Tennessee",
		cities: {
			chattanooga: "chattanooga",
			clarksville: "clarksville",
			cookeville: "cookeville",
			jackson: "jacksontn",
			knoxville: "knoxville",
			memphis: "memphis",
			nashville: "nashville",
			"tri-cities": "tricities"
		}
	},
	{
		state: "Texas",
		cities: {
			abilene: "abilene",
			amarillo: "amarillo",
			austin: "austin",
			"beaumont port arthur": "beaumont",
			brownsville: "brownsville",
			"college station": "collegestation",
			"corpus christi": "corpuschristi",
			"dallas fort worth": "dallas",
			"deep east texas": "nacogdoches",
			"del rio eagle pass": "delrio",
			"el paso": "elpaso",
			galveston: "galveston",
			houston: "houston",
			"killeen temple ft hood": "kileen",
			laredo: "laredo",
			lubbock: "lubbock",
			"mcallen edinburg": "mcallen",
			"odessa midland": "odessa",
			"san angelo": "sanangelo",
			"san antonio": "sanantonio",
			"san marcos": "sanmarcos",
			"southwest TX": "bigbend",
			texoma: "texoma",
			"tyler east TX": "easttexas",
			victoria: "victoriatx",
			waco: "waco",
			"wichita falls": "wichitafalls"
		}
	},
	{
		state: "Utah",
		cities: {
			logan: "logan",
			"ogden-clearfield": "ogden",
			"provo orem": "provo",
			"salt lake city": "saltlakecity",
			"st george": "stgeorge"
		}
	},
	{
		state: "vermont",
		cities: {
			vermont: "vermont"
		}
	},
	{
		state: "virginia",
		cities: {
			charlottesville: "charlottesville",
			danville: "danville",
			fredericksburg: "fredericksburg",
			"hampton roads": "norfolk",
			harrisonburg: "harrisonburg",
			lynchburg: "lynchburg",
			"new river valley": "blacksburg",
			richmond: "richmond",
			roanoke: "roanoke",
			"southwest VA": "swva",
			winchester: "winchester"
		}
	},
	{
		state: "washington",
		cities: {
			bellingham: "bellingham",
			"kennewick-pasco-richland": "kpr",
			"moses lake": "moseslake",
			"olympic peninsula": "olympic",
			"pullman moscow": "pullman",
			"seattle-tacoma": "seattle",
			"skagit island SJI": "skagit",
			"spokane coeur d'alene": "spokane",
			wenatchee: "wenatchee",
			yakima: "yakima"
		}
	},
	{
		state: "West Virginia",
		cities: {
			charleston: "charlestonwv",
			"eastern panhandle": "martinsburg",
			"huntington-ashland": "huntington",
			morgantown: "morgantown",
			"northern panhandle": "wheeling",
			"parkersburg-marietta": "parkersburg",
			"southern WV": "swv",
			"west virginia (old)": "wv"
		}
	},
	{
		state: "Wisconsin",
		cities: {
			"appleton-oshkosh-FDL": "appleton",
			"eau claire": "eauclaire",
			"green bay": "greenbay",
			janesville: "janesville",
			"kenosha-racine": "racine",
			"la crosse": "lacrosse",
			madison: "madison",
			milwaukee: "milwaukee",
			"northern WI": "northernwi",
			sheboygan: "sheboygan",
			wausau: "wausau"
		}
	},
	{
		state: "Wyoming",
		cities: {
			Wyoming: "Wyoming"
		}
	}
]

export default States;