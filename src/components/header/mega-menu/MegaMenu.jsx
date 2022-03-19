import React from "react";
import { Link } from "react-router-dom";

const Web4Dropdown= [
  {
    routerPath: "/web4/particalized-data-distribution",
    title: "Particalized Data Distribution",
  },
  {
    routerPath: "/web4/decentralized-serverless-green",
    title: "Decentralized, Serverless & Green",
  },
  {
    routerPath: "/web4/censorship-resistant",
    title: "Censorship Resistant",
  },
  {
    routerPath: "/web4/user-controlled-privacy",
    title: "User-Controlled Privacy",
  },
  {
    routerPath: "/web4/community-governed-applications",
    title: "Community-Governed Applications",
  },
  {
    routerPath: "/web4/globally-scaleable-applications",
    title: "Globally Scaleable Applications",
  },
  {
    routerPath: "/web4/transport-agnostic",
    title: "Transport Agnostic",
  },
  {
    routerPath: "/web4/user-controlled-identity",
    title: "User-Controlled Identity",
  },
  {
    routerPath: "/web4/application-interoperability",
    title: "Application Interoperability",
  },
];

const Technology = [
  {
    name: "BIT Protocol",
    routerPath: "/technology/bit-protocol",
  },
  {
    name: "Bit DHT",
    routerPath: "/technology/bitdht",
  },
  {
    name: "BitSwarm",
    routerPath: "/technology/bitswarm",
  },
  {
    name: "UniChains",
    routerPath: "/technology/unichains",
  },
  {
    name: "BitTries",
    routerPath: "/technology/bittries",
  },
  {
    name: "BitTrees",
    routerPath: "/technology/bittrees",
  },
  {
    name: "BitDrives",
    routerPath: "/technology/bitdrives",
  },
  {
    name: "BitStream and MultiChains",
    routerPath: "/technology/bitstream",
  },
  {
    name: "MultiTrees",
    routerPath: "/technology/multitrees",
  },
  {
    name: "SmartChains",
    routerPath: "/technology/smartchains",
  },
  {
    name: "BitNames",
    routerPath: "/technology/bitnames",
  },
  {
    name: "Horiz0n",
    routerPath: "/technology/horiz0n",
  },
];
const Build = [
  {
    name: "Build A Web4 App",
    routerPath: "/build/dapp",
  },
  {
    name: "Developer Docs",
    routerPath: "https://docs.bitwebs.org",
  },
  {
    name: "Developer Tools",
    routerPath: "/build/tools",
  },
  {
    name: "GitHub",
    routerPath: "https://github.com/bitwebs",
  },
];

const BIQ = [
  {
    name: "About BIQ",
    routerPath: "/biq/about",
  },
  {
    name: "Wallets",
    routerPath: "/biq/wallets",
  },
  {
    name: "Exchanges",
    routerPath: "/biq/exchanges",
  },
];


const MegaMenu = () => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item dropdown position-static active">
        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
          Web4
        </a>
        <div className="dropdown-menu">
          <ul className="mega-menu d-flex ">
            {Web4Dropdown.map((val, i) => (
              <li key={i}>
                <Link to={val.routerPath} className={val.clasName}>
                  <span className="font-rubik">{val.title}</span>

                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* /.dropdown-menu */}
      </li>
      {/* End li */}
      <li className="nav-item dropdown position-static">
            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
              Technology
            </a>
            <div className="dropdown-menu">
              <ul className="mega-menu d-flex ">
                {Technology.map((val, i) => (
                  <li key={i}>
                    <Link to={val.routerPath}>
                      <span className="font-rubik">{val.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* /.dropdown-menu */}
          </li>
          {/* End li */}
          
      <li key={i} className="nav-item">
         <a href="/dao" className="nav-link">
           DAO
         </a>
      </li>
      <li className="nav-item dropdown position-static active">
            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
              Build
            </a>
            <div className="dropdown-menu">
              <ul className="mega-menu d-flex ">
                {Build.map((val, i) => (
                  <li key={i}>
                    <Link to={val.routerPath}>
                      <span className="font-rubik">{val.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* /.dropdown-menu */}
          </li>
          {/* End li */}
          {/* End li */}
      <li className="nav-item dropdown position-static active">
            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
              BitcoinIQ
            </a>
            <div className="dropdown-menu">
              <ul className="mega-menu d-flex ">
                {BIQ.map((val, i) => (
                  <li key={i}>
                    <Link to={val.routerPath}>
                      <span className="font-rubik">{val.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* /.dropdown-menu */}
          </li>
          {/* End li */}
      
      <li key={i} className="nav-item">
         <a href="/roadmap" className="nav-link">
           Roadmap
         </a>
      </li>
      
      <li key={i} className="nav-item">
         <a href="/manifesto" className="nav-link">
           Manifesto
         </a>
      </li>
    </ul>
  );
  // End navbar nav mega menu main
};

export default MegaMenu;
