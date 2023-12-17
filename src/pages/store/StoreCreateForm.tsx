import Button from "../../components/Button";
import { FormProvider, useForm } from "react-hook-form";
import ContactFields from "./ContactFields";
import BrandFields from "./BrandField";
import SocialFields from "./SocialFields";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../services/apiClient";
import { useStoreProgressContext } from "../../store/contexts/store-progress";
import Space from "../../components/Space";
import { StoreFormData } from "../../utils/types";

interface Props {
  stepName: string;
  isLastStep: boolean;
  methods: any;
}
const StoreCreateForm = ({ stepName, isLastStep, methods }: Props) => {
  const { stepIndex, setStepIndex } = useStoreProgressContext();

  const {
    handleSubmit,
    formState: { errors },
    trigger,
    getFieldState,
  } = methods;

  const [isCreatingStore, setIsCreatingStore] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data: StoreFormData) => {
    setIsCreatingStore(true);

    const newStore = {
      owner: "developer",
      name: data.storeName,
      email: data.email,
      phone: data.phone,
      slug: data.slug,
      logo_img_url:
        "https://fixam-media.s3.eu-north-1.amazonaws.com/stores/3fa85f64-5717-4562-b3fc-2c963f66afa6/2023-12-12/my-cat.jpg",
      banner_img_url:
        "https://fixam-media.s3.eu-north-1.amazonaws.com/stores/3fa85f64-5717-4562-b3fc-2c963f66afa6/2023-12-12/my-cat.jpg",
      website: "https://www.khemshield.com",
      address: data.address,
      description: data.description,
      business_license_number: data.businessRCNumber,
      agreement: data.agreement,
    };

    try {
      const createdStore = await apiClient.post("/api/v1/stores", newStore, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/stores/slug");
    } catch (err) {
      setIsCreatingStore(false);
      console.log("Something went wrong", err);
    }

    setIsCreatingStore(false);

    // if (isValid) navigate("/stores/" + data);
  };

  const validate = async (infoData: "contact" | "brand" | "socials") => {
    switch (infoData) {
      case "contact":
        await trigger(["firstName", "lastName", "email", "phone", "address"]);

        if (
          getFieldState("firstName").invalid ||
          getFieldState("lastName").invalid ||
          getFieldState("email").invalid ||
          getFieldState("phone").invalid ||
          getFieldState("address").invalid
        ) {
          return false;
        } else return true;

      case "brand":
        await trigger(["storeName", "businessRCNumber", "slug", "description"]);
        if (
          getFieldState("storeName").invalid ||
          getFieldState("businessRCNumber").invalid ||
          getFieldState("slug").invalid ||
          getFieldState("description").invalid
        ) {
          return false;
        } else return true;

      case "socials":
        await trigger(["facebookLink", "igLink", "xLink"]);
        if (
          getFieldState("facebookLink").invalid ||
          getFieldState("igLink").invalid ||
          getFieldState("xLink").invalid
        ) {
          return false;
        } else return true;
    }
  };

  const handleProgress = async () => {
    let isStepValid = false;
    if (stepName === "contact") isStepValid = await validate("contact");

    if (stepName === "brand") isStepValid = await validate("brand");

    if (stepName === "socials") isStepValid = await validate("socials");

    if (!isLastStep && isStepValid) {
      setStepIndex((prevStepIndex) => {
        return prevStepIndex++;
      });
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {stepIndex + 1 === 1 && <ContactFields />}
        {stepIndex + 1 === 2 && <BrandFields />}
        {stepIndex + 1 === 3 && <SocialFields />}
        <Space spacing="my-14" />
        <div className="w-[80%] m-auto">
          {stepIndex === 2 ? (
            <Button
              type="submit"
              variant="elevated"
              styles="w-full text-center text-white font-semibold bg-fyellow py-4"
              noSizingClass
            >
              {isCreatingStore ? "Loading..." : "Become a Vendor"}
            </Button>
          ) : (
            <Button
              type="button"
              onClick={handleProgress}
              variant="span"
              styles="w-full text-center text-white font-semibold bg-fyellow py-4"
              noSizingClass
            >
              Proceed
            </Button>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default StoreCreateForm;
