---
layout: page
title: 2.2 - Should I Commit?
product: avaTax
doctype: dev_guide
chapter: transactions
nav: apis
disqus: 1
---
<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/transactions/simple-transaction/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/transactions/document-types/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

A Transaction can reflect one of many different types of business documents, and it’s worth discussing how a transaction can change over time. Let’s begin by understanding how a “Sales” transaction is created, and how it can change over time.

<h3>The Transaction State Diagram</h3>

In AvaTax, a sales transaction is an exchange that occurs between two companies. Although other types of transactions exist that can be within a single company - for example, inventory transfer transactions - in today’s use case we will only examine transactions that occur between two companies.

When you create a transaction, the information about that transaction is referred to as a “Document”. You will see many comments or articles that refer to “Documents” rather than transactions - it helps if you think of the “Transaction” as the API call, and the “Document” as the data that is stored on disk. For today’s article, we will refer to Transactions as the API, and Documents as the values returned back from the API calls.

<img src="/avatax/dev-guide/transactions/transaction-commit.png">

As you can see from the lifecycle document above, a transaction can go through a number of steps before it is finalized. We have designed these steps to be flexible enough to solve problems for a variety of different customers and different types of tax processes. Clearly, the way you use AvaTax can be uniquely suited to your business. Let’s start with a few common use cases.

In an online store, your first task is to provide a sales tax estimate for the user casually browsing through your website. These casual visitors have not purchased anything yet; but by giving them an accurate tax estimate you can show off your store’s high quality and commitment to accuracy. To help out this customer, you call <a class="dev-guide-link" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/">CreateTransaction</a> with the transaction type set to SalesOrder. This gives you an accurate estimate of tax (assuming the customer put in their address correctly!), but it won’t record any tax data yet, because the customer hasn’t bought anything.

We'll look at an example of this below:
<div class="dev-guide-test" id="test1">
<div class="dev-guide-test-heading">Test Case - 2.2.1 </div>
<div class="dev-guide-test-content">
<h4>Setup</h4>
<ul class="dev-guide-list">
    <li>In your connector, create the following transaction:</li>
    <ul class="dev-guide-list">
        <li>Type: SalesOrder</li>
        <li>Company Code: DEVGUIDE</li>
        <li>Document Date: 2017-06-15</li>
        <li>Customer/vendor code: ABC</li>
        <li>Document code: TestTransaction</li>
        <li>Addresses:</li>
            <ul class="dev-guide-list">
                <li>SingleLocation</li>
                <li>512 S Mangum St, Durham NC 27701</li>
            </ul>
        <li>Lines:</li>
            <ul class="dev-guide-list">
                <li>Number: 1</li>
                <li>Quantity: 1</li>
                <li>Amount: 100</li>
            </ul>
    </ul>
    <li>Calculate tax for your transaction using AvaTax.</li>
</ul>

<h4>Assertions</h4>
<ul class="dev-guide-list">
    <li>Since this is a 'SalesOrder' transaction, the response includes the sales tax calculation, but the transaction is not committed to the AvaTax admin console.</li>
</ul>

<div class="dev-guide-dropdown">
    <input id="checkbox_toggle" type="checkbox" />
    <i id="icon-up" class="glyphicon glyphicon-chevron-down"></i><i id="icon-down" class="glyphicon glyphicon-chevron-right"></i>
    <label for="checkbox_toggle"><h4>Expected API Call</h4></label>
    <ul class="dev-guide-dropdown-content">
        <li>
            <pre>
{
    "type": "SalesOrder",
    "companyCode": "DEVGUIDE",
    "date": "2017-06-15",
    "customerCode": "ABC",
    "code": "TestTransaction",
    "addresses": {
        "singleLocation": {
            "line1": "512 S Mangum St",
            "city": "Durham",
            "region": "NC",
            "country": "US",
            "postalCode": "27701"
        }
    },
    "lines": [
        {
            "number": "1",
            "quantity": 1,
            "amount": 100,
        }
    ],
}
</pre>
        </li>
    </ul>
</div>
</div>
</div>

We'll talk more about reconciliation in <a class="dev-guide-link" href="/avatax/dev-guide/reconciliation/">Chapter 4</a>.

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/transactions/simple-transaction/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/transactions/document-types/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>