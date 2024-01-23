import ProcessBar from "../../components/ProgressBar/ProcessBar";
import Space from "../../components/Space";
import { useStoreProgressContext } from "../../contexts/store-progress";
import StoreCreateForm from "./StoreCreateForm";
import { validate } from "./formValidationUtils";
import { useForm } from "react-hook-form";
import { StoreType } from "../../entities/store";
import LogoFormSplitLayout from "../../components/LogoFormSplitLayout";
import MainContent from "../../components/MainContent";

const steps = ["Contact", "Brand", "Socials"];

const StoreCreationProcessPage = () => {
  const methods = useForm<StoreType>({
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
      logo: undefined,
      banner: undefined,
      description: "",
      //   Socials
      facebookLink: "https://www.facbook.com/",
      igLink: "https://www.instagram.com/",
      xLink: "https://www.twitter.com/",

      agreement: false,
    },
  });

  const { getFieldState, trigger } = methods;
  const { stepIndex, setStepIndex } = useStoreProgressContext();
  const isLastStep = stepIndex + 1 > 3;
  const stepName: string = isLastStep ? "" : steps[stepIndex].toLowerCase();

  const handleStepClick = async (selectedStep: number) => {
    // TODO: Try using callback
    if (selectedStep === 1) setStepIndex(selectedStep - 1);
    if (
      (await validate("contact", getFieldState, trigger)) &&
      selectedStep === 2
    )
      setStepIndex(selectedStep - 1);
    // Check to ensure previous steps are valid before moving to next steo
    if (
      (await validate("contact", getFieldState, trigger)) &&
      (await validate("brand", getFieldState, trigger)) &&
      selectedStep === 3
    )
      setStepIndex(selectedStep - 1);
  };

  return (
    <MainContent>
      <LogoFormSplitLayout>
        <div className="w-[80%] m-auto my-8 md:my-0">
          <ProcessBar stepName={stepName} handleStepClick={handleStepClick} />
        </div>
        <Space spacing="my-14" />
        <StoreCreateForm
          methods={methods}
          stepName={stepName}
          isLastStep={isLastStep}
        />
      </LogoFormSplitLayout>
    </MainContent>
  );
};

export default StoreCreationProcessPage;
