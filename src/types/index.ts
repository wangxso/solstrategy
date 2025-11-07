// Company Information Types
export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  headquarters: string;
  foundedYear: number;
  coreValues: string[];
}

export interface Address {
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

export interface BusinessHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday?: string;
  sunday?: string;
}

export interface ContactInfo {
  address: Address;
  phone: string;
  email: string;
  businessHours: BusinessHours;
}

// Navigation Types
export interface NavigationItem {
  label: string;
  path: string;
  children?: NavigationItem[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

// Component Props Types
export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  size: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
}

export interface CardProps {
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  padding?: 'sm' | 'md' | 'lg';
  rounded?: boolean;
}

export interface HeaderProps {
  transparent?: boolean;
  fixed?: boolean;
}

// Business Service Types
export interface Service {
  id: string;
  name: string;
  category: 'pr' | 'investment' | 'security';
  description: string;
  features: string[];
  icon: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

// Hero Section Types
export interface ButtonConfig {
  text: string;
  link: string;
  variant: 'primary' | 'secondary' | 'outline';
}

export interface HeroContent {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaButton: ButtonConfig;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  service?: string;
}

// Team Member Types
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  avatar: string;
  expertise: string[];
}

// Error Handling Types
export interface ValidationError {
  field: string;
  message: string;
  code: string;
}

export interface ApiError {
  message: string;
  code: number;
  details?: Record<string, unknown>;
}

export interface NetworkError {
  message: string;
  type: 'timeout' | 'offline' | 'server';
}

// SEO Types
export interface PageMeta {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

export interface OrganizationSchema {
  "@type": "Organization";
  name: string;
  url: string;
  logo: string;
  address: Address;
  contactPoint: ContactInfo;
}