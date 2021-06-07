const wardmembers = [
  {
    ward: "പാത്രമംഗലം",
    wardMember: "കർമ്മല ജോൺസൺ",
    wardMemberPhone: "9745979858",
    asha: [{ name: "രുക്മണി", phone: "9605313635" }],
  },
  {
    ward: "വെള്ളാറ്റഞ്ഞൂർ S",
    wardMember: "അനിൽ മാസ്റ്റർ",
    wardMemberPhone: "9447466792",
    asha: [{ name: "ഷെൻസി", phone: "9946765130" }],
  },
  {
    ward: "തയ്യൂർ",
    wardMember: "വിമല നാരായണൻ",
    wardMemberPhone: "9526056136",
    asha: [{ name: "ഗീത", phone: "9947636539" }],
  },
  {
    ward: "പഴവൂർ ",
    wardMember: "ആരിഫ സാബിർ",
    wardMemberPhone: "8111953438",
    asha: [{ name: "വത്സല", phone: "9526993294" }],
  },
  {
    ward: "കോടശ്ശേരി",
    wardMember: "നിധീഷ് ചന്ദ്രൻ",
    wardMemberPhone: "9846242535",
    asha: [{ name: "സുഷിത", phone: "9961943194" }],
  },
  {
    ward: "വെങ്ങിലശ്ശേരി  West",
    wardMember: "ബാലകൃഷ്ണൻ വെങ്ങിലശ്ശേരി",
    wardMemberPhone: "9946832988",
    asha: [{ name: "അരൂജ", phone: "8078211968" }],
  },
  {
    ward: "അർണോസ് നഗർ",
    wardMember: "വിജിനി ഗോപി",
    wardMemberPhone: "8943835558",
    asha: [{ name: "സലോമി", phone: "9495576615" }],
  },
  {
    ward: "കുട്ടംകുളം",
    wardMember: "ഷോബി ടി ആർ",
    wardMemberPhone: "9846525377",
    asha: [{ name: "ലാലി", phone: "9947692982" }],
  },
  {
    ward: "കിരാലൂർ",
    wardMember: "രേഷ്മ സുധീഷ്",
    wardMemberPhone: "9645796807",
    asha: [
      { name: "റോസി", phone: "9656015772" },
      { name: "വനജ", phone: "9947727902" },
    ],
  },
  {
    ward: "കുറുമാൽ  West",
    wardMember: "അജി ജോഷി",
    wardMemberPhone: "8606814978",
    asha: [{ name: "സുഗത", phone: "7293400197" }],
  },
  {
    ward: "കുറുമാൽ East",
    wardMember: "ശുഭ അനിൽകുമാർ",
    wardMemberPhone: "8086130866",
    asha: [{ name: "വിജിനി", phone: "8943835558" }],
  },
  {
    ward: "വെങ്ങിലശ്ശേരി East",
    wardMember: "സൈമൺ  C D",
    wardMemberPhone: "9846334033",
    asha: [{ name: "സിന്ധു", phone: "9747040495" }],
  },
  {
    ward: "വെള്ളാറ്റഞ്ഞൂർ South",
    wardMember: "ജോയ്  C F",
    wardMemberPhone: "9447944178",
    asha: [{ name: "ബീന", phone: "9947470568" }],
  },
  {
    ward: "വേലൂർ",
    wardMember: "സ്വപ്ന രാമചന്ദ്രൻ",
    wardMemberPhone: "9495503775",
    asha: [{ name: "ഹേമലത", phone: "9048579091" }],
  },
  {
    ward: "തലക്കോട്ടുക്കര",
    wardMember: "ബിന്ദു ശർമ്മ",
    wardMemberPhone: "9495587601",
    asha: [{ name: "രമ", phone: "9645562148" }],
  },
  {
    ward: "തണ്ടിലം",
    wardMember: "സുബ്രഹ്മണ്യൻ P S",
    wardMemberPhone: "9846173446",
    asha: [{ name: "സുജാത", phone: "8943099879" }],
  },
  {
    ward: "പുലിയന്നൂർ",
    wardMember: "ഷേർലി ദിലീപ്",
    wardMemberPhone: "8589898997",
    asha: [{ name: "ഷീല", phone: "9745457086" }],
  },
];

const rrt = [
  {
    ward: "പാത്രമംഗലം",
    members: [
      { name: "ബിനിൽ.T.B", phone: "9495980399" },
      { name: "രാഗേഷ് ", phone: "9539950831" },
    ],
    nodal: { name: "ജയൻ പത്രമംഗലം", phone: "9446765872" },
  },
  {
    ward: "വെള്ളാറ്റഞ്ഞൂർ S",
    members: [
      { name: "ജിത്തു", phone: "9567044856" },
      { name: "ഷാനിൽ", phone: "9142140794" },
    ],
    nodal: { name: "ഡോമിനിക്", phone: "8281410533" },
  },
  {
    ward: "തയ്യൂർ",
    members: [
      { name: "രാഹുൽ.E.R", phone: "9995529530" },
      { name: "രഞ്ജിത്ത് A.R", phone: "9747891222" },
      { name: "ശരത്ത് ", phone: "7907796660" },
      { name: "അഭിലാഷ് ", phone: "9605687296" },
    ],
    nodal: { name: "T.K.മുരളി മാസ്റ്റർ", phone: "9495226230" },
  },
  {
    ward: "പഴവൂർ",
    members: [
      { name: "നിജിൽ", phone: "9961006575" },
      { name: "ഫൈസൽ", phone: "9447824079" },
      { name: "മുഹമ്മദ് ഷാഫി", phone: "9048363225" },
    ],
    nodal: { name: "പ്രേം ചന്ദ്", phone: "9656821702" },
  },
  {
    ward: "കോടശ്ശേരി",
    members: [
      { name: "സന്തോഷ്", phone: "9645537255" },
      { name: "സ്റ്റീഫൻ", phone: "7034197881" },
    ],
    nodal: { name: "ഹിന", phone: "9947035686" },
  },
  {
    ward: "വെങ്ങിലശ്ശേരി West",
    members: [
      { name: "ജയൻ", phone: "9646854730" },
      { name: "സണ്ണി പുള്ളിക്കോട്ടിൽ", phone: "8921835766" },
      { name: "സതീശൻ മണികണ്ഠൻ", phone: "9567015699" },
      { name: "അഭിലാഷ്", phone: "9744937258" },
    ],
    nodal: { name: "ഗ്ലോറി ടീച്ചർ", phone: "9497457820" },
  },
  {
    ward: "അർണോസ് നഗർ",
    members: [
      { name: "ജോർജ് പുളിക്കൻ", phone: "8075855966" },
      { name: "ദേവി", phone: "7510540482" },
    ],
    nodal: { name: "ജസ്റ്റിൻ", phone: "9142767128" },
  },
  {
    ward: "കുട്ടംകുളം",
    members: [
      { name: "ബിപിൻ", phone: "9048406144" },
      { name: "രാധാകൃഷ്ണൻ P S", phone: "9656918484" },
    ],
    nodal: { name: "ലിസി", phone: "9846531177" },
  },
  {
    ward: "കിരാലൂർ",
    members: [
      { name: "സുമേഷ്", phone: "9947501009" },
      { name: "ഹരീഷ് P M", phone: "9847620681" },
    ],
    nodal: { name: "ഷാനിതാ P R", phone: "9744681113" },
  },
  {
    ward: "കുറുമാൽ  West",
    members: [
      { name: "ബിജോഷ് തലകോടൻ", phone: "9946725451" },
      { name: "സുനിൽ A K", phone: "9744380092" },
    ],
    nodal: { name: "രേണു മറിയം തങ്കച്ചൻ", phone: "9447069221" },
  },
  {
    ward: "കുറുമാൽ East",
    members: [
      { name: "സുബി .V.B", phone: "8848854829" },
      { name: "ഷാനിൽ A R", phone: "9061765446" },
    ],
    nodal: { name: "തിലകൻ", phone: "9495169219" },
  },
  {
    ward: "വെങ്ങിലശ്ശേരി East",
    members: [
      { name: "ഗിരീഷ്", phone: "7736390169" },
      { name: "ഷിന്റോ", phone: "9495509416" },
    ],
    nodal: { name: "രജിത", phone: "9947588825" },
  },
  {
    ward: "വെള്ളാറ്റഞ്ഞൂർ South",
    members: [
      { name: "പ്രദീപ്", phone: "9961051413" },
      { name: "സനൽ ജോയ്", phone: "9495059439" },
    ],
    nodal: { name: "സുരേഷ് കുമാർ", phone: "9495078784" },
  },
  {
    ward: "വേലൂർ",
    members: [
      { name: "ശകേഷ്.എൻ.എം", phone: "9745680222" },
      { name: "ജസ്റ്റിൻ ക്രിസ്റ്റഫർ", phone: "7510555968" },
      { name: "ഹരി നാരായണൻ", phone: "9645121080" },
      { name: "സന്തോഷ് കുമാർ", phone: "8907680679" },
    ],
    nodal: { name: "പ്രേമദാസൻ", phone: "9497316590" },
  },
  {
    ward: "തലക്കോട്ടുക്കര",
    members: [
      { name: "ഡൈസൻ.P.D", phone: "9946791100" },
      { name: "അബ്ദുൾ റഷീദ്", phone: "9846477555" },
      { name: "കെ .സി ബാബു", phone: "9061608284" },
      { name: "സിബി ടി ജെ", phone: "8111841313" },
    ],
    nodal: { name: "ഡോമിനിക്", phone: "8281410533" },
  },
  {
    ward: "തണ്ടിലം",
    members: [
      { name: "സുരേഷ്", phone: "7034984525" },
      { name: "ബിനിത", phone: "9947987030" },
    ],
    nodal: { name: "ജിസൻ", phone: "9645167340" },
  },
  {
    ward: "പുലിയന്നൂർ",
    members: [
      { name: "നികേഷ്", phone: "8606560923" },
      { name: "റിൻഷാദ്", phone: "9526803071" },
    ],
    nodal: { name: "ശ്യാമള", phone: "9447807611" },
  },
];

export { wardmembers, rrt };
