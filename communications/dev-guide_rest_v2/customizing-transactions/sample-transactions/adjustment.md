---
layout: page
title: Chapter 4.3.17 - Adjustments
product: communications
doctype: comms_rest_v2_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/optional-fields/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/tax-inclusive/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

The REST v2 Tax Adjustment functionality is used to perform activities such as refunds, changing a customer's bill, or writing off un-collectable accounts.

There are two ways to send an Adjustment to REST v2:
<ol class="dev-guide-list">
  <li>Set the Adjustment flag (<code>adj</code>) to <code>true</code> on the appropriate <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">LineItem(s)</a></li>
    <ul class="dev-guide-list">
      <li>Send <b>positive</b> values for charge (<code>chg</code>), lines (<code>line</code>), minutes (<code>min</code>), and/or locations (<code>loc</code>)</li>
      <li>Set the <a class="dev-guide-link" href="#adjm">adjustment method</a> (<code>adjm</code>) to <code>0</code></li>
      <li>Set the <a class="dev-guide-link" href="#disc">discount type</a> (<code>disc</code>)</li>
    </ul>
  <li>Set the Adjustment flag (<code>adj</code>) to <code>false</code></li>
    <ul class="dev-guide-list">
      <li>Send <b>negative</b> values for charge (<code>chg</code>), lines (<code>line</code>), minutes (<code>min</code>), and/or locations (<code>loc</code>)</li>
      <li>Set the <a class="dev-guide-link" href="#adjm">adjustment method</a> (<code>adjm</code>) to <code>0</code></li>
      <li>Set the <a class="dev-guide-link" href="#disc">discount type</a> (<code>disc</code>)</li>
    </ul>
</ol>

<h4>Note</h4>
Adjustment transactions are run independently of any other invoice, meaning that there is no connection between the transactions.  Be mindful of what has been submitted to avoid duplicate credits to your customers, etc.  The <a class="dev-guide-link" href="https://communications.avalara.net/AFC/Reporting/Explorer">Reporting</a> tool within <a class="dev-guide-link" href="https://communications.avalara.net/AFC/Reporting/Explorer">Customer Portal</a> can be used to help identify the transactions and adjustments already processed.

<h3 id="adjm">Adjustment Method</h3>
The use of <b>Adjustment Method</b> (<code>adjm</code>) has been deprecated.  This field should always be defaulted to <code>0</code>.

<h3 id="disc">Discount Type</h3>
Set the <b>Discount Type</b> (<code>disc</code>) to one of the values listed below.  If discounts do not apply or you are unsure, set the field to <code>0</code>.

Discounts may or may not be taxed within each state. When a discount is taxed, the customer receives a tax benefit commensurate with the amount of the discount (i.e., if the customer gets $5 off on a transaction subject to a 5% tax, the customer pays $0.25 less in tax than they would have). 
When a discount is not taxed, the customer receives no tax benefit from the discount. Whether a discount is taxed or not depends on the type of discount and the rules in the particular tax jurisdiction.

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Value</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>None (<span class="t5">default</span>)</td>
        <td><code>0</code></td>
        <td>Discount Type not applicable</td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="#retail-product">Retail Product</a></td>
        <td><code>1</code></td>
        <td>An amount subtracted from the original price to arrive at a lower price</td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="#manufacturer-product">Manufacturer Product</a></td>
        <td><code>2</code></td>
        <td>A credit applied to the total amount reimbursed to either the retailer or the customer by the manufacturer</td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="#account-level">Account Level</a></td>
        <td><code>3</code></td>
        <td>A stand-alone discount that is not applied against any service but instead as a stand-alone product</td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="#subsidized">Subsidized</a></td>
        <td><code>4</code></td>
        <td>A credit for telephone service where the telephone provider provides a service to a lifeline eligible customer. The credit is applied to the subscriber line charge</td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="#goodwill">Goodwill</a></td>
        <td><code>5</code></td>
        <td>A credit applied to customer invoices for the purpose of engendering customer goodwill. For example, compensation for a service outage</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>
<h4 id="retail-product">Retail Product Example Scenario</h4>
A customer has voice mail and is charged a monthly recurring charge of $6.00/month. The customer buys a second line and gets voice mail free for a month. The billing system will make separate calls to REST v2 for the monthly recurring charge of $6.00 and the discount of -$6.00. Both transactions will be represented by the same tax category, but the billing system will send an additional value on the discount transaction indicating that it is a <b>Retailer discount</b>.

The $6.00 charge for voice mail generates $0.32 in state sales tax. For the -$6.00 discount, REST v2 determines that the state allows a full tax credit on Retailer Discounts and generates -$0.32 in state sales tax. The offsetting tax amounts are presumably netted together in the tax summary on the customer’s bill. Whether the charge and discount amounts are netted on the customer’s bill is up to the billing system, and does not affect the tax calculation or the presentation of tax on the bill.
<br/>
<h4 id="manufacturer-product">Manufacturer Product Example Scenario</h4>
A customer buys a satellite dish for $300.00 and receives a $50.00 rebate (discount) from the satellite company. The billing system will make separate calls to REST v2 for the dish charge of $300.00 and the discount of -$50.00. Both transactions will be represented by the same tax category, but the billing system will send an additional value on the discount transaction indicating that it is a <b>Manufacturer discount</b>. The $300.00 charge for the satellite dish generates $15.90 in state sales tax. For the -$50.00 discount, REST v2 determines that the state does not allow any tax credit on Manufacturer Discounts and generates $0.00 in state sales tax. The offsetting tax amounts are presumably netted together in the tax summary on the customer’s bill. Whether the charge and discount amounts are netted on the customer’s bill is up to the billing system, and does not affect the tax calculation or the presentation of tax on the bill.
<br/>
<h4 id="account-level">Account Level Example Scenario</h4>
A customer spends significant amounts on a wide range of services including local exchange, intrastate toll, and interstate toll. The customer’s purchasing activity occurs in several states and across multiple accounts. The customer’s spending levels earn it a $1,000.00 discount that is not applied to any particular product or service, but will be applied at an account level.

Your company’s Tax Department has determined that <b>Account Level discounts</b> in the state will receive full tax credit, so the discount is mapped to a tax category created to represent generic account level discounts and the customer gets a $53.00 credit of state sales tax along with the $1,000.00 discount. The application of state sales tax to the discount, rather than other state's sales taxes (i.e., states in which there was purchasing activity that helped to earn the discount), is a consequence of the discount being applied to a state account and The Tax Department has determined that the related tax risk is acceptable.
<br/>
<h4 id="subsidized">Subsidized Example Scenario</h4>
A Lifeline customer purchases local exchange service. Local exchange service is normally $24.00, but Lifeline customers are charged $20.50 and the balance of $3.50 is drawn from a federal government fund for the subsidization of local exchange service to Lifeline customers. The company still has $24.00 in revenue and will owe state sales tax on the entire $24.00 in revenue. The company is prohibited from drawing on the federal government fund to pay for the tax on the $3.50, so the customer must pay all of the applicable tax.
<br/>
<h4 id="goodwill">Goodwill Example Scenario</h4>
A customer buys a second line and gets voice mail free for a month ($6.00 value). The free voice mail is a <b>Goodwill discount</b> because, although it is offered by the retailer and applied to a particular product or service, the terms of the promotion provide that the discount will not be taxed.

To accomplish this, the billing system will make separate calls to REST v2 of $6.00 for the monthly recurring voice mail charge and -$6.00 for the Goodwill discount. Both transactions will be represented by the same tax category, but the billing system will send an additional value on the discount transaction indicating that it is a Goodwill discount. The $6.00 charge for voice mail generates $0.32 in state sales tax. When the -$6.00 discount is processed for tax applications, REST v2 determines that a Goodwill discount is not taxed and generates -$0.00 in state sales tax. The offsetting tax amounts are presumably netted together in the tax summary on the customer’s bill. Whether the charge and discount amounts are netted on the customer’s bill is up to the billing system, and does not affect the tax calculation or the presentation of tax on the bill.

<h3>Adjustment Example using Adjustment Flag</h3>
In this example, the adjustment flag (<code>adj</code>) is set to <code>true</code> on all three line item included in the invoice and the charge amounts (<code>chg</code>) are positive values.  Adjustment method (<code>adjm</code>) is explicitly set to <code>0</code> on Line Items 001 and 003, while allowed to default on Line Item 002.  Discount Type (<code>disc</code>) is set to <code>0</code> for Line Item 001, <code>1</code> for Line Item 002, and <code>5</code> for Line Item 003.
<br/>
{% highlight json %}
{
  "cmpn": {
    "bscl": 0,
    "svcl": 0,
    "fclt": false,
    "frch": false,
    "reg": false
  },
  "inv": [
    {
      "doc": "ADJUSTMENT FLAG EXAMPLE",
      "cmmt": false,
      "bill": {
        "cnty": "San Francisco",
        "ctry": "USA",
        "int": true,
        "geo": false,
        "city": "San Francisco",
        "st": "CA",
        "zip": "94102"
      },
      "cust": 0,
      "lfln": false,
      "date": "2017-05-01T12:00:00Z",
      "itms": [
        {
          "ref": "Line Item 001 - Adjustment with Discount Type 0",
          "chg": 100,
          "line": 0,
          "sale": 1,
          "incl": false,
          "tran": 19,
          "serv": 6,
          "dbt": false,
          "adj": true,
          "adjm": 0,
          "disc": 0
        },
        {
          "ref": "Line Item 002 - Adjustment with Discount Type 1",
          "chg": 0,
          "line": 10,
          "sale": 1,
          "incl": false,
          "tran": 19,
          "serv": 21,
          "dbt": false,
          "adj": true,
          "disc": 1
        },
        {
          "ref": "Line Item 003 - Adjustment with Discount Type 5",
          "chg": 25,
          "line": 0,
          "sale": 1,
          "incl": false,
          "tran": 19,
          "serv": 37,
          "dbt": false,
          "adj": true,
          "adjm": 0,
          "disc": 5
        }
      ],
      "invm": true,
      "dtl": true,
      "summ": true
    }
  ]
}
{% endhighlight %}

<h4>Response</h4>
Notice the negative exempt sale amounts (<code>exm</code>) and tax amounts (<code>tax</code>), indicating the credit back to your customer.
<br/>
<div class="panel-group">
  <a data-toggle="collapse" href="#collapse1">View the Response JSON</a>
  <div id="collapse1" class="panel-collapse collapse">
    <div class="panel-body">
{% highlight json %}
{
  "inv": [
    {
      "doc": "ADJUSTMENT FLAG EXAMPLE",
      "itms": [
        {
          "ref": "Line Item 001 - Adjustment with Discount Type 0",
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 35.099999999999994,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "Universal Lifeline Telephone Service Charge (VoIP)",
              "exm": -64.9,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0475,
              "sur": true,
              "tax": -1.6672499999999997,
              "lvl": 1,
              "tid": 454
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 35.099999999999994,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "CA Teleconnect Fund (VoIP)",
              "exm": -64.9,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0108,
              "sur": true,
              "tax": -0.37908,
              "lvl": 1,
              "tid": 452
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 35.099999999999994,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "CA High Cost Fund A (VoIP)",
              "exm": -64.9,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0035,
              "sur": true,
              "tax": -0.12284999999999999,
              "lvl": 1,
              "tid": 450
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 35.099999999999994,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "TRS (VoIP)",
              "exm": -64.9,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.005,
              "sur": true,
              "tax": -0.17549999999999996,
              "lvl": 1,
              "tid": 217
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 35.099999999999994,
              "calc": 1,
              "cat": "E-911 CHARGES",
              "cid": 7,
              "name": "E911 (VoIP)",
              "exm": -64.9,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0075,
              "sur": false,
              "tax": -0.26324999999999993,
              "lvl": 1,
              "tid": 161
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 64.9,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "FUSF (VoIP)",
              "exm": -35.099999999999994,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.174,
              "sur": false,
              "tax": -11.2926,
              "lvl": 0,
              "tid": 162
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 64.9,
              "calc": 1,
              "cat": "REGULATORY CHARGES",
              "cid": 6,
              "name": "FCC Regulatory Fee (VoIP)",
              "exm": -35.099999999999994,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.00302,
              "sur": false,
              "tax": -0.19599800000000003,
              "lvl": 0,
              "tid": 226
            }
          ]
        },
        {
          "ref": "Line Item 002 - Adjustment with Discount Type 1",
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 0,
              "calc": 4,
              "cat": "E-911 CHARGES",
              "cid": 7,
              "name": "San Francisco Access line Tax (VoIP)",
              "exm": 0,
              "lns": -10,
              "min": 0,
              "pcd": 377300,
              "rate": 3.27,
              "sur": false,
              "tax": -32.7,
              "lvl": 3,
              "tid": 250
            }
          ]
        },
        {
          "ref": "Line Item 003 - Adjustment with Discount Type 5"
        }
      ],
      "summ": [
        {
          "max": 2147483647,
          "min": 0,
          "tchg": -35.099999999999994,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "Universal Lifeline Telephone Service Charge (VoIP)",
          "exm": -64.9,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0475,
          "sur": true,
          "tax": -1.6672499999999997,
          "lvl": 1,
          "tid": 454
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": -35.099999999999994,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "CA Teleconnect Fund (VoIP)",
          "exm": -64.9,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0108,
          "sur": true,
          "tax": -0.37908,
          "lvl": 1,
          "tid": 452
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": -35.099999999999994,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "CA High Cost Fund A (VoIP)",
          "exm": -64.9,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0035,
          "sur": true,
          "tax": -0.12284999999999999,
          "lvl": 1,
          "tid": 450
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": -35.099999999999994,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "TRS (VoIP)",
          "exm": -64.9,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.005,
          "sur": true,
          "tax": -0.17549999999999996,
          "lvl": 1,
          "tid": 217
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": -35.099999999999994,
          "calc": 1,
          "cat": "E-911 CHARGES",
          "cid": 7,
          "name": "E911 (VoIP)",
          "exm": -64.9,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0075,
          "sur": false,
          "tax": -0.26324999999999993,
          "lvl": 1,
          "tid": 161
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": -64.9,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "FUSF (VoIP)",
          "exm": -35.099999999999994,
          "lns": 0,
          "pcd": 0,
          "rate": 0.174,
          "sur": false,
          "tax": -11.2926,
          "lvl": 0,
          "tid": 162
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": -64.9,
          "calc": 1,
          "cat": "REGULATORY CHARGES",
          "cid": 6,
          "name": "FCC Regulatory Fee (VoIP)",
          "exm": -35.099999999999994,
          "lns": 0,
          "pcd": 0,
          "rate": 0.00302,
          "sur": false,
          "tax": -0.19599800000000003,
          "lvl": 0,
          "tid": 226
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 0,
          "calc": 4,
          "cat": "E-911 CHARGES",
          "cid": 7,
          "name": "San Francisco Access line Tax (VoIP)",
          "exm": 0,
          "lns": -10,
          "pcd": 377300,
          "rate": 3.27,
          "sur": false,
          "tax": -32.7,
          "lvl": 3,
          "tid": 250
        }
      ]
    }
  ]
}
{% endhighlight %}
    </div>
  </div>
</div>

<h3>Adjustment Example using Negative Amounts</h3>
In this example, the adjustment flag (<code>adj</code>) is set to <code>false</code> on all three line item included in the invoice and the charge amounts (<code>chg</code>) are set to negative values, indicating the need for an adjustment.  Adjustment method (<code>adjm</code>) is explicitly set to <code>0</code> on Line Items 001 and 003, while allowed to default on Line Item 002.  Discount Type (<code>disc</code>) is set to <code>0</code> for Line Item 001, <code>1</code> for Line Item 002, and <code>5</code> for Line Item 003.
<br/>
{% highlight json %}
{
  "cmpn": {
    "bscl": 0,
    "svcl": 0,
    "fclt": false,
    "frch": false,
    "reg": false
  },
  "inv": [
    {
      "doc": "NEGATIVE AMOUNTS ADJUSTMENT EXAMPLE",
      "cmmt": false,
      "bill": {
        "cnty": "San Francisco",
        "ctry": "USA",
        "int": true,
        "geo": false,
        "city": "San Francisco",
        "st": "CA",
        "zip": "94102"
      },
      "cust": 0,
      "lfln": false,
      "date": "2017-05-01T12:00:00Z",
      "itms": [
        {
          "ref": "Line Item 001 - Adjustment with Discount Type 0",
          "chg": -100,
          "line": 0,
          "sale": 1,
          "incl": false,
          "tran": 19,
          "serv": 6,
          "dbt": false,
          "adj": false,
          "adjm": 0,
          "disc": 0
        },
        {
          "ref": "Line Item 002 - Adjustment with Discount Type 1",
          "chg": 0,
          "line": -10,
          "sale": 1,
          "incl": false,
          "tran": 19,
          "serv": 21,
          "dbt": false,
          "adj": false,
          "disc": 1
        },
        {
          "ref": "Line Item 003 - Adjustment with Discount Type 5",
          "chg": -25,
          "line": 0,
          "sale": 1,
          "incl": false,
          "tran": 19,
          "serv": 37,
          "dbt": false,
          "adj": false,
          "adjm": 0,
          "disc": 5
        }
      ],
      "invm": true,
      "dtl": true,
      "summ": true
    }
  ]
}
{% endhighlight %}

<h4>Response</h4>
Notice the negative exempt sale amounts (<code>exm</code>) and tax amounts (<code>tax</code>), indicating the credit back to your customer.
<br/>
<div class="panel-group">
  <a data-toggle="collapse" href="#collapse2">View the Response JSON</a>
  <div id="collapse2" class="panel-collapse collapse">
    <div class="panel-body">
{% highlight json %}
{
  "inv": [
    {
      "doc": "NEGATIVE AMOUNTS ADJUSTMENT EXAMPLE",
      "itms": [
        {
          "ref": "Line Item 001 - Adjustment with Discount Type 0",
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 35.099999999999994,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "Universal Lifeline Telephone Service Charge (VoIP)",
              "exm": -64.9,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0475,
              "sur": true,
              "tax": -1.6672499999999997,
              "lvl": 1,
              "tid": 454
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 35.099999999999994,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "CA Teleconnect Fund (VoIP)",
              "exm": -64.9,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0108,
              "sur": true,
              "tax": -0.37908,
              "lvl": 1,
              "tid": 452
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 35.099999999999994,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "CA High Cost Fund A (VoIP)",
              "exm": -64.9,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0035,
              "sur": true,
              "tax": -0.12284999999999999,
              "lvl": 1,
              "tid": 450
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 35.099999999999994,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "TRS (VoIP)",
              "exm": -64.9,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.005,
              "sur": true,
              "tax": -0.17549999999999996,
              "lvl": 1,
              "tid": 217
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 35.099999999999994,
              "calc": 1,
              "cat": "E-911 CHARGES",
              "cid": 7,
              "name": "E911 (VoIP)",
              "exm": -64.9,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0075,
              "sur": false,
              "tax": -0.26324999999999993,
              "lvl": 1,
              "tid": 161
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 64.9,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "FUSF (VoIP)",
              "exm": -35.099999999999994,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.174,
              "sur": false,
              "tax": -11.2926,
              "lvl": 0,
              "tid": 162
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 64.9,
              "calc": 1,
              "cat": "REGULATORY CHARGES",
              "cid": 6,
              "name": "FCC Regulatory Fee (VoIP)",
              "exm": -35.099999999999994,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.00302,
              "sur": false,
              "tax": -0.19599800000000003,
              "lvl": 0,
              "tid": 226
            }
          ]
        },
        {
          "ref": "Line Item 002 - Adjustment with Discount Type 1",
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 0,
              "calc": 4,
              "cat": "E-911 CHARGES",
              "cid": 7,
              "name": "San Francisco Access line Tax (VoIP)",
              "exm": 0,
              "lns": -10,
              "min": 0,
              "pcd": 377300,
              "rate": 3.27,
              "sur": false,
              "tax": -32.7,
              "lvl": 3,
              "tid": 250
            }
          ]
        },
        {
          "ref": "Line Item 003 - Adjustment with Discount Type 5"
        }
      ],
      "summ": [
        {
          "max": 2147483647,
          "min": 0,
          "tchg": -35.099999999999994,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "Universal Lifeline Telephone Service Charge (VoIP)",
          "exm": -64.9,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0475,
          "sur": true,
          "tax": -1.6672499999999997,
          "lvl": 1,
          "tid": 454
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": -35.099999999999994,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "CA Teleconnect Fund (VoIP)",
          "exm": -64.9,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0108,
          "sur": true,
          "tax": -0.37908,
          "lvl": 1,
          "tid": 452
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": -35.099999999999994,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "CA High Cost Fund A (VoIP)",
          "exm": -64.9,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0035,
          "sur": true,
          "tax": -0.12284999999999999,
          "lvl": 1,
          "tid": 450
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": -35.099999999999994,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "TRS (VoIP)",
          "exm": -64.9,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.005,
          "sur": true,
          "tax": -0.17549999999999996,
          "lvl": 1,
          "tid": 217
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": -35.099999999999994,
          "calc": 1,
          "cat": "E-911 CHARGES",
          "cid": 7,
          "name": "E911 (VoIP)",
          "exm": -64.9,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0075,
          "sur": false,
          "tax": -0.26324999999999993,
          "lvl": 1,
          "tid": 161
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": -64.9,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "FUSF (VoIP)",
          "exm": -35.099999999999994,
          "lns": 0,
          "pcd": 0,
          "rate": 0.174,
          "sur": false,
          "tax": -11.2926,
          "lvl": 0,
          "tid": 162
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": -64.9,
          "calc": 1,
          "cat": "REGULATORY CHARGES",
          "cid": 6,
          "name": "FCC Regulatory Fee (VoIP)",
          "exm": -35.099999999999994,
          "lns": 0,
          "pcd": 0,
          "rate": 0.00302,
          "sur": false,
          "tax": -0.19599800000000003,
          "lvl": 0,
          "tid": 226
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 0,
          "calc": 4,
          "cat": "E-911 CHARGES",
          "cid": 7,
          "name": "San Francisco Access line Tax (VoIP)",
          "exm": 0,
          "lns": -10,
          "pcd": 377300,
          "rate": 3.27,
          "sur": false,
          "tax": -32.7,
          "lvl": 3,
          "tid": 250
        }
      ]
    }
  ]
}
{% endhighlight %}
    </div>
  </div>
</div>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/optional-fields/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/tax-inclusive/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>