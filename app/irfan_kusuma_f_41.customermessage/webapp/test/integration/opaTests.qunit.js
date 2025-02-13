sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'irfankusumaf41/customermessage/test/integration/FirstJourney',
		'irfankusumaf41/customermessage/test/integration/pages/CustomerMessageList',
		'irfankusumaf41/customermessage/test/integration/pages/CustomerMessageObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomerMessageList, CustomerMessageObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('irfankusumaf41/customermessage') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomerMessageList: CustomerMessageList,
					onTheCustomerMessageObjectPage: CustomerMessageObjectPage
                }
            },
            opaJourney.run
        );
    }
);