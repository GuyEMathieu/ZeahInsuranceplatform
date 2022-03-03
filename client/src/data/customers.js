import { v4 as uid } from 'uuid';
import {GENDERS} from './defaults'

export const CUSTOMERS = [{
  "first_name": "Raoul",
  "last_name": "Comiskey",
  "email": "rcomiskey0@globo.com",
  "gender": "Male",
  "phone": "941-931-8264",
  "address": {
    "streetAddress": "8 Spenser Plaza",
    "aptNum": null,
    "city": "Port Charlotte",
    "state": "FL",
    "zipcode": "33954"
  },
  "dateOfBirth": "03/03/1956"
}, {
  "first_name": "Winnah",
  "last_name": "Caso",
  "email": "wcaso1@prlog.org",
  "gender": "Male",
  "phone": "954-536-9557",
  "address": {
    "streetAddress": "7907 Corscot Circle",
    "aptNum": "4",
    "city": "Pompano Beach",
    "state": "FL",
    "zipcode": "33069"
  },
  "dateOfBirth": "18/11/1980"
}, {
  "first_name": "Vernor",
  "last_name": "Bluck",
  "email": "vbluck2@devhub.com",
  "gender": "Male",
  "phone": "772-459-8969",
  "address": {
    "streetAddress": "03 Badeau Way",
    "aptNum": null,
    "city": "Fort Pierce",
    "state": "FL",
    "zipcode": "34981"
  },
  "dateOfBirth": "22/12/1966"
}, {
  "first_name": "Clarie",
  "last_name": "Percival",
  "email": "cpercival3@ed.gov",
  "gender": "Female",
  "phone": "239-643-7976",
  "address": {
    "streetAddress": "45828 Cambridge Hill",
    "aptNum": null,
    "city": "Naples",
    "state": "FL",
    "zipcode": "34102"
  },
  "dateOfBirth": "18/03/1966"
}, {
  "first_name": "Bianca",
  "last_name": "Osinin",
  "email": "bosinin4@macromedia.com",
  "gender": "Female",
  "phone": "941-540-8485",
  "address": {
    "streetAddress": "1 Novick Hill",
    "aptNum": null,
    "city": "Bonita Springs",
    "state": "FL",
    "zipcode": "34135"
  },
  "dateOfBirth": "30/04/1982"
}, {
  "first_name": "Sheffy",
  "last_name": "Goford",
  "email": "sgoford5@shinystat.com",
  "gender": "Female",
  "phone": "863-253-0228",
  "address": {
    "streetAddress": "4707 Washington Trail",
    "aptNum": "32",
    "city": "Lakeland",
    "state": "FL",
    "zipcode": "33805"
  },
  "dateOfBirth": "07/09/1970"
}, {
  "first_name": "Nickie",
  "last_name": "McGoon",
  "email": "nmcgoon6@uiuc.edu",
  "gender": "Male",
  "phone": "727-268-8513",
  "address": {
    "streetAddress": "5765 Ridgeway Parkway",
    "aptNum": null,
    "city": "Saint Petersburg",
    "state": "FL",
    "zipcode": "33715"
  },
  "dateOfBirth": "30/12/1973"
}, {
  "first_name": "Brett",
  "last_name": "O'Lahy",
  "email": "bolahy7@yahoo.co.jp",
  "gender": "Female",
  "phone": "941-277-7626",
  "address": {
    "streetAddress": "8 Brentwood Junction",
    "aptNum": null,
    "city": "Orlando",
    "state": "FL",
    "zipcode": "32819"
  },
  "dateOfBirth": "21/03/1970"
}, {
  "first_name": "Carmelina",
  "last_name": "Kynd",
  "email": "ckynd8@squarespace.com",
  "gender": "Male",
  "phone": "407-236-5999",
  "address": {
    "streetAddress": "85 Merry Terrace",
    "aptNum": null,
    "city": "Orlando",
    "state": "FL",
    "zipcode": "32859"
  },
  "dateOfBirth": "21/05/1981"
}, {
  "first_name": "Caldwell",
  "last_name": "Pettis",
  "email": "cpettis9@upenn.edu",
  "gender": "Female",
  "phone": "904-570-6706",
  "address": {
    "streetAddress": "04498 Arrowood Point",
    "aptNum": null,
    "city": "Jacksonville",
    "state": "FL",
    "zipcode": "32225"
  },
  "dateOfBirth": "06/04/1964"
}, {
  "first_name": "Nicky",
  "last_name": "Boomes",
  "email": "nboomesa@state.gov",
  "gender": "Female",
  "phone": "813-755-3433",
  "address": {
    "streetAddress": "25 Main Place",
    "aptNum": null,
    "city": "Clearwater",
    "state": "FL",
    "zipcode": "33758"
  },
  "dateOfBirth": "17/11/1970"
}, {
  "first_name": "Sophia",
  "last_name": "Robardey",
  "email": "srobardeyb@ifeng.com",
  "gender": "Male",
  "phone": "904-652-3286",
  "address": {
    "streetAddress": "653 Cascade Point",
    "aptNum": null,
    "city": "Jacksonville",
    "state": "FL",
    "zipcode": "32236"
  },
  "dateOfBirth": "23/02/1982"
}, {
  "first_name": "Cynthie",
  "last_name": "Anthony",
  "email": "canthonyc@taobao.com",
  "gender": "Male",
  "phone": "904-328-0961",
  "address": {
    "streetAddress": "58 Dakota Lane",
    "aptNum": "00455",
    "city": "Jacksonville",
    "state": "FL",
    "zipcode": "32215"
  },
  "dateOfBirth": "28/08/1976"
}, {
  "first_name": "Morrie",
  "last_name": "Lupson",
  "email": "mlupsond@stanford.edu",
  "gender": "Female",
  "phone": "754-173-0207",
  "address": {
    "streetAddress": "3 Meadow Valley Pass",
    "aptNum": null,
    "city": "Fort Lauderdale",
    "state": "FL",
    "zipcode": "33345"
  },
  "dateOfBirth": "19/04/1983"
}, {
  "first_name": "Mikey",
  "last_name": "Hatherall",
  "email": "mhatheralle@w3.org",
  "gender": "Male",
  "phone": "941-496-3337",
  "address": {
    "streetAddress": "9 Melrose Alley",
    "aptNum": "16",
    "city": "Sarasota",
    "state": "FL",
    "zipcode": "34238"
  },
  "dateOfBirth": "21/04/1972"
}, {
  "first_name": "Cherri",
  "last_name": "Gianolo",
  "email": "cgianolof@epa.gov",
  "gender": "Male",
  "phone": "813-640-0396",
  "address": {
    "streetAddress": "77295 Corben Lane",
    "aptNum": null,
    "city": "Tampa",
    "state": "FL",
    "zipcode": "33605"
  },
  "dateOfBirth": "06/03/1957"
}, {
  "first_name": "Fleur",
  "last_name": "De Andreis",
  "email": "fdeandreisg@opensource.org",
  "gender": "Male",
  "phone": "727-861-5426",
  "address": {
    "streetAddress": "82 Manley Pass",
    "aptNum": null,
    "city": "Clearwater",
    "state": "FL",
    "zipcode": "33763"
  },
  "dateOfBirth": "19/12/1970"
}, {
  "first_name": "Kaye",
  "last_name": "Minigo",
  "email": "kminigoh@stanford.edu",
  "gender": "Male",
  "phone": "850-587-2658",
  "address": {
    "streetAddress": "34380 3rd Junction",
    "aptNum": null,
    "city": "Pensacola",
    "state": "FL",
    "zipcode": "32595"
  },
  "dateOfBirth": "10/12/1992"
}, {
  "first_name": "Kalindi",
  "last_name": "Cotman",
  "email": "kcotmani@bbc.co.uk",
  "gender": "Female",
  "phone": "239-280-5690",
  "address": {
    "streetAddress": "2 Graceland Junction",
    "aptNum": null,
    "city": "Fort Myers",
    "state": "FL",
    "zipcode": "33994"
  },
  "dateOfBirth": "21/12/1982"
}, {
  "first_name": "Ive",
  "last_name": "Pays",
  "email": "ipaysj@cafepress.com",
  "gender": "Male",
  "phone": "386-871-2818",
  "address": {
    "streetAddress": "99913 Erie Hill",
    "aptNum": "4148",
    "city": "Daytona Beach",
    "state": "FL",
    "zipcode": "32118"
  },
  "dateOfBirth": "22/03/1979"
}, {
  "first_name": "Stacee",
  "last_name": "Martijn",
  "email": "smartijnk@unblog.fr",
  "gender": "Female",
  "phone": "727-311-0929",
  "address": {
    "streetAddress": "4 Leroy Plaza",
    "aptNum": "062",
    "city": "Largo",
    "state": "FL",
    "zipcode": "33777"
  },
  "dateOfBirth": "13/02/1966"
}, {
  "first_name": "Patience",
  "last_name": "Drissell",
  "email": "pdrisselll@usatoday.com",
  "gender": "Female",
  "phone": "772-364-3245",
  "address": {
    "streetAddress": "1 Cherokee Lane",
    "aptNum": null,
    "city": "Vero Beach",
    "state": "FL",
    "zipcode": "32969"
  },
  "dateOfBirth": "28/06/2002"
}, {
  "first_name": "Clementius",
  "last_name": "Cleverley",
  "email": "ccleverleym@sogou.com",
  "gender": "Male",
  "phone": "786-680-9338",
  "address": {
    "streetAddress": "96202 Helena Avenue",
    "aptNum": null,
    "city": "Miami",
    "state": "FL",
    "zipcode": "33196"
  },
  "dateOfBirth": "23/01/1953"
}, {
  "first_name": "Andeee",
  "last_name": "Gidney",
  "email": "agidneyn@tamu.edu",
  "gender": "Male",
  "phone": "754-105-2614",
  "address": {
    "streetAddress": "3 Gateway Point",
    "aptNum": null,
    "city": "Pompano Beach",
    "state": "FL",
    "zipcode": "33075"
  },
  "dateOfBirth": "26/12/1965"
}, {
  "first_name": "Benjie",
  "last_name": "Morrid",
  "email": "bmorrido@angelfire.com",
  "gender": "Male",
  "phone": "305-369-7563",
  "address": {
    "streetAddress": "51 Cherokee Crossing",
    "aptNum": null,
    "city": "Naples",
    "state": "FL",
    "zipcode": "33961"
  },
  "dateOfBirth": "25/06/1977"
}, {
  "first_name": "Tabbitha",
  "last_name": "Craiker",
  "email": "tcraikerp@tiny.cc",
  "gender": "Female",
  "phone": "352-417-4315",
  "address": {
    "streetAddress": "783 Blue Bill Park Drive",
    "aptNum": "0846",
    "city": "Ocala",
    "state": "FL",
    "zipcode": "34479"
  },
  "dateOfBirth": "14/12/1979"
}, {
  "first_name": "Abagail",
  "last_name": "Joffe",
  "email": "ajoffeq@hugedomains.com",
  "gender": "Male",
  "phone": "561-632-9401",
  "address": {
    "streetAddress": "78 Utah Court",
    "aptNum": null,
    "city": "West Palm Beach",
    "state": "FL",
    "zipcode": "33416"
  },
  "dateOfBirth": "11/04/1960"
}, {
  "first_name": "Kleon",
  "last_name": "Dongles",
  "email": "kdonglesr@dot.gov",
  "gender": "Female",
  "phone": "727-760-0844",
  "address": {
    "streetAddress": "6399 Schurz Court",
    "aptNum": null,
    "city": "Saint Petersburg",
    "state": "FL",
    "zipcode": "33742"
  },
  "dateOfBirth": "07/06/1969"
}, {
  "first_name": "Danella",
  "last_name": "Tschersich",
  "email": "dtschersichs@unesco.org",
  "gender": "Female",
  "phone": "352-990-1409",
  "address": {
    "streetAddress": "873 Summit Center",
    "aptNum": null,
    "city": "Gainesville",
    "state": "FL",
    "zipcode": "32610"
  },
  "dateOfBirth": "24/03/1953"
}, {
  "first_name": "Mario",
  "last_name": "Mordan",
  "email": "mmordant@netscape.com",
  "gender": "Female",
  "phone": "954-869-3511",
  "address": {
    "streetAddress": "0 Chinook Circle",
    "aptNum": "5885",
    "city": "Fort Lauderdale",
    "state": "FL",
    "zipcode": "33315"
  },
  "dateOfBirth": "09/05/1969"
}, {
  "first_name": "Griffith",
  "last_name": "Frean",
  "email": "gfreanu@biglobe.ne.jp",
  "gender": "Male",
  "phone": "561-199-4520",
  "address": {
    "streetAddress": "4 Green Ridge Avenue",
    "aptNum": null,
    "city": "Lake Worth",
    "state": "FL",
    "zipcode": "33467"
  },
  "dateOfBirth": "30/01/1952"
}, {
  "first_name": "Colline",
  "last_name": "Richardson",
  "email": "crichardsonv@desdev.cn",
  "gender": "Male",
  "phone": "850-657-9650",
  "address": {
    "streetAddress": "63 International Terrace",
    "aptNum": null,
    "city": "Pensacola",
    "state": "FL",
    "zipcode": "32511"
  },
  "dateOfBirth": "26/03/1976"
}, {
  "first_name": "Carissa",
  "last_name": "Haccleton",
  "email": "chaccletonw@amazon.co.uk",
  "gender": "Female",
  "phone": "786-757-6713",
  "address": {
    "streetAddress": "6 Lake View Hill",
    "aptNum": null,
    "city": "Miami",
    "state": "FL",
    "zipcode": "33164"
  },
  "dateOfBirth": "14/11/1960"
}, {
  "first_name": "Alley",
  "last_name": "Salaman",
  "email": "asalamanx@arizona.edu",
  "gender": "Female",
  "phone": "727-259-7695",
  "address": {
    "streetAddress": "86612 Kim Parkway",
    "aptNum": null,
    "city": "Clearwater",
    "state": "FL",
    "zipcode": "34620"
  },
  "dateOfBirth": "01/06/1989"
}, {
  "first_name": "Rabbi",
  "last_name": "Panons",
  "email": "rpanonsy@disqus.com",
  "gender": "Female",
  "phone": "772-248-8548",
  "address": {
    "streetAddress": "60733 Twin Pines Junction",
    "aptNum": "4609",
    "city": "Fort Pierce",
    "state": "FL",
    "zipcode": "34949"
  },
  "dateOfBirth": "04/10/1986"
}, {
  "first_name": "Joycelin",
  "last_name": "Cordy",
  "email": "jcordyz@360.cn",
  "gender": "Female",
  "phone": "407-410-4561",
  "address": {
    "streetAddress": "66 Fallview Place",
    "aptNum": "2514",
    "city": "Orlando",
    "state": "FL",
    "zipcode": "32813"
  },
  "dateOfBirth": "03/11/1968"
}, {
  "first_name": "Arluene",
  "last_name": "Want",
  "email": "awant10@discovery.com",
  "gender": "Female",
  "phone": "407-674-0123",
  "address": {
    "streetAddress": "8816 Meadow Ridge Park",
    "aptNum": null,
    "city": "Orlando",
    "state": "FL",
    "zipcode": "32885"
  },
  "dateOfBirth": "19/11/2001"
}, {
  "first_name": "Missie",
  "last_name": "Jachimczak",
  "email": "mjachimczak11@vk.com",
  "gender": "Female",
  "phone": "352-734-7886",
  "address": {
    "streetAddress": "8124 Merchant Way",
    "aptNum": null,
    "city": "Gainesville",
    "state": "FL",
    "zipcode": "32610"
  },
  "dateOfBirth": "10/07/1974"
}, {
  "first_name": "Meier",
  "last_name": "Jeram",
  "email": "mjeram12@weather.com",
  "gender": "Female",
  "phone": "772-899-6849",
  "address": {
    "streetAddress": "90579 Beilfuss Lane",
    "aptNum": null,
    "city": "Port Saint Lucie",
    "state": "FL",
    "zipcode": "34985"
  },
  "dateOfBirth": "09/04/1982"
}, {
  "first_name": "Jerrylee",
  "last_name": "Sweeney",
  "email": "jsweeney13@google.ca",
  "gender": "Male",
  "phone": "321-298-8906",
  "address": {
    "streetAddress": "51455 Morning Park",
    "aptNum": null,
    "city": "Melbourne",
    "state": "FL",
    "zipcode": "32919"
  },
  "dateOfBirth": "12/11/2002"
}, {
  "first_name": "Michale",
  "last_name": "Lyle",
  "email": "mlyle14@barnesandnoble.com",
  "gender": "Female",
  "phone": "786-505-7912",
  "address": {
    "streetAddress": "037 Mendota Street",
    "aptNum": null,
    "city": "Miami",
    "state": "FL",
    "zipcode": "33124"
  },
  "dateOfBirth": "28/08/1954"
}, {
  "first_name": "Idelle",
  "last_name": "Yakunkin",
  "email": "iyakunkin15@wunderground.com",
  "gender": "Female",
  "phone": "407-312-6888",
  "address": {
    "streetAddress": "93291 Mandrake Junction",
    "aptNum": null,
    "city": "Orlando",
    "state": "FL",
    "zipcode": "32830"
  },
  "dateOfBirth": "19/11/1952"
}, {
  "first_name": "Waiter",
  "last_name": "Tomankiewicz",
  "email": "wtomankiewicz16@aboutads.info",
  "gender": "Male",
  "phone": "813-275-0411",
  "address": {
    "streetAddress": "556 Onsgard Court",
    "aptNum": "00",
    "city": "Tampa",
    "state": "FL",
    "zipcode": "33633"
  },
  "dateOfBirth": "26/11/1971"
}, {
  "first_name": "Reamonn",
  "last_name": "Mohammed",
  "email": "rmohammed17@usda.gov",
  "gender": "Male",
  "phone": "305-472-8456",
  "address": {
    "streetAddress": "63087 Old Shore Junction",
    "aptNum": "33",
    "city": "Miami",
    "state": "FL",
    "zipcode": "33283"
  },
  "dateOfBirth": "17/09/1968"
}, {
  "first_name": "Marcelia",
  "last_name": "Thompson",
  "email": "mthompson18@storify.com",
  "gender": "Male",
  "phone": "305-871-4695",
  "address": {
    "streetAddress": "270 Susan Lane",
    "aptNum": "18",
    "city": "Miami",
    "state": "FL",
    "zipcode": "33175"
  },
  "dateOfBirth": "08/08/1967"
}, {
  "first_name": "Kirby",
  "last_name": "Skippings",
  "email": "kskippings19@usnews.com",
  "gender": "Male",
  "phone": "904-303-4387",
  "address": {
    "streetAddress": "445 Merry Place",
    "aptNum": null,
    "city": "Jacksonville",
    "state": "FL",
    "zipcode": "32255"
  },
  "dateOfBirth": "30/10/1983"
}, {
  "first_name": "Eleonora",
  "last_name": "Shoebotham",
  "email": "eshoebotham1a@timesonline.co.uk",
  "gender": "Female",
  "phone": "772-232-3003",
  "address": {
    "streetAddress": "8655 Loeprich Place",
    "aptNum": null,
    "city": "Vero Beach",
    "state": "FL",
    "zipcode": "32969"
  },
  "dateOfBirth": "08/08/1988"
}, {
  "first_name": "Binni",
  "last_name": "Dresche",
  "email": "bdresche1b@yellowpages.com",
  "gender": "Female",
  "phone": "561-818-5658",
  "address": {
    "streetAddress": "30570 Graceland Terrace",
    "aptNum": null,
    "city": "Lake Worth",
    "state": "FL",
    "zipcode": "33462"
  },
  "dateOfBirth": "11/10/1970"
}, {
  "first_name": "Lucio",
  "last_name": "Breakspear",
  "email": "lbreakspear1c@tripod.com",
  "gender": "Female",
  "phone": "561-946-8303",
  "address": {
    "streetAddress": "855 Armistice Drive",
    "aptNum": null,
    "city": "Lake Worth",
    "state": "FL",
    "zipcode": "33467"
  },
  "dateOfBirth": "19/10/1997"
}, {
  "first_name": "Harry",
  "last_name": "McWhirter",
  "email": "hmcwhirter1d@mac.com",
  "gender": "Male",
  "phone": "813-725-0584",
  "address": {
    "streetAddress": "789 Hoffman Drive",
    "aptNum": null,
    "city": "Tampa",
    "state": "FL",
    "zipcode": "33661"
  },
  "dateOfBirth": "31/10/1953"
}]



export const generateCustomers = () =>{
    let customers = [];

    CUSTOMERS.forEach(element => {
        customers.push({...element, gender: (GENDERS.find(g => g.name === element.gender))._id, _id: uid()})
    });

    return customers;
}
