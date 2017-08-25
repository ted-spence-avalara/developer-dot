---
layout: page
title: 11.2 - Performance Tuning & Management
product: avaTax
doctype: dev_guide
chapter: calculating-tax-offline
nav: apis
disqus: 1
---

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/understanding-and-managing-messages/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/calculating-tax-offline/chapter-summary/">>Next<<i class="glyphicon glyphicon-chevron-right"></i/a></li>
</ul>
Consuming sales tax related services can be considered mission-critical, especially when making calculation queries through the AvaTax product. As a cloud-based Software-as-a-Service provider, Avalara understands the need to ensure that our services are available continuously and respond in a timely manner.

Avalara’s Server Status can be viewed publicly at <a class="dev-guide-link" href="https://status.avalara.com<">status.avalara.com</a>. This page outlines the availability of the service, current performance in terms of response time and a historical view of the availability for the past week.

<h3>Perceived Latency Measurement</h3>
AvaTax is a powerful and efficient tool,  however outside factors could potentially affect response time.   We provide a convenient testing program, <a class="dev-guide-link" href="https://github.com/avadev/AvaTaxClientLibrary/raw/master/AvaTaxConnect.zip">AvaTax-Connect</a>, that measures these three elements of response time. The program uses the latest <a class="dev-guide-link" href="https://www.nuget.org/packages/Avalara.AvaTax/">AvaTax SDK for C#</a> which has a relatively fast client parsing time, and it measures each of the three elements separately. Here’s what it looks like, when running on a network with a relatively long transit latency:

<img class="dev-guide-pic" src="/avatax/dev-guide/calculating-tax-offline/avatax-connect.png" />

As you can see, in this environment, network latency is the most critical factor in the response time. Let’s look at what we can do to investigate further!

<h3>Enable HTTP Keep-Alive</h3>
It can take dozens of milliseconds to open a connection and negotiate SSL security between a client and a server. Using <a class="dev-guide-link" href="https://blog.stackpath.com/glossary/keep-alive/">HTTP Keep-Alive</a> provides a way to re-use an existing connection rather than start a new one for each request. The AvaTax SDK uses HTTP keep-alives to improve response times; but if you write your own code to connect to AvaTax, please check to make sure your code uses this feature!

<h3>Check your router and connection</h3>
It’s very common to discover that a quirk in network setup can increase response time. There are a variety of things in between your network and Avalara’s servers; any one of them can affect your response time.

Do your routers have the latest software? Have they been rebooted recently, or are there too many hops between your network and the outside world? It’s worth mentioning that <code>traceroute</code> / <code>tracert</code> (on Windows) provides useful diagnostics, but keep in mind that Avalara’s security policies do not generally allow us to respond to ping requests. Because our server won’t respond to a ping, it may be hard to interpret the results.

<ul class="dev-guide-list">
    <li>If your network is using a direct connection with a local internet service provider, does your connection reset regularly?</li>
    <li>If the connection is permanent or business-class, does your ISP offer metrics to help you measure response time?</li>
    <li>If you have a more advanced network using <a class="dev-guide-link" href="https://www.cisco.com/c/en/us/support/docs/ip/border-gateway-protocol-bgp/22166-bgp-trouble-main.html">Border Gateway Protocol</a> routing, you would need to talk to your network engineering team. BGP issues are very challenging to review and are beyond the scope of this article.</li>
</ul>

<h3>Check your Ethernet configuration</h3>
If all else fails, check the quality of your wiring and the auto-negotiate settings on your ethernet devices. Bad wiring or devices with mismatched speed settings are easy to overlook! You can run <code>netstat -s</code> on a windows machine or <code>ifconfig -a</code> on a linux machine to detect whether an unusual number of bad packets are coming through your network. If you have a performance mismatch, try checking with your network administrator to see if the cabling can be improved.

<h3>Use the AvaTax SDK, and update regularly</h3>
We are constantly tuning our AvaTax SDK for high-performance asynchronous operation. If you’re able, please use an AvaTax SDK for your preferred language, and report your latency experience on the <a class="dev-guide-link" href="https://community.avalara.com/avalara">Avalara Community Forums</a>. Our team of developers are available to work with you identify whether there’s any way to improve the response time of your AvaTax implementation!

<ul class="pager">
  <li class="previous"><a href="/avatax/dev-guide/understanding-and-managing-messages/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/avatax/dev-guide/calculating-tax-offline/chapter-summary/">>Next<<i class="glyphicon glyphicon-chevron-right"></i/a></li>
</ul>