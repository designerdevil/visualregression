var webdriverio = require('webdriverio');
var webdrivercss = require('webdrivercss');

var client = webdriverio.remote({
	desiredCapabilities: {
        browserName: 'chrome'
    }
});


webdrivercss.init(client, {
  screenshotRoot: 'my-shots',
  failedComparisonsRoot: 'diffs',
  misMatchTolerance: 0.05,
});


client
	.init()
	.url('http://localhost:9000/T008-Media-Ends.html')
	.webdrivercss('main', [{
        name: 'main',
        elem: '#main',
        // hide: '',
        // exclude: ''
    },{
    	name: 'nothing',
        elem: '#nothing',
    }], function(err,res) {
        console.log(res);
    })
	.end()