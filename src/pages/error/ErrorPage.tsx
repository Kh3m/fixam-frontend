import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Error404 from "./Error404";
import ErrorSomethingWentWrong from "./ErrorSomethingWentWrong";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      {isRouteErrorResponse(error) ? <Error404 /> : <ErrorSomethingWentWrong />}
    </>
  );
};

export default ErrorPage;
