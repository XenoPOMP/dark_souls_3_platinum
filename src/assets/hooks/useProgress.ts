import { useSelector } from 'react-redux';

const useProgress = (chapter: string, location: string) => {
  const selector = useSelector(
    // @ts-ignore
    (state) => state.checkboxes.chapters
  );

  const calculateDoneCount = () => {
    let counter = 0;
    selector[chapter][location].map((e: any) =>
      e.value == true ? counter++ : (counter += 0)
    );
    return counter;
  };

  const getPercent = () => {
    const done = calculateDoneCount();
    const total = selector[chapter][location].length;

    return Math.round((done * 100) / total);
  };

  return [
    calculateDoneCount(),
    selector[chapter][location].length,
    getPercent(),
  ];
};

export default useProgress;
