export const useWatchers = (options) => {
  let {
    errors,
    recommenderName,
    recommenderEmail,
    recommenderPhone,
    checked,
    candidateName,
    candidateEmail,
    candidatePhone,
    file,
    regExp,
  } = options;

  watch(
    () => recommenderName.value.text,
    (name) => {
      if (regExp.name.test(name)) {
        errors.recommenderName = "";
      }
    }
  );
  watch(
    () => recommenderEmail.value.text,
    (email) => {
      if (regExp.email.test(email)) {
        errors.recommenderEmail = "";
      }
    }
  );

  watch(
    () => recommenderPhone.value,
    (phoneValue) => {
      if (regExp.phone.test(phoneValue.text) && phoneValue.textLength === 11) {
        errors.recommenderPhone = "";
      }
    },
    { deep: true }
  );

  watch(
    () => candidateName.value.text,
    (name) => {
      if (regExp.name.test(name)) {
        errors.candidateName = "";
      }
    }
  );

  watch(
    () => candidateEmail.value.text,
    (email) => {
      if (regExp.email.test(email)) {
        errors.candidateEmail = "";
      }
    }
  );

  watch(
    () => candidatePhone.value,
    (phoneValue) => {
      if (regExp.phone.test(phoneValue.text) && phoneValue.textLength === 11) {
        errors.candidatePhone = "";
      }
    },
    { deep: true }
  );

  watch(
    () => checked.value[0],
    (value) => {
      if (value) {
        errors.recParticipation = "";
      } else {
        errors.recParticipation = "error";
      }
    }
  );

  watch(
    () => checked.value[1],
    (value) => {
      if (value) {
        errors.recProcessing = "";
      } else {
        errors.recProcessing = "error";
      }
    }
  );

  watch(
    () => checked.value[2],
    (value) => {
      if (value) {
        errors.recSigning = "";
      } else {
        errors.recSigning = "error";
      }
    }
  );

  watch(
    () => checked.value[3],
    (value) => {
      if (value) {
        errors.candParticipation = "";
      } else {
        errors.candParticipation = "error";
      }
    }
  );

  watch(
    () => checked.value[4],
    (value) => {
      if (value) {
        errors.candProcessing = "";
      } else {
        errors.candProcessing = "error";
      }
    }
  );

  watch(
    () => file.value.name,
    (name) => {
      if (name !== undefined) {
        errors.file = "";
      }
    }
  );

  watch(
    () => [recommenderName.value.text, candidateName.value.text],
    ([recommender, candidate]) => {
      if (recommender === candidate) {
        errors.recommenderName = errors.candidateName = "error";
      }
    }
  );
};
