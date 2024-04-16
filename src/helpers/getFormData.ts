export const getFormData = <T extends object>(form:HTMLFormElement):T => {
  if (form) {
    const formData:FormData = new FormData(form);

    const formDataObject:T = {} as T;
    formData.forEach((value, key) => {
      (formDataObject as { [index: string]:unknown })[key] = value;
    });

    return formDataObject;
  }

  return {} as T;
};
