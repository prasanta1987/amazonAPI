const {OperationHelper} = require('apac');
 
var opHelper = new OperationHelper({
    awsId:     'AKIAJXE3GUWUHYUNXDNA',
    awsSecret: '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',
    assocId:   'prasanta1987-21',
    locale:    'IN'
});
 
opHelper.execute('ItemSearch', {
  'SearchIndex': 'All',
  'Keywords': 'Arduino',
  'ResponseGroup': 'ItemAttributes,Offers'
}).then((response) => {
    // console.log("Results object: ", response.result);
    console.log("Raw response body: ", response.responseBody);
}).catch((err) => {
    console.error("Something went wrong! ", err);
});