Ext.define('PricingApprovalMobile.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'mainpanel'
        },
        control: {
            'lineslist': {
                select: 'showDetail'
            }
        }
    },

    showDetail: function(list, record) {


        console.log(mainForm);
        mainForm.items.items[1].setValues(record.getData());
        
        /*this.getMain().push({
            xtype: 'linedetails',
            title: record.fullName(),
            data: record.getData()
        })
*/
    }

});
