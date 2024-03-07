import { type Offer, type OfferCatalog } from "schema-dts";

import deKleineDommelEnPannenkoeken from "./trips/de-kleine-dommel-en-pannenkoeken";

export default <OfferCatalog>{
  "@context": "https://schema.org/",
  "@type": "OfferCatalog",
  name: "Guided hiking tours",
  itemListElement: [
    <Offer>{
      "@type": "Offer",
      itemOffered: deKleineDommelEnPannenkoeken,
    },
  ],
};
