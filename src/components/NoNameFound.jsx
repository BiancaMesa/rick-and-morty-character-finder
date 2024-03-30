import "../scss/components/NoNameFound.scss";
//import notFoundGif from "../images/gif2.gif";
import rickBadLook from "../images/rick_bad_look.png";
//import doNotPanic from "../images/do_not_panic.jpg";

function NoNameFound({message}) {
  return (
    <div className="noNameFoundContainer">
      {message && <p className="noNameFoundContainer__message1">{message}</p>}
      {message && 
        <p className="noNameFoundContainer__message2">
          Give it another try!
          {/* <i className="wink fa-solid fa-face-smile-wink"></i> */}
        </p>
      }
      {/* {message && <img className="noNameFoundContainer__gif" src={notFoundGif} alt="gif-IThoughtItWasCool" /> } */}
      {message && <img className="noNameFoundContainer__gif" src={rickBadLook} alt="rickBadLook" /> }
      {/* {message && <img className="noNameFoundContainer__gif" src={doNotPanic} alt="doNotPanic"/> } */}
    </div>
  );
}

export default NoNameFound;