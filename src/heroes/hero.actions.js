export const HEROES_LOADING = '[Heroes] loading';
export const HEROES_LOADED = '[Heroes] loaded';
export const HEROES_LOAD_ERROR = '[Heroes] loaded error';

export const HEROES_UPDATING = '[Heroes] updating';
export const HEROES_UPDATED = '[Heroes] updated';
export const HEROES_UPDATE_ERROR = '[Heroes] update error';

export const HERO_SELECT ='[Hero] select';

export const selectHeroAction = (hero) => ({ type: HERO_SELECT, payload: hero });
export const loadHeroesAction = () => ({ type: HEROES_LOADING });

export const updateHeroAction = (hero) => ({ type: HEROES_UPDATING, payload: hero });