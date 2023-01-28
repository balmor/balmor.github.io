import React, { useState } from 'react';

interface ImageContextProps {
  isLoading: boolean;
  setLoader: React.Dispatch<React.SetStateAction<boolean>>;
}

const ImageContext = React.createContext<ImageContextProps>({} as ImageContextProps);

export type ImageStoreProps = { children: React.ReactNode };

const ImageStore: React.FC<ImageStoreProps> = ({ children }): JSX.Element => {
  const [isLoading, setLoader] = useState<boolean>(true);

  return <ImageContext.Provider value={{ isLoading, setLoader }}>{children}</ImageContext.Provider>;
};

export { ImageStore, ImageContext };
