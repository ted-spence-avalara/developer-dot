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

There are two environments available to you, Sandbox and Production:

<ul class="dev-guide-list">
  <li><b>Production</b>: <a class="dev-guide-link" href="https://communications.avalara.net">communications.avalara.net</a></li>
  <li><b>Sandbox</b>: <a class="dev-guide-link" href="https://communicationsua.avalara.net">communicationsua.avalara.net</a></li>
</ul>

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
        <td><code>/api/v2/afc/calctaxes</code></td>
        <td><code>POST</code> Performs tax calculation on invoices.</td>
      </tr>
      <tr>
        <td><code>/api/v2/afc/commit</code></td>
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