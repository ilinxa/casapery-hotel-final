import { RichText } from "../components/BlockRenderer";
export interface CTAType {
  id: number;
  label: string;
  href?: string;
  whatsApp_number?: string;
  isButtonLink: boolean;
  isWhatsApp: boolean;
  btnType?: string;
}
export interface AboutSectionTypes {
  image_1: ImgType,
  image_2: ImgType,
  tagline: string,
  title: string,
  description_1: string,
  description_2: string,
  bottomTagline: string
  cta: CTAType
  
}

export interface TagType {
  documentId: string;
  id: number;
  title: string;
  description: string;
}
export interface journalPostsDataType {
  ShortContent: string;
  blockText?:RichText[];
  category: string;
  creator:string;
  featured: boolean;
  image: ImgType;
  journal_tags: TagType[]
  readTime: string;
  date: string;
  documentId: string;
  id: number;
  slug: string;
  title: string;
  description: string;
}



export interface HeroPropsType {
  heroImg: string,
  tagLine: string,
  title: string,
  herocard: {
    image: string,
    title?: string,
    description?: string
  }[]

}
export interface ImgType {
  url: string,
  id: number
  alternativeText?: string,
  documentId: string
}
export interface HeroCardType {
  id: number,
  title?: string,
  description?: string
  image: ImgType
}
export interface HeroBlockType {
  tagLine: string,
  title: string,
  heroImg: ImgType
  herocard?: HeroCardType[]

}


export interface JournalPost {
  ShortContent: string;
  category: string;
  creator: string;
  documentId: string;
  id: number;
  image: ImgType;
  journal_tags: TagType[];
  readTime: string;
  slug: string;
  title: string;
  date: string;
  featured: boolean;
}

interface FileType{
  id: number;
  documentId: string;
  alternativeText?: string;
  url: string
}
export interface FileDownloaderType{
  externalFile:boolean;
  file: FileType;
  label: string;
  fileUrl?: string;
  id: number;
}
// export interface CTASectionProps {
//   description: string;
//   id: number;
//   fileDownloader?:FileDownloaderType;
//   image?: ImgType;
//   tagline: string;
//   title: string;
//   cta?: CTAType
// }


export interface JournalPageProps {
  bgImage: ImgType;
  title: string;
  tagline: string;
  description: string;
  journals: JournalPost[];

}

export interface ServiceSectionProps {
    title:string
    tagline:string
    serviceCard: {
    icon: string
    label: string
    description: string
    }[]
}

// ------------------------------ journal -------------------------------
// export interface JournalPost {
//   id: number
//   title: string
//   excerpt: string
//   content: string
//   image: string
//   author: string
//   date: string
//   readTime: string
//   category: string
//   tags: string[]
// }[]


// ------------------------------ Room -------------------------------
export interface FeaturesType {
  id: number;
  label: string
}
export interface RoomType {
  category: string;
  description: string;
  features?: FeaturesType[];
  id: number;
  image: ImgType;
  name: string;
  occupancy: string;
  price: string;
  priceUnit: string;
  size: string;
  rating: number;
  popular?: boolean;   // <-- optional
}

export interface RoomSectionType {
    id: number;
    tagline: string;
    title: string;
    room:RoomType[];
    cta: CTAType
}

export interface RoomCardProps {
  room: RoomType
  isSelected: boolean;
  isHovered: boolean;
  onClick: () => void;
  onHover: () => void;
  onLeave: () => void;
  stagger?: boolean;
}

// ------------------------------ global -------------------------------
interface ImageType{
  documentId: string;
  id: number;
  url: string;
  alternativeText?: string;
}
interface LogoLinkType{
  logo: ImageType;
  href: string;
  id: number;
  isExternal: boolean;
  label: string
}
export interface NavItemsType{
  label: string
  isPage: boolean
  pageLink?: string   // for internal routes
  href?: string 
}
export interface HeaderDataType{
  id?: number;
  cta?: CTAType;
  logo?: LogoLinkType;
  navItems?:NavItemsType[]

}

export type NavLinkProps = {
  navItems: NavItemsType
    // for external / hash links
  onClick?: () => void
}

// ------------------------------ event section -------------------------------
export interface BulletPointType {
  id: number;
  text: string;
  
}
export interface EventSectionProps {
  
__component:string
  bgImage: ImgType;
  bulletPoints?: BulletPointType[];
  cta?: CTAType
  description: string;
  id: number;
  image: ImgType;
  isActive: boolean;
  title: string;
  label: string
}
// ------------------------------ customer experiences -------------------------------
export interface ExperienceNoteType {
id: number
date: string
image: ImgType
name: string
note: string
title: string
}
export interface CustomerExperiencesProps {
id: number
tagline: string
title: string
notes: ExperienceNoteType[]  
}
// ------------------------------ section header -------------------------------
export interface SectionHeaderProps {
    tagline: string
    title: string
    description?: string
}
// ------------------------------ buttom blr -------------------------------
export interface ButtonBlrProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  loading?: boolean;
  loadingText?: string;
  children?: React.ReactNode;
}

export interface JournalCardType {
  ShortContent: string;
  blockText: [];
  category:string;
  creator: string;
  date:string;
  documentId: string;
  featured:true;
  id: number;
  image: ImgType;
  journal_tags: TagType[]
  
  readTime:number
  slug: string;
  title: string
}
export interface JurnalSectionTypes {
  id: number,
  tagline: string
  title: string
  journals: JournalCardType[]
}