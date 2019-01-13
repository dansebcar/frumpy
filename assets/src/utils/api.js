import Cookie from 'js-cookie';

import context from 'utils/context.js';
import log from 'utils/log.js';

const lang = document.documentElement.lang;
const headers = {
  'Content-Type': 'application/json',
  'Accept-Language': lang,
  'X-CsrfToken': Cookie.get('csrftoken'),
};
const {isAuthenticated} = context;

export default async function api(url = null, {method = 'get', data = null} = {}) {
  if (url && isAuthenticated) {
    const config = {method, headers};

    if (data) {
      config.body = JSON.stringify(data);
    }

    let response, json;

    try {
      let relative = url.indexOf('//') === -1;
      response = await fetch(relative ? `/api/v1/${url}` : url, config);
    } catch (e) {
      log.error(e);
      return null;
    }

    try {
      json = await response.json();
    } catch(e) {
      return null;
    }

    if (response.ok) {
      return json;
    } else {
      log.error(json);
    }
  }
  return null;
}
