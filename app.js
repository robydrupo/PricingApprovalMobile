Ext.application({
    name: 'PricingApprovalMobile',

    requires: ['Ext.MessageBox', 'PricingApprovalMobile.view.LinesList', 'PricingApprovalMobile.view.LineForm'],

    stores: ['Lines'],
    models: ['Line'],

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


    launch: function () {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        //Ext.Viewport.add(Ext.create('PricingApprovalMobile.view.Main'));

        Ext.Viewport.add(Ext.create('Ext.Panel', {
            fullscreen: true,
            layout: 'hbox',
            items: [{
                xtype: 'lineslist',
                flex: 1
            }, {
                title: 'Line Details',
                iconCls: 'user',
                xtype: 'formpanel',
                url: 'contact.php',
                layout: 'vbox',
                flex: 2,
                items: [{
                    xtype: 'fieldset',
                    title: '',
                    items: [{
                        xtype: 'textfield',
                        label: 'Name'
                    },{
	                    xtype: 'textfield',
	                    label: 'Rate Type'
	                },{
		                xtype: 'textfield',
		                label: 'Value Type'
		            },
		 			{
                        xtype: 'textfield',
                        label: 'Start Date'
                    }, {
                        xtype: 'textfield',
                        label: 'End Date'
                    }, {
	                    xtype: 'numberfield',
	                    label: 'Base Rate'
	                },{
		                xtype: 'numberfield',
		                label: 'List Rate'
		            }, {
		                xtype: 'numberfield',
		                label: 'Sold Rate'
		            },{
			            xtype: 'numberfield',
			            label: 'Value'
			        }	,{
			                xtype: 'numberfield',
			                label: 'Recommended Rate'
			            }, {
			                xtype: 'numberfield',
			                label: 'Max. Expected Monthly Value'
			            },{
				            xtype: 'numberfield',
				            label: 'Max. Expected Value'
				        }]
                }, {
                    xtype: 'button',
                    text: 'Approve Line',
                    ui: 'confirm',
					padding: 10,
                    handler: function () {
                        this.up('formpanel').submit();
                    }
                }	, {
	                    xtype: 'button',
	                    text: 'Submit Back',
	                    ui: 'decline',
						padding: 10,
	                    handler: function () {
	                        this.up('formpanel').submit();
	                    }
	                }]
            }]
        }));

    },

    onUpdated: function () {
        Ext.Msg.confirm("Application Update", "This application has just successfully been updated to the latest version. Reload now?",

        function (buttonId) {
            if (buttonId === 'yes') {
                window.location.reload();
            }
        });
    }
});