export interface Iproduct {
  title: string,
  title_ar: string,
  brand: string,
  brand_ar: string,
  category: string,
  category_ar: string,
  description: string;
  description_ar: string;
  price: string,
  rating?: {
      rate?: string,
      rateNumber?: string,
      likes: string,
      reviews: string[]
  },
  quantity: string,
  mImage: string,
  aImages: string[]
}
