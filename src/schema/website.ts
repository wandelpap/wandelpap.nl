import { type WebSite } from "schema-dts";

import basPeeters from "./bas-peeters";
import wandelpap from "./wandelpap";

export default <WebSite>{
  "@context": "https://schema.org/",
  "@type": "WebSite",
  url: "https://wandelpap.nl/",
  name: "Wandelpap",
  about: wandelpap,
  creator: basPeeters,
};
