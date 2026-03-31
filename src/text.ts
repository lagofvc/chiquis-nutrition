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
}

export const englishText: SiteText = {
  // Header
  slogan: 'Your Daily Boost Starts Here',

  // Navigation
  nav: {
    food: 'Food',
    beverages: 'Beverages',
    supplements: 'Supplements',
    classes: 'Classes',
    contact: 'Contact Us',
  },

  // Hero / Logo section
  address1: '8028 SE Powell Blvd. Ste. #106',
  address2: 'Portland, OR 97206',
  phone: '(503) 935-6027',
  email: 'chiquisnutritionpdx@gmail.com',

  // Featured store image
  featuredCaption:
    "Chiqui's Nutrition in the SE Portland area is a health food spot serving protein shakes, bowls, waffles, and energy teas, post-workout fuel options focusing on fitness-oriented nutrition.",

  // Food section
  foodTitle: 'Food',
  foodCaption:
    'Our fresh variety of menu perfect for those looking to maintain a balance diet with delicious, nutrient-protein shakes and smoothies, Cleanse, Energy and rejuvenate Teas',

  // Beverages section
  beveragesTitle: 'Beverages',

  // Supplements section
  supplementsTitle: 'Supplements',
  supplementCaption1: 'Boost your immune health with our Vitamins and Herbalife Supplements',
  supplementCaption2:
    'High-quality nutritional supplements to support your wellness goals. We have everything you need to optimize your health.',
  supplementCaption3:
    'Fuel your workouts with high-energy drinks designed to maximize performance and endurance.',

  // Zumba section
  zumbaTitle: 'Zumba Classes',
  zumbaInstructorTitle: 'About Instructor Maribel Zuñiga',
  zumbaBio1:
    'I worked at a manufacturing company until one day I had a terrible accident that fractured a disc in my back. I went through four surgeries and couldn\'t walk for six years. During that time, I had to use a cane and my weight went up to 185 pounds. After my last surgery, I met a woman who invited me to try a Zumba class. I thought, "Why not try?" From that moment on, everything started to change. Little by little, I began dancing again. Niki supported and encouraged me every step of the way on my journey to becoming an instructor.',
  zumbaBio2:
    "Today, I have been a Zumba instructor for 14 years. Like everyone, I have faced obstacles and difficult moments, but with God's help and the right motivation, I was able to overcome them. Life brings challenges for all of us, but Zumba helped free me from stress while getting in shape and enjoying the joy of dancing. If I can do it, you can too. Never give up on yourself.",
  zumbaBio3: '💃 First Class Always Free!',
  zumbaScheduleTitle: 'Class Schedule',
  days: {
    monday: 'Monday',
    wednesday: 'Wednesday',
    saturday: 'Saturday',
  },

  // Footer
  hoursTitle: 'Hours',
  hoursMonFri: 'Mon - Fri',
  hoursMonFriTime: '6AM - 1PM & 6PM - 9PM',
  hoursSat: 'Sat',
  hoursSatTime: '7AM - 1PM',
  hoursSun: 'Sun',
  hoursSunValue: 'Closed',
  locationTitle: 'Location',
  contactTitle: 'Contact',
  copyright: "All rights reserved.",
  madeWith: 'Made with',
  madeBy: 'by',
}

export const spanishText: SiteText = {
  // Header
  slogan: 'Tu Impulso Diario Comienza Aquí',

  // Navigation
  nav: {
    food: 'Comida',
    beverages: 'Bebidas',
    supplements: 'Suplementos',
    classes: 'Clases',
    contact: 'Contáctanos',
  },

  // Hero / Logo section
  address1: '8028 SE Powell Blvd. Ste. #106',
  address2: 'Portland, OR 97206',
  phone: '(503) 935-6027',
  email: 'chiquisnutritionpdx@gmail.com',

  // Featured store image
  featuredCaption:
    "Chiqui's Nutrition, ubicado en el sureste de Portland, es un lugar de comida saludable que sirve batidos de proteína, bowls, waffles y tés energizantes, opciones ideales para después del entrenamiento con enfoque en nutrición para el fitness.",

  // Food section
  foodTitle: 'Comida',
  foodCaption:
    'Nuestra fresca variedad de menú perfecta para quienes buscan mantener una dieta equilibrada con deliciosos batidos y smoothies ricos en proteínas, Tés de limpieza, energía y rejuvenecimiento.',

  // Beverages section
  beveragesTitle: 'Bebidas',

  // Supplements section
  supplementsTitle: 'Suplementos',
  supplementCaption1: 'Refuerza tu sistema inmune con nuestras Vitaminas y Suplementos Herbalife',
  supplementCaption2:
    'Suplementos nutricionales de alta calidad para apoyar tus objetivos de bienestar. Tenemos todo lo que necesitas para optimizar tu salud.',
  supplementCaption3:
    'Impulsa tus entrenamientos con bebidas de alta energía diseñadas para maximizar el rendimiento y la resistencia.',

  // Zumba section
  zumbaTitle: 'Clases de Zumba',
  zumbaInstructorTitle: 'Sobre la Instructora Maribel Zuñiga',
  zumbaBio1:
    'Trabajé en una empresa manufacturera hasta que un día tuve un terrible accidente que me fracturó un disco en la espalda. Pasé por cuatro cirugías y no pude caminar durante seis años. Durante ese tiempo, tuve que usar un bastón y mi peso subió a 185 libras. Después de mi última cirugía, conocí a una mujer que me invitó a probar una clase de Zumba. Pensé: "¿Por qué no intentarlo?" Desde ese momento, todo comenzó a cambiar. Poco a poco, volví a bailar. Niki me apoyó y animó en cada paso de mi camino para convertirme en instructora.',
  zumbaBio2:
    'Hoy llevo 14 años siendo instructora de Zumba. Como todos, he enfrentado obstáculos y momentos difíciles, pero con la ayuda de Dios y la motivación correcta, pude superarlos. La vida nos presenta desafíos a todos, pero el Zumba me ayudó a liberarme del estrés mientras me ponía en forma y disfrutaba la alegría del baile. Si yo pude, tú también puedes. Nunca te rindas.',
  zumbaBio3: '💃 ¡Primera Clase Siempre Gratis!',
  zumbaScheduleTitle: 'Horario de Clases',
  days: {
    monday: 'Lunes',
    wednesday: 'Miércoles',
    saturday: 'Sábado',
  },

  // Footer
  hoursTitle: 'Horario',
  hoursMonFri: 'Lun - Vie',
  hoursMonFriTime: '6AM - 1PM & 6PM - 9PM',
  hoursSat: 'Sáb',
  hoursSatTime: '7AM - 1PM',
  hoursSun: 'Dom',
  hoursSunValue: 'Cerrado',
  locationTitle: 'Ubicación',
  contactTitle: 'Contacto',
  copyright: 'Todos los derechos reservados.',
  madeWith: 'Hecho con',
  madeBy: 'por',
}
