import React from "react";
import styles from "../styles/contacts.module.css";
import { FaPhoneAlt } from "react-icons/fa";

const hospitalContacts = [
  { name: "മെഡിക്കൽ കോളേജ് തൃശ്ശൂർ", phone: "04872427383" },
  { name: "ജില്ലാ ആശുപത്രി തൃശ്ശൂർ", phone: "04872382130" },
  { name: "വെസ്റ്റ് ഫോർട്ട് ഹോസ്പിറ്റൽ", phone: "04872200310" },
  { name: "വെസ്റ്റ് ഫോർട്ട് ഹൈ ടെക്", phone: "04872388999" },
  { name: "ജൂബിലി മിഷൻ", phone: "048724332200" },
  { name: "അശ്വിനി ഹോസ്പിറ്റൽ", phone: "04876612346" },
  { name: "ദയ ഹോസ്പിറ്റൽ", phone: "04872475100" },
  { name: "എലൈറ്റ് ഹോസ്പിറ്റൽ", phone: "04872436100" },
];

const hos = [
  { name: "കോപ്പറേറ്റീവ് ഹോസ്പിറ്റൽ തൃശൂർ", phone: "04872335550" },
  { name: "മെട്രോ പോളിറ്റൻ ഹോസ്പിറ്റൽ", phone: "04872425142" },
  { name: "മദർ ഹോസ്പിറ്റൽ", phone: "04872434100" },
  { name: "അമല മെഡിക്കൽ കോളേജ്", phone: "04872304000" },
  { name: "റോയൽ കുന്നംകുളം", phone: "04885222633" },
  { name: "യൂണിറ്റി കുന്നംകുളം", phone: "04885222811" },
  { name: "സെന്റ് ജോസഫ് ചൂണ്ടൽ", phone: "04885236230" },
  { name: "നൈൽ ഹോസ്പിറ്റൽ കൈപ്പറമ്പ്", phone: "04873014700" },
];

function Hospitals(props) {
  return props.hospitals.map((hospital, index) => {
    return (
      <div className={styles.contactcardA} key={index}>
        <h6 className={styles.textcolor}>{hospital.name}</h6>
        <a
          href={`tel:${hospital.phone}`}
          className="text-decoration-none text-light fs-4"
        >
          <div className="m-3 fs-5">
            <FaPhoneAlt className="m-1" />
            {hospital.phone}
          </div>
        </a>
      </div>
    );
  });
}

export default function HospitalList() {
  return (
    <div>
      <h3 className={styles.heading}>ആശുപത്രികൾ </h3>
      <div id="section 3" className={styles.controlroom}>
        <div id="section 1" className={styles.ctrlroom1}>
          <div className={styles.contactdetails}>
            <Hospitals hospitals={hospitalContacts} />
          </div>
        </div>
        <div id="section 1" className={styles.ctrlroom2}>
          <div className={styles.contactdetails}>
            <Hospitals hospitals={hos} />
          </div>
        </div>
      </div>
    </div>
  );
}
