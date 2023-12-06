export const useSubmit = async (options) => {
  useValidate(options);

  let {
    errors,
    loader,
    recommenderName,
    recommenderEmail,
    recommenderPhone,
    checked,
    candidateName,
    candidateEmail,
    candidatePhone,
    file,
    status,
  } = options;

  let connection = checkInternetConnection();
  if (connection === false) {
    status.form = false;
    status.connection = false;
    return;
  }

  let isError = false;
  for (let error in errors) {
    if (errors[error] !== '') {
      isError = true;
      break;
    }
  }

  if (isError === false) {
    status.connection = true;
    loader.value = true;

    let agreementSign = checked.value[2] === true ? 1 : 0;
    let { utmMedium, utmSource, utmCampaign, clickId } = extractUTMParams(
      window.location.search
    );

    let formData = new FormData();

    formData.append('recommender[NAME]', recommenderName.value.text);
    formData.append('recommender[EMAIL]', recommenderEmail.value.text);
    formData.append('recommender[PHONE]', recommenderPhone.value.text);
    formData.append('candidate[NAME]', candidateName.value.text);
    formData.append('candidate[EMAIL]', candidateEmail.value.text);
    formData.append('candidate[PHONE]', candidatePhone.value.text);
    formData.append('userfile', file.value);
    formData.append('recommender[check_order]', agreementSign);
    formData.append('utm[utm_source]', utmSource);
    formData.append('utm[utm_medium]', utmMedium);
    formData.append('utm[utm_campaign]', utmCampaign);
    formData.append('click_id', clickId);

    let res = await fetch('/upload/', {
      method: 'POST',
      body: formData,
    });

    let response = await res.json();

    if (response.error === true) {
      status.server.failure = true;
      status.server.message = response.message;
      delete status['connection'];
    } else {
      console.log('yaReachGoal invoked');
      yaReachGoal('target');
    }

    status.form = false;
    loader.value = false;
  }
};

const yaReachGoal = (idTarget) => {
  if (typeof ym == 'function') {
    try {
      ym(95461603, 'reachGoal', idTarget);
      console.log('ReachGoal push');
    } catch (e) {
      console.log('ReachGoal error', e);
    }
  }
};

const extractUTMParams = (params) => {
  const urlParams = new URLSearchParams(params);
  const utmMedium = urlParams.get('utm_medium') || '';
  const utmSource = urlParams.get('utm_source') || '';
  const utmCampaign = urlParams.get('utm_campaign') || '';
  const clickId = urlParams.get('click_id') || '';

  return { utmMedium, utmSource, utmCampaign, clickId };
};

const checkInternetConnection = () => navigator.onLine;
