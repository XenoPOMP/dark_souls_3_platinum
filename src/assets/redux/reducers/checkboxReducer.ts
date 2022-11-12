const defaultState = {
  chapters: {
    new_game: {
      graveyard_of_ashes: [],
      high_wall_of_lothric: [],
      undead_settlement: [],
      path_of_sacrifices: [],
      cathedral_of_the_deep: [],
      farrons_keep: [],
      cartus_catacombs: [],
      smoldering_lake: [],
      irrithyl: [],
      anor_londo: [],
      irrithyl_dungeon: [],
      corrupted_capital: [],
      garden_of_consumed_king: [],
      archdragon_peak: [],
      abandoned_graves: [],
      lothric_castle: [],
      great_archive: [],
      covenant_farm: [],
      kiln_of_the_first_flame: [],
    },
    new_game_pluses: {
      new_game_plus_one: [],
      new_game_plus_two: [],
    },
  },
};

export const checkboxReducer = (
  state = defaultState,
  action: {
    type: string;
    payload:
      | any
      | { id: number; chapter: string; location: string; value: boolean };
  }
) => {
  switch (action.type) {
    case 'UPDATE_CHECKBOX': {
      // const preChapters = state.chapters;
      const payload = action.payload;

      // @ts-ignore
      // preChapters[payload.chapter][payload.location][payload.id] = {
      //   id: payload.id,
      //   value: payload.value,
      // };

      const chapters = state.chapters;
      let newChapters = { ...chapters };
      // @ts-ignore
      newChapters[payload.chapter][payload.location][payload.id] = {
        id: payload.id,
        value: payload.value,
      };

      return { ...state, chapters: newChapters };
    }

    default:
      return state;
  }
};

export default checkboxReducer;
