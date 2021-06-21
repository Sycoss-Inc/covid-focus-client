import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import styles from "../styles/Notice.module.css";

export default function Noticetrail({ notices }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-10 offset-md-1">
          <Carousel
            className={`${styles.carousel}`}
            extLabel=""
            prevLabel=""
            nextLabel=""
          >
            {notices.map((entry, index) => (
              <CarouselItem key={index}>
                <div
                  className={styles.item}
                  key={index}
                  style={{
                    width: "80%",
                    margin: "1rem auto",
                    marginBottom: "3rem",
                  }}
                >
                  <div className={`class`} key={index}>
                    <div>
                      <h3 className={styles.ariyipp}>അറിയിപ്പ്</h3>
                      {/* <strong>{entry["title"]}</strong> */}
                      <p>
                        വേലൂർ ഗ്രാമപഞ്ചായത്തിലെ 9 വാർഡുകൾ കണ്ടെയ്മെൻ്റ് സോണിൽ
                        നിന്നും ഒഴിവായിട്ടുണ്ട്. 8 വാർഡുകൾ ഇപ്പോഴും
                        കണ്ടെയ്മെൻ്റ് സോണിൽ തുടരുകയാണ്. നമുക്ക് എല്ലാ
                        വാർഡുകളെയും കണ്ടെയ്മെൻ്റ് സോണിൽ നിന്നും
                        ഒഴിവാക്കേണ്ടതുണ്ട്. അതിനു വേണ്ടി പഞ്ചായത്തിൽ ഇപ്പോൾ
                        നിലനിൽക്കുന്ന നിബന്ധനകളോടെ മുന്നോട്ട് പോകുകയാണ്
                        അഭികാമ്യം. അതിനാൽ എല്ലാവരും , RRT സേവനം ഉപയോഗപ്പെടുത്തി
                        വീടുകളിൽ നിന്നും പുറത്തിറങ്ങാതെ കോവിഡ് - 19 പ്രതിരോധ
                        പ്രവർത്തനത്തിൽ സഹകരിക്കുന്ന മെന്നും വിനീതമായി
                        അഭ്യർത്ഥിക്കുന്നു. പ്രസിഡണ്ട് -വേലൂര്‍ ഗ്രാമപഞ്ചായത്ത്
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
