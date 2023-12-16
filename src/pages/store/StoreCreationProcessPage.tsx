import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Logo from "../../components/Logo";
import Main from "../../components/Main";
import ProcessBar from "../../components/ProgressBar/ProcessBar";
import Space from "../../components/Space";
import apiClient from "../../services/apiClient";
import BrandFields from "./BrandField";
import ContactFields from "./ContactFields";
import SocialFields from "./SocialFields";

interface FormData {
  // Contact
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;

  //   Store
  storeName: string;
  businessRCNumber: string;
  slug: string;
  logo: FileList | null;
  banner: FileList | null;
  description: string;

  //   Socials
  facebookLink: string;
  igLink: string;
  xLink: string;

  agreement: boolean;
}

const steps = ["Contact", "Brand", "Socials"];

const StoreCreationProcessPage = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [isCreatingStore, setIsCreatingStore] = useState(false);

  const navigate = useNavigate();

  const methods = useForm<FormData>({
    defaultValues: {
      //  Contact
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      //   Brand
      storeName: "",
      businessRCNumber: "",
      slug: "",
      logo: null,
      banner: null,
      description:
        "Performed yesterday along side crossda_boss at Davido’s concert in Abuja and also signed with Dorty Worldwide Entertainment.   The power of consistency is turning small steps into big victories. It's doing a little bit every day and seeing big results over time.   Consistency builds habits, and habits shape your future.   Stick with it, stay committed, and watch how little efforts add up to something amazing 🤩",
      //   Socials
      facebookLink: "https://www.facbook.com/",
      igLink: "https://www.instagram.com/",
      xLink: "https://www.twitter.com/",

      agreement: false,
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    trigger,
    getFieldState,
  } = methods;

  const onSubmit = async (data: FormData) => {
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

    console.log("onSubmit Called - Submitted Data", newStore);

    try {
      console.log("onSubmit Called - Submitted Data", newStore);
      const createdStore = await apiClient.post("/api/v1/stores", newStore);
      console.log("onSubmit Called - Submitted Data", data, data.slug, errors);
      console.log("onSubmit Called - Created Store", createdStore);
      navigate("/stores/slug");
    } catch (err) {
      setIsCreatingStore(false);
      console.log("Something went wrong", err);
    }

    setIsCreatingStore(false);

    // if (isValid) navigate("/stores/" + data);
  };

  const isLastStep = stepIndex + 1 > 3;
  const stepName: string = isLastStep ? "" : steps[stepIndex].toLowerCase();

  const handleStepClick = async (selectedStep: number) => {
    if (selectedStep === 1) setStepIndex(selectedStep - 1);
    if ((await validate("contact")) && selectedStep === 2)
      setStepIndex(selectedStep - 1);
    // Check to ensure previous steps are valid before moving to next steo
    if (
      (await validate("contact")) &&
      (await validate("brand")) &&
      selectedStep === 3
    )
      setStepIndex(selectedStep - 1);
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

    if (!isLastStep && isStepValid)
      setStepIndex((prevStepIndex) => {
        console.log("prevStepIndex++", prevStepIndex++);
        return prevStepIndex++;
      });
  };

  return (
    <Main>
      <Space spacing="my-14" />
      <Container>
        <section className="grid store-reg-grid justify-center items-center">
          <div className="w-[40%] opacity-80 ">
            <div className=" fixed top-[30%] bottom-0">
              <Link to="/">
                <Logo color="yellow" styles=" scale-125" />
              </Link>
            </div>
          </div>
          <Card styles="pagination-shadow w-[60%]">
            <Space spacing="my-14" />
            <section className="w-[80%] m-auto">
              <div className="w-[80%] m-auto">
                <ProcessBar
                  stepName={stepName}
                  handleStepClick={handleStepClick}
                />
              </div>
              <Space spacing="my-14" />

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
            </section>

            <Space spacing="my-14" />
          </Card>
        </section>
      </Container>
    </Main>
  );
};

export default StoreCreationProcessPage;
