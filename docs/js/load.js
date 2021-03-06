let state = null;
state = new PageState('loadingScreen');
graphs = new Graphs();

const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g'
, 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r'
, 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ']

const STATES = [
    'alabama',
    'alaska',
    'arizona',
    'arkansas',
    'california',
    'colorado',
    'connecticut',
    'direct of columbia',
    'delaware',
    'florida',
    'georgia',
    'hawaii',
    'idaho',
    'illinois',
    'indiana',
    'iowa',
    'kansas',
    'kentucky',
    'louisiana',
    'maine',
    'maryland', 
    'massachusetts',
    'michigan',
    'minnesota',
    'mississippi',
    'missouri',
    'montana',
    'nebraska',
    'nevada',
    'new hampshire',
    'new jersey',
    'new mexico',
    'new york',
    'north carolina',
    'north dakota',
    'ohio',
    'oklahoma',
    'oregon',
    'pennsylvania', 
    'rhode island',
    'south carolina',
    'south dakota',
    'tennessee',
    'texas',
    'utah',
    'vermont', 
    'virginia',
    'washington',
    'west virginia',
    'wisconsin',
    'wyoming'
]

const STATEABREVIATIONS = {
    'alabama':'AL', 
    'alaska':'AK', 
    'arizona':'AZ', 
    'arkansas':'AR', 
    'california':'CA', 
    'colorado':'CO', 
    'connecticut':'CT', 
    'direct of columbia':'DC',
    'delaware':'DE', 
    'florida':'FL', 
    'georgia':'GA', 
    'hawaii':'HI', 
    'idaho':'ID', 
    'illinois':'IL', 
    'indiana':'IN', 
    'iowa':'IA', 
    'kansas':'KS', 
    'kentucky':'KY', 
    'louisiana':'LA', 
    'maine':'ME', 
    'maryland':'MD', 
    'massachusetts':'MA', 
    'michigan':'MI', 
    'minnesota':'MN', 
    'mississippi':'MS', 
    'missouri':'MO', 
    'montana':'MT', 
    'nebraska':'NE', 
    'nevada':'NV', 
    'new hampshire':'NH', 
    'new jersey':'NJ', 
    'new mexico':'NM', 
    'new york':'NY', 
    'north carolina':'NC', 
    'north dakota':'ND', 
    'ohio':'OH', 
    'oklahoma':'OK', 
    'oregon':'OR', 
    'pennsylvania':'PA', 
    'rhode island':'RI', 
    'south carolina':'SC', 
    'south dakota':'SD', 
    'tennessee':'TN', 
    'texas':'TX', 
    'utah':'UT', 
    'vermont':'VT', 
    'virginia':'VA', 
    'washington':'WA', 
    'west virginia':'WV', 
    'wisconsin':'WI', 
    'wyoming':'WY'
}

// from https://stackoverflow.com/questions/23013573/swap-key-with-value-in-object
let STATE_BY_ABBREVIATION = Object.entries(STATEABREVIATIONS).reduce((acc, [key, value]) => (acc[value] = key, acc), {});

let currentCountyOptions = null;
let stateOldData = null;
let stateCurrentData = null;
let countyOldData = null;
let countyCurrentData = null;
let currentSelectedCountyData = null;
let oldSelectedCountyData = null;

state.changeState('searchScreen');
