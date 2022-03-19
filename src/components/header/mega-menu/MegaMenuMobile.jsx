import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  SidebarHeader,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";

const Web4Dropdown= [
  {
    routerPath: "/web4/particalized-data-distribution",
    name: "Particalized Data Distribution",
  },
  {
    routerPath: "/web4/decentralized-serverless-green",
    name: "Decentralized, Serverless & Green",
  },
  {
    routerPath: "/web4/censorship-resistant",
    name: "Censorship Resistant",
  },
  {
    routerPath: "/web4/user-controlled-privacy",
    name: "User-Controlled Privacy",
  },
  {
    routerPath: "/web4/community-governed-applications",
    name: "Community-Governed Applications",
  },
  {
    routerPath: "/web4/globally-scaleable-applications",
    name: "Globally Scaleable Applications",
  },
  {
    routerPath: "/web4/transport-agnostic",
    name: "Transport Agnostic",
  },
  {
    routerPath: "/web4/user-controlled-identity",
    name: "User-Controlled Identity",
  },
  {
    routerPath: "/web4/application-interoperability",
    name: "Application Interoperability",
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

const MegaMenuMobile = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="mega-menu-wrapper">
      <div className="mob-header multi-mob-header">
        <button className="toggler-menu" onClick={handleClick}>
          <div className={click ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Header */}

      <ProSidebar
        className={click ? "mega-mobile-menu menu-open" : "mega-mobile-menu"}
      >
        <SidebarHeader>
          <div className="logo position-static">
            <a href="index.html">
              <img src="/images/logo/deski_07.svg" alt="home-demo" />
            </a>
          </div>
          <div className="fix-icon text-dark" onClick={handleClick}>
            <img src="images/icon/close-w.svg" alt="icon" />
          </div>
          {/* Mobile Menu close icon */}

          {/* End logo */}
        </SidebarHeader>
        <SidebarContent>
          <Menu>
            <SubMenu title="Web4">
              {Web4Dropdown.map((val, i) => (
                <MenuItem key={i}>
                  <Link to={val.routerPath}>{val.name}</Link>
                </MenuItem>
              ))}
            </SubMenu>
            {/* End Home SubMenu */}

            <SubMenu title="Technology">
              {Technology.map((val, i) => (
                <MenuItem key={i}>
                  <Link to={val.routerPath}>{val.name}</Link>
                </MenuItem>
              ))}
            </SubMenu>
            {/* End Portfolio SubMenu */}
            <MenuItem>
              <Link to="/dao">DAO</Link>
            </MenuItem>
            <SubMenu title="Build">
              {Build.map((val, i) => (
                <MenuItem key={i}>
                  <Link to={val.routerPath}>{val.name}</Link>
                </MenuItem>
              ))}
            </SubMenu>
            {/* End Blogs SubMenu */}

            <SubMenu title="BitcoinIQ">
              {Docs.map((val, i) => (
                <MenuItem key={i}>
                  <Link to={val.routerPath}>{val.name}</Link>
                </MenuItem>
              ))}
            </SubMenu>
            {/* End Docs SubMenu */}
            <MenuItem>
              <Link to="/roadmap">Roadmap</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/manifesto">Manifesto</Link>
            </MenuItem>
            <MenuItem>
              <Link to="https://dash.bitwebs.org">Dashboard</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/paper">Read Paper</Link>
            </MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
};

export default MegaMenuMobile;
