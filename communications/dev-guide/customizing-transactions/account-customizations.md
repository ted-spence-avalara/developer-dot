---
layout: page
title: Chapter 4.2 - Account Customizations
product: communications
doctype: comms_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/customizing-transactions/client-profiles/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide/customizing-transactions/transaction-scenarios/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

There are two main components of account customizations:
<ul class="dev-guide-list">
  <li>Customization files</li>
  <li>Configuraiton options</li>
</ul>

One or both types of customizations can be set on a client profile.

<h3>Cusomization Files</h3>
Customization files allow you to change how results are returned from the AFC tax engine or customize the way the AFC tax engine interprets your <code>CalcTaxes</code> request.  There are five types of customization files:
<ul class="dev-guide-list">
  <li>Override file</li>
  <li>Exclusion file</li>
  <li>Exemption file</li>
  <li>Bundle file</li>
  <li>Nexus file</li>
</ul>

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Customization File</th>
        <th>Description</th>
        <th>File Extension</th>
        <th>How To Create</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Bundle</td>
        <td>Bundles enable you to associate a group of transaction/service pairs with an offering, and enable you to specify the percentage of the sale amount to be applied to each pair.
        <br/><br/>
        When taxes are calculated for bundled transactions, the appropriate taxes are calculated for each transaction/service associated with the transaction/service type defined for the bundle.</td>
        <td>.bdl</td>
        <td>AFC Manager (AFC Bundler component)</td>
      </tr>
      <tr>
        <td>Exclusion</td>
        <td>Indicates countries or states where no tax should be applied.</td>
        <td>.exc</td>
        <td>AFC Manager</td>
      </tr>
      <tr>
        <td>Override</td>
        <td>Used to modify tax rates for a specified jurisdiction, alter the tax logic for transaction/ services, and add or remove taxes from transaction/services.</td>
        <td>.ovr</td>
        <td>AFC Manager (Rate and Logic Modifider (RLM) component)</td>
      </tr>
      <tr>
        <td>Nexus</td>
        <td>Indicates the jurisdictions that require you to calculate sales and use taxes.</td>
        <td>.nex</td>
        <td>AFC Manager - Sales and Use Viewer</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>Configuration Options</h3>
Configuration options are used to modify the operation of the AFC tax engine.
<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Configuration Option</th>
        <th>Settings</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Return Non-Billable</td>
        <td>False (Default)
            <br/>
            True</td>
        <td>Non-billable items are compliance-only taxes or fees that are used for filing and are not passed on to the user. This option allows you to specify whether non-billable items should be included in the tax table returned by the tax calculation API functions in AFC or not.</td>
      </tr>
      <tr>
        <td>Safe Harbor TAM Override(s)</td>
        <td>Cellular Override TAM
            <br/>
            VoIP Override TAM
            <br/>
            Paging Override TAM</td>
        <td>Safe Harbor TAM Override configuration settings allow traffic study values to be applied for a given session or account.
The results of percentages from a traffic study can be applied by administering traffic study TAM overrides. The TAM values for Cellular, VoIP and Paging are adjusted to reflect the percentages in the traffic study.  While all all three types of TAM overrides can be set, it is possible to set only one or two of the options (Cellular, VoIP, or Paging).</td>
      </tr>
    </tbody>
  </table>
</div>


<h3>Requesting a new client profile or changes to an existing client profile</h3>
Contact <a href="mailto:CommunicationSupport@avalara.com">CommunicationSupport@avalara.com</a> to request a new client profile for your account.
<ul class="dev-guide-list">
  <li>Request the configuration option updates required and any overrides, exclusions, exemptions, or bundles needed.  If you alredy have customizaton files, attach the files to the email.</li>
  <li>Include instructions as to whether the client profile should be applied to Sandbox for testing purposes, Production, or both environments.</li>
  <li>If changes are needed to an existing client profile, include the <code>client_profile_id</code> to be updated.</li>
  <li>Once applied, the account could take up to 24 hours to refresh with the new changes.</li>
</ul>


<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide/customizing-transactions/client-profiles/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide/customizing-transactions/transaction-scenarios/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>