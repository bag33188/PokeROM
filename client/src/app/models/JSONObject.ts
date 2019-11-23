import { JSONArray } from '../interfaces/JSONArray';

type JSONValue = boolean | number | string | null | JSONObject | JSONArray;

abstract class JSONObject {
  [index: string]: JSONValue;
}

export { JSONObject };
