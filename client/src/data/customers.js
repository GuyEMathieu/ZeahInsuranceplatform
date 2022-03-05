import { v4 as uid } from 'uuid';
import {GENDERS, STATES} from './defaults'

export const CUSTOMERS = [{
  "_id": 1,
  "first_name": "Jeff",
  "last_name": "Bezos",
  "email": "echatto0@cam.ac.uk",
  "gender": "Male",
  "phone": "941-229-1901",
  "dateOfBirth": "10/04/1975",
  "address": {
    "streetAddress": "55 Park Meadow Junction",
    "aptNum": null,
    "city": "Sarasota",
    "state": "FL",
    "zipcode": "34233"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "J687-068-624-57-3"
  }
}, {
  "_id": 2,
  "first_name": "Nollie",
  "last_name": "Marklew",
  "email": "nmarklew1@walmart.com",
  "gender": "Male",
  "phone": "321-349-7298",
  "dateOfBirth": "04/26/1957",
  "address": {
    "streetAddress": "76 Rigney Circle",
    "aptNum": null,
    "city": "Melbourne",
    "state": "FL",
    "zipcode": "32941"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "R470-145-674-99-3"
  }
}, {
  "_id": 3,
  "first_name": "Charmaine",
  "last_name": "Goodbar",
  "email": "cgoodbar2@arstechnica.com",
  "gender": "Female",
  "phone": "954-661-1101",
  "dateOfBirth": "07/24/1999",
  "address": {
    "streetAddress": "37327 Stuart Street",
    "aptNum": null,
    "city": "Miami",
    "state": "FL",
    "zipcode": "33180"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "Y223-265-889-23-5"
  }
}, {
  "_id": 4,
  "first_name": "Florella",
  "last_name": "Alred",
  "email": "falred3@microsoft.com",
  "gender": "Female",
  "phone": "754-104-3535",
  "dateOfBirth": "05/12/1988",
  "address": {
    "streetAddress": "248 Elgar Circle",
    "aptNum": null,
    "city": "Fort Lauderdale",
    "state": "FL",
    "zipcode": "33355"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "V399-666-594-41-6"
  }
}, {
  "_id": 5,
  "first_name": "Dermot",
  "last_name": "Grealy",
  "email": "dgrealy4@webs.com",
  "gender": "Male",
  "phone": "954-872-7980",
  "dateOfBirth": "05/14/1997",
  "address": {
    "streetAddress": "1 Spaight Road",
    "aptNum": "960",
    "city": "Pompano Beach",
    "state": "FL",
    "zipcode": "33069"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "M717-872-290-94-1"
  }
}, {
  "_id": 6,
  "first_name": "Marybelle",
  "last_name": "Kilsby",
  "email": "mkilsby5@cbslocal.com",
  "gender": "Male",
  "phone": "772-372-2842",
  "dateOfBirth": "11/02/1963",
  "address": {
    "streetAddress": "5906 Carey Road",
    "aptNum": null,
    "city": "Fort Pierce",
    "state": "FL",
    "zipcode": "34981"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "X787-742-978-86-9"
  }
}, {
  "_id": 7,
  "first_name": "Alain",
  "last_name": "Averay",
  "email": "aaveray6@wikimedia.org",
  "gender": "Male",
  "phone": "407-753-1131",
  "dateOfBirth": "07/04/1971",
  "address": {
    "streetAddress": "60 Hoard Road",
    "aptNum": "531",
    "city": "Orlando",
    "state": "FL",
    "zipcode": "32891"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "W879-883-781-86-8"
  }
}, {
  "_id": 8,
  "first_name": "Pippy",
  "last_name": "Ead",
  "email": "pead7@opera.com",
  "gender": "Female",
  "phone": "850-729-6834",
  "dateOfBirth": "10/04/1994",
  "address": {
    "streetAddress": "052 Nelson Street",
    "aptNum": null,
    "city": "Pensacola",
    "state": "FL",
    "zipcode": "32590"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "R430-826-853-02-0"
  }
}, {
  "_id": 9,
  "first_name": "Mora",
  "last_name": "Postins",
  "email": "mpostins8@shinystat.com",
  "gender": "Male",
  "phone": "850-219-3101",
  "dateOfBirth": "06/18/2002",
  "address": {
    "streetAddress": "859 Raven Alley",
    "aptNum": null,
    "city": "Pinellas Park",
    "state": "FL",
    "zipcode": "34665"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "E004-897-355-13-6"
  }
}, {
  "_id": 10,
  "first_name": "Aurora",
  "last_name": "Surfleet",
  "email": "asurfleet9@opensource.org",
  "gender": "Male",
  "phone": "727-656-1241",
  "dateOfBirth": "03/21/2001",
  "address": {
    "streetAddress": "8 Del Sol Trail",
    "aptNum": null,
    "city": "Saint Petersburg",
    "state": "FL",
    "zipcode": "33742"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "H624-703-282-34-1"
  }
}, {
  "_id": 11,
  "first_name": "Justen",
  "last_name": "Kirstein",
  "email": "jkirsteina@networksolutions.com",
  "gender": "Male",
  "phone": "305-916-1724",
  "dateOfBirth": "08/06/1986",
  "address": {
    "streetAddress": "6522 Cardinal Hill",
    "aptNum": "95",
    "city": "Miami",
    "state": "FL",
    "zipcode": "33283"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "K167-322-268-51-5"
  }
}, {
  "_id": 12,
  "first_name": "Josie",
  "last_name": "Hendrick",
  "email": "jhendrickb@patch.com",
  "gender": "Female",
  "phone": "786-484-3381",
  "dateOfBirth": "05/02/1951",
  "address": {
    "streetAddress": "1 Ohio Place",
    "aptNum": null,
    "city": "Homestead",
    "state": "FL",
    "zipcode": "33034"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "T578-617-956-03-5"
  }
}, {
  "_id": 13,
  "first_name": "Jedd",
  "last_name": "Axell",
  "email": "jaxellc@yale.edu",
  "gender": "Female",
  "phone": "727-893-2150",
  "dateOfBirth": "09/14/1956",
  "address": {
    "streetAddress": "07128 Talisman Terrace",
    "aptNum": null,
    "city": "Saint Petersburg",
    "state": "FL",
    "zipcode": "33742"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "P678-569-837-13-9"
  }
}, {
  "_id": 14,
  "first_name": "Stillmann",
  "last_name": "Croney",
  "email": "scroneyd@prlog.org",
  "gender": "Male",
  "phone": "561-821-1143",
  "dateOfBirth": "07/01/1974",
  "address": {
    "streetAddress": "93426 Lighthouse Bay Drive",
    "aptNum": "3397",
    "city": "Lake Worth",
    "state": "FL",
    "zipcode": "33467"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "I954-445-567-92-0"
  }
}, {
  "_id": 15,
  "first_name": "Shara",
  "last_name": "Postance",
  "email": "spostancee@goo.gl",
  "gender": "Male",
  "phone": "305-128-7657",
  "dateOfBirth": "01/27/1951",
  "address": {
    "streetAddress": "0 Helena Point",
    "aptNum": null,
    "city": "Naples",
    "state": "FL",
    "zipcode": "33961"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "B970-018-893-76-5"
  }
}, {
  "_id": 16,
  "first_name": "Idalia",
  "last_name": "Idel",
  "email": "iidelf@tmall.com",
  "gender": "Female",
  "phone": "850-729-2280",
  "dateOfBirth": "07/26/1994",
  "address": {
    "streetAddress": "860 Orin Pass",
    "aptNum": null,
    "city": "Tallahassee",
    "state": "FL",
    "zipcode": "32309"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "M078-459-303-30-6"
  }
}, {
  "_id": 17,
  "first_name": "Milissent",
  "last_name": "Swadon",
  "email": "mswadong@mozilla.org",
  "gender": "Male",
  "phone": "786-995-1729",
  "dateOfBirth": "12/13/1954",
  "address": {
    "streetAddress": "2 Erie Plaza",
    "aptNum": "1",
    "city": "Hialeah",
    "state": "FL",
    "zipcode": "33013"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "T820-579-055-89-4"
  }
}, {
  "_id": 18,
  "first_name": "Donny",
  "last_name": "di Rocca",
  "email": "ddiroccah@xrea.com",
  "gender": "Male",
  "phone": "239-424-1405",
  "dateOfBirth": "06/13/1986",
  "address": {
    "streetAddress": "13 Golf Course Parkway",
    "aptNum": null,
    "city": "Fort Myers",
    "state": "FL",
    "zipcode": "33906"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "M568-343-244-19-0"
  }
}, {
  "_id": 19,
  "first_name": "Dean",
  "last_name": "Scandrick",
  "email": "dscandricki@omniture.com",
  "gender": "Female",
  "phone": "407-526-9743",
  "dateOfBirth": "03/03/1957",
  "address": {
    "streetAddress": "780 Troy Hill",
    "aptNum": null,
    "city": "Daytona Beach",
    "state": "FL",
    "zipcode": "32118"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "U375-294-220-30-8"
  }
}, {
  "_id": 20,
  "first_name": "Carla",
  "last_name": "Bearblock",
  "email": "cbearblockj@cdc.gov",
  "gender": "Male",
  "phone": "727-840-3120",
  "dateOfBirth": "10/30/1968",
  "address": {
    "streetAddress": "8 Grayhawk Parkway",
    "aptNum": null,
    "city": "Saint Petersburg",
    "state": "FL",
    "zipcode": "33731"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "O030-605-119-19-2"
  }
}, {
  "_id": 21,
  "first_name": "Oliviero",
  "last_name": "Dollen",
  "email": "odollenk@independent.co.uk",
  "gender": "Female",
  "phone": "813-137-7923",
  "dateOfBirth": "12/19/1963",
  "address": {
    "streetAddress": "8 Shoshone Crossing",
    "aptNum": "19925",
    "city": "Tampa",
    "state": "FL",
    "zipcode": "33633"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "V959-781-626-38-0"
  }
}, {
  "_id": 22,
  "first_name": "Nollie",
  "last_name": "MacGibbon",
  "email": "nmacgibbonl@microsoft.com",
  "gender": "Female",
  "phone": "727-150-3370",
  "dateOfBirth": "05/17/1989",
  "address": {
    "streetAddress": "659 Jay Alley",
    "aptNum": null,
    "city": "Saint Petersburg",
    "state": "FL",
    "zipcode": "33705"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "H698-071-047-18-8"
  }
}, {
  "_id": 23,
  "first_name": "Stanislas",
  "last_name": "Bachellier",
  "email": "sbachellierm@jiathis.com",
  "gender": "Female",
  "phone": "850-983-3648",
  "dateOfBirth": "04/13/1967",
  "address": {
    "streetAddress": "163 Jay Avenue",
    "aptNum": "2156",
    "city": "Pensacola",
    "state": "FL",
    "zipcode": "32595"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "A125-352-347-54-1"
  }
}, {
  "_id": 24,
  "first_name": "Harwilll",
  "last_name": "Witcher",
  "email": "hwitchern@bloglovin.com",
  "gender": "Female",
  "phone": "352-184-3322",
  "dateOfBirth": "03/13/2001",
  "address": {
    "streetAddress": "510 Luster Trail",
    "aptNum": null,
    "city": "Gainesville",
    "state": "FL",
    "zipcode": "32627"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "I235-404-919-39-7"
  }
}, {
  "_id": 25,
  "first_name": "Salaidh",
  "last_name": "Oswick",
  "email": "soswicko@twitpic.com",
  "gender": "Female",
  "phone": "727-610-8559",
  "dateOfBirth": "04/19/1974",
  "address": {
    "streetAddress": "5 3rd Way",
    "aptNum": null,
    "city": "Clearwater",
    "state": "FL",
    "zipcode": "34615"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "L829-328-447-31-4"
  }
}, {
  "_id": 26,
  "first_name": "Dall",
  "last_name": "Malcolm",
  "email": "dmalcolmp@webnode.com",
  "gender": "Male",
  "phone": "813-636-2818",
  "dateOfBirth": "09/01/1978",
  "address": {
    "streetAddress": "139 Meadow Valley Place",
    "aptNum": null,
    "city": "Tampa",
    "state": "FL",
    "zipcode": "33620"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "L863-098-815-98-6"
  }
}, {
  "_id": 27,
  "first_name": "Bobbi",
  "last_name": "Piggins",
  "email": "bpigginsq@discuz.net",
  "gender": "Female",
  "phone": "850-252-1526",
  "dateOfBirth": "01/13/1982",
  "address": {
    "streetAddress": "8 Nelson Plaza",
    "aptNum": null,
    "city": "Pensacola",
    "state": "FL",
    "zipcode": "32505"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "G181-411-521-74-9"
  }
}, {
  "_id": 28,
  "first_name": "Ethelyn",
  "last_name": "Dorset",
  "email": "edorsetr@barnesandnoble.com",
  "gender": "Male",
  "phone": "850-658-5813",
  "dateOfBirth": "02/18/1989",
  "address": {
    "streetAddress": "2645 Merrick Lane",
    "aptNum": null,
    "city": "Tallahassee",
    "state": "FL",
    "zipcode": "32304"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "L753-643-430-41-7"
  }
}, {
  "_id": 29,
  "first_name": "Anna",
  "last_name": "Baumer",
  "email": "abaumers@com.com",
  "gender": "Female",
  "phone": "727-136-4959",
  "dateOfBirth": "09/14/1951",
  "address": {
    "streetAddress": "249 Bunting Avenue",
    "aptNum": null,
    "city": "Largo",
    "state": "FL",
    "zipcode": "34643"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "O332-740-869-61-6"
  }
}, {
  "_id": 30,
  "first_name": "Euell",
  "last_name": "Novak",
  "email": "enovakt@ameblo.jp",
  "gender": "Male",
  "phone": "941-194-2790",
  "dateOfBirth": "10/26/1958",
  "address": {
    "streetAddress": "62487 Blue Bill Park Circle",
    "aptNum": "193",
    "city": "Seminole",
    "state": "FL",
    "zipcode": "34642"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "W360-179-381-31-4"
  }
}, {
  "_id": 31,
  "first_name": "Sheila",
  "last_name": "Chatenier",
  "email": "schatenieru@tamu.edu",
  "gender": "Female",
  "phone": "941-631-0476",
  "dateOfBirth": "06/28/1992",
  "address": {
    "streetAddress": "70 Basil Circle",
    "aptNum": null,
    "city": "Bonita Springs",
    "state": "FL",
    "zipcode": "34135"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "D344-613-018-84-5"
  }
}, {
  "_id": 32,
  "first_name": "Channa",
  "last_name": "Alldridge",
  "email": "calldridgev@fotki.com",
  "gender": "Female",
  "phone": "813-577-3701",
  "dateOfBirth": "11/06/1957",
  "address": {
    "streetAddress": "39 Ramsey Lane",
    "aptNum": null,
    "city": "Tampa",
    "state": "FL",
    "zipcode": "33680"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "U194-711-505-92-7"
  }
}, {
  "_id": 33,
  "first_name": "Wilhelm",
  "last_name": "Noraway",
  "email": "wnorawayw@smh.com.au",
  "gender": "Male",
  "phone": "754-846-4583",
  "dateOfBirth": "10/05/1962",
  "address": {
    "streetAddress": "122 Spohn Lane",
    "aptNum": null,
    "city": "Fort Lauderdale",
    "state": "FL",
    "zipcode": "33310"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "U465-826-113-67-3"
  }
}, {
  "_id": 34,
  "first_name": "Lothario",
  "last_name": "Sparshott",
  "email": "lsparshottx@cargocollective.com",
  "gender": "Female",
  "phone": "850-124-1243",
  "dateOfBirth": "04/12/2001",
  "address": {
    "streetAddress": "4517 Twin Pines Drive",
    "aptNum": null,
    "city": "Pensacola",
    "state": "FL",
    "zipcode": "32511"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "W502-435-851-90-3"
  }
}, {
  "_id": 35,
  "first_name": "Haley",
  "last_name": "Brandes",
  "email": "hbrandesy@feedburner.com",
  "gender": "Female",
  "phone": "754-729-0709",
  "dateOfBirth": "05/07/2001",
  "address": {
    "streetAddress": "8 Spaight Avenue",
    "aptNum": null,
    "city": "Fort Lauderdale",
    "state": "FL",
    "zipcode": "33345"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "J229-731-131-83-3"
  }
}, {
  "_id": 36,
  "first_name": "Theobald",
  "last_name": "Addy",
  "email": "taddyz@uol.com.br",
  "gender": "Female",
  "phone": "305-563-7018",
  "dateOfBirth": "07/12/1989",
  "address": {
    "streetAddress": "973 Mitchell Place",
    "aptNum": null,
    "city": "Homestead",
    "state": "FL",
    "zipcode": "33034"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "A145-158-166-02-8"
  }
}, {
  "_id": 37,
  "first_name": "Peggi",
  "last_name": "Galer",
  "email": "pgaler10@diigo.com",
  "gender": "Male",
  "phone": "850-777-7946",
  "dateOfBirth": "11/21/1998",
  "address": {
    "streetAddress": "52 Hooker Drive",
    "aptNum": "0801",
    "city": "Pensacola",
    "state": "FL",
    "zipcode": "32595"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "C570-005-687-61-9"
  }
}, {
  "_id": 38,
  "first_name": "Cynthie",
  "last_name": "Redihalgh",
  "email": "credihalgh11@seattletimes.com",
  "gender": "Female",
  "phone": "352-685-0857",
  "dateOfBirth": "04/15/1960",
  "address": {
    "streetAddress": "77978 Stuart Terrace",
    "aptNum": "035",
    "city": "Ocala",
    "state": "FL",
    "zipcode": "34474"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "O511-218-520-12-4"
  }
}, {
  "_id": 39,
  "first_name": "Shea",
  "last_name": "Bellham",
  "email": "sbellham12@google.com.br",
  "gender": "Female",
  "phone": "305-807-2448",
  "dateOfBirth": "05/15/1965",
  "address": {
    "streetAddress": "9957 Stang Avenue",
    "aptNum": null,
    "city": "Hollywood",
    "state": "FL",
    "zipcode": "33023"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "E025-315-865-29-0"
  }
}, {
  "_id": 40,
  "first_name": "Cordell",
  "last_name": "Champley",
  "email": "cchampley13@ask.com",
  "gender": "Female",
  "phone": "321-110-7357",
  "dateOfBirth": "03/22/1962",
  "address": {
    "streetAddress": "2159 Old Gate Terrace",
    "aptNum": null,
    "city": "Palm Bay",
    "state": "FL",
    "zipcode": "32909"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "X579-942-023-58-4"
  }
}, {
  "_id": 41,
  "first_name": "Evelyn",
  "last_name": "Steptoe",
  "email": "esteptoe14@msu.edu",
  "gender": "Male",
  "phone": "813-116-7997",
  "dateOfBirth": "11/19/1965",
  "address": {
    "streetAddress": "0 Kim Avenue",
    "aptNum": null,
    "city": "Tampa",
    "state": "FL",
    "zipcode": "33620"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "R438-362-444-34-0"
  }
}, {
  "_id": 42,
  "first_name": "Zachary",
  "last_name": "Bygraves",
  "email": "zbygraves15@sitemeter.com",
  "gender": "Male",
  "phone": "386-780-1908",
  "dateOfBirth": "02/12/1979",
  "address": {
    "streetAddress": "6801 Russell Street",
    "aptNum": null,
    "city": "Daytona Beach",
    "state": "FL",
    "zipcode": "32123"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "U024-263-277-30-4"
  }
}, {
  "_id": 43,
  "first_name": "Killy",
  "last_name": "Aburrow",
  "email": "kaburrow16@freewebs.com",
  "gender": "Male",
  "phone": "321-424-4149",
  "dateOfBirth": "06/15/2002",
  "address": {
    "streetAddress": "545 Jackson Park",
    "aptNum": "8892",
    "city": "Melbourne",
    "state": "FL",
    "zipcode": "32941"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "H635-413-978-47-8"
  }
}, {
  "_id": 44,
  "first_name": "Rickard",
  "last_name": "Guiso",
  "email": "rguiso17@columbia.edu",
  "gender": "Female",
  "phone": "727-847-4801",
  "dateOfBirth": "09/08/1967",
  "address": {
    "streetAddress": "99665 Lien Parkway",
    "aptNum": null,
    "city": "Clearwater",
    "state": "FL",
    "zipcode": "34629"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "W943-295-446-25-0"
  }
}, {
  "_id": 45,
  "first_name": "Lynn",
  "last_name": "Jouannisson",
  "email": "ljouannisson18@weibo.com",
  "gender": "Female",
  "phone": "407-173-8926",
  "dateOfBirth": "12/10/1976",
  "address": {
    "streetAddress": "424 Bayside Junction",
    "aptNum": null,
    "city": "Orlando",
    "state": "FL",
    "zipcode": "32859"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "I956-671-370-99-2"
  }
}, {
  "_id": 46,
  "first_name": "Fee",
  "last_name": "Maddra",
  "email": "fmaddra19@blinklist.com",
  "gender": "Male",
  "phone": "904-777-8096",
  "dateOfBirth": "08/31/1958",
  "address": {
    "streetAddress": "36 David Terrace",
    "aptNum": null,
    "city": "Jacksonville",
    "state": "FL",
    "zipcode": "32225"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "S639-820-027-94-2"
  }
}, {
  "_id": 47,
  "first_name": "Ozzy",
  "last_name": "Barrett",
  "email": "obarrett1a@cyberchimps.com",
  "gender": "Female",
  "phone": "754-410-1785",
  "dateOfBirth": "06/01/1997",
  "address": {
    "streetAddress": "8952 Londonderry Park",
    "aptNum": null,
    "city": "Pompano Beach",
    "state": "FL",
    "zipcode": "33069"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "Z308-347-021-72-1"
  }
}, {
  "_id": 48,
  "first_name": "Corey",
  "last_name": "Iredell",
  "email": "ciredell1b@tripod.com",
  "gender": "Female",
  "phone": "352-748-5300",
  "dateOfBirth": "06/18/1965",
  "address": {
    "streetAddress": "860 Talisman Place",
    "aptNum": null,
    "city": "Spring Hill",
    "state": "FL",
    "zipcode": "34611"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "R546-287-971-12-1"
  }
}, {
  "_id": 49,
  "first_name": "Amanda",
  "last_name": "Dingley",
  "email": "adingley1c@craigslist.org",
  "gender": "Female",
  "phone": "305-627-3891",
  "dateOfBirth": "02/05/1992",
  "address": {
    "streetAddress": "2 School Parkway",
    "aptNum": null,
    "city": "Miami Beach",
    "state": "FL",
    "zipcode": "33141"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "B946-853-482-04-8"
  }
}, {
  "_id": 50,
  "first_name": "Hadrian",
  "last_name": "Payne",
  "email": "hpayne1d@skyrock.com",
  "gender": "Male",
  "phone": "850-897-4491",
  "dateOfBirth": "12/15/1968",
  "address": {
    "streetAddress": "99105 Kim Crossing",
    "aptNum": null,
    "city": "Pensacola",
    "state": "FL",
    "zipcode": "32526"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "V013-322-282-55-8"
  }
}, {
  "_id": 51,
  "first_name": "Valery",
  "last_name": "Ridge",
  "email": "vridge1e@webnode.com",
  "gender": "Female",
  "phone": "850-536-2598",
  "dateOfBirth": "12/02/1961",
  "address": {
    "streetAddress": "22668 Redwing Avenue",
    "aptNum": "5",
    "city": "Pensacola",
    "state": "FL",
    "zipcode": "32505"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "B040-073-853-90-7"
  }
}]






export const generateCustomers = () =>{
    let customers = [];

    function genderName (gender) {
        return GENDERS.find(g => g.name === gender).name
    }

    function getState(state) {
        return STATES.find(s => s.code === state)._id
    }

    CUSTOMERS.forEach(element => {
        customers.push({
            ...element, 
            _id: uid(),
            driverLicense: {
              ...element.driverLicense,
              dlState: getState(element.driverLicense.dlState)
            },
            gender: genderName(element.gender)
        })
    });

    return customers;
}
