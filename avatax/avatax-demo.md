---
layout: page
categories: [avatax, api]
product: avatax
doctype: use_cases
---


<script type='text/javascript'>
    var map;

    const infoboxTemplate = `
        <div class="demo-infobox">
            <h4 id="demo-infobox-header" style="display: inline;">Getting Started</h4>
            <i class="glyphicon glyphicon-remove" id="demo-infobox-icon" style="display: inline;float: right;padding-top:5px;" onClick="hideInfobox()"></i>
            <p id="demo-infobox-text">
                Calculating sales tax is time consuming and painful, but it doesn\'t have to be. Avalara\'s sales tax API automates the process for you! All you need to do to start making quick calculations is choose a product or service and where you\'re shipping from and to. Tinker with the options on the left, click "Submit" and watch the magic happen!
            </p>
            <div class="loading-pulse" style="display: none;margin-top:35px;"></div>
        </div>
    `;

    function displayToolTip(topLeft) {

        //Create an infobox that will render in the top left of the map.
        const infobox = new Microsoft.Maps.Infobox(topLeft, {
            htmlContent: infoboxTemplate,
        });

        //Assign the infobox to a map instance.
        infobox.setMap(map);
    }

    function GetMapWithLine(destLat, destLong, srcLat, srcLong, usAddresses) {
        let topLeft;

        if(destLat == null || destLong == null) {
            // destLat = 33.6846603698176;
            // destLong = -117.850629887389;
            map = new Microsoft.Maps.Map('#myMap', {zoom: 3});
            topLeft = (map.getPageX(), map.getPageY());
            displayToolTip(topLeft);
            return;
        }  

        //Single location layer (pushpin)
        if(srcLat == null || srcLong == null) {

            var location  = new Microsoft.Maps.Location(destLat, destLong);         
            map = new Microsoft.Maps.Map('#myMap', {center: location});
            var layer = new Microsoft.Maps.Layer("MyPushpinLayer1");
            layer.add(new Microsoft.Maps.Pushpin(location));
            topLeft = (map.getPageX(), map.getPageY());
            displayToolTip(topLeft);
            map.layers.insert(layer);

            //Exit out since it is a single location.
            return;
        }

        //Source and destination layer (polyline)
        map = new Microsoft.Maps.Map('#myMap', {});
        center = map.getCenter();
        let srcLocation = new Microsoft.Maps.Location(srcLat, srcLong);
        let destLocation = new Microsoft.Maps.Location(destLat, destLong);
        var coords = [destLocation, srcLocation];
        var line = new Microsoft.Maps.Polyline(coords, {strokeColor: 'orange', strokeThickness: 3});
        topLeft = (map.getPageX(), map.getPageY());
        displayToolTip(topLeft);
        map.entities.push(line);
        map.setView({
            center: new Microsoft.Maps.Location(srcLat + 1, destLong + 1),
            zoom: usAddresses ? 4 : 2,
        });
    }
</script>
<script type='text/javascript' src='https://www.bing.com/api/maps/mapcontrol?callback=GetMapWithLine&key=Ahgp_E6MHtyMYBJPCllMKTwJk7Indytl8hVm-Boe6mbyWbcyZvVBUePMDP5OLeiH' async defer></script>

<!-- demo container -->
<div class="row">
    <!-- shortcuts container -->
    <div class="col-md-3">
        <!-- page header -->
        <h1 style="margin-top:0;">Sales Tax API Demo</h1>
        <div id="demo-shortcuts">
            <!-- steps to submit -->
            <div class="row">
                <!-- step 1 / ship to -->
                <button class="accordion active" id='step-one-btn'>Step 1: Where are you shipping to?</button>
                <div class="panel" style="display:block;">
                    <p>Choose a pre-selected address</p>
                    <form id="dropdown-dest-addresses" onChange="fillWithSampleData();" class="demo-form">
                        <!-- national addresses -->
                        <label class="demo-label-container">
                            <input name="address" type="radio" value="2000 Main Street,Irvine,CA,US,92614" lat="33.6846603698176" long="-117.850629887389" class="demo-radio" addressType="national"/>
                            <span class="demo-label"> Irvine</span>
                            <br>
                            <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> 2000 Main Street
                            <br>
                            <span class="demo-city-zip">Irvine, CA 92614</span>
                        </label>
                        <br>
                        <label class="demo-label-container">
                            <input name="address" type="radio" value="255 S. King Street,Seattle,WA,US,98104" lat="47.598100-122.331206" long="-122.331206" class="demo-radio" addressType="national"/>
                            <span class="demo-label"> Seattle</span>
                            <br>
                            <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> 255 S. King Street
                            <br>
                            <span class="demo-city-zip">Seattle, WA, 98104</span>
                        </label>
                        <br>
                        <label class="demo-label-container">
                            <input name="address" type="radio" value="512 S Mangum Street,Durham,NC,US,27701"
                            lat="35.991727" long="-78.902647"  class="demo-radio" addressType="national" />
                            <span class="demo-label"> Durham</span>
                            <br>
                            <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> 512 S Mangum Street
                            <br>
                            <span class="demo-city-zip">Durham, NC 27701</span>
                        </label>
                        <br>
                        <!-- international addresses -->
                        <label class="demo-label-container">
                            <input name="address" type="radio" value="3rd Floor Trafalgar Place,Brighton,Brighton and Hove,UK,BN1 4FU" lat="50.828746" long="-0.139584"  class="demo-radio" addressType="international"/>
                            <span class="demo-label"> Brighton</span>
                            <br>
                            <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> 3rd Floor Trafalgar Place
                            <br>
                            <span class="demo-city-zip">Brighton, UK BN1 4FU</span>
                        </label>
                        <br>
                        <label class="demo-label-container">
                            <input name="address" type="radio" value="Bahiratwadi Shivajinagar,Pune,Maharashtra,India,411 016"
                            lat="18.533946" long="73.827597"  class="demo-radio" addressType="international"/>
                            <span class="demo-label"> Pune</span>
                            <br>
                            <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> 3rd Floor, Pride Portal
                            <br>
                            <span class="demo-city-zip">Bahiratwadi, Shivajinagar</span>
                            <br>
                            <span class="demo-city-zip">Pune, India 411 016</span>
                        </label>
                        <br>
                        <label class="demo-label-container">
                            <input name="address" type="radio" value="Rua Henri Dunant 137,São Paulo,SP,Brazil,04709-110"
                            lat="-23.633102" long="-46.695348"  class="demo-radio" addressType="international"/>
                            <span class="demo-label"> São Paulo</span>
                            <br>
                            <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> Rua Henri Dunant 137
                            <br>
                            <span class="demo-city-zip">São Paulo, Brazil 04709-110</span>
                        </label>
                    </form>
                    <button class="btn btn-primary" type="button" onClick="accordionTrigger('step-one-btn', 'step-two-btn');" style="display:block;">
                        Next
                    </button>
                </div>
                <!-- step 2 / products -->
                <button class="accordion" id='step-two-btn'>Step 2: What's being taxed?</button>
                <div class="panel">
                    <p>Choose a common product or service to calculate tax</p>
                    <form id="dropdown-products" onChange="fillWithSampleData();" class="demo-form">
                        <label class="demo-label demo-label-container">
                            <input value="P0000000" name="product" id="p1c" type="checkbox" description="Widget" checked  class="demo-radio"/>
                            <input value="100.00" type="text" id="p1c-amount" style="width: 50px;">
                            <span class="demo-label"> Widgets <i>(an item not otherwise classified; taxed as tangible personal property)</i></span>
                        </label>
                        <br>
                        <label class="demo-label demo-label-container">
                            <input value="PF160024" name="product" id="p2c" type="checkbox" description="Pre-packaged Sushi"  class="demo-radio"/>
                            <input value="15.99" type="text" id="p2c-amount" style="width: 50px;">
                            <span class="demo-label"> Pre-packaged Sushi</span>
                        </label>
                        <br>
                        <label class="demo-label demo-label-container">
                            <input value="DM040200" name="product" id="p3c" type="checkbox" description="MP3 download"  class="demo-radio"/>
                            <input value="0.99" type="text" id="p3c-amount" style="width: 50px;">
                            <span class="demo-label"> MP3 download</span>
                        </label>
                        <br>
                        <label class="demo-label demo-label-container">
                            <input value="PC040400" name="product" id="p4c" type="checkbox" description="Baseball Bat" class="" />
                            <input value="40.21" type="text" id="p4c-amount" style="width: 50px;">
                            <span class="demo-label"> Baseball Bat</span>
                        </label>
                        <br>
                        <label class="demo-label demo-label-container">
                            <input value="PC070400" name="product" id="p5c" type="checkbox" description="Color Laser Printer" class="" />
                            <input value="199.00" type="text" id="p5c-amount" style="width: 50px;">
                            <span class="demo-label"> Color Laser Printer</span>
                        </label>
                        <br>
                        <label class="demo-label demo-label-container">
                            <input value="SA090700" name="product" id="p6c" type="checkbox" description="Oil change service (with synthetic oil)" class="" />
                            <input value="89.99" type="text" id="p6c-amount" style="width: 50px;">
                            <span class="demo-label"> Oil change service (with synthetic oil)</span>
                        </label>
                        <br>
                        <label class="demo-label demo-label-container">
                            <input value="FR010000" name="product" id="p7c" type="checkbox" description="Shipping"  class="demo-radio" />
                            <input value="19.99" type="text" id="p7c-amount" style="width: 50px;">
                            <span class="demo-label"> Shipping</span>
                        </label>
                        <br>
                    </form>
                    <button class="btn btn-primary" type="button" onClick="accordionTrigger('step-two-btn','step-three-btn');" style="display:block;">
                        Next
                    </button>
                </div>
                <!-- step 3 / ship from -->
                <button class="accordion" id='step-three-btn'>Step 3: Where are you shipping from? (optional)</button>
                <div class="panel">
                    <p>Choose a pre-selected address</p>
                    <form id="dropdown-src-addresses" onChange="fillWithSampleData();" class="demo-form">
                        <label class="demo-label-container">
                            <input name="srcAddress" type="radio" value="2000 Main Street,Irvine,CA,US,92614"
                            lat="33.6846603698176" long="-117.850629887389"  class="demo-radio" addressType="national"/>
                            <span class="demo-label"> Irvine</span>
                            <br>
                            <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> 2000 Main Street
                            <br>
                            <span class="demo-city-zip">Irvine, CA 92614</span>
                        </label>
                        <br>
                        <label class="demo-label-container">
                            <input name="srcAddress" type="radio" value="255 S. King Street,Seattle,WA,US,98104"
                            lat="47.598100-122.331206" long="-122.331206"  class="demo-radio" addressType="national"/>
                            <span class="demo-label"> Seattle</span>
                            <br>
                            <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> 255 S. King Street
                            <br>
                            <span class="demo-city-zip">Seattle, WA, 98104</span>
                        </label>
                        <br>
                        <label class="demo-label-container">
                            <input name="srcAddress" type="radio" value="512 S Mangum Street,Durham,NC,US,27701"
                            lat="35.991727" long="-78.902647"  class="demo-radio" addressType="national"/>
                            <span class="demo-label"> Durham</span>
                            <br>
                            <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> 512 S Mangum Street
                            <br>
                            <span class="demo-city-zip">Durham, NC 27701</span>
                        </label>
                        <br>
                        <!-- international addresses -->
                        <label class="demo-label-container">
                            <input name="srcAddress" type="radio" value="3rd Floor Trafalgar Place,Brighton,Brighton and Hove,UK,BN1 4FU" lat="50.828746" long="-0.139584"  class="demo-radio" addressType="international"/>
                            <span class="demo-label"> Brighton</span>
                            <br>
                            <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> 3rd Floor Trafalgar Place
                            <br>
                            <span class="demo-city-zip">Brighton, UK BN1 4FU</span>
                        </label>
                        <br>
                        <label class="demo-label-container">
                            <input name="srcAddress" type="radio" value="Bahiratwadi Shivajinagar,Pune,Maharashtra,India,411 016"
                            lat="18.533946" long="73.827597"  class="demo-radio" addressType="international"/>
                            <span class="demo-label"> Pune</span>
                            <br>
                            <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> 3rd Floor, Pride Portal
                            <br>
                            <span class="demo-city-zip">Bahiratwadi, Shivajinagar</span>
                            <br>
                            <span class="demo-city-zip">Pune, India 411 016</span>
                        </label>
                        <br>
                        <label class="demo-label-container">
                            <input name="srcAddress" type="radio" value="Rua Henri Dunant 137,São Paulo,SP,Brazil,04709-110"
                            lat="-23.633102" long="-46.695348"  class="demo-radio" addressType="international"/>
                            <span class="demo-label"> São Paulo</span>
                            <br>
                            <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> Rua Henri Dunant 137
                            <br>
                            <span class="demo-city-zip">São Paulo, Brazil 04709-110</span>
                        </label>
                    </form>
                    <button class="btn btn-primary" type="button" onClick="ApiRequest();" style="display:block;">
                        Submit
                    </button>
                </div>
            </div>
        </div>
        <!-- end shortcuts -->
    </div>
    <!-- map and api details container -->
    <div class="col-md-9">
        <!-- map row -->
        <div class="row">
            <div id="myMap"></div>
        </div>
        <!-- api details row -->
        <div class="row" id="demo-api-details">
            <!-- request output -->
            <div class="console-req-container api-console-output col-md-6" id="demo-console-req" >
                <div class="row" style="margin-top:15px;margin-left:10px;margin-right:10px;">
                    <h5 class="console-output-header" style="display:inline-block;margin-left:0px;">
                        Request
                    </h5>
                    <div style="display:inline-block;float:right;" class="btn-group">
                        <button class="btn btn-link" type="submit" onClick="copyToClipboard('#demo-console-input');" style="color:#000000;margin-right:5px;display:inline;">
                            <i class="glyphicon glyphicon-copy"></i>Copy
                        </button>
                        <button class="btn btn-link" style="display:inline;color:#000000;margin-right:5px;">
                            <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/CreateTransactionModel/" style="color:#000000;" target="_blank">
                                <i class="glyphicon glyphicon-list-alt"></i>Docs
                            </a>
                        </button>
                    </div>
                </div>
                <div class="code-snippet reqScroll" id="demo-console-req" style="height:400px;">
                    <pre id="demo-console-input">{ }</pre>
                </div>
            </div>
            <!-- response output -->
            <div class="col-md-6 console-res-container api-console-output" id="demo-console-res">
                <div class="row" style="margin-top:15px;margin-left:10px;margin-right:10px;">
                    <h5 class="console-output-header" style="display:inline-block;margin-left:0px;">
                        Response
                    </h5>
                    <div style="display:inline-block;float:right;" class="btn-group">
                        <button class="btn btn-link" type="submit" onClick="copyToClipboard('#demo-console-input');" style="color:#000000;margin-right:5px;display:inline;">
                            <i class="glyphicon glyphicon-copy"></i>Copy
                        </button>
                        <button class="btn btn-link" style="display:inline;color:#000000;margin-right:5px;">
                            <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/CreateTransactionModel/" style="color:#000000;" target="_blank">
                                <i class="glyphicon glyphicon-list-alt"></i>Docs
                            </a>
                        </button>
                    </div>
                </div>
                <div class="code-snippet respScroll" style="height:400px;">
                    <div class="loading-pulse" style="display: none;"></div>
                    <pre id="demo-console-output">{ }</pre>
                </div>
            </div>
            <!-- end response output -->
        </div>
        <!-- end api details row-->
    </div>
    <!-- end map & api details container-->
</div>
<!-- end demo container -->