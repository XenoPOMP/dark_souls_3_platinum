import React, { FC } from 'react';
import styles from './Location.module.scss';
import { useProgress } from '../../hooks/hooks';

interface props {
  title: string;
  chapterName: string;
  locationName: string;
  children?: React.ReactNode;
}

const Location: FC<props> = ({
  title,
  chapterName,
  locationName,
  children,
}) => {
  const [done, total, percent] = useProgress(chapterName, locationName);

  const getClass = () => {
    if (percent === 0) return '';
    if (percent === 100) return styles.completed;

    return styles.started;
  };

  // ${done} / ${total} -

  return (
    <div className={`${styles.location} ${getClass()}`}>
      <h2>
        {title}{' '}
        <span
          className={styles.progress}
        >{`${done} / ${total} - ${percent}%`}</span>
      </h2>
      {children}
    </div>
  );
};

export default Location;
