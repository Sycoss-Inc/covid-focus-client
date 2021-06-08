import React, { useRef, useState } from "react";
import { GrDown} from "react-icons/gr";
import style from "../styles/Collapsible.module.css";

function Collapsible(props) {
  const [isOpen, setIsOpen] = useState(false);

  const parentRef = useRef();
  return (
    <div className={style.collapsible}>
      <button className={`d-flex justify-content-between rounded-pill align-items-center ${style.toggle}`} onClick={() => setIsOpen(!isOpen)}>
      <div>{props.lable}</div>
        <GrDown/>
      </button>
      <div
        className={style.parent}
        ref={parentRef}
        style={
          isOpen
            ? { height: parentRef.current.scrollHeight + "px" }
            : {
                height: "0px",
              }
        }
      >
        <div className={style.content}>{props.children}</div>
      </div>
    </div>
  );
}
export default Collapsible;
