Ext.define('Sencha.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'mainpanel'
        },
        control: {
            'lineslist': {
                disclose: 'showDetail'
            }
        }
    },

    showDetail: function(list, record) {
        this.getMain().push({
            xtype: 'linedetails',
            title: record.fullName(),
            data: record.getData()
        })
    }

});
