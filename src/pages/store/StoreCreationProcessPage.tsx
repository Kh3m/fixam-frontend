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
import { useState } from "react";
import { progress, steps } from "framer-motion";

type ProgressType = {
  progress: number;
  stepName: string;
};
const StoreCreationProcessPage = () => {
  const [showFields, setShowFields] = useState({
    progress: 1,
    stepName: "contact",
  } as ProgressType);

  const handleShowFields = (progress: number, stepName: string) => {
    setShowFields({ stepName, progress });
  };

  const handleProgress = () => {
    if (showFields.progress === 1) {
      return;
    }

    setShowFields({
      progress: showFields.progress + 1,
      stepName: showFields.stepName,
    });
  };

  return (
    <Main>
      <Space spacing="my-14" />
      <Container>
        <section className="grid store-reg-grid justify-center items-center">
          <div className="w-[40%] opacity-80">
            <Link to="/">
              <Logo color="yellow" />
            </Link>
          </div>
          <Card styles="pagination-shadow w-[60%]">
            <Space spacing="my-14" />
            <section className="w-[80%] m-auto">
              <div className="w-[80%] m-auto">
                <ProcessBar stepName={showFields.stepName} />
              </div>
              <Space spacing="my-14" />
              {showFields.stepName === "contact" && <ContactFields />}
              {showFields.stepName === "brand" && <BrandFields />}
              {showFields.stepName === "socials" && <SocialFields />}
              <Space spacing="my-14" />
              <div className="w-[80%] m-auto">
                <Button
                  onClick={handleProgress}
                  variant="elevated"
                  styles="w-full text-center text-white font-semibold bg-fyellow py-4"
                  noSizingClass
                >
                  Proceed
                </Button>
              </div>
            </section>

            <Space spacing="my-14" />
          </Card>
        </section>
      </Container>
    </Main>
  );
};

export default StoreCreationProcessPage;
