export interface Medicine {
  id: string;
  name: string;
  slug: string;
  manufacturer: string;
  categoryId: string;
  category: string;
  price: number;
  discountPrice: number;
  stock: number;
  rating: number;
  reviewsCount: number;
  image: string;
  prescriptionRequired: boolean;
  description: string;
  dosage: string;
  benefits: string[];
  ingredients: string[];
  howToUse: string;
  sideEffects: string[];
  storage: string;
}

export interface CartItem {
  medicine: Medicine;
  quantity: number;
}
