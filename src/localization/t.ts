export const t = (
  template: string,
  params?: Record<string, string | number>,
) => {
  if (!params) {
    return template;
  }

  return Object.keys(params).reduce(
    (str, key) => str.replace(`{{${key}}}`, String(params[key])),
    template,
  );
};
