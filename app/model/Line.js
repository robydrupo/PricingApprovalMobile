Ext.define('PricingApprovalMobile.model.Line', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['productName', 'rateType', 'valueType', 'startDate', 'endDate', 'baseRate', 'listRate', 'soldRate', 'value', 'recommendedRate', 'maxExpectedMonthlyValue', 'maxExpectedValue' ]
    }
});
