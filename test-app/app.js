var app = angular.module('test-app', ['bc.angular-i18n'])
                 .config(['$provide', function ($provide) {
                   $provide.constant('CONFIG', { locale: 'en_US' });
                   $provide.constant('Strings', {
                      'known_english_translation': {
                        'en_US': 'We sent you another code via SMS',
                        'fr_FR': 'Nous vous avons envoyé un nouveau code par SMS'
                      },
                     'no_french_translation': {
                       'en_US': 'I am the English-only version of the target string',
                     },
                     'valid_translation_key': {
                       'en_US': 'Your buy order has been placed and is [green]pending[/green]',
                       'fr_FR': 'Nouvel ordre d\'achat [green]confirmé[/green]'
                     }
                   });
                 }]);

app.controller('MainCtrl', function MainCtrl ($scope, CONFIG, StringTranslation) {

  $scope.translateString1 = StringTranslation.translate('known_english_translation', CONFIG.locale);
  $scope.translateString2 = StringTranslation.translate('no_french_translation', 'fr_FR');
  $scope.translateString3 = StringTranslation.translate('I have no know notification key', CONFIG.locale);
  $scope.translateString4 = StringTranslation.translate('valid_translation_key', CONFIG.locale);

  $scope.translateFilter1 = 'known_english_translation';
  $scope.translateFilter2 = 'no_french_translation';
  $scope.translateFilter3 = 'i have no know notification key';
  $scope.translateFilter4 = 'valid_translation_key';
});

