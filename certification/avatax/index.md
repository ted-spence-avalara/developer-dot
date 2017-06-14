---
layout: page
title: AvaTax Certification
product: avaTax
doctype: certification
nav: certification
---
<div class="half">
<h2>Certification for AvaTax Integrations</h2>
<p><img src="/public/images/blog/Avalara_CERTIFIED-150x25-01.png" alt="Avalara Certified" /></p>
<p>
An integration can be issued for any of the following feature subsets in addition to a basic calculation certification:<br />
To have your integration <a href="/certification">Certified by Avalara</a>, we have outlined the areas of integration that are necessary to ensure a stable and robust customer experience using AvaTax with your application.  To be Certified for Avalara AvaTax, all of the items with an R beside them listed below are the required elements that must be present in your integration.
</p>
<blockquote><strong>Note: </strong>Address validation is a requirement for certification, however we don’t require you to use our address validation service.</blockquote>
<p>For more information about the benefits of certification, check out our <a href="/certification">Certification Guide</a>.</p>
<h2>Certified for Avalara AvaTax<a name="CertifiedForAvalaraAvaTax"></a></h2>
<p>Certification for Avalara AvaTax requires the delivery of all functional requirements shown below.</p>
<h3>Avalara AvaTax Administration &amp; Utilities Integration</h3>
<p>The AvaTax Administration section provides the user with configuration, setup and utility functions necessary to administer the AvaTax sales tax calculation and address validation functions. Note that these items cannot be examined on a analysis of your data performed by AvaTax support staff.</p>
<p>Here’s a video showing an example of one of our integrations to AvaTax and how a configuration screen should be designed:</p>
<iframe id="player_2" src="https://www.youtube.com/embed/9IGMZfrYU9A?enablejsapi=1&amp;wmode=opaque" width="705" height="396" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
<div class="row">
<div class="col-xs-1">R<span class="hidden-xs">equired</span></div>
<div class="col-xs-3">Function</div>
<div class="col-xs-8">Comment</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">AvaTax Configuration – dialog window</div>
<div class="col-xs-8">The AvaTax Configuration Dialog window must allow the user to specify the configuration/connection information.
<ul>
	<li>Account Number</li>
	<li>License Key</li>
	<li>Service URL</li>
	<li>Company Code</li>
</ul>
</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3"><a href="/api-reference/avatax/rest/v1/methods/estimateTax">AvaTax Test Connection</a> button</div>
<div class="col-xs-8">Tests the connection to the AvaTax service and verifies the AvaTax credentials. This is an important element to allow for successful troubleshooting of the AvaTax service. Optional – display license key expiration date upon successful connection response.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Control – Disable Document Committing</div>
<div class="col-xs-8">In order for this connector to be used in conjunction with other integration to AvaTax, the user must be able to control which connector is used for committing documents to AvaTax. From a technical standpoint, simply use DocType = SalesOrder on all calls and suppress any non-getTax calls (i.e. cancelTax, postTax).</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Tax Calculation – Disable tax calculation option</div>
<div class="col-xs-8">The user must have an option to turn on or off the AvaTax Calculation service independent of any other Avalara product or service.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">User Implementation Guide</div>
<div class="col-xs-8">The User Implementation Guide should contain screenshots and information allowing the end user to configure for AvaTax including where the company code is entered, where the credentials are entered and where tax codes can be mapped within the application.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Enable logging</div>
<div class="col-xs-8">Enables detailed transaction logging within the host application; ideally the log will include the calling context, timestamp of request and response to AvaTax. We need the complete request/response for each call made to Avalara services. This logging does not need to run all the time as we understand the DB will grow unnecessarily large – you are free to only log the last week, 30 days, custom, or have a control for the next N hours, etc. The spirit of the requirement is to assist customers and support in troubleshooting exercises, so it needs to be retrievable by an end user (or an administrator). It should be specifically Avalara service calls.</div>
</div>
<div class="row">
<div class="col-xs-1">N</div>
<div class="col-xs-3">Request time out definition</div>
<div class="col-xs-8">Define AvaTax request time out length, AvaTax best practices prescribes default setting of 300 ms.</div>
</div>
<div class="row">
<div class="col-xs-1">N</div>
<div class="col-xs-3">AvaTax Admin Console link</div>
<div class="col-xs-8">Link to <a href="https://admin-avatax.avalara.net/login.aspx">AvaTax production Admin Console</a>.</div>
</div>

<h3 data-fontsize="22" data-lineheight="32">Customer Record Integration</h3>
<p>Here’s a video showing an example of the required elements of the customer record integration to AvaTax:</p>
<iframe id="player_3" src="https://www.youtube.com/embed/SkBgcKa_yFY?enablejsapi=1&amp;wmode=opaque" width="705" height="396" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
<div class="row">
<div class="col-xs-1">R<span class="hidden-xs">equired</span></div>
<div class="col-xs-3">Function</div>
<div class="col-xs-8">Comment</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Customer Code</div>
<div class="col-xs-8">Identify customer code (number, ID) to pass to the AvaTax service.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Exemption Number</div>
<div class="col-xs-8">Customer record field populating exemption number in an AvaTax transaction. This is used for tracking those customers who have tax exempt transactions.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Entity/Use Code</div>
<div class="col-xs-8">This is a group of codes that indicate the type of exemption.  See <a  href="/avatax/handling-tax-exempt-customers">the standard codes</a>, but be aware that users are able to create custom codes as well.It is best to <strong>manage this value in your application’s Customer record</strong> and pass it to AvaTax as CustomerUsageType at either the document or line level, whichever is applicable. Note that either Exemption Number or Entity/Use code is required (not both). <strong>Entity/Use Code is preferred.</strong></div>
</div>

<h3>Items/Charge Integration</h3>
<p>Here’s a video showing an example of the item record elements necessary for a successful integration to AvaTax:</p>
<iframe id="player_4" src="https://www.youtube.com/embed/iZE8BEgZBt4?enablejsapi=1&amp;wmode=opaque" width="705" height="396" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
<div class="row">
<div class="col-xs-1">R<span class="hidden-xs">equired</span></div>
<div class="col-xs-3">Function</div>
<div class="col-xs-8">Comment</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Item Code</div>
<div class="col-xs-8">Identify item/service/charge code (number, ID) to pass to the AvaTax service. If the customer has access to UPC, they should be able to prepend UPC to the code and have it come across in the item code field. If there is no UPC, it should fall back to SKU.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Item Description</div>
<div class="col-xs-8">Identify item/service/charge description to pass to the AvaTax service with a human-readable description or item name.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">AvaTax tax code mapping – Item Code/SKU</div>
<div class="col-xs-8">Association of an item or item group to an AvaTax Tax Code to describe the taxability   group (e.g. Clothing-Shirts – B-to-C). If possible, this should be assigned at the item category level as well as the item level.</div>
</div>

<h3>Sales/Billing Document Integration</h3>
<p>Integrating with the Sales and/or Billing process involves making tax calculation and/or modifying a transaction.  Here’s a video showing an example of all necessary elements for a successful integration to AvaTax:</p>
<iframe id="player_5" src="https://www.youtube.com/embed/6465JvR3lNk?enablejsapi=1&amp;wmode=opaque" width="705" height="396" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
<div class="row">
<div class="col-xs-1">R<span class="hidden-xs">equired</span></div>
<div class="col-xs-3">Function</div>
<div class="col-xs-8">Comment</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Send required header level data elements:
<ul>
	<li>Document number</li>
	<li>Customer code</li>
	<li>Document date</li>
	<li>Tax calculation date</li>
	<li>Document type</li>
	<li>Destination address</li>
	<li>Origin address</li>
	<li>Exemption number</li>
	<li>Entity/Use code (aka CustomerUsageType)</li>
	<li>Location Code</li>
</ul>
</div>
<div class="col-xs-8">Note that Exemption number or Entity Use Code should be passed only if the customer is exempt.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Send required line (detail) level data elements:
<ul>
	<li>Line number</li>
	<li>Item code</li>
	<li>Item description</li>
	<li>Quantity</li>
	<li>Amount (extended)</li>
	<li>Tax Code</li>
</ul>
</div>
<div class="col-xs-8"></div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Freight Items must be transmitted separately</div>
<div class="col-xs-8">Freight Items must be sent to AvaTax as a separate line item with appropriate tax code.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">GetTax call – Sales Order/Sales Invoices</div>
<div class="col-xs-8">Ensure that invoices are processed through a logical document lifecycle.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">PostTax/CommitTax call – Invoices</div>
<div class="col-xs-8">Ensure that invoices are committed/posted for reporting appropriately.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">PostTax/CommitTax call – Credit Memos</div>
<div class="col-xs-8">Ensure that returns are committed/posted for reporting appropriately. More details about <a href="/avatax/handling-return-invoices">handling returns</a>.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">CancelTax call – voided/deleted Invoices</div>
<div class="col-xs-8">When invoices are deleted/cancelled, this information must be transmitted to AvaTax.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">CancelTax call – voided/deleted Credit Memos</div>
<div class="col-xs-8">When returns are deleted/cancelled, this information must be transmitted to AvaTax.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Send original invoice date as tax calculation date for return orders/credit memos</div>
<div class="col-xs-8"><a href="/avatax/handling-return-invoices">More information on handling returns</a>.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Send current transaction date as document date for return orders/credit memos</div>
<div class="col-xs-8"><a href="/avatax/handling-return-invoices">More information on handling returns</a>.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Send discounts appropriately – standard discounts included in line-level extended amount, manufacturer’s coupons and hostess credits transmitted as additional line items.</div>
<div class="col-xs-8"><a href="https://community.avalara.com/avalara/topics/how_are_discounts_handled">More information about handling discounts</a>.</div>
</div>
<div class="row">
<div class="col-xs-1">N</div>
<div class="col-xs-3">Send optional header level data elements – Purchase order number</div>
<div class="col-xs-8"></div>
</div>
<div class="row">
<div class="col-xs-1">N</div>
<div class="col-xs-3">Send optional line (detail) level data elements – Entity Use Code (aka CustomerUsageType)</div>
<div class="col-xs-8">Line level exempt triggers are required if line-level exemption can be managed in the application, and should be transmitted in a manner analogous to document-level exemption.</div>
</div>
<div class="row">
<div class="col-xs-1">N</div>
<div class="col-xs-3">Send optional line (detail) level data elements – Destination address</div>
<div class="col-xs-8">Required if destination (ship-to) address can be managed at the item line level.</div>
</div>
<div class="row">
<div class="col-xs-1">N</div>
<div class="col-xs-3">Send optional line (detail) level data elements – Origin address</div>
<div class="col-xs-8">Required if origin (ship-from, warehouse) address can be managed at the item line level</div>
</div>
<div class="row">
<div class="col-xs-1">N</div>
<div class="col-xs-3">GetTaxHistory – Invoice inquiry/Reconciliation Tool</div>
<div class="col-xs-8">Any tool or utility that allows the user to query or retrieve already recorded   transaction records for the purpose of reconciling with the document records in the application. Should not trigger a recalculation of tax by default (although may do so on demand). No GetTaxHistory or document retrieval method is yet available in the REST API.</div>
</div>
<div class="row">
<div class="col-xs-1">N</div>
<div class="col-xs-3">GetTaxHistory – Credit memo inquiry</div>
<div class="col-xs-8">No GetTaxHistory or document retrieval method is yet available in the REST API.</div>
</div>

<h3>Server Audit Clarity and Installation Requirements</h3>
<p>Tax calculation should display a clean audit to promote an error- and overage-free user experience. These properties are not visible from the Admin Console, and show up on an Avatax-side server audit of traffic on your account. Contact us if you would like an audit report run and emailed to you.</p>
<div class="row">
<div class="col-xs-1">R<span class="hidden-xs">equired</span></div>
<div class="col-xs-3">Function</div>
<div class="col-xs-8">Comment</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Pass connector identifier information via the TaxSvc.Profile.Client property</div>
<div class="col-xs-8">Integrations must include information about the connector, such as name, version, and   company name, as a signature to each transaction.  EXAMPLE: TaxSvc.Profile.Client = “Dynamics AX,9.0,MyApp for AX by ACME INC,1.0”</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Reasonable errors on server-side analysis</div>
<div class="col-xs-8">There should be no errors except those that would result from normal (but invalid) user input (e.g. invalid address data). Such errors must be logged/displayed appropriately to the application.</div>
</div>
<div class="row">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Reasonable ratio of GetTax and address validation calls to committed documents</div>
<div class="col-xs-8">In a normal workflow, we expect to see (on average, including abandoned carts) up to 10 tax calculations per finalized document. In a straight-forward order entry process, the number of calls should be about three to five.</div>
</div>
<div class="row padding-bottom">
<div class="col-xs-1">R</div>
<div class="col-xs-3">Demonstrate and document installation of software – Install Shield or equivalent where applicable</div>
<div class="col-xs-8">Customers should have an easy and trouble free installation of the software.</div>
</div>
</div>
