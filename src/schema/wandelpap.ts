import { type LocalBusiness } from "schema-dts";

import basPeeters from "./bas-peeters";

export default <LocalBusiness>{
  "@context": "https://schema.org/",
  "@type": "LocalBusiness",
  email: "wandelpap@gmail.com",
  name: "Wandelpap",
  founder: basPeeters,
  openingHours: "Fr 08:00-20:00",
  url: "https://wandelpap.nl",
};
