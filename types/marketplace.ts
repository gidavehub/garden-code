// app/types/marketplace.ts
import { FieldValue } from "firebase/firestore";

export type ListingCategory = 'physical' | 'digital' | 'service';
export type ListingCondition = 'new' | 'like-new' | 'used' | 'n/a';
export type ListingStatus = 'active' | 'sold' | 'archived';

export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  category: ListingCategory;
  condition: ListingCondition;
  imageUrls: string[];
  
  sellerId: string; // The user's email
  sellerName: string; // Denormalized for quick display
  sellerProfilePicture: string | null; // Denormalized

  school: string | null; // School affiliation for local filtering
  subject: string | null; // e.g., for tutoring or study materials
  
  status: ListingStatus;
  createdAt: FieldValue | Date;
  isFeatured?: boolean;
}