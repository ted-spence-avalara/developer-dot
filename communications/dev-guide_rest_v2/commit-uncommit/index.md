---
layout: page
title: Chapter 3 - Commit/Uncommit
product: communications
doctype: comms_rest_v2_dev_guide
chapter: commit-uncommit
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/calculate-taxes/"><i class="glyphicon glyphicon-chevron-left"></i>Previous Chapter</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/commit-uncommit/commit-request/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

Commit transactions that should be included in the Compliance Reports for remittance to the Department of Revenue (DoR). 
<ul class="dev-guide-list">
  <li>Using the Commit process is optional</li>
  <li>Commit is often used when not all calculated taxes are deemed final for compliance reporting</li>
  <li>When a transaction is deemed final, a Commit can be sent to finalize the document code associated with the transaction</li> 
  <li>You can commit an entire invoice by committing the document code rather than recalculating the taxes</li>
</ul>

<img src="/public/images/comms/dev-guide_rest_v2/comms_dev_guide_commit.png"/>

If the transaction has a Document Code (<code>doc</code>) associated with it, commit it at any time.  

<h4>Note</h4>
Committing or uncommiting a document code commits/uncommits all transactions with the specified Document Code (<code>doc</code>).

<h3>Commit/Uncommit Process</h3>
Communications REST v2 provides the ability to commit or uncommit transactions and only include the committed transactions within compliance reports.  The default action is uncommitted.

To group transactions:
<ol class="dev-guide-list">
  <li>Create new transactions at any point in the reporting cycle</li>
  <li>Populate the Document Code (<code>doc</code>) with a unique identifier (for example, an invoice number) 
  <li>Use the Commit (<code>cmmt</code>) flag to identify transactions to include in or exclude from the compliance report for the reporting cycle</li>
</ol>

It's not necessary to set the Commit flag immediately on a transaction.  Use the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/commit-uncommit/commit-request/">Commit API</a> to update the Commit flag.

<h4>Note</h4>
Document Codes with the Commit flag set to <code>true</code> are locked at the end of the reporting cycle.  Use the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/commit-uncommit/commit-request/">Commit API</a> to commit uncommited Document Codes from previous reporting cycles and generate an updated Compliance report in the <a class="dev-guide-link" href="https://communications.avalara.net/AFC/Reporting/Explorer">Customer Portal</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/calculate-taxes/"><i class="glyphicon glyphicon-chevron-left"></i>Previous Chapter</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/commit-uncommit/commit-request/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>