Ext.define('PricingApprovalMobile.store.Lines', {
    extend: 'Ext.data.Store',
    
    config: {
        model: 'PricingApprovalMobile.model.Line',
        sorters: 'productName',
        grouper : function(record) {
            return record.get('productName')[0];
        },
        data: [
            { productName: "AOL HOMEPAGE 100x200 ", rateType: "CPM", valueType: "Paid Media", startDate: "1/6/2012", endDate: "10/7/2012", baseRate: "10", listRate: "10", soldRate: "50", value: "40", recommendedRate: "", maxExpectedMonthlyValue: "", maxExpectedValue: "" },
            { productName: "CANADA BMW 300x200", rateType: "CPM", valueType: "Paid Media", startDate: "1/6/2012", endDate: "10/7/2012", baseRate: "10", listRate: "10", soldRate: "50", value: "40", recommendedRate: "", maxExpectedMonthlyValue: "", maxExpectedValue: ""  },
			{ productName: "TECHCRUNCH Social Marketing", rateType: "CPM", valueType: "Paid Media", startDate: "1/6/2012", endDate: "10/7/2012", baseRate: "10", listRate: "10", soldRate: "50", value: "40", recommendedRate: "", maxExpectedMonthlyValue: "", maxExpectedValue: ""  },
			{ productName: "HUFFPOST Home Page", rateType: "CPM", valueType: "Paid Media", startDate: "1/6/2012", endDate: "10/7/2012", baseRate: "10", listRate: "10", soldRate: "50", value: "40", recommendedRate: "", maxExpectedMonthlyValue: "", maxExpectedValue: ""  },
			{ productName: "AOL HOMEPAGE 121x234", rateType: "CPM", valueType: "Paid Media", startDate: "1/6/2012", endDate: "10/7/2012", baseRate: "10", listRate: "10", soldRate: "50", value: "40", recommendedRate: "", maxExpectedMonthlyValue: "", maxExpectedValue: "" },
			{ productName: "ENGADGET Home Page", rateType: "CPM", valueType: "Paid Media", startDate: "1/6/2012", endDate: "10/7/2012", baseRate: "10", listRate: "10", soldRate: "50", value: "40", recommendedRate: "", maxExpectedMonthlyValue: "", maxExpectedValue: "" },
			{ productName: "CANADA MERCEDES 10x200", rateType: "CPM", valueType: "Paid Media", startDate: "1/6/2012", endDate: "10/7/2012", baseRate: "10", listRate: "10", soldRate: "50", value: "40", recommendedRate: "", maxExpectedMonthlyValue: "", maxExpectedValue: "" },
            { productName: "HUFFPOST France", rateType: "CPM", valueType: "Paid Media", startDate: "1/6/2012", endDate: "10/7/2012", baseRate: "10", listRate: "10", soldRate: "50", value: "40", recommendedRate: "", maxExpectedMonthlyValue: "", maxExpectedValue: "" },
			{ productName: "AOL SPORTS HOMEPAGE", rateType: "CPM", valueType: "Paid Media", startDate: "1/6/2012", endDate: "10/7/2012", baseRate: "10", listRate: "10", soldRate: "50", value: "40", recommendedRate: "", maxExpectedMonthlyValue: "", maxExpectedValue: "" },
			{ productName: "ENGADGET Social Marketing", rateType: "CPM", valueType: "Paid Media", startDate: "1/6/2012", endDate: "10/7/2012", baseRate: "10", listRate: "10", soldRate: "50", value: "40", recommendedRate: "", maxExpectedMonthlyValue: "", maxExpectedValue: "" }
			]
    }
});
