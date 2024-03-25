const form = document.querySelector('form');

export function getFormData() {
  if (form) {
    const formData = new FormData(form);

    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    console.log('formDataObject:', formDataObject);
  }
}
