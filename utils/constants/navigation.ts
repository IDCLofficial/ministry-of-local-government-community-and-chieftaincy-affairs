export interface NavLink {
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  {
    href: "/",
    label: "Home"
  },
  {
    href: "/about",
    label: "About Us"
  },
  {
    href: "/department",
    label: "Departments"
  },
  {
    href: "/services",
    label: "Services"
  },
  {
    href: "/projects",
    label: "Projects"
  },
  {
    href: "/news",
    label: "News"
  },
  {
    href: "/events",
    label: "Events"
  },
  {
    href: "/media",
    label: "Media"
  },
  {
    href: "/contact",
    label: "Contact Us"
  }
];

export const CONTACT_INFO = {
  address: "Block 5, State Secretariat Complex, Port Harcourt Road, Owerri, Imo State",
  email: "info@localgovt.im.gov",
  phone: "+234 803 123 4567",
  workingHours: "Monday – Friday (8:00am – 4:00pm)"
};

export const MINISTRY_INFO = {
  name: "Ministry of Local Government, Community & Chieftaincy Affairs",
  shortName: "MOLGCA",
  logo: "/images/logo.png",
  description: "Providing coordinated support to local governments, community development programs, and chieftaincy affairs that promote good governance, security, and development for all citizens in Imo State."
};
