import React from "react";
import Link from "next/link";

export default function Pass() {
  return (
    <div
      className="container-fluid p-0 mt-2 p-4 mb-2"
      style={{ backgroundColor: "#091d35" }}
    >
      <div
        className="container my-auto text-light p-4 text-center mb-2"
        style={{ borderRadius: "20px", backgroundColor: "#fffffF" }}
      >
        <h6
          className="py-2 text-bold"
          style={{ color: "#FF6939", fontWeight: "bold" }}
        >
          ആശുപത്രി യാത്രയ്ക്ക് പാസ് നിർബന്ധമല്ല മെഡിക്കൽ രേഖകളും സത്യവാങ്‌മൂലവും
          കയ്യിൽ കരുതുക
        </h6>
        <p className="text-dark">
          മുൻപ് ഉപയോഗിച്ചിരുന്ന രീതിയിൽ അഫിഡവിറ്റ് എഴുതിയോ പ്രിന്റ് എടുത്തോ
          വാക്‌സിൻ സ്വീകരിക്കുന്നതിനും, താമസ സ്ഥലത്തിനു തൊട്ടടുത്തുനിന്നും
          അത്യാവശ്യ സാധനങ്ങൾ വാങ്ങുന്നതിനും ഉപയോഗിക്കാവുന്നതാണ് സത്യവാങ്‌മൂലം
          മാതൃക ഡൗൺലോഡ് ചെയ്യാൻ ഇവിടെ ക്ലിക്ക് ചെയ്യുക
        </p>
        <button
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              "https://pass.bsafe.kerala.gov.in/new-affidavit.pdf";
          }}
          className="btn btn-primary rounded-pill"
        >
          DOWNLOAD
        </button>
        <div className="d-flex justify-content-around row align-items-center">
          <img
            src="/covidpass.jpg"
            className="col-sm-7 col-md-8 col-lg-4"
            alt=""
          />
          <div
            className="container p-4 my-4 d-flex col-sm-7 col-md-8 col-lg-7"
            style={{
              backgroundColor: "#091d35",
              borderRadius: "20px",
              flexDirection: "column",
              justifyContent: "center",
              margin: "1rem",
              maxHeight: "15rem",
            }}
          >
            <h3 className="mt-2 mb-2 text-danger">E-CURFEW PASS</h3>
            <p className="text-light">
              {" "}
              യാത്ര പാസ്സിന് ഓൺലൈനായി അപേക്ഷിക്കുവാൻ ഇവിടെ ക്ലിക്ക് ചെയ്യുക{" "}
            </p>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "https://pass.bsafe.kerala.gov.in/";
              }}
              className="btn btn-warning rounded-pill"
            >
              DOWNLOAD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
