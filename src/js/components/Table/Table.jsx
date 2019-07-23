import React from 'react';

class Table extends React.Component {
    /*constructor(props) {
        super(props);

        var tableItems = (function(jsonURL) {
            var json = null;
            $.ajax({
                'url' : jsonURL,
                'datatype' : 'json',
                async : false,
                'success' : function(data) {
                    json = data;
                }
            });
            return json;
        })(this.props.tableJSONURL);
    }*/
    render() {
        return (
            <div className="container" id="PriceTable">
                <h2>Pricing</h2>
                <br />
                <table className="table table-bordered" style={{ borderColor: "black"}}>
                    <thead>
                        <tr>
                            <th scope="col" style={{width:"15%"}}>Pricing Tier</th>
                            <th scope="col" style={{width:"25%"}}>Script Kiddie</th>
                            <th scope="col" style={{width:"25%"}}>Code Monkey</th>
                            <th scope="col" style={{width:"25%"}}>Web Masters</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Build/Design Cost</td>
                            <td>$250 one time fee</td>
                            <td>$300 one time fee</td>
                            <td><a href="#contactUs">Let's Set Up a Meeting</a></td>
                        </tr>
                        <tr>
                            <td>Maintenance Cost</td>
                            <td>$20/month*</td>
                            <td>$50/month*</td>
                            <td>Dependent on Project Scope*</td>
                        </tr>
                        <tr>
                            <td>Strategy/Support Cost</td>
                            <td>$10/month</td>
                            <td>$20/month</td>
                            <td>Dependent on Project Scope</td>
                        </tr>
                        <tr>
                            <td>Features of Tier</td>
                            <td>
                                <ul style={{ paddingLeft: "5%", wrapContent:"true" }}>
                                    <li>Beautiful smart websites for online branding</li>
                                    <li>Access to Slack/Discord customer service/forums</li>
                                    <li>Mobile optimized websites</li>
                                    <li>Monthly strategy web conference call</li>
                                </ul>
                            </td>
                            <td>
                                <ul style={{ paddingLeft: "5%" }}>
                                    <li>All features from the previous tiers</li>
                                    <li>Website dashboard</li>
                                    <li>Access to an account manager</li>
                                    <li>Support for GSuite email</li>
                                    <li>SEO consultation</li>
                                </ul>
                            </td>
                            <td>
                                <ul style={{ paddingLeft: "5%" }}>
                                    <li>All features from the previous tiers</li>
                                    <li>Custom built features</li>
                                    <li>24/7 live support</li>
                                    <li>Ecommerce consulting</li>
                                    <li>D2C web marketplace on your site</li>
                                    <li>Digital marketing Consulting</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Who is this for?
                            </td>
                            <td>
                                Small business who want a simple, stylish, static webpage.
                            </td>
                            <td>
                                SMBs who wants a contracted team to manage their web presence and build their website content strategy.
                            </td>
                            <td>
                                Businesses seeking complex websites and web-based infrastructures that can be used as part of the business whether its a direct to consumer marketplace to an enterprise SaaS platform.
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="4">
                                <h6>
                                    We understand that every business is different and their wants and budgets warrant different solutions. We have tried to build our standard pricing model with that in mind, however we 
                                    will always be open to negotiating a bespoke solution.
                                </h6>
                                <br />
                                *Fees related to third-party services such as hosting, server costs, etc, are not included in the maintenance cost and will be assessed based on your business needs.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;