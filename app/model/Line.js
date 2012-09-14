Ext.define('PricingApprovalMobile.model.Line', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['productName']
    },

    fullName: function() {
        var d = this.data,
        names = [
            d.productName
        ];
        return names.join(" ");
    }
});
