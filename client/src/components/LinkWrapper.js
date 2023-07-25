import { LinkModal } from "./LinkModal";
import { useState } from "react";
const LinkWrapper = ({children, to, message}) => {
  const [modalShow, setModalShow] = useState(false);
  const setModalHandler = (e) => {
    e.preventDefault();
    setModalShow(true);
  }
  return (
    <>
      <LinkModal message={message} show={modalShow}
        onHide={() => setModalShow(false)} />
      <a className="btn btn-primary" onClick={setModalHandler} href={to} >{children}</a>
    </>
  )
}

export default LinkWrapper;