import { useState } from "react";
import { FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Space from "../../components/Space";
import apiClient from "../../services/apiClient";
import { useStoreProgressContext } from "../../store/contexts/store-progress";
import { StoreFormData } from "../../utils/types";
import BrandFields from "./BrandField";
import ContactFields from "./ContactFields";
import SocialFields from "./SocialFields";
import { validate } from "./formValidationUtils";

interface Props {
  stepName: string;
  isLastStep: boolean;
  methods: any;
}
const StoreCreateForm = ({ stepName, isLastStep, methods }: Props) => {
  const { stepIndex, setStepIndex } = useStoreProgressContext();

  const { handleSubmit, trigger, getFieldState, getValues } = methods;

  const [isCreatingStore, setIsCreatingStore] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data: StoreFormData) => {
    setIsCreatingStore(true);

    const formData = new FormData();
    formData.append("owner", "developer");
    formData.append("name", data.storeName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("slug", data.slug);
    formData.append("logo_img_url", data.logo[0]);
    formData.append("banner_img_url", data.banner[0]);
    formData.append("website", "https://www.khemshield.com");
    formData.append("address", data.address);
    formData.append("description", data.description);
    formData.append("business_license_number", data.businessRCNumber);
    formData.append("agreement", data.agreement + "");

    // const newStore = {
    //   owner: "developer",
    //   name: data.storeName,
    //   email: data.email,
    //   phone: data.phone,
    //   slug: data.slug,
    //   logo_img_url: data.logo[0],
    //   banner_img_url: data.banner[0],
    //   website: "https://www.khemshield.com",
    //   address: data.address,
    //   description: data.description,
    //   business_license_number: data.businessRCNumber,
    //   agreement: data.agreement,
    // };

    console.log("formData: ", getValues());

    try {
      const createdStore = await apiClient.post("/api/v1/stores", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("createdStore by backend", createdStore);

      navigate("/stores/slug");
    } catch (err) {
      setIsCreatingStore(false);
      console.log("Something went wrong", err);
    }

    setIsCreatingStore(false);

    // if (isValid) navigate("/stores/" + data);
  };

  //   const validate = async (infoData: "contact" | "brand" | "socials") => {
  //     switch (infoData) {
  //       case "contact":
  //         await trigger(["firstName", "lastName", "email", "phone", "address"]);

  //         if (
  //           getFieldState("firstName").invalid ||
  //           getFieldState("lastName").invalid ||
  //           getFieldState("email").invalid ||
  //           getFieldState("phone").invalid ||
  //           getFieldState("address").invalid
  //         ) {
  //           return false;
  //         } else return true;

  //       case "brand":
  //         await trigger(["storeName", "businessRCNumber", "slug", "description"]);
  //         if (
  //           getFieldState("storeName").invalid ||
  //           getFieldState("businessRCNumber").invalid ||
  //           getFieldState("slug").invalid ||
  //           getFieldState("description").invalid
  //         ) {
  //           return false;
  //         } else return true;

  //       case "socials":
  //         await trigger(["facebookLink", "igLink", "xLink"]);
  //         if (
  //           getFieldState("facebookLink").invalid ||
  //           getFieldState("igLink").invalid ||
  //           getFieldState("xLink").invalid
  //         ) {
  //           return false;
  //         } else return true;
  //     }
  //   };

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
