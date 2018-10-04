---
layout: page
title: Chapter 3 - Commit/Uncommit
product: communications
doctype: comms_dev_guide
chapter: commit-uncommit
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/calculate-taxes/"><i class="glyphicon glyphicon-chevron-left"></i>Previous Chapter</a></li>
  <li class="next"><a href="/communications/dev-guide/commit-uncommit/commit-request/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

The process to commit documents is optional and used to identify documents that should be included in the Compliance Reports for remittance to the Department of Revenue (DoR) for tax compliance reporting. This process is often used when not all taxes being calculated are considered final for compliance reporting. When a document is considered final, a commit can be sent to finalize the document. This also allows users to commit an entire invoice by using the document code instead of calculating the taxes again when the document is determined to be final.

<img src="/public/images/comms/dev-guide/comms_dev_guide_commit.png"/>

A document can be committed at any time as long as there is a document code associated to it.

<h3>Commit/Uncommit Process</h3>
REST v2 provides the ability to commit or uncommit transactions and only include the committed transactions within compliance reports.

At any time during the reporting cycle, you may create new transactions and populate the <code>DocumentCode</code> field with a unique identifier in order to group transactions. For example, an invoice number would be a typical value to enter as the <code>DocumentCode</code>.  In addition to <code>DocumentCode</code>, the <code>Commit</code> flag is available to identify transactions to include in or exclude from the compliance report produced in each reporting cycle.

Only committed transactions are applied to, and appear in, the compliance report. Transactions tied to a <code>DocumentCode</code> with a <code>Commit</code> flag set to <code>false</code> are excluded from the compliance report at the end of the reporting cycle.

It is not necessary to set the <code>Commit</code> flag immediately on a transaction.  The <code>Commit</code> flag may be set via <code>/api/v2/afc/commit</code> by passing the desired <code>DocumentCode</code> and the <code>Commit</code> flag value.  <code>/api/v2/afc/commit</code> allows you to uncommit a <code>DocumentCode</code> in the same way.  More information about the Commit request can be found <a href="/communications/dev-guide/commit-uncommit/commit-request/">here</a>. 

The <code>Commit</code> flag may only be changed prior to the end of the reporting cycle.  At the end of the reporting cycle, a compliance report is generated reflecting only transactions which were identified as committed. Any transactions associated with committed <code>DocumentCodes</code> included in this report are considered locked and cannot be removed, canceled, or modified going forward.

<h4>Note</h4>
After the reporting cycle, all <code>DocumentCodes</code> with <code>Commit</code> flags set to <code>true</code> are locked and cannot be modified once the compliance report is generated. You may, however, commit previously uncommitted <code>DocumentCodes</code> via the <code>/api/v2/afc/commit</code> API. To request an updated compliance report, please email <a href="mailto:CommunicationSupport@avalara.com">CommunicationSupport@avalara.com</a>.

<h3>Data Fields for Commit Feature</h3>
The following fields must be provided within a <code>CalcTaxes</code> call in order to support the Commit feature.
<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Field</th>
        <th>Value</th>
        <th>Data Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>DocumentCode</code></td>
        <td>User-defined
            <br/> 
            150 character limit
            <br/>
            Alphanumeric</td>
        <td>String</td>
        <td>Value that identifies a transaction, quote, or invoice in the calling system. The value is provided by the user when performing the tax calculation.</td>
      </tr>
      <tr>
        <td><code>Commit</code></td>
        <td>False (Default)<br/>
            True</td>
        <td>Nullable Boolean</td>
        <td>Nullable Boolean field indicating if the <code>DocumentCode</code> should be committed as soon as the tax calculation is processed.
            <br/>
            NOTES:
            <ul class="dev-guide-list">
              <li>Nullable value is used in order to make field optional for backwards-compatibility purposes.</li>
              <li>Transaction will not be committed if an error occured during processing.</li>
              <li>If <code>DocumentCode</code> is provided but <code>Commit</code> is null, <code>Commit</code> will be defaulted to <code>false</code> when saving the information.</li>
              <li>If <code>Commit</code> is <code>true</code>, <code>DocumentCode</code> must not be empty.</li>
            </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/calculate-taxes/"><i class="glyphicon glyphicon-chevron-left"></i>Previous Chapter</a></li>
  <li class="next"><a href="/communications/dev-guide/commit-uncommit/commit-request/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>