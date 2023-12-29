import { PropsWithChildren } from "react";
import Container from "./Container";
import Main from "./Main";
import Space from "./Space";

const MainContent = ({ children }: PropsWithChildren) => {
  return (
    <Main>
      <Space spacing="my-14" />
      <Container>{children}</Container>
      <Space spacing="my-14" />
    </Main>
  );
};

export default MainContent;
