// import React, { Fragment } from "react";

// import PropTypes from "prop-types";

// import "./Footer4.css";
// import logo from "../images/logo.jpeg";

// const Footer4 = (props) => {
//   return (
//     <footer className="footer4-footer7 thq-section-padding">
//       <div className="footer4-max-width thq-section-max-width">
//         <div className="footer4-content">
//           <div className="footer4-logo1">
//             <img
//               alt={props.logoAlt}
//               src={props.logoSrc}
//               className="footer4-logo2"
//             />
//           </div>
//           <div className="footer4-links">
//             <a
//               href="https://example.com"
//               target="_blank"
//               rel="noreferrer noopener"
//             >
//               {props.link1 ?? (
//                 <Fragment>
//                   <span className="footer4-text16 thq-body-small">
//                     About Us
//                   </span>
//                 </Fragment>
//               )}
//             </a>
//             <a
//               href="https://example.com"
//               target="_blank"
//               rel="noreferrer noopener"
//             >
//               {props.link2 ?? (
//                 <Fragment>
//                   <span className="footer4-text18 thq-body-small">
//                     Contact Us
//                   </span>
//                 </Fragment>
//               )}
//             </a>
//             <a
//               href="https://example.com"
//               target="_blank"
//               rel="noreferrer noopener"
//             >
//               {props.link3 ?? (
//                 <Fragment>
//                   <span className="footer4-text15 thq-body-small">FAQ</span>
//                 </Fragment>
//               )}
//             </a>
//             <a
//               href="https://example.com"
//               target="_blank"
//               rel="noreferrer noopener"
//             >
//               {props.link4 ?? (
//                 <Fragment>
//                   <span className="footer4-text19 thq-body-small">Blog</span>
//                 </Fragment>
//               )}
//             </a>
//             <a
//               href="https://example.com"
//               target="_blank"
//               rel="noreferrer noopener"
//             >
//               {props.link5 ?? (
//                 <Fragment>
//                   <span className="footer4-text14 thq-body-small">Careers</span>
//                 </Fragment>
//               )}
//             </a>
//           </div>
//         </div>
//         <div className="footer4-credits">
//           <div className="thq-divider-horizontal"></div>
//           <div className="footer4-row">
//             <div className="footer4-container">
//               <span className="thq-body-small">© 2024 TeleportHQ</span>
//             </div>
//             <div className="footer4-footer-links">
//               <span>
//                 {props.privacyLink ?? (
//                   <Fragment>
//                     <span className="footer4-text21 thq-body-small">
//                       Privacy Policy
//                     </span>
//                   </Fragment>
//                 )}
//               </span>
//               <span>
//                 {props.termsLink ?? (
//                   <Fragment>
//                     <span className="footer4-text17 thq-body-small">
//                       Terms of Use
//                     </span>
//                   </Fragment>
//                 )}
//               </span>
//               <span>
//                 {props.cookiesLink ?? (
//                   <Fragment>
//                     <span className="footer4-text20 thq-body-small">
//                       Cookies Policy
//                     </span>
//                   </Fragment>
//                 )}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// Footer4.defaultProps = {
//   link5: undefined,
//   link3: undefined,
//   link1: undefined,
//   termsLink: undefined,
//   link2: undefined,
//   link4: undefined,
//   logoAlt: "Any-Post",
//   cookiesLink: undefined,
//   logoSrc: "../images/logo.jpeg",
//   privacyLink: undefined,
// };

// Footer4.propTypes = {
//   link5: PropTypes.element,
//   link3: PropTypes.element,
//   link1: PropTypes.element,
//   termsLink: PropTypes.element,
//   link2: PropTypes.element,
//   link4: PropTypes.element,
//   logoAlt: PropTypes.string,
//   cookiesLink: PropTypes.element,
//   logoSrc: PropTypes.string,
//   privacyLink: PropTypes.element,
// };

// export default Footer4;

// ----------------------------------------------------------

import React from "react";
import "./Footer4.css";
import logo from "../images/logo.jpeg";

const Footer4 = () => {
  return (
    <footer className="footer4-footer7 thq-section-padding">
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo1">
            <img alt="Any-Post" src={logo} className="footer4-logo2" />
          </div>
          <div className="footer4-links">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="footer4-text16 thq-body-small">About Us</span>
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="footer4-text18 thq-body-small">Contact Us</span>
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="footer4-text15 thq-body-small">FAQ</span>
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="footer4-text19 thq-body-small">Blog</span>
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="footer4-text14 thq-body-small">Careers</span>
            </a>
          </div>
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="thq-body-small">© 2024 Any-post</span>
            </div>
            <div className="footer4-footer-links">
              <span className="footer4-text21 thq-body-small">
                Privacy Policy
              </span>
              <span className="footer4-text17 thq-body-small">
                Terms of Use
              </span>
              <span className="footer4-text20 thq-body-small">
                Cookies Policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer4;
