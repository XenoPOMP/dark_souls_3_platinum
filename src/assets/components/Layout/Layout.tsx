import React, { FC } from 'react';
import { useCheckbox } from '../../hooks/hooks';

interface props {
  children?: React.ReactNode;
}

const Layout: FC<props> = ({ children }) => {
  const [value, switchValue] = useCheckbox(
    0,
    'new_game_pluses',
    'new_game_plus_one'
  );

  return <>{children}</>;
};

export default Layout;
