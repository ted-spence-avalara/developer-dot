---
layout: post
title: Tax Rates for Lines and Documents
description: How can you determine the rate for a line on an invoice?
date: 2018-11-06 12:00
author: Ted Spence
comments: true
categories: avatax
product: avatax
doctype: blog
disqus: 1
---

The Avalara engineering team built AvaTax so it can solve tax problems for you and make your life easier.  We solve compliance problems of all shapes and sizes; and our software must be both accurate and usable.

So what happens when accuracy and usability come into conflict?  Let's talk about tax rates.

<h3>Documents and Lines</h3>

When you visit your local grocery store or market, you receive a receipt that lists all the items you purchase, your total, and the amount of tax charged.  You can verify the total sums up correctly, but you'll notice something interesting.  Most grocery receipts display the tax rate - for example, 7% - but the tax isn't applied evenly to the whole receipt.

What happened here?

If you make a grocery purchase for $25.00, it's likely that some items will be taxable and others will be exempt.  Many states have exemptions for basic food needs, or for certain types of items.  Ideally, to include maximum information, your receipt could display something like the following:

||Name|Amount|Rate|Tax||
|--|--|--|
|TOMATOES|2.99|7%|0.21|
|LENTILS|2.79|7%|0.20|
|MILK|3.99|0%|0.00|

In this example receipt, you could see that the milk happened to be exempt whereas the lentils and tomatoes were taxed at a 7% rate.  If you multiply the amount on each line by its rate, you get the correct tax for that line.

Why doesn't everyone do this?  Let's start by looking at rounding.

<h3>Lines and Rounding</h3>

In the example above, the total amount that is taxable is $5.78.  Line #1 has a tax amount of 21 cents, and line #2 has a tax amount of 20 cents.  But if you take the total taxable amount and multiply it by the rate, you get 40 cents.  The extra cent appeared because both line #1 and line #2 rounded their values up to the next highest penny.  Anyone scrutinizing their receipt would find a discrepancy and could challenge the accuracy of your receipt.

To handle this problem, AvaTax supports both line-level rounding and document-level rounding.  Depending on your choice, AvaTax will either calculate tax for each line individually, or it will calculate tax on the entirety of the document.  In line-level mode, you'll pay $0.41 tax; in document-level mode, you'll pay $0.40.

The choice of rounding modes is entirely an accounting policy decision.  There is no right answer; your accounting department needs to decide whether each line on the invoice is considered to be severable or whether the entire transaction is a single whole.  If you choose to expose lots of detail on your receipt, your customers may scrutinize it and ask to debate your choice of rounding modes.

The next problem comes when you have tax laws more complex than single rates.

<h3>Complex Tax Laws</h3>

Tax laws don't have to be complicated.  A jurisdiction can pass a straightforward law that says "All products sold in this jurisdiction must pay a sales tax of one percent of the total amount of the sale."  That kind of law is easy to calculate and easy to use.

The most difficulty occurs when a jurisdiction passes tax laws that contain features such as caps, thresholds, tax base issues, and others.  Some jurisdictions even mix in per-quantity fixed amount taxes, such as bottle deposits, alongside dollar-amount-percentage rate taxes, like sales taxes or VAT.  Other jurisdictions include rules where certain taxes only apply in some situations like mixed-sourcing, or interrelationships between taxed items.

As of the date I wrote this article, in Tennessee, there is a [local option tax](https://www.tn.gov/revenue/taxes/sales-and-use-tax/single-article.html) that applies to only a portion of the line amount.  The exact rules are pretty complex; suffice to say that you need to determine for each line of your invoice how much of the item is taxed.

In complex situations like this, it is often not possible to determine an exact rate for a line.  To determine the tax rate for a line, you could use one of these options:

<ul class="normal">
  <li>Sum up all rate of tax laws that apply to a line;</li>
  <li>Divide the line tax by the line amount and produce an "effective rate";</li>
  <li>Display all taxes down to the detail level, explaining tax base, caps, thresholds, and more; or</li>
  <li>Do not display tax rates at the line level.</li>
</ul>

All of these solutions can cause problems.  If you sum up the rate of tax laws, you won't account for rounding, tax base issues, partial exemptions, or anything else.  If you produce an "effective rate", it likely will not match the published rate for that jurisdiction.  If you skip showing the rates, some customers may ask for the information to be provided after the fact.  And showing all the necessary information can make your receipt huge!

Since every one of these cases involves a tradeoff, Avalara does not issue recommendations about which approach you should use.  You should consult with your accountant, lawyer, or auditor to determine which approach is best for your business.

--Ted Spence, Director, AvaTax API
