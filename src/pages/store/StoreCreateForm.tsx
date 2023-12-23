import { useState } from "react";
import { FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Space from "../../components/Space";
import apiClient from "../../services/apiClient";
import { useStoreProgressContext } from "../../contexts/store-progress";
import { StoreType } from "../../entities/store";
import BrandFields from "./BrandField";
import ContactFields from "./ContactFields";
import SocialFields from "./SocialFields";
import { validate } from "./formValidationUtils";
import useAuth from "../../hooks/useAuth";

interface Props {
  stepName: string;
  isLastStep: boolean;
  methods: any;
}
const StoreCreateForm = ({ stepName, isLastStep, methods }: Props) => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();

  const { stepIndex, setStepIndex } = useStoreProgressContext();
  const { handleSubmit, trigger, getFieldState, getValues } = methods;

  const [isCreatingStore, setIsCreatingStore] = useState(false);
  const formData = new FormData();

  const onSubmit = async (data: StoreType) => {
    setIsCreatingStore(true);

    if (isAuthenticated() && user) {
      formData.append("owner", user.id);

      formData.append("logo", data.logo);
      formData.append("banner", data.banner);
      formData.append("name", data.storeName);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append(
        "slug",
        data.storeName.split(" ").slice(0, 2).join("-").toLowerCase()
      );
      formData.append("website", "https://www.khemshield.com");
      formData.append("address", data.address);
      formData.append("description", data.description);
      formData.append("business_license_number", data.businessRCNumber);
      formData.append("agreement", data.agreement + "");
    }

    console.log("formData: ", getValues());

    try {
      const createdStore: StoreType = await apiClient.post(
        "/stores/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("createdStore by backend", createdStore);

      navigate("/stores/" + createdStore.slug);
    } catch (err) {
      setIsCreatingStore(false);
      console.log("Something went wrong", err);
    }

    setIsCreatingStore(false);
  };

  const handleProgress = async () => {
    let isStepValid = false;
    if (stepName === "contact")
      isStepValid = await validate("contact", getFieldState, trigger);

    if (stepName === "brand")
      isStepValid = await validate("brand", getFieldState, trigger);

    if (stepName === "socials")
      isStepValid = await validate("socials", getFieldState, trigger);

    if (!isLastStep && isStepValid) {
      setStepIndex((prevStepIndex) => {
        return prevStepIndex + 1;
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
