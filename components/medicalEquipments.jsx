import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import style from "../styles/medEq.module.css";

export default function MedicalEquipments() {
  return (
    <div className="bg-light">
      <h5 className={`${style.eq} container-fluid p-3`}>ആരോഗ്യ ഉപകരണങ്ങൾ</h5>
      <div className={`${style.sections} d-flex justify-content-evenly`}>
        <div className={style.pulse}>
          <h5>പൾസ് ഓക്സിമീറ്റർ</h5>
          <p>
            ഗ്രാമ പഞ്ചായത്തിൽ ലഭ്യമായ പൾസ് - ഓക്സി മീറ്ററുകൾ ലഭിക്കുന്നതിനായി
            അതാത് വാർഡിലെ ആശാ വർക്കറുമായോ പഞ്ചായത്ത് ഹെല്പ് ഡെസ്കുമായോ
            ബന്ധപ്പെടുക{" "}
          </p>
          <hr />

          <section>
            <p>
              പൾസ് - ഓക്സി മീറ്ററുകൾ വാങ്ങുന്നതിനായി താഴെ നൽകിയിരിക്കുന്ന
              നമ്പറുകൾ ബന്ധപ്പെടാവുന്നതാണ്
            </p>
            <div>
              <a href="tel:9496123447">
                പ്രകാശൻ
                <FaPhoneAlt className="m-2" />
                9496123447
              </a>
            </div>
          </section>
        </div>
        <div className={style.oxy}>
          <h5>ഓക്സിജൻ സിലിണ്ടർ</h5>
          <p>
            ഗ്രാമ പഞ്ചായത്തിൽ നിന്നും ഓക്സിജൻ സിലിണ്ടർ ലഭിക്കുന്നതിനായി ഹെല്പ്
            ഡെസ്കുമായി ബന്ധപ്പെടുക{" "}
          </p>
          <hr />
          <section>
            <p>
              ഓക്സിജൻ സിലിണ്ടർ വാങ്ങുന്നതിനായി താഴെ നൽകിയിരിക്കുന്ന നമ്പറുകൾ
              ബന്ധപ്പെടാവുന്നതാണ്
            </p>
            <div>
              <a href="tel:7034099922">
                ഓക്സിജൻ വാർ റൂം
                <br />
                തൃശൂർ ജില്ല
                <FaPhoneAlt />
                7034099922
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
