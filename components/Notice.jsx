import React from "react";
import styles from "../styles/Notice.module.css";
import { Carousel, CarouselItem } from "react-bootstrap";


function Slides(notices) {
  return Object.entries(notices).map((entry) =>
    Object.entries(entry[1]).map((entry, index) => (
      <div
        className={`carousel-item ${styles.item} ${
          index === 0 ? "active" : ""
        }`}
        key={entry[1].id}
      >
        <div className={`${styles.noticetext}`}>
          <h3>അറിയിപ്പ്</h3>
          <p>{entry[1].name}</p>
        </div>
      </div>
    ))
  );
}

// var notices = [
//   "വേലൂർ ഗ്രാമപഞ്ചായത്തിലെ 9 വാർഡുകൾ കണ്ടെയ്മെൻ്റ് സോണിൽ നിന്നും ഒഴിവായിട്ടുണ്ട്. 8 വാർഡുകൾ ഇപ്പോഴും കണ്ടെയ്മെൻ്റ് സോണിൽ തുടരുകയാണ്. നമുക്ക് എല്ലാ വാർഡുകളെയും കണ്ടെയ്മെൻ്റ് സോണിൽ നിന്നും ഒഴിവാക്കേണ്ടതുണ്ട്. അതിനു വേണ്ടി പഞ്ചായത്തിൽ ഇപ്പോൾ നിലനിൽക്കുന്ന നിബന്ധനകളോടെ മുന്നോട്ട് പോകുകയാണ് അഭികാമ്യം. അതിനാൽ എല്ലാവരും , RRT സേവനം ഉപയോഗപ്പെടുത്തി  വീടുകളിൽ നിന്നും പുറത്തിറങ്ങാതെ കോവിഡ് - 19 പ്രതിരോധ പ്രവർത്തനത്തിൽ സഹകരിക്കുന്ന മെന്നും വിനീതമായി അഭ്യർത്ഥിക്കുന്നു. പ്രസിഡണ്ട്  -വേലൂര്‍ ഗ്രാമപഞ്ചായത്ത്",

//   "വേലൂർ ഗ്രാമപഞ്ചായത്തിലെ 9 വാർഡുകൾ കണ്ടെയ്മെൻ്റ് സോണിൽ നിന്നും ഒഴിവായിട്ടുണ്ട്. 8 വാർഡുകൾ ഇപ്പോഴും കണ്ടെയ്മെൻ്റ് സോണിൽ തുടരുകയാണ്. നമുക്ക് എല്ലാ വാർഡുകളെയും കണ്ടെയ്മെൻ്റ് സോണിൽ നിന്നും ഒഴിവാക്കേണ്ടതുണ്ട്. അതിനു വേണ്ടി പഞ്ചായത്തിൽ ഇപ്പോൾ നിലനിൽക്കുന്ന നിബന്ധനകളോടെ മുന്നോട്ട് പോകുകയാണ് അഭികാമ്യം. അതിനാൽ എല്ലാവരും , RRT സേവനം ഉപയോഗപ്പെടുത്തി  വീടുകളിൽ നിന്നും പുറത്തിറങ്ങാതെ കോവിഡ് - 19 പ്രതിരോധ പ്രവർത്തനത്തിൽ സഹകരിക്കുന്ന മെന്നും വിനീതമായി അഭ്യർത്ഥിക്കുന്നു. പ്രസിഡണ്ട്  -വേലൂര്‍ ഗ്രാമപഞ്ചായത്ത്",

//   "വേലൂർ ഗ്രാമപഞ്ചായത്തിലെ 9 വാർഡുകൾ കണ്ടെയ്മെൻ്റ് സോണിൽ നിന്നും ഒഴിവായിട്ടുണ്ട്. 8 വാർഡുകൾ ഇപ്പോഴും കണ്ടെയ്മെൻ്റ് സോണിൽ തുടരുകയാണ്. നമുക്ക് എല്ലാ വാർഡുകളെയും കണ്ടെയ്മെൻ്റ് സോണിൽ നിന്നും ഒഴിവാക്കേണ്ടതുണ്ട്. അതിനു വേണ്ടി പഞ്ചായത്തിൽ ഇപ്പോൾ നിലനിൽക്കുന്ന നിബന്ധനകളോടെ മുന്നോട്ട് പോകുകയാണ് അഭികാമ്യം. അതിനാൽ എല്ലാവരും , RRT സേവനം ഉപയോഗപ്പെടുത്തി  വീടുകളിൽ നിന്നും പുറത്തിറങ്ങാതെ കോവിഡ് - 19 പ്രതിരോധ പ്രവർത്തനത്തിൽ സഹകരിക്കുന്ന മെന്നും വിനീതമായി അഭ്യർത്ഥിക്കുന്നു. പ്രസിഡണ്ട്  -വേലൂര്‍ ഗ്രാമപഞ്ചായത്ത്",

//   "വേലൂർ ഗ്രാമപഞ്ചായത്തിലെ 9 വാർഡുകൾ കണ്ടെയ്മെൻ്റ് സോണിൽ നിന്നും ഒഴിവായിട്ടുണ്ട്. 8 വാർഡുകൾ ഇപ്പോഴും കണ്ടെയ്മെൻ്റ് സോണിൽ തുടരുകയാണ്. നമുക്ക് എല്ലാ വാർഡുകളെയും കണ്ടെയ്മെൻ്റ് സോണിൽ നിന്നും ഒഴിവാക്കേണ്ടതുണ്ട്. അതിനു വേണ്ടി പഞ്ചായത്തിൽ ഇപ്പോൾ നിലനിൽക്കുന്ന നിബന്ധനകളോടെ മുന്നോട്ട് പോകുകയാണ് അഭികാമ്യം. അതിനാൽ എല്ലാവരും , RRT സേവനം ഉപയോഗപ്പെടുത്തി  വീടുകളിൽ നിന്നും പുറത്തിറങ്ങാതെ കോവിഡ് - 19 പ്രതിരോധ പ്രവർത്തനത്തിൽ സഹകരിക്കുന്ന മെന്നും വിനീതമായി അഭ്യർത്ഥിക്കുന്നു. പ്രസിഡണ്ട്  -വേലൂര്‍ ഗ്രാമപഞ്ചായത്ത്",
// ];


export default function Notice({ notices }) {
  return (

    <div
      id="carouselExampleCaptions"
      className={`carousel slide d-flex justify-content-center`}
      data-bs-ride="carousel"
    >
      <div className={`carousel-indicators ${styles.indicators}`}>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active rounded-circle"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className={`carousel-inner ${styles.inner}`}>
        <button
          className={`carousel-control-prev ${styles.prevbutton}`}
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className={`carousel-control-next ${styles.nextbutton}`}
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
        {<Slides notices={notices} />}
      </div>

  
    </div>
  ); 
}
