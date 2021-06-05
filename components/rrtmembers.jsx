import styles from "../styles/contacts.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { rrt } from "../components/details";

const Numbercard = ({ rs }) => {
  return rs.map((r) => {
    return (
      <div className={styles.contact}>
        <a href={`tel:${r.phone}`}>
          <FaPhoneAlt />{" "}
          <span>
            {r.name} - {r.phone}
          </span>
        </a>
      </div>
    );
  });
};

function RRT({ startIndex, endIndex }) {
  return rrt.slice(startIndex, endIndex).map((r, index) => {
    return (
      <div className={styles.contactcardA}>
        <div className={styles.contactspec}>
          <h3>വാർഡ് {startIndex + index + 1}</h3>
          <h3>{r.ward}</h3>
        </div>
        <Numbercard rs={r.members} />
        <h4>നോഡൽ ഓഫീസർ</h4>
        <div className={styles.contact}>
          <a href={`tel:${r.nodal.phone}`}>
            <FaPhoneAlt />{" "}
            <span>
              {r.nodal.name} -{r.nodal.phone}
            </span>
          </a>
        </div>
      </div>
    );
  });
}

export default function RRTMembers() {
  return (
    <div className={styles.container}>
      <main className={styles.contactpage}>
        <h3 className={styles.heading}>റാപിഡ് റെസ്പോൺസ് ടീം (RRT)</h3>
        <div className={styles.controlroom}>
          <div className={styles.ctrlroom1}>
            <RRT startIndex={0} endIndex={9} />
          </div>
          <div className={styles.ctrlroom2}>
            <RRT startIndex={9} endIndex={18} />
          </div>
        </div>
      </main>
    </div>
  );
}
