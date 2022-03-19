import React from "react";

// Main 
import Main from "../views/pages/Main";

// All Web4 Routes
import ParticalizedDataDistribution from "../views/pages/ParticalizedDataDistribution";
import Decentralized from "../views/pages/Decentralized";
import CensorshipResistant from "../views/pages/CensorshipResistant";
import UserControlledPrivacy from "../views/pages/UserControlledPrivacy";
import CommunityGovernedApplications from "../views/pages/CommunityGovernedApplications";
import GloballyScaleableApplications from "../views/pages/GloballyScaleableApplications";
import TransportAgnostic from "../views/pages/TransportAgnostic";
import UserControlledIdentity from "../views/pages/UserControlledIdentity";
import ApplicationInteroperability from "../views/pages/ApplicationInteroperability";


// All Technology Routes
import BitProtocol from "../views/pages/BitProtocol";
import BitDht from "../views/pages/BitDht";
import BitSwarm from "../views/pages/BitSwarm";
import Unichains from "../views/pages/Unichains";
import BitTries from "../views/pages/BitTries";
import BitTrees from "../views/pages/BitTrees";
import BitDrives from "../views/pages/BitDrives";
import BitStream from "../views/pages/BitStream";
import MultiTrees from "../views/pages/MultiTrees";
import SmartChains from "../views/pages/SmartChains";
import BitNames from "../views/pages/BitNames";
import Horiz0n from "../views/pages/Horiz0n";

// Build Routes
import DevTools from "../views/inner-pages/features/DevTools";
import BuildDapp from "../views/inner-pages/features/BuildApp";

// DAO Routes
import Dao from "../views/pages/Dao";

// BIQ Routes 
import BIQ from "../views/pages/Biq";
import BIQWallets from "../views/pages/BiqWallets";
import BIQExchanges from "../views/pages/BiqExchanges";

// Other Routes
import Paper from "../views/inner-pages/features/Paper";
import Manifesto from "../views/inner-pages/features/Manifesto";
import Roadmap from "../views/inner-pages/other/Roadmap";
import Browse  from "../views/inner-pages/features/Browse";

// Not Found Page
import NotFound from "../views/NotFound";

// Route Specific
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/web4/particalized-data-distribution" component={ParticalizedDataDistribution} />
          <Route path="/web4/decentralized-serverless-green" component={Decentralized} />
          <Route path="/web4/censorship-resistant" component={CensorshipResistant} />
          <Route path="/web4/user-controlled-privacy" component={UserControlledPrivacy} />
          <Route path="/web4/community-governed-applications" component={CommunityGovernedApplications} />
          <Route path="/web4/globally-scaleable-applications" component={GloballyScaleableApplications} />
          <Route path="/web4/transport-agnostic" component={TransportAgnostic} />
          <Route path="/web4/user-controlled-identity" component={UserControlledIdentity} />
          <Route path="/web4/application-interoperability" component={ApplicationInteroperability} />
          
          <Route path="/technology/bit-protocol" component={BitProtocol} />
          <Route path="/technology/bitdht" component={BitDht} />
          <Route path="/technology/bitswarm" component={BitSwarm} />
          <Route path="/technology/unichains" component={Unichains} />
          <Route path="/technology/bittries" component={BitTries} />
          <Route path="/technology/bittrees" component={BitTrees} />
          <Route path="/technology/bitdrives" component={BitDrives} />
          <Route path="/technology/bitstream-and-multichains" component={BitStream} />
          <Route path="/technology/multitrees" component={MultiTrees} />
          <Route path="/technology/smartchains" component={SmartChains} />
          <Route path="/technology/bitnames" component={BitNames} />
          <Route path="/technology/horiz0n" component={Horiz0n} />
          
          <Route path="/dao" component={Dao} />
          
          <Route path="/biq" component={Biq} />
          <Route path="/biq/wallets" component={BiqWallets} />
          <Route path="/biq/exchanges" component={BiqExchanges} />
          
          <Route path="/build/tools" component={DevTools} />
          <Route path="/build/dapp" component={BuildDapp} />
          
          <Route path="/paper" component={Paper} />
          <Route path="/browse" component={Browse} />
          <Route path="/manifesto" component={Manifesto} />
          
          <Route path="/404" component={NotFound} />

          {/* NotFound Route */}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
