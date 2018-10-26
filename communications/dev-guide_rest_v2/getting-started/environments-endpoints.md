---
layout: page
title: Chapter 1.3 - Environment and Endpoints
product: communications
doctype: comms_rest_v2_dev_guide
chapter: getting-started
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/getting-started/authentication/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/calculate-taxes/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Environments</h3>

The two environments available to you are Sandbox and Production:

<ul class="dev-guide-list">
  <li><b>Production</b>: <a class="dev-guide-link" href="https://communications.avalara.net">communications.avalara.net</a></li>
    <ul class="dev-guide-list">
      <li>Used for live transactions and bill runs</li>
    </ul>
  <li><b>Sandbox</b>: <a class="dev-guide-link" href="https://communicationsua.avalara.net">communicationsua.avalara.net</a></li>
    <ul class="dev-guide-list">
      <li>Used for testing</li>
    </ul>
</ul>

Both the Sandbox and Production environments operate identically for purposes of tax calculation and reporting.  Tax calculations produce the same results when identical <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/client-profiles/">client profiles</a> are used in both environments.

Some differences between Sandbox and Production:
<ol class="dev-guide-list">
  <li>Each environment is self-contained and does not impact the other environment.  For example:</li>
    <ul class="dev-guide-list">
      <li>If a profile is updated in one environment, it does not impact the other environment unless you request both environments be updated.  Sandbox can be used to test profile changes in before applying the same profile to Production.</li>
      <li>Calculations performed in one environment only appear in reports for that environment.  For testing purposes in Sandbox, you can repeatedly perform a bill run with no impact to Production reports.</li>
      <li>Access provided to users for one environment has no impact on who has access to the other environment.  Developers, QA, and other team members can be given access to Sandbox for testing purposes, but not given access to Production.</li>
    </ul>
  <li>Automated compliance report generation to the Avalara Returns Team is only available from Production</li>
</ol>

<h3>Endpoints</h3>

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Endpoint</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>/api/v2/afc/calctaxes</code></a></td>
        <td><code>POST</code> Performs tax calculation on invoices.  See <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/calculate-taxes/">Calculate Taxes</a> for more information.</td>
      </tr>
      <tr>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/commit-uncommit/commit-request/"><code>/api/v2/afc/commit</code></a></td>
        <td><code>POST</code> Commits and Uncommits transactions. See <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/commit-uncommit/">Commit/Uncommit</a> for more information.</td>
      </tr>
      <tr>
        <td><code>/api/v2/geo/geocode</code></td>
        <td><code>POST</code> Geocodes one or more street addresses or lat/long coordinates.</td>
      </tr>
      <tr>
        <td><code>/api/v2/afc/serviceinfo</code></td>
        <td><code>GET</code> Server time, build version, and tax engine version.</td>
      </tr>
      <tr>
        <td><code>/api/v2/afc/taxtype/{taxType}</code></td>
        <td><code>GET</code> Tax description and category for a tax type ID.
        <br>
        Use "*" as a wildcard for all tax types.</td>
      </tr>
      <tr>
        <td><code>/api/v2/afc/tspairs</code></td>
        <td><code>GET</code> Transaction/Service (T/S) Pair information.</td>
      </tr>
      <tr>
        <td><code>/api/v2/afc/location/{pcode}</code></td>
        <td><code>GET</code> Location data associated with a specific PCode.</td>
      </tr>
      <tr>
        <td><code>/api/v2/afc/primary/{pcode}</code></td>
        <td><code>GET</code> Similar to the endpoint above, but works as a "best match." Returns location info for the primary jurisdiction associated with the specified PCode.</td>
      </tr>
    </tbody>
  </table>
<div>


<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/getting-started/authentication/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/calculate-taxes/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>