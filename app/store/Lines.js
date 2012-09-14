Ext.define('PricingApprovalMobile.store.Lines', {
    extend: 'Ext.data.Store',
    
    config: {
        model: 'PricingApprovalMobile.model.Line',
        sorters: 'productName',
        grouper : function(record) {
            return record.get('productName')[0];
        },
        data: [
            { productName: "AOL HOMEPAGES 100x200 " },
            { productName: "CANADA BMW 300x200" },
			{ productName: "TECHCRUNCH Social Marketing" },
			{ productName: "HUFFPOST Home Page" }	
        ]
    }
});
