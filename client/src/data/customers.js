import { v4 as uid } from 'uuid';
import {GENDERS, STATES} from './defaults'

export const CUSTOMERS = [{
  "_id": 1,
  "first_name": "Jeff",
  "last_name": "Bezos",
  "email": "cbramich0@nps.gov",
  "gender": "Male",
  "phone": "786-619-4686",
  "dateOfBirth": "02/12/1974",
  "address": {
    "streetAddress": "445 Northridge Junction",
    "aptNum": null,
    "city": "Miami",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "Z104-031-381-35-8"
  }
}, {
  "_id": 2,
  "first_name": "Derick",
  "last_name": "Proffer",
  "email": "dproffer1@360.cn",
  "gender": "Male",
  "phone": "407-970-6454",
  "dateOfBirth": "12/09/1954",
  "address": {
    "streetAddress": "8 Fairfield Street",
    "aptNum": "01",
    "city": "Kissimmee",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "U287-072-463-07-4"
  }
}, {
  "_id": 3,
  "first_name": "Jemie",
  "last_name": "Hobden",
  "email": "jhobden2@wikia.com",
  "gender": "Male",
  "phone": "850-703-0317",
  "dateOfBirth": "08/17/1961",
  "address": {
    "streetAddress": "7296 Mariners Cove Junction",
    "aptNum": null,
    "city": "Tallahassee",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "A794-268-442-23-9"
  }
}, {
  "_id": 4,
  "first_name": "Jackie",
  "last_name": "Revan",
  "email": "jrevan3@miitbeian.gov.cn",
  "gender": "Male",
  "phone": "305-987-4877",
  "dateOfBirth": "02/08/1979",
  "address": {
    "streetAddress": "0358 Schlimgen Parkway",
    "aptNum": null,
    "city": "Miami",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "O402-317-681-01-2"
  }
}, {
  "_id": 5,
  "first_name": "Faye",
  "last_name": "Lansdown",
  "email": "flansdown4@w3.org",
  "gender": "Female",
  "phone": "954-778-6863",
  "dateOfBirth": "04/11/1999",
  "address": {
    "streetAddress": "12922 Aberg Lane",
    "aptNum": null,
    "city": "West Palm Beach",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "M960-353-212-00-1"
  }
}, {
  "_id": 6,
  "first_name": "Shanan",
  "last_name": "Grzesiewicz",
  "email": "sgrzesiewicz5@biblegateway.com",
  "gender": "Female",
  "phone": "813-594-4961",
  "dateOfBirth": "10/16/1982",
  "address": {
    "streetAddress": "9 Little Fleur Plaza",
    "aptNum": null,
    "city": "Tampa",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "P898-354-132-96-7"
  }
}, {
  "_id": 7,
  "first_name": "Torrin",
  "last_name": "Leyman",
  "email": "tleyman6@icq.com",
  "gender": "Male",
  "phone": "941-426-3354",
  "dateOfBirth": "12/07/1951",
  "address": {
    "streetAddress": "9 Bowman Plaza",
    "aptNum": null,
    "city": "Sarasota",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "I495-173-804-65-5"
  }
}, {
  "_id": 8,
  "first_name": "Jinny",
  "last_name": "Stapele",
  "email": "jstapele7@tripod.com",
  "gender": "Male",
  "phone": "850-771-4829",
  "dateOfBirth": "07/10/1969",
  "address": {
    "streetAddress": "49 Havey Court",
    "aptNum": null,
    "city": "Pensacola",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "X622-980-638-45-6"
  }
}, {
  "_id": 9,
  "first_name": "Noble",
  "last_name": "O'Fearguise",
  "email": "nofearguise8@mozilla.org",
  "gender": "Male",
  "phone": "904-846-2271",
  "dateOfBirth": "02/15/1977",
  "address": {
    "streetAddress": "98878 Kedzie Way",
    "aptNum": "00",
    "city": "Jacksonville",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "B712-400-115-07-7"
  }
}, {
  "_id": 10,
  "first_name": "Jaquelyn",
  "last_name": "Richmond",
  "email": "jrichmond9@hexun.com",
  "gender": "Male",
  "phone": "305-396-2584",
  "dateOfBirth": "09/27/1971",
  "address": {
    "streetAddress": "128 Fair Oaks Avenue",
    "aptNum": null,
    "city": "Miami",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "Z070-137-531-18-7"
  }
}, {
  "_id": 11,
  "first_name": "Bobby",
  "last_name": "Knight",
  "email": "bknighta@adobe.com",
  "gender": "Male",
  "phone": "772-800-9950",
  "dateOfBirth": "08/30/1952",
  "address": {
    "streetAddress": "0 Merchant Plaza",
    "aptNum": null,
    "city": "Vero Beach",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "I615-893-841-44-8"
  }
}, {
  "_id": 12,
  "first_name": "Joann",
  "last_name": "Boram",
  "email": "jboramb@drupal.org",
  "gender": "Male",
  "phone": "772-376-5508",
  "dateOfBirth": "11/19/1984",
  "address": {
    "streetAddress": "077 Northview Crossing",
    "aptNum": "037",
    "city": "Vero Beach",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "E730-978-224-36-5"
  }
}, {
  "_id": 13,
  "first_name": "Kingston",
  "last_name": "Durtnell",
  "email": "kdurtnellc@rambler.ru",
  "gender": "Male",
  "phone": "352-165-4232",
  "dateOfBirth": "05/29/1997",
  "address": {
    "streetAddress": "3362 Onsgard Crossing",
    "aptNum": null,
    "city": "Gainesville",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "H126-865-180-89-2"
  }
}, {
  "_id": 14,
  "first_name": "Winston",
  "last_name": "Prowse",
  "email": "wprowsed@samsung.com",
  "gender": "Male",
  "phone": "772-553-2486",
  "dateOfBirth": "08/05/1986",
  "address": {
    "streetAddress": "865 Eagle Crest Lane",
    "aptNum": "4",
    "city": "Vero Beach",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "C913-794-462-20-0"
  }
}, {
  "_id": 15,
  "first_name": "Randi",
  "last_name": "Mussalli",
  "email": "rmussallie@upenn.edu",
  "gender": "Male",
  "phone": "305-596-7054",
  "dateOfBirth": "12/11/1995",
  "address": {
    "streetAddress": "03 West Road",
    "aptNum": null,
    "city": "Miami Beach",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "X255-308-724-56-8"
  }
}, {
  "_id": 16,
  "first_name": "Correy",
  "last_name": "Nelm",
  "email": "cnelmf@patch.com",
  "gender": "Female",
  "phone": "305-414-1434",
  "dateOfBirth": "04/21/1956",
  "address": {
    "streetAddress": "07128 Florence Drive",
    "aptNum": null,
    "city": "Miami",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "M406-483-200-04-1"
  }
}, {
  "_id": 17,
  "first_name": "Felice",
  "last_name": "Hanratty",
  "email": "fhanrattyg@narod.ru",
  "gender": "Female",
  "phone": "941-806-0851",
  "dateOfBirth": "01/22/1959",
  "address": {
    "streetAddress": "8553 Fair Oaks Alley",
    "aptNum": null,
    "city": "Seminole",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "P750-637-033-70-8"
  }
}, {
  "_id": 18,
  "first_name": "Kean",
  "last_name": "Korbmaker",
  "email": "kkorbmakerh@sciencedirect.com",
  "gender": "Female",
  "phone": "727-736-9402",
  "dateOfBirth": "11/11/1973",
  "address": {
    "streetAddress": "876 Clemons Place",
    "aptNum": null,
    "city": "Saint Petersburg",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "G875-296-657-32-6"
  }
}, {
  "_id": 19,
  "first_name": "Bram",
  "last_name": "Balmer",
  "email": "bbalmeri@e-recht24.de",
  "gender": "Male",
  "phone": "305-135-6003",
  "dateOfBirth": "11/16/1973",
  "address": {
    "streetAddress": "6 Eagan Center",
    "aptNum": null,
    "city": "Hialeah",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "S296-154-798-71-9"
  }
}, {
  "_id": 20,
  "first_name": "Irving",
  "last_name": "Edelston",
  "email": "iedelstonj@quantcast.com",
  "gender": "Male",
  "phone": "754-285-5098",
  "dateOfBirth": "03/05/1962",
  "address": {
    "streetAddress": "45 6th Road",
    "aptNum": null,
    "city": "Fort Lauderdale",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "H318-095-705-83-8"
  }
}, {
  "_id": 21,
  "first_name": "Minor",
  "last_name": "Ortzen",
  "email": "mortzenk@ocn.ne.jp",
  "gender": "Male",
  "phone": "941-925-7335",
  "dateOfBirth": "02/14/1967",
  "address": {
    "streetAddress": "730 Superior Avenue",
    "aptNum": null,
    "city": "Sarasota",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "W591-521-223-76-0"
  }
}, {
  "_id": 22,
  "first_name": "Doll",
  "last_name": "Boays",
  "email": "dboaysl@squarespace.com",
  "gender": "Female",
  "phone": "321-482-4274",
  "dateOfBirth": "11/04/1995",
  "address": {
    "streetAddress": "40804 Tennyson Way",
    "aptNum": "6",
    "city": "Melbourne",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "F350-639-822-31-8"
  }
}, {
  "_id": 23,
  "first_name": "Warren",
  "last_name": "Cordero",
  "email": "wcorderom@slate.com",
  "gender": "Female",
  "phone": "305-691-5030",
  "dateOfBirth": "06/07/1991",
  "address": {
    "streetAddress": "42722 Meadow Vale Hill",
    "aptNum": null,
    "city": "Naples",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "V544-378-347-59-2"
  }
}, {
  "_id": 24,
  "first_name": "Libbey",
  "last_name": "Noirel",
  "email": "lnoireln@is.gd",
  "gender": "Female",
  "phone": "407-326-6581",
  "dateOfBirth": "02/18/1996",
  "address": {
    "streetAddress": "2 Bluejay Way",
    "aptNum": "89356",
    "city": "Orlando",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "C294-567-365-86-9"
  }
}, {
  "_id": 25,
  "first_name": "Linn",
  "last_name": "Gavan",
  "email": "lgavano@jimdo.com",
  "gender": "Male",
  "phone": "863-411-7057",
  "dateOfBirth": "12/14/1982",
  "address": {
    "streetAddress": "5220 Monica Place",
    "aptNum": null,
    "city": "Lakeland",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "O071-651-260-36-4"
  }
}, {
  "_id": 26,
  "first_name": "Janette",
  "last_name": "Livezley",
  "email": "jlivezleyp@tamu.edu",
  "gender": "Male",
  "phone": "941-600-9830",
  "dateOfBirth": "09/04/1957",
  "address": {
    "streetAddress": "29366 Hauk Trail",
    "aptNum": null,
    "city": "Sarasota",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "I984-264-376-98-9"
  }
}, {
  "_id": 27,
  "first_name": "Tresa",
  "last_name": "Grouvel",
  "email": "tgrouvelq@msn.com",
  "gender": "Male",
  "phone": "941-631-5334",
  "dateOfBirth": "12/02/1950",
  "address": {
    "streetAddress": "06028 Merchant Avenue",
    "aptNum": null,
    "city": "Sarasota",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "T288-850-685-60-8"
  }
}, {
  "_id": 28,
  "first_name": "Sharron",
  "last_name": "Godard",
  "email": "sgodardr@mail.ru",
  "gender": "Female",
  "phone": "352-812-0421",
  "dateOfBirth": "04/08/1977",
  "address": {
    "streetAddress": "79 Oak Valley Trail",
    "aptNum": null,
    "city": "Spring Hill",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "O558-654-970-37-8"
  }
}, {
  "_id": 29,
  "first_name": "Natalina",
  "last_name": "Landman",
  "email": "nlandmans@eepurl.com",
  "gender": "Male",
  "phone": "239-266-1362",
  "dateOfBirth": "06/03/1953",
  "address": {
    "streetAddress": "9931 Delladonna Alley",
    "aptNum": null,
    "city": "Fort Myers",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "Q528-261-381-48-9"
  }
}, {
  "_id": 30,
  "first_name": "Pete",
  "last_name": "Weems",
  "email": "pweemst@moonfruit.com",
  "gender": "Male",
  "phone": "941-924-6569",
  "dateOfBirth": "05/02/1976",
  "address": {
    "streetAddress": "13701 Sheridan Plaza",
    "aptNum": null,
    "city": "Bradenton",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "K695-572-502-26-7"
  }
}, {
  "_id": 31,
  "first_name": "Alanna",
  "last_name": "Brodbin",
  "email": "abrodbinu@vk.com",
  "gender": "Female",
  "phone": "850-232-2832",
  "dateOfBirth": "05/05/1977",
  "address": {
    "streetAddress": "855 Dixon Hill",
    "aptNum": "28",
    "city": "Pensacola",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "E563-988-572-81-0"
  }
}, {
  "_id": 32,
  "first_name": "Arnaldo",
  "last_name": "O'Kuddyhy",
  "email": "aokuddyhyv@alexa.com",
  "gender": "Female",
  "phone": "786-999-0220",
  "dateOfBirth": "07/03/1993",
  "address": {
    "streetAddress": "46 Atwood Center",
    "aptNum": null,
    "city": "Homestead",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "Z988-299-118-47-7"
  }
}, {
  "_id": 33,
  "first_name": "Idell",
  "last_name": "Rosenblad",
  "email": "irosenbladw@timesonline.co.uk",
  "gender": "Female",
  "phone": "407-837-7298",
  "dateOfBirth": "09/23/1986",
  "address": {
    "streetAddress": "5385 Maryland Trail",
    "aptNum": null,
    "city": "Kissimmee",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "D358-189-751-66-6"
  }
}, {
  "_id": 34,
  "first_name": "Starr",
  "last_name": "Grimsditch",
  "email": "sgrimsditchx@oaic.gov.au",
  "gender": "Female",
  "phone": "754-378-4705",
  "dateOfBirth": "06/08/1969",
  "address": {
    "streetAddress": "13 School Drive",
    "aptNum": null,
    "city": "Pompano Beach",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "N437-666-414-61-2"
  }
}, {
  "_id": 35,
  "first_name": "Nora",
  "last_name": "Drinkall",
  "email": "ndrinkally@indiegogo.com",
  "gender": "Male",
  "phone": "772-987-7522",
  "dateOfBirth": "01/27/1971",
  "address": {
    "streetAddress": "0060 Cordelia Lane",
    "aptNum": null,
    "city": "Port Saint Lucie",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "G510-383-370-96-0"
  }
}, {
  "_id": 36,
  "first_name": "Cicily",
  "last_name": "Cairney",
  "email": "ccairneyz@huffingtonpost.com",
  "gender": "Male",
  "phone": "321-975-0321",
  "dateOfBirth": "02/22/1970",
  "address": {
    "streetAddress": "3 Goodland Parkway",
    "aptNum": null,
    "city": "Melbourne",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "R311-420-596-29-0"
  }
}, {
  "_id": 37,
  "first_name": "Ralph",
  "last_name": "Gosart",
  "email": "rgosart10@webeden.co.uk",
  "gender": "Male",
  "phone": "386-779-0146",
  "dateOfBirth": "02/07/1962",
  "address": {
    "streetAddress": "2 Washington Junction",
    "aptNum": null,
    "city": "Daytona Beach",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "A379-811-639-67-8"
  }
}, {
  "_id": 38,
  "first_name": "Alberik",
  "last_name": "Loadsman",
  "email": "aloadsman11@ted.com",
  "gender": "Male",
  "phone": "407-810-8796",
  "dateOfBirth": "07/03/1955",
  "address": {
    "streetAddress": "7 Continental Plaza",
    "aptNum": null,
    "city": "Kissimmee",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "K016-930-535-50-1"
  }
}, {
  "_id": 39,
  "first_name": "Ingar",
  "last_name": "Mandifield",
  "email": "imandifield12@histats.com",
  "gender": "Female",
  "phone": "305-246-1418",
  "dateOfBirth": "11/09/1994",
  "address": {
    "streetAddress": "9 Bartillon Street",
    "aptNum": null,
    "city": "Miami",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "V514-680-059-87-4"
  }
}, {
  "_id": 40,
  "first_name": "Justina",
  "last_name": "Sandifer",
  "email": "jsandifer13@pbs.org",
  "gender": "Female",
  "phone": "904-331-7123",
  "dateOfBirth": "05/22/1963",
  "address": {
    "streetAddress": "28284 Iowa Street",
    "aptNum": "68",
    "city": "Jacksonville",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "F106-006-583-69-3"
  }
}, {
  "_id": 41,
  "first_name": "Rayner",
  "last_name": "Shieber",
  "email": "rshieber14@odnoklassniki.ru",
  "gender": "Male",
  "phone": "772-603-4849",
  "dateOfBirth": "12/04/1979",
  "address": {
    "streetAddress": "1 Hooker Hill",
    "aptNum": null,
    "city": "Fort Pierce",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "X335-356-570-24-2"
  }
}, {
  "_id": 42,
  "first_name": "Farlie",
  "last_name": "Shakesbye",
  "email": "fshakesbye15@cbslocal.com",
  "gender": "Female",
  "phone": "754-155-6284",
  "dateOfBirth": "04/20/1971",
  "address": {
    "streetAddress": "332 Cardinal Park",
    "aptNum": null,
    "city": "Pompano Beach",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "V253-282-217-83-7"
  }
}, {
  "_id": 43,
  "first_name": "Portie",
  "last_name": "Anstead",
  "email": "panstead16@hugedomains.com",
  "gender": "Male",
  "phone": "813-770-5683",
  "dateOfBirth": "10/12/1971",
  "address": {
    "streetAddress": "6 Mcguire Circle",
    "aptNum": "38959",
    "city": "Tampa",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "P210-266-518-14-9"
  }
}, {
  "_id": 44,
  "first_name": "Caro",
  "last_name": "Meco",
  "email": "cmeco17@prlog.org",
  "gender": "Female",
  "phone": "954-961-6868",
  "dateOfBirth": "02/09/1960",
  "address": {
    "streetAddress": "27 4th Pass",
    "aptNum": null,
    "city": "Fort Lauderdale",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "N518-741-778-10-9"
  }
}, {
  "_id": 45,
  "first_name": "Anstice",
  "last_name": "Marzellano",
  "email": "amarzellano18@blogtalkradio.com",
  "gender": "Female",
  "phone": "772-548-2396",
  "dateOfBirth": "01/10/1966",
  "address": {
    "streetAddress": "7 Fordem Alley",
    "aptNum": null,
    "city": "Fort Pierce",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "D175-198-789-83-6"
  }
}, {
  "_id": 46,
  "first_name": "Zachery",
  "last_name": "Wodham",
  "email": "zwodham19@icq.com",
  "gender": "Male",
  "phone": "941-123-5321",
  "dateOfBirth": "07/28/1959",
  "address": {
    "streetAddress": "4940 Eastwood Plaza",
    "aptNum": null,
    "city": "Seminole",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "B696-176-388-14-6"
  }
}, {
  "_id": 47,
  "first_name": "Artair",
  "last_name": "Faveryear",
  "email": "afaveryear1a@hud.gov",
  "gender": "Female",
  "phone": "813-937-7366",
  "dateOfBirth": "04/07/1994",
  "address": {
    "streetAddress": "7677 Lien Drive",
    "aptNum": null,
    "city": "Tampa",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "W175-834-482-87-2"
  }
}, {
  "_id": 48,
  "first_name": "Margie",
  "last_name": "Knappett",
  "email": "mknappett1b@mit.edu",
  "gender": "Male",
  "phone": "305-992-9630",
  "dateOfBirth": "06/09/1999",
  "address": {
    "streetAddress": "2807 Fair Oaks Alley",
    "aptNum": "7460",
    "city": "Miami Beach",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "Z555-323-679-61-0"
  }
}, {
  "_id": 49,
  "first_name": "Rachele",
  "last_name": "Bernardot",
  "email": "rbernardot1c@wikia.com",
  "gender": "Male",
  "phone": "352-499-3163",
  "dateOfBirth": "11/29/1990",
  "address": {
    "streetAddress": "370 Calypso Place",
    "aptNum": null,
    "city": "Spring Hill",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "Z112-236-618-63-4"
  }
}, {
  "_id": 50,
  "first_name": "Leicester",
  "last_name": "Menghi",
  "email": "lmenghi1d@networksolutions.com",
  "gender": "Female",
  "phone": "352-853-7829",
  "dateOfBirth": "02/25/1974",
  "address": {
    "streetAddress": "815 Golf Lane",
    "aptNum": "8317",
    "city": "Ocala",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "B797-295-526-66-0"
  }
}, {
  "_id": 51,
  "first_name": "Alexander",
  "last_name": "Findon",
  "email": "afindon1e@sakura.ne.jp",
  "gender": "Male",
  "phone": "813-714-9867",
  "dateOfBirth": "05/15/2002",
  "address": {
    "streetAddress": "80021 Reinke Alley",
    "aptNum": "6478",
    "city": "Clearwater",
    "state": "FL"
  },
  "driverLicense": {
    "dlState": "FL",
    "dlNumber": "Z248-372-125-20-8"
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
