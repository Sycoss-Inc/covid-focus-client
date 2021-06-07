import { FaPhoneAlt } from "react-icons/fa";
import styles from "../styles/contacts.module.css";
import { wardmembers } from "../components/details";

function WMember({ startIndex, endIndex }) {
  return wardmembers.slice(startIndex, endIndex).map((r, index) => {
    return (
      <div className={styles.contactcardA} key={index}>
        <div className={styles.contactspec}>
          <h3>വാർഡ് {startIndex + index + 1}</h3>
          <h3>{r.ward}</h3>
        </div>
        <a href={`tel:${r.wardMemberPhone}`}>
          <FaPhoneAlt />{" "}
          <span>
            {r.wardMember} -{r.wardMemberPhone}
          </span>
        </a>
      </div>
    );
  });
}

export default function WardMember() {
  return (
    <div className={styles.container}>
      <main className={styles.contactpage}>
        <h3 className={styles.heading}>വാർഡ് മെമ്പേഴ്സ്</h3>
        <div className={styles.controlroom}>
          <div className={styles.ctrlroom1}>
            <WMember startIndex={0} endIndex={8} />
          </div>
          <div className={styles.ctrlroom2}>
            <WMember startIndex={8} endIndex={18} />
          </div>
        </div>
      </main>
    </div>
    // </Layout>
  );
}
