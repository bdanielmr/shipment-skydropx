export default function validateForm(values) {
  let errors = {};
  if (!values.codeZipOrigin) {
    errors.codeZipOrigin = 'codeZipOrigin required';
  } else if (!/^[0-9]+$/.test(values.codeZipOrigin.trim())) {
    //   errors.name = 'Enter a valid name';
    errors.codeZipOrigin = 'codeZipOrigin only number';
    // }
  } else if (values.codeZipOrigin.length != 5) {
    errors.codeZipOrigin = 'codeZipOrigin needs to be 5 characters';
  }

  if (!values.codeZipDestination) {
    errors.codeZipDestination = 'codeZipDestination required';
  } else if (!/^[0-9]+$/.test(values.codeZipDestination.trim())) {
    errors.codeZipDestination = 'codeZipDestination only number';
  } else if (values.codeZipDestination.length != 5) {
    errors.codeZipDestination = 'codeZipDestination needs to be 5 characters';
  }

  if (!values.weightPerPackageInKg) {
    errors.weightPerPackageInKg = 'weightPerPackageInKg required';
  } else if (!/^[0-9]+$/.test(values.weightPerPackageInKg.trim())) {
    errors.weightPerPackageInKg = 'weightPerPackageInKg only number';
  } else if (values.weightPerPackageInKg > 100) {
    errors.weightPerPackageInKg = 'weightPerPackageInKg needs to be no more to 100kg';
  }

  return errors;
}
