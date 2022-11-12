const defaultState = {};

export const checkboxReducer = (
  state = defaultState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case 'REGISTER_CHECKBOX':
      return { ...state };

    case 'UPDATE_CHECKBOX_STATE':
      return { ...state };
  }
};
