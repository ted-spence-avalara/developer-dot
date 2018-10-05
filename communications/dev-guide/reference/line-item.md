---
layout: page
title:  Chapter 5.5 - Line Item
product: communications
doctype: comms_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/reference/location/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide/reference/tax-override/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Line Item</h3>

The <code>LineItem</code> object contains <b>detailed</b> information about a <b>single transaction</b>:

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Key</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>ref</code></td>
            <td><code>[string]</code>Reference code</td>
        </tr>
        <tr>
            <td><code>from</code></td>
            <td><a class="dev-guide-link" href="/communications/dev-guide/reference/location/"><code>[Location]</code></a> <span class="t5">optional</span> The point of origin for the line item
            </td>
        </tr>
        <tr>
            <td><code>to</code></td>
            <td><a class="dev-guide-link" href="/communications/dev-guide/reference/location/"><code>[Location]</code></a> <span class="t5">optional</span> The destination of the line item
            </td>
        </tr>
        <tr>
            <td><code>chg</code></td>
            <td><code>[double]</code> Charge
            </td>
        </tr>
        <tr>
            <td><code>lines</code></td>
            <td><code>[int]</code> Line Count
            </td>
        </tr>
        <tr>
            <td><code>loc</code></td>
            <td><code>[int]</code> Number of locations applied to the line item
            </td>
        </tr>
        <tr>
            <td><code>min</code></td>
            <td><code>[double]</code> Minutes applied to the line item
            </td>
        </tr>
        <tr>
            <td><code>sale</code></td>
            <td><code>[int]</code> Sale Type
                <br>
                <ul class="dev-guide-list">
                    <li><code>0</code> Wholesale</li>
                    <li><code>1</code> Retail</li>
                    <li><code>2</code> Consumed (Sales and Use Only)</li>
                    <li><code>3</code> Vendor Use (Sales and Use Only)</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><code>plsp</code></td>
            <td><code>[double]</code> <span class="t5">optional</span> Private Line Split
                <br>
                A percentage used to split a transaction charge between two points. For example:
                <br>
                <ul class="dev-guide-list">
                    <li>A transaction has two points: Point 'A' and Point 'Z'</li>
                    <li>A <code>plsp</code> of <code>0.25</code> means 25% of the taxes are attributed to Point 'A', the remaining 75% to Point 'Z'</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><code>incl</code></td>
            <td><code>[bool]</code> Tax Inclusive
                <ul class="dev-guide-list">
                        <li><code>true</code> Tax is included in the charge</li>
                        <li><code>false</code> Tax is exclusive to the charge</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><code>pror</code></td>
            <td><code>[double]</code> <span class="t5">optional</span> Pro-rated Percentage
            <br>
            A percentage used for the pro-rated calculation of fixed taxes.
            </td>
        </tr>
        <tr>
            <td><code>tran</code></td>
            <td><code>[int]</code> Transaction Type
            <br>
            The first part of the T/S Pair that defines the product to be taxed.
            <br>
            For a list of transaction/service types, check out the <a class="dev-guide-link" href="/communications/dev-guide/getting-started/environments-endpoints/"><code>/api/v2/afc/tspairs</code> endpoint</a>.
            </td>
        </tr>
        <tr>
            <td><code>serv</code></td>
            <td><code>[int]</code> Service Type
            <br>
            The second part of the T/S Pair that defines the product to be taxed.
            <br>
            For a list of transaction/service types, check out the <a class="dev-guide-link" href="/communications/dev-guide/getting-started/environments-endpoints/"><code>/api/v2/afc/tspairs</code> endpoint</a>.
            </td>
        </tr>
        <tr>
            <td><code>dbt</code></td>
            <td><code>[bool]</code> Debit
                <br>
                <ul class="dev-guide-list">
                        <li><code>true</code> Apply debit card logic to the transaction</li>
                        <li><code>false</code> Not a debit card transaction</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><code>adj</code></td>
            <td><code>[bool]</code> IsAdjustment
                <br>
                <ul class="dev-guide-list">
                        <li><code>true</code> The transaction represents a credit or adjustment</li>
                        <li><code>false</code> The transaction does not represent a credit or adjustment</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><code>adjm</code></td>
            <td><code>[int]</code> Adjustment Method
                <br>
                <ul class="dev-guide-list">
                        <li><code>0</code> Default. Tax brackets applied normally.</li>
                        <li><code>1</code> Least-favorable rate to customer. Tax brackets applied to produce smallest tax refund.</li>
                        <li><code>2</code> Most-favorable rate to customer. Tax brackets applied to produce largest tax refund.</li>
                </ul>
                In certain cases, when the rate of a tax will change based upon the charge or the number of lines in the transaction, clients may wish to make an adjustment at a different rate than would normally apply for the transaction. For example:
                <br>
                <ul class="dev-guide-list">
                    <li>A client purchased 20 lines at a rate of $0.67 per line.</li> 
                    <li>A credit/adjustment is created for 5 lines at a rate of $1.25 per line.</li> 
                </ul>
                Using the Least-favorable adjustment method, the 5 lines would be refunded at the least favorable rate for the brackets, ensuring the client was not overcompensated.
            </td>
        </tr>
        <tr>
            <td><code>disc</code></td>
            <td><code>[int]</code> <span class="t5">optional</span> Discount Type
                <br>
                <ul class="dev-guide-list">
                        <li><code>0</code> None</li>
                        <li><code>1</code> Retail Product: An amount subtracted from the original price to arrive at a lower price.</li>
                        <li><code>2</code> Manufacturer Product: A discount of the total amount reimbursed to either the retailer or the customer by the manufacturer.</li>
                        <li><code>3</code> Account Level: A stand-alone discount that is not applied against any service but instead as a stand-alone product.</li>
                        <li><code>4</code> Subsidized: A discount caused exclusively in telephone service where the telephone provider provides a service to a lifeline eligible customer. The discount will be on the local exchange service.</li>
                        <li><code>5</code> Goodwill: The total discount of a service that is recorded for accounting purposes but never billed to a customer.</li>
                </ul>
            </td>
        </tr>
    </tbody>
  </table>
</div>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/reference/location/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide/reference/tax-override/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>