export interface SiteText {
  slogan: string
  nav: {
    food: string
    beverages: string
    supplements: string
    classes: string
    contact: string
  }
  address1: string
  address2: string
  phone: string
  email: string
  featuredCaption: string
  foodTitle: string
  foodCaption: string
  beveragesTitle: string
  supplementsTitle: string
  supplementCaption1: string
  supplementCaption2: string
  supplementCaption3: string
  zumbaTitle: string
  zumbaInstructorTitle: string
  zumbaBio1: string
  zumbaBio2: string
  zumbaBio3: string
  zumbaScheduleTitle: string
  days: {
    monday: string
    wednesday: string
    saturday: string
  }
  hoursTitle: string
  hoursMonFri: string
  hoursMonFriTime: string
  hoursSat: string
  hoursSatTime: string
  hoursSun: string
  hoursSunValue: string
  locationTitle: string
  contactTitle: string
  copyright: string
  madeWith: string
  madeBy: string

  // Alt texts & aria labels
  alt: {
    headerLogo: string
    fullLogo: string
    storeFront: string
    foodPhoto: string
    beveragePhoto: string
    supplement: string
    vitamins: string
    herbalifePack: string
    zumbaTeacher: string
    usaFlag: string
    spainFlag: string
  }
  aria: {
    toggleMenu: string
    switchToEnglish: string
    switchToSpanish: string
  }
  lang: {
    englishTitle: string
    spanishTitle: string
    enLabel: string
    esLabel: string
  }

  // Brand & credits
  brandName: string
  headerTextPt1: string
  headerTextPt2: string

  // Schedule times
  schedule: {
    mondayTime: string
    wednesdayTime: string
    saturdayTime: string
  }

  // Social
  social: {
    instagram: string
    facebook: string
    googleMaps: string
  }
}
