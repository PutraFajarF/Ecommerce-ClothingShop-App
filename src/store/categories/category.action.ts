import { createAction, Action, ActionWithPayload, withMacther } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES, Category } from "./category.type";

export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>;

export type FetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, Error>;

export const fetchCategoriesStart = withMacther((): FetchCategoriesStart => 
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START));

export const fetchCategoriesSuccess = withMacther((categoriesArray: Category[]): FetchCategoriesSuccess => 
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, 
    categoriesArray
  ));

export const fetchCategoriesFailed = withMacther((error: Error): FetchCategoriesFailed => 
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error));

