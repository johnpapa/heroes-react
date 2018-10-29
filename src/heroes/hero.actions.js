export const HEROES_LOADING = '[Heroes] loading';
export const HEROES_LOADED = '[Heroes] loaded';
export const HEROES_LOADED_ERROR = '[Heroes] loaded error';

export const HERO_SELECT ='[Hero] select';

export const selectHeroAction = (hero) => ({ type: HERO_SELECT, payload: hero });
export const loadHeroesAction = () => ({ type: HEROES_LOADING });