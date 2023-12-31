import { Controller, FormProvider, useForm } from "react-hook-form";
import StarRating from "../StarRating/StarRating";
import Heading from "../Heading";
import Card from "../Card";
import Button from "../Button";
import apiClient from "../../services/apiClient";
import useAuth from "../../hooks/useAuth";
import Space from "../Space";

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
  const methods = useForm<ReviewType>();
  const { handleSubmit, control } = methods;
  const { user, isAuthenticated } = useAuth();

  const onSubmit = async (data: ReviewType) => {
    if (user && isAuthenticated()) {
      const revievewData = {
        ...data,
        prod_id: productId,
      };
      console.log("Submitted Review: ", revievewData, "user", user);
      try {
        const responseReview = await apiClient.post(
          `/reviews/user/${user.id}/`
        );
        console.log("responseReview", responseReview);
      } catch (error) {
        console.log("Review Error", error);
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
          <div className="pl-8">
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
              styles="w-full bg-fyellow text-white text-sm font-semibold"
              variant="elevated"
            >
              Submit Review
            </Button>
            <Space spacing="my-2" />
          </div>
        </Card>
      </form>
    </FormProvider>
  );
};

export default ReviewRating;
