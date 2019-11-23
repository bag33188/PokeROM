import { JSONObject } from '../models/JSONObject';

type JSONValue = boolean | number | string | null | JSONObject | JSONArray;

interface JSONArray extends Array<JSONValue> {}

export { JSONArray };
