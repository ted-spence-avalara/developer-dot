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
  <li class="next"><a href="/communications/dev-guide_rest_v2/getting-started/best-practices/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Environments</h3>

The environments available to you are Sandbox and Production:

<ul class="dev-guide-list">
  <li>Sandbox: <a class="dev-guide-link" href="https://communicationsua.avalara.net">communicationsua.avalara.net</a></li>
    <ul class="dev-guide-list">
      <li>Used for testing</li>
    </ul>
  <li>Production: <a class="dev-guide-link" href="https://communications.avalara.net">communications.avalara.net</a></li>
    <ul class="dev-guide-list">
      <li>Used for live transactions and bill runs</li>
    </ul>
</ul>

Sandbox and Production environments operate identically for tax calculation and reporting.  Tax calculations produce the same results when identical <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/client-profiles/">client profiles</a> are used in both environments.

Some differences between Sandbox and Production:
<ol class="dev-guide-list">
  <li>Each environment is self-contained and does not impact the other environment.  Some examples:</li>
    <ul class="dev-guide-list">
      <li>When a profile is updated in one environment, it does not impact the other environment unless you request both environments be updated.  Sandbox can be used to test profile changes in before applying the same profile to Production.</li>
      <li>Calculations performed in one environment only appear in reports for that environment.  If you are testing a bill run in Sandbox, you can perform the bill run repeatedly with no impact to Production reports.</li>
      <li>Access provided to users in one environment has no impact on who has access to the other environment.  Developers, QA, and other team members can be given access to Sandbox, but not given access to Production.</li>
    </ul>
  <li>Automated compliance reports for returns are generated from Production only.</li>
</ol>

<h3 id="endpoints">Endpoints</h3>
<h4>Healthcheck</h4>
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
        <td><code>/api/v2/Healthcheck</code></td>
        <td><code>GET</code> Healthcheck that confirms the service is operational and ready to use</td>
      </tr>
    </tbody>
  </table>
<div>

<br/>
<h4>Jurisdiction Determination</h4>
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
        <td><code>/api/v2/geo/PCode</code></td>
        <td><code>POST</code> Get PCode(s) associated with a location - Ctry/State/County/City/Zip.  Populate the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/zip-lookup-request/">zipLookupRequest</a> object.</td>
      </tr>
      <tr>
        <td><code>/api/v2/geo/Geocode</code></td>
        <td><code>POST</code> Geocodes one or more street addresses or lat/long coordinates.  Populate the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/geocode-requests/">geocodeRequests</a> object.
        <br/>
        Only address information <b>or</b> latitude/longitude coordinates should be provided in the request, but not both.
        </td>
      </tr>
    </tbody>
  </table>
<div>

<br/>
<h4>Lookups</h4>
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
        <td><code>/api/v2/afc/serviceinfo</code></td>
        <td><code>GET</code> Retrieves server time, service build version, and tax engine version.</td>
      </tr>
      <tr>
        <td><code>/api/v2/afc/taxtype/{taxType}</code></td>
        <td><code>GET</code> Get the tax information (description and category) for a Tax Type ID.
        <br/>
        Specify the Tax Type ID in the {taxType} parameter of the URL.  Use "*" as a wildcard to return all tax types.</td>
      </tr>
      <tr>
        <td><code>/api/v2/afc/tspairs</code></td>
        <td><code>GET</code> Get Transaction/Service (T/S) Pair information.</td>
      </tr>
      <tr>
        <td><code>/api/v2/afc/location/{pcode}</code></td>
        <td><code>GET</code> Get all jurisdiction location data associated with a specific PCode.
        <br/>
        Specify the PCode in the {pcode} parameter of the URL.
        </td>
      </tr>
      <tr>
        <td><code>/api/v2/afc/primary/{pcode}</code></td>
        <td><code>GET</code> Similar to the <code>/api/v2/afc/location/{pcode}</code>endpoint, but works as a "best match." Returns location info for the primary jurisdiction associated with the specified PCode.
        <br/>
        Specify the PCode in the {pcode} parameter of the URL.
        </td>
      </tr>
    </tbody>
  </table>
<div>

<br/>
<h4>Tax Calculation</h4>
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
    </tbody>
  </table>
<div>


<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/getting-started/authentication/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/getting-started/best-practices/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>