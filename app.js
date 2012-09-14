Ext.application({
    name: 'PricingApprovalMobile',

    requires: ['Ext.MessageBox', 'PricingApprovalMobile.view.LinesList', 'PricingApprovalMobile.view.LineForm'],

    stores: ['Lines'],
    models: ['Line'],
    controllers: ['Main'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },


    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        //Ext.Viewport.add(Ext.create('PricingApprovalMobile.view.Main'));
        mainForm = Ext.create('Ext.Panel', {
            fullscreen: true,
            layout: 'hbox',
            items: [{
                xtype: 'lineslist',
                flex: 1
            },

            {
                title: 'Form Details',
                iconCls: 'user',
                xtype: 'formpanel',
                url: 'contact.php',
                layout: 'vbox',
                flex: 2,
                items: [{
                    xtype: 'button',
                    text: 'Approve Line',
                    ui: 'confirm',
                    padding: 10,
                    handler: function() {
                        this.up('formpanel').submit();
                    }
                }, {
                    xtype: 'fieldset',
                    title: '',
                    items: [{
                        xtype: 'textfield',
                        name: 'productName',
                        label: 'Name'
                    }, {
                        xtype: 'textfield',
                        label: 'Rate Type',
                        name: 'rateType'
                    }, {
                        xtype: 'textfield',
                        label: 'Value Type',
                        name: 'valueType'
                    }, {
                        xtype: 'textfield',
                        label: 'Start Date',
                        name: 'startDate'
                    }, {
                        xtype: 'textfield',
                        label: 'End Date',
                        name: 'endDate'
                    }, {
                        xtype: 'numberfield',
                        label: 'Base Rate',
                        name: 'baseRate'
                    }, {
                        xtype: 'numberfield',
                        label: 'List Rate',
                        name: 'listRate'
                    }, {
                        xtype: 'numberfield',
                        label: 'Sold Rate',
                        name: 'soldRate'
                    }, {
                        xtype: 'numberfield',
                        label: 'Value',
                        name: 'value'
                    }, {
                        xtype: 'numberfield',
                        label: 'Recommended Rate',
                        name: 'recommendedRate'
                    }, {
                        xtype: 'numberfield',
                        label: 'Max. Expected Monthly Value',
                        name: 'maxExpectedMonthlyValue'
                    }, {
                        xtype: 'numberfield',
                        label: 'Max. Expected Value',
                        name: 'maxExpectedValue'
                    }]
                }, {
                    xtype: 'button',
                    text: 'Submit Back',
                    ui: 'decline',
                    padding: 10,
                    handler: function() {
                        this.up('formpanel').submit();
                    }
                }]
            }]
        });

        Ext.Viewport.add(mainForm);

    },

    onUpdated: function() {
        Ext.Msg.confirm("Application Update", "This application has just successfully been updated to the latest version. Reload now?",

        function(buttonId) {
            if (buttonId === 'yes') {
                window.location.reload();
            }
        });
    }
});