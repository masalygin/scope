var storage = new WeakMap();


function item(key) {
  var value = storage.get(key);
  if (!value) {
    value = {};
    storage.set(key, value);
  }
  return value;
}


exports.get = function get(key) {
  return item(this)[key];
};


exports.set = function set(key, value) {
  item(this)[key] = value;
};
