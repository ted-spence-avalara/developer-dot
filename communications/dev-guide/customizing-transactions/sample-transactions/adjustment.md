---
layout: page
title: Chapter 4.3.17 - Adjustments
product: communications
doctype: comms_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/customizing-transactions/sample-transactions/transaction-information/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide/reference/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

Allow for adjustment activities such as refunds, changing a customer’s bill or when terminating un-collectable accounts.
Tax adjustment functions are used for adjustment activities such as refunds, changing a customer’s bill or writing off un-collectable accounts. Please apply the following general rules while passing tax adjustments via Web Service.
1. To calculate adjustments accurately:
b. Send positive values for charge, line, minutes, and locations.
c. Send the adjustment method (see Adjustment Method Table ).
d. Send the discount type (see Discount Type Table).


Adjustment
Adjustment method
Discount Type
In certain cases, when the rate of a tax will change based upon the charge or the number of lines in the transaction, clients may wish to make an adjustment at a different rate than would normally apply for the transaction. For example:
<ul class="dev-guide-list">
<li>A client purchased 20 lines at a rate of $0.67 per line</li>
<li>A credit/adjustment is created for 5 lines at a rate of $1.25 per line</li>
</ul>
Using the <b>Least-favorable</b> adjustment method, the 5 lines are refunded at the least favorable rate for the brackets, ensuring the client was not overcompensated.

4.1.7 in TM_101
Discounts may or may not be taxed within each state. When a discount is taxed, the customer receives a tax benefit commensurate with the amount of the discount (i.e., if the customer gets $5 off on a transaction subject to a 5% tax, the customer pays $0.25 less in tax than they would have). When a
discount is not taxed, the customer receives no tax benefit from the discount. Whether a discount is taxed or not depends on the type of discount and the rules in a particular tax jurisdiction.
See 4.1.7.x as well


You can use "adj": true at the line item level to perform an adjustment or send through a negative charge. The adjustment method should always be set to 0 (its usage has been deprecated).
