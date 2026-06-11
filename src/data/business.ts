export const business = {
  name: "Bellahøj Cykler",
  tagline: "Din lokale cykelhandler i Brønshøj",
  address: "Frederikssundsvej 114B, 2700 Brønshøj",
  city: "København",
  phone: "+45 50 35 66 89",
  phoneDisplay: "50 35 66 89",
  phoneHref: "tel:+4550356689",
  email: "post@bellacykel.dk",
  emailHref: "mailto:post@bellacykel.dk",
  cvr: "35066217",
  rating: 4.8,
  facebook: "https://www.facebook.com/profile.php?id=61572635031221",
  mapsEmbed:
    "https://www.google.com/maps?q=Frederikssundsvej+114B,+2700+Br%C3%B8nsh%C3%B8j&output=embed",
  hours: [
    { days: "Mandag – Fredag", time: "10:00 – 18:00" },
    { days: "Lørdag", time: "10:00 – 15:00" },
    { days: "Søndag", time: "Lukket" },
  ],
  brands: [
    "Van de Falk",
    "Winther",
    "Nishiki",
    "AM",
    "Excelsior",
    "Ebsen",
    "Principia",
    "Kayza",
    "Centurion",
    "BHC",
  ],
  usps: [
    {
      title: "Gratis første service",
      text: "Ved køb af ny cykel hos os får du det første eftersyn uden beregning.",
    },
    {
      title: "Lånecykel under reparation",
      text: "Skal din cykel på værksted, kan du låne en cykel imens.",
    },
    {
      title: "4,8 ★ på Google",
      text: "Vores kunder giver os topkarakter for service og kvalitet.",
    },
    {
      title: "MobilePay & kort",
      text: "Betal nemt i butikken med MobilePay eller betalingskort.",
    },
  ],
} as const;
