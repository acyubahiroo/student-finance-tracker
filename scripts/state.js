import{load,save}from'./storage.js';
const SETTINGS='pennywise:settings:v1';
export const state={records:load(),settings:{currency:'USD',cap:0,rates:{EUR:.92,GBP:.79},theme:'light'}};
try{state.settings={...state.settings,...JSON.parse(localStorage.getItem(SETTINGS)||'{}')};state.settings.rates={...{EUR:.92,GBP:.79},...state.settings.rates}}catch{}
export function persist(){save(state.records);localStorage.setItem(SETTINGS,JSON.stringify(state.settings))}