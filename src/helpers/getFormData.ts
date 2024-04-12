const form = document.querySelector('form');

export function getFormData() {
  if (form) {
    const formData = new FormData(form);

    const formDataObject = {} as Record<string, unknown>;
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    console.log('formDataObject:', formDataObject);
  }
}
