import { PropsWithChildren } from "react";
import Card from "../../../components/Card";
import Heading from "../../../components/Heading";
import Space from "../../../components/Space";

interface Props {
  title: string;
  isBold?: boolean;
}
const FormFieldCard = ({
  title,
  isBold,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <Card>
      <Heading variant="h4" styles={`${isBold && "font-semibold"}`}>
        {title}
      </Heading>
      <Space spacing="my-4" />
      {children}
    </Card>
  );
};

export default FormFieldCard;
