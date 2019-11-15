type JSONValue = boolean | number | string | null | JSONObject | JSONArray;

interface JSONArray extends Array<JSONValue> {}

abstract class JSONObject {
  [index: string]: JSONValue;
}

export { JSONObject, JSONArray };
