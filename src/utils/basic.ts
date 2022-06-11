export function isJson(str: string): boolean | object {
  try {
    return JSON.parse(str);
  } catch (error) {
    return false;
  }
}

export function convertToJson(str: string): unknown {
  try {
    return JSON.parse(str);
  } catch (error) {
    // silent error
  }
}
