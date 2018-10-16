---
layout: default
title: AvaTax Customs Duty & Import Tax Badge Requirements
product: avaTax
doctype: integration_checklists
---
 <div class="row padding-top padding bottom">
    <div class="col-sm-2">
      <img src="/public/images/devdot/badges/CustomsDutyImportTax.png" class="img-responsive" alt="Avalara Certified Solution">
    </div>
    <div class="col-sm-8 padding-top">
      <h2>Avalara AvaTax Customs Duty & Import Tax Badge Requirements</h2>
      <h3>Prerequisite - Avalara Certified for Sales Tax & Avalara Certified for VAT</h3>
      
<hr>
      <h3>Additional Requirements</h3>
        <h5>HS Code  - <em>Conditional</em></h5>
            <p class="badgerequirement">The harmonized classification code of the product. Verify within app HTS can vary by Country.</p>
            
<!-- removing the ShippingMode requirement
        <h5>ShippingMode   - <em>Suggested</em></h5>
            <p class="badgerequirement">Shipping method (ocean, air, ground)</p>
        -->

<h5>Shipping - <em>Required</em></h5>
            <p class="badgerequirement">Cost of shipping with appropriate Avalara Goods and Service code.</p>
            
<h5>IsSellerImporterOfRecord - <em>Suggested Conditional</em></h5>
            <p class="badgerequirement">Setting is defaulted and set in Sellers AvaTax Tax Profile; however there are use cases where Sellers will may want to provide a transactional option by Buyer or even at an individual transaction level to over ride the Tax Profile settings.</p>
            
<h5>Pref program indicator - <em>Suggested</em></h5>
            <p class="badgerequirement">Only required if the customer knows that the item qualifies for a preference program. <strong>We currently only support preference program NAFTA</strong>. This indicator will tell our calculator to use the NAFTA preferred customs duty rate rather than the standard duty rate in the calculation.</p>
            
<h5>Express ship method - <em>Suggested</em></h5>
            <p class="badgerequirement">If shipment method selected is an express shipment, set flag true.<br>
               <code> "name": "AvaTax.LandedCost.Express",<br>
                "dataType": "Boolean",<br>
                "description": "Is Shipping method."</code>
            </p>
            
<h5>Messaging - <em>Required</em></h5>
            <p class="badgerequirement">Appropriate messages are displayed for de minimus.</p> 

<h5>Subtotals - <em>Required</em></h5>
            <p class="badgerequirement">Appropriate Customs Duty and Import Tax sub-totals are displayed on checkout when Seller is Importer of Record.</p> 

<h5>Display Custom & Duty Tax - <em>Required</em></h5>
            <p class="badgerequirement">Appropriate Customs Duty and Import Tax details are displayed as information to the Buyer when the Seller is not the acting as the Importer of Record.</p> 

<h5>Storing Tax Details - <em>Required</em></h5>
            <p class="badgerequirement">Appropriate level of detail (tax types and tax sub-types are stored) saved in calling system</p>                                          