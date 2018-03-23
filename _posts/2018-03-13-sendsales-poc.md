---
layout: post
title: SendSales 
description: 
date: 2018-03-23 15:00
author: Robert Bronson
comments: true
categories: [avatax, send sales]
product: blog
doctype: blog
disqus: 1
---

#Implementing a SendSales API

Our customers have a need for a list of tax rates by zip code.  These rates are used in “send sales” transactions, which are purchases made in one location but delivered from another.  An example of this would be purchasing something at a store that must be shipped from a warehouse.  Currently, putting together lists of tax rates is time-consuming and expensive.  We built a test app using existing APIs to generate the tax rate files.

##Proof of Concept

The requirements of our application are:

* Use AvaTax REST API
* Allow the customer to specify desired tax codes
* Build a tax file for all available postal codes using specified tax codes
* Demonstrate acceptable performance, acceptability to be determined

##Showcasing the New Python SDK

We wanted to demonstrate our newly published  [Python SDK](https://developer.avalara.com/sdk/) and how it interacts with the AvaTax API.  Using the SDK, I wrote a  Python script to gather the entire list of U.S. postal codes in our system.  Using that list, I created locations at each postal code.  Once I had the locations, I imported the list of desired tax codes from a separate file, and generated a tax file based off of those tax codes at each location. I tracked the time it took to generate each tax file, as well as the overall run time.

##Results

We ran the app with 50 tax codes for 50 locations to sample the performance.  The app averaged 1.05 seconds per tax file generated. The 1.05 second time seems pretty stable, whether we ran 5 or 50 locations.  For all 41,000+ zip codes, it would take approximately 12 hours to generate all the tax files.  This is a significant improvement to the month-long process Avalara currently uses.

##Conclusion

Using an app to generate the tax rate files is a quick and easy solution for streamlining the process, and the [Python SDK](https://developer.avalara.com/sdk/) worked flawlessly.  Now the entire tax file can be generated overnight.

The process could be streamlined even further by importing already existing locations.  If a company had a limited number of locations it shipped to, or had a pre-prepared list of all locations, importing those into the app would further reduce run time.  For example, when importing locations to the app I was able to generate tax files averaging 0.87 seconds per file. That comes out to just under 10 hours to generate files for 41,000 locations.
