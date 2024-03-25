const form = document.querySelector('form');

export function getFormData () {
  const formData = new FormData(form);

  const formDataObject = {};
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });

  console.log('formDataObject:',formDataObject);
}
