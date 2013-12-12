angular.module('bc.stringTranslation', []).service "StringTranslation", ['Strings', (Strings) ->
  this.translate = (key, language) ->
    # No key, no translation
    unless key? then return ''

    # Key unknown? Return the key itself
    unless key of Strings then return key

    # No language defined or language unknown? We return the English version
    unless language and language of Strings[key] then return Strings[key].en_US

    # Otherwise return the correct translation
    return Strings[key][language]
]
