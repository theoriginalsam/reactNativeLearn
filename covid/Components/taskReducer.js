export const foodReducer = (state, action) => {
  switch (action.type) {
    case 'add_task':
      return {
        ...state,
        state: state.concat({
          key: Math.random(),
          taskString: action.payload,
        }),
      };

    case 'del_task':
      return;

    default:
      return state;
  }
};

export const addTask = dispatch => task => {
  dispatch({type: 'add_task', payload: task});
};
