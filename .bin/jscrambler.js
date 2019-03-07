var jscrambler = require('jscrambler').default,
  config = require('config');

jscrambler.protectAndDownload({
    keys: {
      accessKey: config.jscrambler.accessKey,
      secretKey: config.jscrambler.secretKey
    },
    host: 'api4.jscrambler.com',
    port: 443,
    applicationId: config.jscrambler.applicationId,
    filesSrc: config.jscrambler.files,
    filesDest: './.tmp/.dist-obfuscated/',
    params: [{
      'name': 'stringSplitting'
    }, {
      'name': 'deadCodeInjection'
    }, {
      'name': 'duplicateLiteralsRemoval'
    }, {
      'name': 'regexObfuscation'
    }, {
      'name': 'propertyKeysObfuscation'
    }, {
      'name': 'propertyKeysReordering'
    }, {
      'name': 'functionReordering'
    }, {
      'name': 'stringConcealing'
    }, {
      'name': 'stringEncoding'
    }, {
      'name': 'variableGrouping'
    }, {
      'name': 'whitespaceRemoval'
    }, {
      'name': 'identifiersRenaming',
      'options': {
        'mode': 'SAFEST'
      }
    }, {
      'name': 'charToTernaryOperator',
      'options': {
        'tern': [1, 1]
      }
    }]
  })
  .then(function() {
    console.log('All done!');
  })
  .catch(function(err) {
    console.error(err);
  });