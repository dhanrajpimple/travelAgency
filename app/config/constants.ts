// Environment variables and constants
export const CONFIG = {
  // Contact Information
  PHONE_PRIMARY: import.meta.env.VITE_PHONE_PRIMARY || "+91-7531987990",
  PHONE_SECONDARY: import.meta.env.VITE_PHONE_SECONDARY || "+91-7840009996",
  WHATSAPP_NUMBER: import.meta.env.VITE_WHATSAPP_NUMBER || "917531987990",
  EMAIL: import.meta.env.VITE_EMAIL || "info@leisurenmore.com",
  OFFICE_PHONE: import.meta.env.VITE_OFFICE_PHONE || "0120-4080660",
  
  // Office Addresses
  CORPORATE_OFFICE: {
    address: "B126, LOGIX TECHNOVA, Block B, Sector 132, Noida, Uttar Pradesh 201304",
    phone: "0120-4080660",
    email: "info@leisurenmore.com"
  },
  BRANCH_OFFICE: {
    address: "Shop No. 18, Ground Floor, Vasukamal Five Element Shivaji Nagar, Jalgaon, Maharashtra- 425001"
  },
  THAILAND_OFFICE: {
    address: "บ้าน, มบ.วรรณทิพย์ 1, เลขที่ 67/33 Noen Plubwan Rd, Bang Lamung District, Chon Buri 20150, Thailand"
  },
  
  // Social Media
  WHATSAPP_MESSAGE: "Hello! I'm interested in your travel packages.",
  
  // Business Info
  BUSINESS_NAME: "Leisure N More",
  BUSINESS_TYPE: "Travel Agency",
  FOUNDED_YEAR: "2016",
  
  // SEO
  SITE_URL: import.meta.env.VITE_SITE_URL || "https://www.leisurenmore.com",
};

