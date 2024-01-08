import axios from "axios";

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

export const reviewAPIClient = axios.create({
  baseURL: "https://reviewservice-production.up.railway.app/api/v1/reviews",
  headers: {
    "Content-Type": "application/json",
  },
});
