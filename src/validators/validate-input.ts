export function validateInput(jsonData?: unknown): boolean {
  if (!jsonData || typeof jsonData !== 'object') {
    return false;
  }

  return true;
}
