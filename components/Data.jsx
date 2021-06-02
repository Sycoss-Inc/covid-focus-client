const ourdata = [
    ['Ward', 'Total Positive Cases'],
    ['Ward 1 - Pathramangalam', 11],
    ['Ward 2 - Vellattanjoor N', 2],
    ['Ward 3 - Thayyur', 2],
    ['Ward 4 - Pazhavur', 2],
    ['Ward 5 - Kodassery', 7],
    ['Ward 6 - Vengilassery', 1],
    ['Ward 7 - Arnos Nagar', 5],
    ['Ward 8 - Kuttamkulam', 7],
    ['Ward 9 - Kiralur', 7],
    ['Ward 10 - Kuruman W', 8],
    ['Ward 11 - Krurmal E', 3],
    ['Ward 12 - Vengilassery W', 7],
    ['Ward 13 - Vellattanjoor', 7],
    ['Ward 14 - Velur', 7],
    ['Ward 15 - Thalakkottukara', 1],
    ['Ward 16 - Thandilam', 7],
    ['Ward 17 - Puliyannur', 4],
  ];
  const activeData=[
    ['Date','Covid Positive'],
    ['5/7',20],
    ['5/10',11],
    ['5/14',16],
    ['5/21',7],
    ['5/25',2],
    ['5/26',18],
    ['5/27',20],
    ['5/28',10],
    ['5/29',0],
    ['5/30',20],
    ['5/31',25],
];

  const positiveData=[
      ['Date','Covid Positive'],
      ['5/7',20],
      ['5/10',11],
      ['5/14',16],
      ['5/21',7],
      ['5/25',2],
      ['5/26',18],
      ['5/27',20],
      ['5/28',10],
      ['5/29',0],
      ['5/30',20],
      ['5/31',25],
  ];

  const negativeData=[
    ['Date','Covid Negative'],
    ['5/7',2],
    ['5/10',11],
    ['5/14',67],
    ['5/21',10],
    ['5/25',52],
    ['5/26',18],
    ['5/27',80],
    ['5/28',10],
    ['5/29',2],
    ['5/30',20],
    ['5/31',68],

];


const positivityRate=[
    ['Date','Test Positivity Rate'],
    ['5/7',2],
    ['5/10',11],
    ['5/14',67],
    ['5/21',10],
    ['5/25',52],
    ['5/26',18],
    ['5/27',80],
    ['5/28',10],
    ['5/29',2],
    ['5/30',20],
    ['5/31',68],
];
const wardData=[
    
        [
            ['Date','Ward 1-പാത്രമംഗലം'],
            ['5/7',2],
            ['5/10',11],
            ['5/14',67],
            ['5/21',10],
            ['5/25',52],
            ['5/26',18],
            ['5/27',80],
            ['5/28',10],
            ['5/29',2],
            ['5/30',20],
            ['5/31',68], 
        ],
        [
            ['Date','Ward 2-വെള്ളാറ്റഞ്ഞൂർ S'],
            ['5/7',2],
            ['5/10',11],
            ['5/14',67],
            ['5/21',10],
            ['5/25',52],
            ['5/26',18],
            ['5/27',80],
            ['5/28',10],
            ['5/29',2],
            ['5/30',20],
            ['5/31',68],
        ],
        [
            ['Date','Ward 3-തയ്യൂർ '],
            ['5/7',2],
            ['5/10',11],
            ['5/14',67],
            ['5/21',10],
            ['5/25',52],
            ['5/26',18],
            ['5/27',80],
            ['5/28',10],
            ['5/29',2],
            ['5/30',20],
            ['5/31',68],
        ],
        [
            ['Date','Ward 4-പഴവൂർ'],
            ['5/7',2],
            ['5/10',11],
            ['5/14',67],
            ['5/21',10],
            ['5/25',52],
            ['5/26',18],
            ['5/27',80],
            ['5/28',10],
            ['5/29',2],
            ['5/30',20],
            ['5/31',68],
        ],
        [
            ['Date','Ward 5-കോടശ്ശേരി '],
            ['5/7',2],
            ['5/10',11],
            ['5/14',67],
            ['5/21',10],
            ['5/25',52],
            ['5/26',18],
            ['5/27',80],
            ['5/28',10],
            ['5/29',2],
            ['5/30',20],
            ['5/31',68],
        ],
        [
            ['Date','Ward 6-വെങ്ങിലശ്ശേരി  E'],
            ['5/7',2],
            ['5/10',11],
            ['5/14',67],
            ['5/21',10],
            ['5/25',52],
            ['5/26',18],
            ['5/27',80],
            ['5/28',10],
            ['5/29',2],
            ['5/30',20],
            ['5/31',68],
        ],
        [
            ['Date','Ward 7-അർണോസ് നഗർ'],
            ['5/7',2],
            ['5/10',11],
            ['5/14',67],
            ['5/21',10],
            ['5/25',52],
            ['5/26',18],
            ['5/27',80],
            ['5/28',10],
            ['5/29',2],
            ['5/30',20],
            ['5/31',68],
        ],
        [
            ['Date','Ward 8-കുട്ടംകുളം'],
            ['5/7',2],
            ['5/10',11],
            ['5/14',67],
            ['5/21',10],
            ['5/25',52],
            ['5/26',18],
            ['5/27',80],
            ['5/28',10],
            ['5/29',2],
            ['5/30',20],
            ['5/31',68],
        ],
        [
            ['Date','Ward 9-കിരാലൂർ '],
            ['5/7',2],
            ['5/10',11],
            ['5/14',67],
            ['5/21',10],
            ['5/25',52],
            ['5/26',18],
            ['5/27',80],
            ['5/28',10],
            ['5/29',2],
            ['5/30',20],
            ['5/31',68],
        ],
        [
            ['Date','Ward 10-കുറുമാൽ  West'],
            ['5/7',2],
            ['5/10',11],
            ['5/14',67],
            ['5/21',10],
            ['5/25',52],
            ['5/26',18],
            ['5/27',80],
            ['5/28',10],
            ['5/29',2],
            ['5/30',20],
            ['5/31',68],
        ],
        [
            ['Date','Ward 11-കുറുമാൽ East'],
            ['5/7',2],
            ['5/10',11],
            ['5/14',67],
            ['5/21',10],
            ['5/25',52],
            ['5/26',18],
            ['5/27',80],
            ['5/28',10],
            ['5/29',2],
            ['5/30',20],
            ['5/31',68],
        ],
        [
            ['Date','Ward 12-വെങ്ങിലശ്ശേരി W'],
            ['5/7',2],
            ['5/10',11],
            ['5/14',67],
            ['5/21',10],
            ['5/25',52],
            ['5/26',18],
            ['5/27',80],
            ['5/28',10],
            ['5/29',2],
            ['5/30',20],
            ['5/31',68],
        ],
        [
            ['Date','Ward 13-വെള്ളാറ്റഞ്ഞൂർ South'],
            ['5/7',2],
            ['5/10',11],
            ['5/14',67],
            ['5/21',10],
            ['5/25',52],
            ['5/26',18],
            ['5/27',80],
            ['5/28',10],
            ['5/29',2],
            ['5/30',20],
            ['5/31',68],
        ],
        [
            ['Date','Ward 14-വേലൂർ '],
            ['5/7',2],
            ['5/10',11],
            ['5/14',67],
            ['5/21',10],
            ['5/25',52],
            ['5/26',18],
            ['5/27',80],
            ['5/28',10],
            ['5/29',2],
            ['5/30',20],
            ['5/31',68],
        ],
        [
            ['Date','Ward 15-തലക്കോട്ടുക്കര'],
            ['5/7',2],
            ['5/10',11],
            ['5/14',67],
            ['5/21',10],
            ['5/25',52],
            ['5/26',18],
            ['5/27',80],
            ['5/28',10],
            ['5/29',2],
            ['5/30',20],
            ['5/31',68],
        ],
        [
            ['Date','Ward 16-തണ്ടിലം '],
            ['5/7',2],
            ['5/10',11],
            ['5/14',67],
            ['5/21',10],
            ['5/25',52],
            ['5/26',18],
            ['5/27',80],
            ['5/28',10],
            ['5/29',2],
            ['5/30',20],
            ['5/31',68],
        ],
        [
            ['Date','Ward 17-പുലിയന്നൂർ '],
            ['5/7',2],
            ['5/10',11],
            ['5/14',67],
            ['5/21',10],
            ['5/25',52],
            ['5/26',18],
            ['5/27',80],
            ['5/28',10],
            ['5/29',2],
            ['5/30',20],
            ['5/31',68],
        ],

];

  export default ourdata;
  export { activeData , positiveData , negativeData , positivityRate ,wardData};