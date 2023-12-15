import { useState } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Logo from "../../components/Logo";
import Main from "../../components/Main";
import ProcessBar from "../../components/ProgressBar/ProcessBar";
import Space from "../../components/Space";
import BrandFields from "./BrandField";
import ContactFields from "./ContactFields";
import SocialFields from "./SocialFields";
import { useNavigate } from "react-router-dom";

type ProgressType = {
  progress: number;
  stepName: string;
};

export type ContactType = {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
};

export type BrandType = {
  storeName: string;
  businessRCNumber: string;
  slug: string;
  logo: File | null;
  banner: File | null;
  description: string;
};

export type SocialType = {
  facebookLink: string;
  igLink: string;
  xLink: string;
};

export type StoreDataType = {
  contact: ContactType;
  brand: BrandType;
  socials: SocialType;
};

interface FormData {
  // Contact
  firstName: string;
  lastName: string;
  phone: string;
  address: string;

  //   Store
  storeName: string;
  businessRCNumber: string;
  slug: string;
  logo: File | null;
  banner: File | null;
  description: string;

  //   Socials
  facebookLink: string;
  igLink: string;
  xLink: string;
}

const StoreCreationProcessPage = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const navigate = useNavigate();
  const methods = useForm<FormData>({
    defaultValues: {
      //  Contact
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      //   Brand
      storeName: "",
      businessRCNumber: "",
      slug: "fixam.africa/stores/{slug}",
      logo: null,
      banner: null,
      description: "",
      //   Socials
      facebookLink: "https://www.facbook.com/",
      igLink: "https://www.instagram.com/",
      xLink: "https://www.twitter.com/",
    },
  });

  const onSubmit = (data: FieldValues) => {
    console.log("Submitted Data", data);
  };

  //   const methods = useForm<StoreDataType>({
  //     defaultValues: {
  //       contact: { firstName: "", lastName: "", phone: "", address: "" },
  //       brand: {
  //         storeName: "",
  //         businessRCNumber: "",
  //         slug: "fixam.africa/stores/{slug}",
  //         logo: null,
  //         banner: null,
  //         description: "",
  //       },
  //       socials: {
  //         facebookLink: "",
  //         igLink: "",
  //         xLink: "",
  //       },
  //     },
  //   });

  const steps = ["Contact", "Brand", "Socials"];

  //   const stepName =
  //   stepsLength >= stepIndex ? "socials" : steps[stepIndex].toLowerCase();

  const stepsLength = steps.length;
  const isLast = stepsLength <= stepIndex;
  const stepName = isLast
    ? navigate("/stores/storeId")
    : steps[stepIndex].toLowerCase();

  const handleStepClick = (stepIndex: number) => {
    setStepIndex(stepIndex - 1);
  };

  const handleProgress = () => {
    // if (stepIndex === 1 || stepIndex >= steps.length - 1) return;
    setStepIndex(stepIndex + 1);
  };

  //   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //     setStoreData((prevStoreData) => ({
  //       ...prevStoreData,
  //       contact: { ...prevStoreData.contact, firstName: e.target.value },
  //     }));
  //     console.log(e.target.value);
  //     console.log(e.target.placeholder);
  //   };

  //   CHECK LATER

  const { handleSubmit, formState, reset } = methods;
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
                  {stepName === "contact" && <ContactFields />}
                  {stepName === "brand" && <BrandFields />}
                  {stepName === "socials" && <SocialFields />}
                  <Space spacing="my-14" />
                  <div className="w-[80%] m-auto">
                    {stepName === "socials" ? (
                      <Button
                        type="submit"
                        // onClick={handleSubmit(onSubmit)}
                        variant="elevated"
                        styles="w-full text-center text-white font-semibold bg-fyellow py-4"
                        noSizingClass
                      >
                        Become a Vendor
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        onClick={handleProgress}
                        variant="elevated"
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
