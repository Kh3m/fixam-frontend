import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Logo from "../../components/Logo";
import Main from "../../components/Main";
import ProcessBar from "../../components/ProgressBar/ProcessBar";
import Space from "../../components/Space";
import { useStoreProgressContext } from "../../contexts/store-progress";
import StoreCreateForm from "./StoreCreateForm";
import { validate } from "./formValidationUtils";
import { useForm } from "react-hook-form";
import { StoreType } from "../../entities/store";

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
      description:
        "Performed yesterday along side crossda_boss at Davido’s concert in Abuja and also signed with Dorty Worldwide Entertainment.   The power of consistency is turning small steps into big victories. It's doing a little bit every day and seeing big results over time.   Consistency builds habits, and habits shape your future.   Stick with it, stay committed, and watch how little efforts add up to something amazing 🤩",
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

              <StoreCreateForm
                methods={methods}
                stepName={stepName}
                isLastStep={isLastStep}
              />
            </section>
            <Space spacing="my-14" />
          </Card>
        </section>
      </Container>
    </Main>
  );
};

export default StoreCreationProcessPage;
