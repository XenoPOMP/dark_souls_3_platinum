import React, { FC } from 'react';
import { useCheckbox } from '../../hooks/hooks';
import styles from './CheckBox.module.scss';

interface props {
  id: number;
  chapter: string;
  location: string;
  text?: string;
}

const CheckBox: FC<props> = ({ id, chapter, location, text }) => {
  const [value, switchValue] = useCheckbox(id, chapter, location);

  return (
    <span
      className={`${value?.value ? styles.checked : styles.notChecked} ${
        styles.checkbox
      }`}
      onClick={switchValue}
    >
      {text}
    </span>
  );
};

export default CheckBox;
