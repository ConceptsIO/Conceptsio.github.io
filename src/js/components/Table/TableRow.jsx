import parseJsonItem from "../Utilities/parseJsonItem";

function parseTableRowContents(tableRowContents) {
    return tableRowContents.map((item) => {
        return parseJsonItem(item.itemType, item.itemAttributes, item.itemContents);
    });
}

function parseTableRowContainers(tableRowContainers, tableRowContents) {
    return tableRowContainers.map((container) => {
        return parseJsonItem(container.containerType, container.containerAttributes, container.containerContents, tableRowContents);
    })
}

function parseTableRowData(tableRowData) {
    return parseTableRowContainers(tableRowData.componentContainers, parseTableRowContents(tableRowData.componentContents));
}

const TableRow = (props) => {
    return parseTableRowData(props.tableRowData);
}

export default TableRow;

[
    {
        "itemType": "td list",
        "containerID": "0",
        "itemContents": [
            "Build/Design Cost",
            "$250 one time fee",
            "$300 one time fee",
            {
                "itemType": "a",
                "itemAttributes": {
                    "href": "#contactUs"
                },
                "itemContents": "Let's Set Up a Meeting"
            }
        ]
    },
    {
        "itemtype": "td list",
        "containerID": "1",
        "itemContents": [
            "Maintenance Cost",
            "$20/month*",
            "$50/month*",
            "Dependent on Project Scope"
        ]
    },
    {
        "itemType": "td list",
        "containerID": "2",
        "itemContents": [
            "Strategy/Support Cost",
            "$10/month",
            "$20/month",
            "Dependent on Project Scope"
        ]
    },
    {
        "itemType": "td list",
        "containerID": "3",
        "itemContents": [
            "Features of Tier",
            {
                "itemType": "ul",
                "itemAttributes": {
                    "style": {
                        "paddingLeft": "5%",
                        "wrapContent": "true"
                    }
                },
                "itemContents": [
                    "Beautiful smart websites for online branding",
                    "Access to Slack/Discord customer service/forums",
                    "Mobile optimized websites",
                    "Monthly strategy web conference call"
                ]
            },
            {
                "itemType": "ul",
                "itemAttributes": {
                    "style": {
                        "paddingLeft": "5%"
                    }
                },
                "itemContents": [
                    "All features from the previous tiers",
                    "Website dashboard",
                    "Access to an account manager",
                    "Support for GSuite email",
                    "SEO consultation"
                ]
            },
            {
                "itemType": "ul",
                "itemAttributes": {
                    "style": {
                        "paddingLeft": "5%"
                    }
                },
                "itemContents": [
                    "All features from the previous tiers",
                    "Custom built features",
                    "24/7 live support ",
                    "Ecommerce consulting",
                    "D2C web marketplace on your site",
                    "Digital marketing consulting"
                ]
            }
        ]
    },
    {
        "itemtype": "td list",
        "containerID": "4",
        "itemContents": [
            "Who is this for?",
            "Small businesses who want a simple, stylish, static webpage.",
            "SMBs who wants a contracted team to manage their web presence and build their website content strategy",
            "Businesses seeking complex websites and web-based infrastructures that can be used as part of the business whether its a direct to consumer marketplace to an enterprise SaaS platform."
        ]
    },
    {
        "itemType": "td list",
        "containerID": "5",
        "itemContents": [
            {
                "itemType": "td",
                "itemAttributes": {
                    "colSpan": "4"
                }
            },
            {
                "itemType": "h6",
                "itemContents": "We understand that every business is different and their wants and budgets warrant different solutions. We have tried to build our standard pricing model with that in mind, however we will always be open to negotiating a bespoke solution."
            },
            {
                "itemType": "br"
            },
            "*Fees related to third-party services such as hosting, server costs, etc, are not included in the maintenance cost and will be assessed based on your business needs."
        ]
    }
]