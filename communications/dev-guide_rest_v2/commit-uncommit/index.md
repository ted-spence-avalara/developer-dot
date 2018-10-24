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

The process to commit transactions is optional and used to identify single or groups of transactions that should be included in the Compliance Reports for remittance to the Department of Revenue (DoR). This process is often used when not all taxes being calculated are considered final for compliance reporting. When a transaction is considered final, a commit can be sent to finalize the document code associated to the transaction. This also allows users to commit an entire invoice by committing the document code instead of calculating the taxes again when the transaction(s) is determined to be final.

<img src="/public/images/comms/dev-guide_rest_v2/comms_dev_guide_commit.png"/>

A transaction can be committed at any time as long as there is a document code associated to it.  However, be aware that committing or uncommiting a document code commits/uncommits all transactions with the specified Document Code (<code>doc</code>).

<h3>Commit/Uncommit Process</h3>
REST v2 provides the ability to commit or uncommit transactions and only include the committed transactions within compliance reports.  The default action is uncommitted.

At any time during the reporting cycle, you may create new transactions and populate the DocumentCode (<code>doc</code>) with a unique identifier in order to group transactions. For example, an invoice number would be a typical value to enter as the DocumentCode.  In addition to DocumentCode, the Commit (<code>cmmt</code>) flag is available to identify transactions to include in, or exclude from, the compliance report produced in each reporting cycle.

Only committed transactions appear in the compliance report. Transactions tied to a DocumentCode with a Commit flag set to <code>false</code> are excluded from the compliance report at the end of the reporting cycle.

It's not necessary to set the Commit flag immediately on a transaction.  The Commit flag may be set or unset using the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/commit-uncommit/commit-request/">Commit API</a>.

<h4>Note</h4>
The Commit flag may only be changed prior to the end of the reporting cycle.  After the reporting cycle, all DocumentCodes with Commit flags set to <code>true</code> are locked and cannot be modified once the compliance report is generated. You may, however, commit previously uncommitted <b>DocumentCodes</b> via the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/commit-uncommit/commit-request/">Commit API</a> and generate updated Compliance reports within the <a class="dev-guide-link" href="https://communications.avalara.net/AFC/Reporting/Explorer">Customer Portal</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/calculate-taxes/"><i class="glyphicon glyphicon-chevron-left"></i>Previous Chapter</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/commit-uncommit/commit-request/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>