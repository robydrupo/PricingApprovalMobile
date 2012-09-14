Ext.define('PricingApprovalMobile.view.LinesList', {
    extend: 'Ext.List',
    xtype: 'lineslist',
    requires: ['PricingApprovalMobile.store.Lines'],
    
    config: {
        title: 'Lines awaiting approval',
        grouped: true,
        itemTpl: '{productName}',
        store: 'Lines',
        onItemDisclosure: true
    }
});
