export default function validateForm(values) {
  let errors = {};

  if (!values.codeZipOrigin.trim()) {
    errors.codeZipOrigin = 'codeZipOrigin required';
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!values.codeZipDestination) {
    errors.codeZipDestination = 'codeZipDestination required';
  } else if (values.codeZipDestination.length < 6) {
    errors.codeZipDestination = 'codeZipDestination needs to be 6 characters or more';
  }

  if (!values.weightPerPackageInKg) {
    errors.weightPerPackageInKg = 'weightPerPackageInKg is required';
  } else if (values.weightPerPackageInKg.length < 6) {
    errors.weightPerPackageInKg = 'weightPerPackageInKg needs to be 6 characters or more';
  }

  return errors;
}
