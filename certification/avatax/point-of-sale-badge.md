---
layout: default
title: AvaTax Point of Sale Badge* Requirements
product: avaTax
doctype: integration_checklists
---
 <div class="row padding-top padding bottom">
    <div class="col-sm-2">
      <img src="/public/images/devdot/badges/PointofSale.png" class="img-responsive" alt="Avalara Certified Solution">
    </div>
    <div class="col-sm-8 padding-top">
      <h2>Avalara AvaTax Point of Sale Badge* Requirements</h2>
      <h3>Do we want to say anything here?</h3>
      
      <hr>
      <h3>Tax Content Request - Disconnected</h3>
        <h5>Send API tax content request with required data elements   - <em>Required</em></h5>
            <p class="badgerequirement">
                <ul class="normal">
                    <li>Company Code</li>
                    <li>Document Date</li>
                    <li>Tax Codes</li>
                    <li>Location Codes</li>
                </ul>
            </p>
            
        <h5>Capture Tax Content response and transform content into application compatible format - <em>Required</em></h5>
            <p class="badgerequirement">The transformation requirement mandates making the Tax Content response, in either JSON, CSV or XML format, and convert it into the import-ready format for tax content, including:
                <ul>
                    <li>Transform Tax Jurisdiction content to application tax schedule/tax item format</li>
                    <li>Transform Tax Rate content to application tax schedule/tax item format</li>
                    <li>Transform Tax Code content to application product/service taxability format</li>
                </ul>
            </p>
            
        <h5>Load application-compatible tax content into application and distribute to store locations - <em>Required</em></h5>
            <p class="badgerequirement">Suggest leveraging existing application import and distribution functionality when available</p>
            
        <h5>Store AvaTax Location Codes associated with merchant's brick & mortar sites in application - <em>Required</em></h5>
            <p class="badgerequirement">Location Codes retrieved by integration for use in Tax Content request</p>
            
        <h5>Store AvaTax Tax Codes selected by merchant in application - <em>Required</em></h5>
            <p class="badgerequirement">Tax Codes retrieved by integration for use in Tax Content request</p>
            
        <h5>Schedule Tax Content Request job - <em>Required</em></h5>
            <p class="badgerequirement">Suggest leveraging existing application scheduling functionality when available</p>
    <hr>
       <h3>Transaction Upload - Disconnected <--CHECK THIS SECTION, LOOKS TO BE DUPLICATED CONTENT</h3>     
        <h5>Send API tax content request with required data elements   - <em>Required</em></h5>
            <p class="badgerequirement">
                <ul class="normal">
                    <li>Company Code</li>
                    <li>Document Date</li>
                    <li>Tax Codes</li>
                    <li>Location Codes</li>
                </ul>
            </p>
            
        <h5>Capture Tax Content response and transform content into application compatible format - <em>Required    </em></h5>
            <p class="badgerequirement">The transformation requirement mandates making the Tax Content response, in either JSON, CSV or XML format, and convert it into the import-ready format for tax content, including:
                <ul class="normal">
                    <li>Transform Tax Jurisdiction content to application tax schedule/tax item format</li>
                    <li>Transform Tax Rate content to application tax schedule/tax item format</li>
                    <li>Transform Tax Code content to application product/service taxability format</li>
                </ul>
            </p>
    <hr>
    
       <h3>Transaction Upload – Disconnected</h3>
        <h5>Capture complete sales transaction and transform into AvaTax transaction import format - <em>Required</em></h5>
            <p class="badgerequirement">The following link provides comprehensive set of information concerning AvaTax transaction import - <a href="https://help.avalara.com/000_Avalara_AvaTax/Manage_Transactions/Add_or_Import_Transactions" target="_blank">Avalara Help Center - Add or Import Transactions</a></p>
            
        <h5>Submit transaction import file to AvaTax service for upload - <em>Required</em></h5>
            <p class="badgerequirement">
                <ul class="normal">
                    <li>Use Avalara Batch Services API</li>
                    <li>Location Code required</li>
                    <li>Lane Code required</li>
                    <li>Provide error handling capability</li>
                    <li>Batch Import must use Process code 1 (Import without a calculation)</li>
                </ul>
            </p>
            
        <h5>Schedule transaction upload job - <em>Required</em></h5>
            <p class="badgerequirement">Suggest leveraging existing application scheduling functionality when available</p>
    <hr>
    
       <h3>Tax Calculation Tests - Disconnected</h3>
        <h5>Calculate tax applying tax threshold - <em>Required</em></h5>
            <p class="badgerequirement">
                <ul class="normal">
                    <li>New York apparel – Tax Code PC040100 - $110 single item threshold</li>
                    <li>Massachusetts apparel – Tax Code PC040100 - $175 single item threshold</li>
                </ul>
            </p>
            
        <h5>Calculate tax applying tax cap - <em>Required</em></h5>
            <p class="badgerequirement">Florida $5,000 county surcharge cap – Tax Code P0000000</p>
            
        <h5>Calculate tax applying tiered tax - <em>Required</em></h5>
            <p class="badgerequirement">Tennessee $1,600/$3,200 tiers – Tax Code P0000000</p>
            
            
    <p><small>* Indicates Sales Tax Badge must be awarded before supplemntal badge is awarded</small></p>
    
    
            
        <h5>XXXXX  - <em>XXXXX</em></h5>
            <p class="badgerequirement">XXXXX</p>
            
        <h5>XXXXX  - <em>XXXXX</em></h5>
            <p class="badgerequirement">XXXXX</p>
            
        <h5>XXXXX  - <em>XXXXX</em></h5>
            <p class="badgerequirement">XXXXX</p>
            
        <h5>XXXXX  - <em>XXXXX</em></h5>
            <p class="badgerequirement">XXXXX</p>
            
        <h5>XXXXX  - <em>XXXXX</em></h5>
            <p class="badgerequirement">XXXXX</p>
            
        <h5>XXXXX  - <em>XXXXX</em></h5>
            <p class="badgerequirement">XXXXX</p>