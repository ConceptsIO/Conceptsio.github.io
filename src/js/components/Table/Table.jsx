import React from 'react';

class Table extends React.Component {
    render() {
        return (
            <div className="container" id="PriceTable">
                <h2>Pricing</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Pricing Tier</th>
                            <th scope="col">Script Kiddie</th>
                            <th scope="col">Code Monkey</th>
                            <th scope="col">Web Masters</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Build/Design Cost</td>
                            <td>$250 one time fee</td>
                            <td>$300 one time fee</td>
                            <td>$1000 one time fee</td>
                        </tr>
                        <tr>
                            <td>Maintenance Cost</td>
                            <td>$20/month</td>
                            <td>$50/month</td>
                            <td>$100/month</td>
                        </tr>
                        <tr>
                            <td>Strategy/Support Cost</td>
                            <td>$10/month</td>
                            <td>$20/month</td>
                            <td>$100/month</td>
                        </tr>
                        <tr>
                            <td>Features of Tier</td>
                            <td>
                                <ul style={{ paddingLeft: "0" }}>
                                    <li>Beautiful smart websites for online branding</li>
                                    <li>Access to Slack/Discord customer service/forums</li>
                                    <li>Mobile optimised websites</li>
                                    <li>Monthly strategy web conference call</li>
                                </ul>
                            </td>
                            <td>
                                <ul style={{ paddingLeft: "0" }}>
                                    <li>All features from the previous tiers</li>
                                    <li>Website dashboard</li>
                                    <li>Access to an account manager</li>
                                    <li>Support for GSuite email</li>
                                    <li>Best in class strategy consultations</li>
                                </ul>
                            </td>
                            <td>
                                <ul style={{ paddingLeft: "0" }}>
                                    <li>All features from the previous tiers</li>
                                    <li>Custom built features</li>
                                    <li>24/7 live support</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;