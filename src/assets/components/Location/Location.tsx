import React, { FC } from 'react';

interface props {
  title?: string;
  children?: React.ReactNode;
}

const Location: FC<props> = ({ children }) => {
  return <>{children}</>;
};

export default Location;
