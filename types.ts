export interface SalonLocation {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  size: 'large' | 'small' | 'tall';
}

export interface NavLink {
  label: string;
  href: string;
}