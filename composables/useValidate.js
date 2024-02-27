export const useValidate = (options) => {
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
  } = options

  let recommender = recommenderName.value.text.trimRight()
  let candidate = candidateName.value.text.trimRight()
  let recommenderTel = recommenderPhone.value.text
  let candidateTel = candidatePhone.value.text
  let recommenderMail = recommenderEmail.value.text
  let candidateMail = candidateEmail.value.text

  errors.recommenderName = regExp.name.test(recommender) ? '' : 'error'

  errors.recommenderEmail = regExp.email.test(recommenderMail) ? '' : 'error'

  errors.recommenderPhone =
    regExp.phone.test(recommenderTel) &&
    recommenderPhone.value.textLength === 11
      ? ''
      : 'error'

  errors.recParticipation = checked.value[0] ? '' : 'error'
  errors.recProcessing = checked.value[1] ? '' : 'error'
  errors.recSigning = checked.value[2] ? '' : 'error'

  errors.candidateName = regExp.name.test(candidate) ? '' : 'error'

  errors.candidateEmail = regExp.email.test(candidateMail) ? '' : 'error'

  errors.candidatePhone =
    regExp.phone.test(candidateTel) && candidatePhone.value.textLength === 11
      ? ''
      : 'error'

  errors.candParticipation = checked.value[3] ? '' : 'error'
  errors.candProcessing = checked.value[4] ? '' : 'error'
  errors.file = file.value.name !== undefined ? '' : 'error'

  if (recommender === candidate) {
    errors.recommenderName = errors.candidateName = 'error'
  }

  if (recommenderTel === candidateTel) {
    errors.recommenderPhone = errors.candidatePhone = 'error'
  }

  if (recommenderMail === candidateMail) {
    errors.recommenderEmail = errors.candidateEmail = 'error'
  }
}
