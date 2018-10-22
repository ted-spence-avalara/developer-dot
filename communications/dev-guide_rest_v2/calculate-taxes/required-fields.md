---
layout: page
title: Chapter 2.1 - Required Fields
product: communications
doctype: comms_rest_v2_dev_guide
chapter: calculate-taxes
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/calculate-taxes/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/commit-uncommit/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

While the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/">CalcTaxes request</a> has numerous fields available, only a handful are required.  

<h3>CompanyData</h3>
More information about <code>CompanyData</code> can be found <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/company-data/">here</a>.
<ul class="dev-guide-list">
  <li>BusinessClass (<code>bscl</code>)</li>
  <li>ServiceClass (<code>svcl</code>)</li>
  <li>Facilities (<code>fclt</code>)</li>
  <li>Regulated (<code>reg</code>)</li>
</ul>

<br/>
If using the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/exclusion/">Exclusion</a> object (<code>excl</code>), the following fields are required:
<ul class="dev-guide-list">
  <li>Country (<code>ctry</code>)</li>
  <li>ExclusionOn (<code>excl</code>)</li>
</ul>

<h3>Invoice</h3>
More information about <code>Invoice</code> can be found <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">here</a>.
<ul class="dev-guide-list">
  <li>BillTo (<code>bill</code>) - See <a class="dev-guide-link" href="#location">Location</a> below for more information</li>
  <li>CustomerType (<code>cust</code>)</li>
  <li>Date (<code>date</code>)</li>
  <li>DocumentCode (<code>doc</code>) - only required when the Commit flag (<code>cmmt</code>) is set to <code>true</code></li>
  <li>LineItem object - More information about <code>LineItem</code> can be found <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">here</a></li>
  <ul class="dev-guide-list">
    <li>Sale (<code>sale</code>)</li>
    <li>TransactionType (<code>tran</code>)</li>
    <li>ServiceType (<code>serv</code>)</li>
  </ul>
</ul>

<br/>
If using the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/exemption/">Exemption</a> object (<code>exms</code>), the following fields are required:
<ul class="dev-guide-list">
  <li>Location (<code>loc</code>) - See <a class="dev-guide-link" href="#location">Location</a> below for more information</li>
  <li>TaxType (<code>tpe</code>) and <b>one</b> of the following <b>OR</b> TaxCategory (<code>cat</code>)</li>
  <ul class="dev-guide-list">
    <li>TaxLevel (<code>lvl</code>)</li>
    <li>Domain (<code>dom</code>)</li>
  </ul>
</ul>

<h3>Tax Override</h3>
If using the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/tax-override/">TaxOverride</a> object (<code>ovr</code>), the following fields are required:
<ul class="dev-guide-list">
  <li> BracketInfo (<code>brkt</code>)</li>
  <ul class="dev-guide-list">
    <li>Rate (<code>rate</code>)</li>
    <li>MaxBase (<code>max</code>)</li>
  </ul>
  <li>Location (<code>loc</code>) - See <a class="dev-guide-link" href="#location">Location</a> below for more information</li>
  <li>Scope (<code>scp</code>)</li>
  <li>TaxType (<code>tid</code>)</li>
  <li>TaxLevel (<code>lvl</code>)</li>
</ul>

<h3>Safe Harbor Override</h3>
If using the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/safe-harbor-override/">SafeHarborOverride</a> object (<code>sovr</code>), the following fields are required:
<ul class="dev-guide-list">
  <li>SafeHarborType (<code>sh</code>)</li>
  <li>OriginalFederalTam (<code>old</code>)</li>
  <li>NewFederalTam (<code>new</code>)</li>
</ul>

<h3 id="location">Location</h3>
<a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">Location</a> is used by the following objects:
<ul class="dev-guide-list">
  <li>BillTo (<code>bill</code>) in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/company-data/">Company Data</a></li>
  <li>Location (<code>loc</code>) in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/exemption/">Exemptions</a></li>
  <li>From (<code>from</code>) and To (<code>to</code>) in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">Line Item</a></li>
  <li>Location (<code>loc</code>) in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/bridge-participant/">Bridge Participant</a></li>
  <li>Location (<code>loc</code>) in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/tax-override/">Tax Override</a></li>
</ul>

<br/>
When using the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">Location</a> object, the following fields are required.  Please note that only one of the options below is required.
<ul class="dev-guide-list">
  <li>PCode (<code>pcd</code>)</li>
  <li>FIPS (<code>fips</code>)</li>
  <li>NPANXX (<code>npa</code>)</li>
  <li>StreetAddress (<code>addr</code>), City (<code>city</code>), State (<code>st</code>), and PostalCode (<code>zip</code>) when <code>geo</code> is <code>true</code></li>
</ul>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/calculate-taxes/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/commit-uncommit/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>