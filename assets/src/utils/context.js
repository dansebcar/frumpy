function get(id) {
  const el = document.getElementById(id);

  if (el) {
    return JSON.parse(el.textContent);
  }

  return null;
}

export default {
  ...get('json_context'),
  ...get('extra_json_context'),
};
