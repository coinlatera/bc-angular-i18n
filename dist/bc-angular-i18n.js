(function() {
  angular.module('bc.angular-i18n', ['bc.stringTranslation', 'bc.translate']);

}).call(this);

(function() {
  angular.module('bc.translate', ['bc.stringTranslation']).filter("translate", [
    '$rootScope', 'StringTranslation', 'CONFIG', function($rootScope, StringTranslation, CONFIG) {
      return function(input, capitalize) {
        var language, translation;
        if (capitalize == null) {
          capitalize = false;
        }
        language = CONFIG.locale;
        translation = StringTranslation.translate(input, language);
        if (translation && capitalize) {
          translation = translation.charAt(0).toUpperCase() + translation.slice(1);
        }
        return translation;
      };
    }
  ]);

}).call(this);

(function() {
  angular.module('bc.stringTranslation', []).service("StringTranslation", [
    'Strings', function(Strings) {
      this.translate = function(key, language) {
        if (key == null) {
          return '';
        }
        if (!(key in Strings)) {
          return key;
        }
        if (!(language && language in Strings[key])) {
          return Strings[key].en_US;
        }
        return Strings[key][language];
      };
      return this;
    }
  ]);

}).call(this);
