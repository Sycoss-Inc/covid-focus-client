// const ourdata = [
//   ["Ward", "Total Positive Cases"],
//   ["Ward 1 - Pathramangalam", 11],
//   ["Ward 2 - Vellattanjoor N", 2],
//   ["Ward 3 - Thayyur", 2],
//   ["Ward 4 - Pazhavur", 2],
//   ["Ward 5 - Kodassery", 7],
//   ["Ward 6 - Vengilassery", 1],
//   ["Ward 7 - Arnos Nagar", 5],
//   ["Ward 8 - Kuttamkulam", 7],
//   ["Ward 9 - Kiralur", 7],
//   ["Ward 10 - Kuruman W", 8],
//   ["Ward 11 - Krurmal E", 3],
//   ["Ward 12 - Vengilassery W", 7],
//   ["Ward 13 - Vellattanjoor", 7],
//   ["Ward 14 - Velur", 7],
//   ["Ward 15 - Thalakkottukara", 1],
//   ["Ward 16 - Thandilam", 7],
//   ["Ward 17 - Puliyannur", 4],
// ];

const wards = [
  "Ward 1 - പാത്രമംഗലം",
  "Ward 2 - വെള്ളാറ്റഞ്ഞൂർ S",
  "Ward 3 - തയ്യൂർ",
  "Ward 4 - പഴവൂർ",
  "Ward 5 - കോടശ്ശേരി",
  "Ward 6 - വെങ്ങിലശ്ശേരി West",
  "Ward 7 - അർണോസ് നഗർ",
  "Ward 8 - കുട്ടംകുളം",
  "Ward 9 - കിരാലൂർ",
  "Ward 10 - കുറുമാൽ West",
  "Ward 11 - കുറുമാൽ East",
  "Ward 12 - വെങ്ങിലശ്ശേരി East",
  "Ward 13 - വെള്ളാറ്റഞ്ഞൂർ South",
  "Ward 14 - വേലൂർ",
  "Ward 15 - തലക്കോട്ടുക്കര",
  "Ward 16 - തണ്ടിലം",
  "Ward 17 - പുലിയന്നൂർ",
];

const cases = [
  '16','23','2','11','5','12','4','7','8','17','11','10','6','3','12','25','4'
];

const activeData = [
  ["Date", "Covid Positive"],
  ["5/7", 20],
  ["5/10", 11],
  ["5/14", 16],
  ["5/21", 7],
  ["5/25", 2],
  ["5/26", 18],
  ["5/27", 20],
  ["5/28", 10],
  ["5/29", 0],
  ["5/30", 20],
  ["5/31", 25],
];

const positiveData = [
  ["Date", "Covid Positive"],
  ["5/7", 20],
  ["5/10", 11],
  ["5/14", 16],
  ["5/21", 7],
  ["5/25", 2],
  ["5/26", 18],
  ["5/27", 20],
  ["5/28", 10],
  ["5/29", 0],
  ["5/30", 20],
  ["5/31", 25],
];

const negativeData = [
  ["Date", "Covid Negative"],
  ["5/7", 2],
  ["5/10", 11],
  ["5/14", 67],
  ["5/21", 10],
  ["5/25", 52],
  ["5/26", 18],
  ["5/27", 80],
  ["5/28", 10],
  ["5/29", 2],
  ["5/30", 20],
  ["5/31", 68],
];

const dates = [
  "5/7",
  "5/10",
  "5/14",
  "5/21",
  "5/25",
  "5/26",
  "5/27",
  "5/28",
  "5/29",
  "5/30",
  "5/31",
];

const positivityRate = [
  ["Date", "Test Positivity Rate"],
  ["5/7", 2],
  ["5/10", 11],
  ["5/14", 67],
  ["5/21", 10],
  ["5/25", 52],
  ["5/26", 18],
  ["5/27", 80],
  ["5/28", 10],
  ["5/29", 2],
  ["5/30", 20],
  ["5/31", 68],
];

//Ward-wise data for line graphs
const wardWiseCases = [
  { wardName: "പാത്രമംഗലം", cases: [11, 2, 2, 2, 7, 1, 5, 7, 7, 8, 3] },
  { wardName: "വെള്ളാറ്റഞ്ഞൂർ S", cases: [11, 2, 2, 2, 7, 1, 5, 7, 7, 8, 3] },
  { wardName: "തയ്യൂർ", cases: [11, 2, 2, 2, 7, 1, 5, 7, 7, 8, 3] },
  { wardName: "പഴവൂർ", cases: [11, 2, 2, 2, 7, 1, 5, 7, 7, 8, 3] },
  { wardName: "കോടശ്ശേരി", cases: [11, 2, 2, 2, 7, 1, 5, 7, 7, 8, 3] },
  { wardName: "വെങ്ങിലശ്ശേരി West", cases: [11, 2, 2, 2, 7, 1, 5, 7, 7, 8, 3] },
  { wardName: "അർണോസ് നഗർ", cases: [11, 2, 2, 2, 7, 1, 5, 7, 7, 8, 3] },
  { wardName: "കുട്ടംകുളം", cases: [11, 2, 2, 2, 7, 1, 5, 7, 7, 8, 3] },
  { wardName: "കിരാലൂർ", cases: [11, 2, 2, 2, 7, 1, 5, 7, 7, 8, 3] },
  { wardName: "കുറുമാൽ West", cases: [11, 2, 2, 2, 7, 1, 5, 7, 7, 8, 3] },
  { wardName: "കുറുമാൽ East", cases: [11, 2, 2, 2, 7, 1, 5, 7, 7, 8, 3] },
  { wardName: "വെങ്ങിലശ്ശേരി East", cases: [11, 2, 2, 2, 7, 1, 5, 7, 7, 8, 3] },
  {
    wardName: "വെള്ളാറ്റഞ്ഞൂർ South",
    cases: [11, 2, 2, 2, 7, 1, 5, 7, 7, 8, 3],
  },
  { wardName: "വേലൂർ", cases: [11, 2, 2, 2, 7, 1, 5, 7, 7, 8, 3] },
  { wardName: "തലക്കോട്ടുക്കര", cases: [11, 2, 2, 2, 7, 1, 5, 7, 7, 8, 3] },
  { wardName: "തണ്ടിലം", cases: [11, 2, 2, 2, 7, 1, 5, 7, 7, 8, 3] },
  { wardName: "പുലിയന്നൂർ", cases: [11, 2, 2, 2, 7, 1, 5, 7, 7, 8, 3] },
];

export {
  dates,
  wards,
  cases,
  wardWiseCases,
  activeData,
  positiveData,
  negativeData,
  positivityRate,
};

// export default ourdata;
