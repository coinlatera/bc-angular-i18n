angular.module('bc.translate', ['bc.stringTranslation']).filter "translate", ['$rootScope', 'StringTranslation', 'CONFIG', ($rootScope, StringTranslation, CONFIG) ->
  (input, capitalize) ->

    # By default do not capitalize
    unless capitalize?
      capitalize = false

    # Get the user language
    language = CONFIG.locale

    # Do the translation
    translation = StringTranslation.translate input, language

    # Do the capitalization if needed
    if translation and capitalize
      translation = translation.charAt(0).toUpperCase() + translation.slice(1)

    translation
]
