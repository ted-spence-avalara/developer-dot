---
layout: page
title: 3.3 - Using Reference Codes
product: avaTax
doctype: dev_guide
chapter: customizing-transaction
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/customizing-transaction/origin-and-destination/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/customizing-transaction/user-managed-meta-data/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

The <code>ReferenceCode</code> field is used to tie your transaction back to your accounting system or to link to another transaction. This field exists at the document level, but we also provide two reference fields at the line level: <code>Ref1</code> and <code>Ref2.</code> These little memo/note style fields can be used to make references to other lines within the transaction or really anything you want. This is a good way to include information relevant to the document or lines that help give clarification on a transaction when needed. This also can help when linking transactions back to your accounting system. Some accounting systems will not allow you to access the document code field, this can cause issues when trying to reconcile back to your account software. The <code>ReferenceCode</code> field provides a way to which you can link your document back to the accounting system that is being used making reconciliation much easier.

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/customizing-transaction/origin-and-destination/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/customizing-transaction/user-managed-meta-data/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>