export const FETCH_DATA = "FETCH_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export interface DataItem {
  id: number;
  title: string;
  body: string;
}

export const fetchData = () => ({
  type: FETCH_DATA,
});
