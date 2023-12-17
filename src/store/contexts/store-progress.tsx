import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface StoreProgressContextProps {
  stepIndex: number;
  setStepIndex: Dispatch<SetStateAction<number>>;
}

const StoreProgressContext = createContext<
  StoreProgressContextProps | undefined
>(undefined);

export const StoreProgressContextProvider = ({
  children,
}: PropsWithChildren) => {
  const [stepIndex, setStepIndex] = useState(0);

  const contextValues: StoreProgressContextProps = {
    stepIndex,
    setStepIndex,
  };

  return (
    <StoreProgressContext.Provider value={contextValues}>
      {children}
    </StoreProgressContext.Provider>
  );
};

export const useStoreProgressContext = (): StoreProgressContextProps => {
  const context = useContext(StoreProgressContext);

  if (!context)
    throw new Error(
      "useStoreProgressContext must be used within a StoreProgressContextProvider"
    );

  return context;
};
