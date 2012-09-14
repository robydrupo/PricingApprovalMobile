Ext.define('PricingApprovalMobile.view.LineDetail', {
    extend: 'Ext.Panel',
    xtype: 'linedetail',

    config: {
        title: 'Details',
        styleHtmlContent: true,
        scrollable: 'vertical',
        tpl: [
            'Line Name: {productName}'
        ]
    }
});
