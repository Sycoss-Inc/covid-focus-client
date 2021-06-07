import styles from "../styles/contacts.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { wardmembers } from "./details";

const Numbercard = ({ ashas }) => {
  return ashas.map((asha) => {
    return (
      <div>
        <a href={`tel:${asha.phone}`}>
          <FaPhoneAlt />{" "}
          <span>
            {asha.name} - {asha.phone}
          </span>
        </a>
      </div>
    );
  });
};

function Asha({ startIndex, endIndex }) {
  return wardmembers.slice(startIndex, endIndex).map((ward, index) => {
    return (
      <div className={styles.contactcardA}>
        <div className={styles.contactspec}>
          <h3>വാർഡ് {startIndex + index + 1}</h3>
          <h3>{ward.ward}</h3>
        </div>
        <Numbercard ashas={ward.asha} />
      </div>
    );
  });
}

export default function AashaWorkers() {
  return (
    <div className={styles.container}>
      <main className={styles.contactpage}>
        <h3 className={styles.heading}>ആശ വർക്കേഴ്സ്</h3>
        <div className={styles.controlroom}>
          <div className={styles.ctrlroom1}>
            <Asha startIndex={0} endIndex={8} />
          </div>
          <div className={styles.ctrlroom2}>
            <Asha startIndex={8} endIndex={18} />
          </div>
        </div>
      </main>
    </div>
    // </Layout>
  );
}
