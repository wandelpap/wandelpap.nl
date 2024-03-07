import { type TouristTrip } from "schema-dts";

import wandelpap from "../wandelpap";

export default <TouristTrip>{
  "@context": "https://schema.org/",
  "@type": "TouristTrip",
  name: "De Kleine Dommel en Pannenkoeken (5km)",
  description:
    "Ontdek de schoonheid van de Kleine Dommel tijdens onze begeleide wandeling. Laat je onderdompelen in de natuurlijke pracht terwijl onze je wordt meegenomen langs schilderachtige paden en weelderige bossen. Na de verkenningstocht kun je genieten van ambachtelijke pannenkoeken.",
  image: "@@/assets/img/geeneindsche-heide.jpg",
  provider: wandelpap.url,
  url: "/wandeltochten/de-kleine-dommel-en-pannenkoeken-5km",
};
