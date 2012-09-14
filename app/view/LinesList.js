Ext.define('PricingApprovalMobile.view.LinesList', {
    extend: 'Ext.List',
    xtype: 'lineslist',
    requires: ['PricingApprovalMobile.store.Lines'],
    
    config: {
        title: 'Lines awaiting approval',
        itemTpl: '{productName}',
        store: 'Lines'
    }
});
