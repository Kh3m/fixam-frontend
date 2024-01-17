import { Controller, FormProvider, useForm } from "react-hook-form";
import StarRating from "../StarRating/StarRating";
import Heading from "../Heading";
import Card from "../Card";
import Button from "../Button";
import useAuth from "../../hooks/useAuth";
import Space from "../Space";
import { useState } from "react";
import Spinner from "../Spinner";
import { useQueryClient } from "@tanstack/react-query";
import apiClient from "../../services/apiClient";

type ReviewType = {
  prod_id: string;
  rating: number;
  review_text: string;
  is_deleted?: boolean;
};

interface Props {
  productId: string;
}

const ReviewRating = ({ productId }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const methods = useForm<ReviewType>();
  const { handleSubmit, control } = methods;
  const { userInfo, isAuthenticated } = useAuth();

  const queryClient = useQueryClient();

  const onSubmit = async (data: ReviewType) => {
    setIsLoading(true);
    if (userInfo && isAuthenticated()) {
      const revievewData = {
        review_text: data.review_text,
        rating: data.rating,
        prod_id: productId,
      };
      try {
        const responseReview = await apiClient.post(
          `/reviews/user/${userInfo.user.id}/`,
          revievewData
        );
        console.log("responseReview", responseReview);
        setIsLoading(false);

        // TODO: Remove after DEMO
        queryClient.invalidateQueries();

        // navigate("/Laptops/product/");
      } catch (error) {
        console.log("Review Error", error);
        setIsLoading(false);

        // TODO: Remove after DEMO
        queryClient.invalidateQueries();
        // navigate("/Laptops/product/");
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <div className="flex items-center space-x-4">
            <Heading variant="h3" styles="font-semibold text-base">
              Write a Review
            </Heading>
            <Controller
              name="rating"
              control={control}
              render={() => <StarRating />}
            />
          </div>
          <div>
            <Controller
              name="review_text"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  className="p-4 border border-fgrey rounded-lg outline-fyellow w-full h-20"
                  style={{ resize: "none" }}
                ></textarea>
              )}
            ></Controller>
            <Button
              styles="w-full bg-fyellow text-white text-sm font-semibold
              flex justify-center items-center space-x-4"
              variant="elevated"
              disabled={isLoading}
            >
              <span>Submit Review</span> {isLoading && <Spinner />}
            </Button>
            <Space spacing="my-2" />
          </div>
        </Card>
      </form>
    </FormProvider>
  );
};

export default ReviewRating;
