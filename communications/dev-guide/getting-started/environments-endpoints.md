---
layout: page
title: Chapter 1.3 - Environment and Endpoints
product: communications
doctype: comms_dev_guide
chapter: getting-started
nav: apis
disqus: 0
---

<h3>Environments</h3>

There are two environments availble to you, UAT and Production:

<ul class="dev-guide-list">
  <li><b>Production</b>: <a href="https://communications.avalara.net">communications.avalara.net</a></li>
  <li><b>UAT</b>: <a href="https://communicationsua.avalara.net">communicationsua.avalara.net</a></li>
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
        <td><code>POST</code> Commits and Uncommits transactions. See <a href="/communications/dev-guide/commit-uncommit/">Commit/Uncommit</a> for more intormation.</td>
      </tr>
      <tr>
        <td><code>/api/v2/geo/geocode</code></td>
        <td><code>POST</code> Geocodes one or more street addresses or lat/long coordinates.</td>
      </tr>
      <tr>
        <td><code>/api/v2/afc/serviceinfo</code></td>
        <td><code>GET</code> Server time, build version and taxengine version.</td>
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
        <td><code>GET</code> Similar to the endpoint above, but works as a "best match." Returns location info for the primary jurisdiction asociated with the specified PCode.</td>
      </tr>
    </tbody>
  </table>
<div>


<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/authentication/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide/calculate-taxes/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>