sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'irfankusumaf41.customermessage',
            componentId: 'CustomerMessageList',
            contextPath: '/CustomerMessage'
        },
        CustomPageDefinitions
    );
});