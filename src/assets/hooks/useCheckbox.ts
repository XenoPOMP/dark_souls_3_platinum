import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import { useEffect } from 'react';

const useCheckbox = (id: number, chapter: string, location: string) => {
  const selector = useSelector(
    // @ts-ignore
    (state) => state.checkboxes.chapters[chapter][location]
  );
  const selectorValue = useSelector(
    // @ts-ignore
    (state) => state.checkboxes.chapters[chapter][location][id]
  );
  // @ts-ignore
  const allItems = useSelector((state) => state.checkboxes.chapters);
  const dispatch = useDispatch();

  // Cookies
  const cookies = new Cookies();
  const cookieName = `ds3_platinum [${chapter}] [${location}] [${id}]`;
  const cookieValue = cookies.get(cookieName) === 'true';

  if (cookies.get(cookieName) === undefined) cookies.set(cookieName, false);

  // Register checkbox
  if (selector.length == 0) {
    dispatch({
      type: 'UPDATE_CHECKBOX',
      payload: {
        id: id,
        chapter: chapter,
        location: location,
        value: cookieValue,
      },
    });
  }

  const switchSelector = () => {
    cookies.set(cookieName, !selectorValue.value);

    dispatch({
      type: 'UPDATE_CHECKBOX',
      payload: {
        id: id,
        chapter: chapter,
        location: location,
        value: !selectorValue.value,
      },
    });
  };

  useEffect(() => {
    console.log(allItems);
  }, [allItems]);

  return [selectorValue, switchSelector];
};

export default useCheckbox;
