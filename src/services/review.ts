import { APIClient } from "./apiClient";

export type ReviewType = {
  id: number;
  user_id: string;
  prod_id: string;
  rating: number;
  review_text: string;
  is_deleted?: boolean;
  created_at?: Date;
  modified_at?: Date;
};

export const reviewService = new APIClient<ReviewType>(`/reviews/`);

export const reviewServiceForUser = new APIClient<ReviewType>(
  `/reviews/products/`
);

export const reviewServiceForProduct = (productId: string) =>
  new APIClient<ReviewType>(`/reviews/products/${productId}/`);
