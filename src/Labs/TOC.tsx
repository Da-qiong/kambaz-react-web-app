// import Nav from "react-bootstrap/Nav";
import { useLocation } from "react-router";
// import { Link } from "react-router-dom";

export default function TOC() {
  const { pathname } = useLocation();
  return (
    <ul className="nav nav-pills" id="wd-toc">
    <li className="nav-item"><a id="wd-a" href="#/Labs" className="nav-link">Labs</a></li>
    <li className="nav-item"><a id="wd-a1" href="#/Labs/Lab1"
        className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}>Lab 1</a></li>
    <li className="nav-item"><a id="wd-a2" href="#/Labs/Lab2"
        className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}>Lab 2</a></li>
    <li className="nav-item"><a id="wd-a3" href="#/Labs/Lab3"
        className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}>Lab 3</a></li>
    <li className="nav-item"><a id="wd-k" href="#/Kambaz" className="nav-link">Kambaz</a></li>
    <li className="nav-item"><a id="wd-github" href="https://github.com/Da-qiong/kambaz-react-web-app" target="_blank"
        className="nav-link">My GitHub</a></li>
    </ul>
  );
  }