// Environment variables and constants
export const CONFIG = {
  // Contact Information
  PHONE_PRIMARY: import.meta.env.VITE_PHONE_PRIMARY || "+91 9599476155",
  PHONE_SECONDARY: import.meta.env.VITE_PHONE_SECONDARY || "+91 8369597935",
  WHATSAPP_NUMBER: import.meta.env.VITE_WHATSAPP_NUMBER || "919599476155",
  EMAIL: import.meta.env.VITE_EMAIL || "info@flexiglobalholiday.in",
  OFFICE_PHONE: import.meta.env.VITE_OFFICE_PHONE || "+91 9599476155",
  
  // Office Addresses
  CORPORATE_OFFICE: {
    address: "Ho- 9 floor,919 Shekhar Central , Palasia, Indore",
    phone: "+91 9599476155",
    email: "info@flexiglobalholiday.in"
  },
  BRANCH_OFFICE: {
    address: "Bo- A,704,Sai Shraddha CHS Phase 1,Daisar East Mumbai"
  },
  THAILAND_OFFICE: {
    address: "บ้าน, มบ.วรรณทิพย์ 1, เลขที่ 67/33 Noen Plubwan Rd, Bang Lamung District, Chon Buri 20150, Thailand"
  },
  
  // Social Media
  WHATSAPP_MESSAGE: "Hello! I'm interested in your travel packages.",
  
  // Business Info
  BUSINESS_NAME: "Flexi Global Holidays",
  BUSINESS_TYPE: "Travel Agency",
  FOUNDED_YEAR: "2016",
  
  // SEO
  SITE_URL: import.meta.env.VITE_SITE_URL || "https://flexiglobalholidays.in",
};

