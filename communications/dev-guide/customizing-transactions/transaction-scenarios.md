---
layout: page
title: Chapter 4 - Transaction Scenarios
product: communications
doctype: comms_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/customizing-transactions/account-customizations/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide/reference/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<b>Types of Transactions</b>
<ul class="dev-guide-list">
    <li>Calc Taxes - Canada</li>
    <li>Calc Taxes - jurisdiction Determination</li>
    <li>Adjustments</li>
    <li>Single tax item</li>
    <li>Multi-line Invoice</li>
    <li>Calc with Geocode</li>
    <li>Calc taxes with overrides</li>
    <li>Exemption (different types of Exemptions)</li>
    <li>Exclusion</li>
    <li>Inter-IntraState</li>
    <li>Private Line</li>
    <li>Pro-rated</li>
    <li>Traffic Study Overrides</li>
    <li>Invoice Mode</li>
    <li>Commit</li>
    <li>SAU</li>
    <li>bundles</li>
    <li>Tax Inclusive</li>
    <li>Invoice Mode</li>
</ul>

<b>Additional thoughts</b>
<ul class="dev-guide-list">
    <li>Optional fields</li>
    <li>Company Identifiers</li>
    <li>Transaction properties - customer</li>
    <li>Transaction properties - company</li>
</ul>

<h3>Sample Scenario block</h3>
Words here

<div class="dev-guide-test" id="test1">
    <div class="dev-guide-test-heading">Test Scenario 1</div>
    <div class="dev-guide-test-content">
        <h4>Setup</h4>
        <ul class="dev-guide-list">
            <li>Step 1</li>
            <li>Step 2</li>
                <ul class="dev-guide-list">
                    <li>Field 1: ABC</li>
                    <li>Field 2: DEF</li>
                </ul>
            <li>Step 3:</li>
                <ul class="dev-guide-list">
                    <li>Something 1
                        <ul class="dev-guide-list">
                            <li>Sub something 1</li>
                        </ul>
                    </li>
                </ul>
                <ul class="dev-guide-list">
                    <li>Something 2
                        <ul class="dev-guide-list">
                            <li>Sub something 2</li>
                        </ul>
                    </li>
                </ul>
            <li>Step 4</li>  
       </ul>

<div class="dev-guide-dropdown">
    <input id="checkbox_toggle1" type="checkbox" />
    <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
    <label for="checkbox_toggle1"><h4>Test Request</h4></label>
    <ul class="dev-guide-dropdown-content">
        <li> 
            <pre>
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
    "doc": "TEST-VoIP INVOICE 2017.12.26:12.02 AVA",
    "cmmt": false,
    "bill": {
        "ctry": "CAN",
        "int": true,
        "geo": false,
        "city": "Montreal",
        "st": "PQ",
        "zip": "H1A-0A1"
    },
    "cust": 0,
    "lfln": false,
    "date": "2018-06-01T12:00:00Z",
    "itms": [
        {
        "ref": "Line Item 001 - VoIP/Access Charge",
        "chg": 100,
        "line": 0,
        "sale": 1,
        "incl": false,
        "tran": 19,
        "serv": 6,
        "dbt": false,
        "adj": false
        },
        {
        "ref": "Line Item 002 - VoIP/Lines",
        "chg": 0,
        "line": 10,
        "sale": 1,
        "incl": false,
        "tran": 19,
        "serv": 21,
        "dbt": false,
        "adj": false
        },
        {
        "ref": "Line Item 003 - VoIP/Equip Rental",
        "chg": 25,
        "line": 0,
        "sale": 1,
        "incl": false,
        "tran": 19,
        "serv": 37,
        "dbt": false,
        "adj": false
        }
    ],
    "invm": true,
    "dtl": true,
    "summ": true,
    "opt": [
        {
        "key": "1",
        "val": "Canada VoIP Sample Line Items Invoice ABC-ZZZ"
        }
    ]
    }
]
}
            </pre>
        </li>
    </ul>
</div>
</div>
</div>


<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/customizing-transactions/account-customizations/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide/reference/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>