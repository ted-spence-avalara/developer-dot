---
layout: page
categories: [avatax, api]
product: avatax
doctype: use_cases
---


<script type='text/javascript'>
    var map;
    // function GetMap(lat, long) {
    //     if(lat == null || long == null) {
    //         lat = 33.6846603698176;
    //         long = -117.850629887389;
    //     }
    //     var location  = new Microsoft.Maps.Location(lat, long);
        
    //     map = new Microsoft.Maps.Map('#myMap', {center: location});
    //     var layer = new Microsoft.Maps.Layer("MyPushpinLayer1");
    //     layer.add(new Microsoft.Maps.Pushpin(location));
    //     map.layers.insert(layer);
    // }

    const infoboxTemplate = `
        <div class="demo-infobox">
            <h4>Getting Started</h4>
            <p>
                Calculating sales tax is time consuming and painful, but it doesn\'t have to be. Avalara\'s sales tax API automates the process for you! All you need to do to start making quick calculations is choose a product or service and where you\'re shipping from and to. Tinker with the options on the left, click "Submit" and watch the magic happen!
            </p>
        </div>
    `;

    function displayToolTip(center) {

        //Create an infobox that will render in the center of the map.
        const infobox = new Microsoft.Maps.Infobox(center, {
            htmlContent: infoboxTemplate,
        });

        //Assign the infobox to a map instance.
        infobox.setMap(map);
    }

    function GetMapWithLine(destLat, destLong, srcLat, srcLong) { 
        let center;

        
        if(destLat == null || destLong == null) { 
            // destLat = 33.6846603698176; 
            // destLong = -117.850629887389; 
            map = new Microsoft.Maps.Map('#myMap', {zoom: 0}); 
            center = map.getCenter();
            displayToolTip(center);
            return;
        }  
        
        

        //Single location layer (pushpin) 
        if(srcLat == null || srcLong == null) { 
            var location  = new Microsoft.Maps.Location(destLat, destLong);         
            map = new Microsoft.Maps.Map('#myMap', {center: location}); 
            var layer = new Microsoft.Maps.Layer("MyPushpinLayer1");
            layer.add(new Microsoft.Maps.Pushpin(location));
            map.layers.insert(layer);
            center = map.getCenter();
            displayToolTip(center);

            //Exit out since it is a single location.
            return; 
        }

        //Source and destination layer (polyline) 
        map = new Microsoft.Maps.Map('#myMap', {});
        center = map.getCenter();
        var coords = [center, new Microsoft.Maps.Location(center.latitude + 1, center.longitude + 1)];
        var line = new Microsoft.Maps.Polyline(coords, {strokeColor: 'orange', strokeThickness: 3});
        map.entities.push(line);
        displayToolTip(center);
    } 
</script>
<script type='text/javascript' src='https://www.bing.com/api/maps/mapcontrol?callback=GetMapWithLine&key=Ahgp_E6MHtyMYBJPCllMKTwJk7Indytl8hVm-Boe6mbyWbcyZvVBUePMDP5OLeiH' async defer></script>


<!-- page header -->
<div class="row">
    <div class="col-lg-3 col-md-12">
        <h1 style="margin-top:0;">Sales Tax API Demo</h1>
    </div>
    <div class="col-lg-9 col-md-12">
        <h2 id="demo-endpoint-header" style="display:inline-block;margin-top:0;padding-top:5px;">CreateTransaction Endpoint</h2>
        <div id="demo-endpoint-contents" style="margin: 10px;display:inline-block;">
            <div class="code-snippet-plaintext" style="display: inline;" id="console-method">
                POST
            </div>
            <div class="code-snippet-plaintext" style="display: inline;" id="console-server">
                https://sandbox-rest.avatax.com
            </div>
            <div class="code-snippet-plaintext" style="display: inline;" id="console-path">
                /api/v2/transactions/create?$include=summaryOnly
            </div>
            <button class="btn btn-primary" style="display:inline;margin-left:5px;">
                <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/CreateTransaction/" style="color:white;text-decoration:none;" target="_blank">
                    <i class="glyphicon glyphicon-list-alt"></i> 
                    Docs
                </a>
            </button>
        </div>
    </div>
</div>

<!-- demo container -->
<div class="row">
    <!-- shortcuts container -->
    <div class="col-md-3">
        <div id="demo-shortcuts">
            <!-- steps to submit -->
            <div class="row">
                <!-- step 1 / ship from -->
                <button class="accordion">Step 1: Where are you shipping from?</button>
                <div class="panel">
                    <p>Choose a pre-selected address</p>
                    <form id="dropdown-dest-addresses" onChange="fillWithSampleData();" class="demo-form">
                        <!-- national addresses -->
                        <label class="demo-label-container">
                            <input name="address" type="radio" value="2000 Main Street,Irvine,CA,US,92614" lat="33.6846603698176" long="-117.850629887389"  class="demo-radio"/> 
                            <span class="demo-label"> Irvine</span>
                            <br>
                            <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> 2000 Main Street
                            <br>
                            <span class="demo-city-zip">Irvine, CA 92614</span>
                        </label>
                        <br>
                        <label class="demo-label-container">
                            <input name="address" type="radio" value="255 S. King Street,Seattle,WA,US,98104" lat="47.598100-122.331206" long="-122.331206"  class="demo-radio"/> 
                            <span class="demo-label"> Seattle</span>
                            <br>
                            <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> 255 S. King Street
                            <br>
                            <span class="demo-city-zip">Seattle, WA, 98104</span>
                        </label>
                        <br> 
                        <label class="demo-label-container">
                            <input name="address" type="radio" value="360 AMS Court,Green Bay,WI,US,54313"  
                            lat="44.550886" long="-88.100548"  class="demo-radio"> 
                            <span class="demo-label"> Green Bay</span>
                            <br>
                            <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> 360 AMS Court
                            <br>
                            <span class="demo-city-zip">Green Bay, WI 54313</span>
                        </label>
                        <br>
                        <label class="demo-label-container">
                            <input name="address" type="radio" value="512 S Mangum Street,Durham,NC,US,27701" 
                            lat="35.991727" long="-78.902647"  class="demo-radio"/> 
                            <span class="demo-label"> Durham</span>
                            <br>
                            <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> 512 S Mangum Street
                            <br>
                            <span class="demo-city-zip">Durham, NC 27701</span>
                        </label>
                        <br>
                        <label class="demo-label-container">
                            <input name="address" type="radio" value="Weslayan Tower 24 Greenway Plaza,Houston,TX,US,77046" 
                            lat="29.729903" long="-95.440863"  class="demo-radio"/> 
                            <span class="demo-label"> Houston</span>
                            <br>
                            <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> Weslayan Tower 24 Greenway Plaza
                            <br>
                            <span class="demo-city-zip">Houston, TX 77046</span>
                        </label>
                        <br>
                        <label class="demo-label-container">
                            <input name="address" type="radio" value="4304 Live Oak Lane,Rocklin,CA,US,95765" 
                            lat="38.821517" long="-121.243897"  class="demo-radio"/> 
                            <span class="demo-label"> Rocklin</span>
                            <br>
                            <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> 4304 Live Oak Lane
                            <br>
                            <span class="demo-city-zip">Rocklin, CA 95765</span>
                        </label>
                        <br>
                        <label class="demo-label-container">
                            <input name="address" type="radio" value="6465 Greenwood Plaza Blvd,Greenwood Village,CO,US,80111" lat="39.599445" long="-104.896804"  class="demo-radio"/> 
                            <span class="demo-label"> Denver</span>
                            <br>
                            <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> 6465 Greenwood Plaza Blvd
                            <br>
                            <span class="demo-city-zip">Greenwood Village, CO 80111</span>
                        </label>
                        <br>
                        <!-- international addresses -->
                        <label class="demo-label-container">
                            <input name="address" type="radio" value="3rd Floor Trafalgar Place,Brighton,Brighton and Hove,UK,BN1 4FU" lat="50.828746" long="-0.139584"  class="demo-radio"/> 
                            <span class="demo-label"> Brighton</span>
                            <br>
                            <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> 3rd Floor Trafalgar Place
                            <br>
                            <span class="demo-city-zip">Brighton, UK BN1 4FU</span>
                        </label>
                        <br>
                        <label class="demo-label-container">
                            <input name="address" type="radio" value="Bahiratwadi Shivajinagar,Pune,Maharashtra,India,411 016" 
                            lat="18.533946" long="73.827597"  class="demo-radio"/> 
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
                            lat="-23.633102" long="-46.695348"  class="demo-radio"/> 
                            <span class="demo-label"> São Paulo</span>
                            <br>
                            <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> Rua Henri Dunant 137
                            <br>
                            <span class="demo-city-zip">São Paulo, Brazil 04709-110</span>
                        </label>
                        <br>
                        <label class="demo-label-container">
                            <input name="address" type="radio" value="O.L.Vrouwstraat 6,Grimbergen,Belgium Grimbergen,BE,B-1850" 
                            lat="50.932458" long="4.372408"  class="demo-radio"/> 
                            <span class="demo-label"> Brussels</span>
                            <br>
                            <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> O.L.Vrouwstraat 6
                            <br>
                            <span class="demo-city-zip">Grimbergen, BE B-1850</span>
                        </label>
                    </form>
                </div>
                <!-- step 2 / products -->
                <button class="accordion">Step 2: What's being taxed?</button>
                <div class="panel">
                    <p>Choose a common product or service to calculate tax</p>
                    <form id="dropdown-products" onChange="fillWithSampleData();" class="demo-form"> 
                        <label class="demo-label demo-label-container">
                            <input value="P0000000" name="product" type="radio" description="Tangible Personal Property" checked  class="demo-radio"/> 
                            <span class="demo-label"> Tangible Personal Property</span>
                        </label>
                        <br>
                        <label class="demo-label demo-label-container">
                            <input value="PF160024" name="product" type="radio" description="Sushi"  class="demo-radio"/> 
                            <span class="demo-label"> Sushi</span>
                        </label>
                        <br>
                        <label class="demo-label demo-label-container">
                            <input value="FR010000" name="product" type="radio" description="Shipping"  class="demo-radio"/> 
                            <span class="demo-label"> Shipping</span>
                        </label>
                        <br>
                        <label class="demo-label demo-label-container">
                            <input value="DM040200" name="product" type="radio" description="Music - streaming / electronic download"  class="demo-radio"/> 
                            <span class="demo-label"> Music - streaming / electronic download</span>
                        </label>
                        <br>
                        <label class="demo-label demo-label-container">
                            <input value="PC040400" name="product" type="radio" description="Sports and Recreational Equipment" class="" /> 
                            <span class="demo-label"> Sports and Recreational Equipment</span>
                        </label>
                        <br>
                    </form> 
                </div>
                <!-- step 3 / ship to -->
                <button class="accordion">Step 3: Where are you shipping to?</button>
                <div class="panel">
                    <p>Choose a pre-selected address</p>
                    <form id="dropdown-src-addresses" onChange="fillWithSampleData();" class="demo-form">
                        <label class="demo-label-container">
                            <input name="srcAddress" type="radio" value="2000 Main Street,Irvine,CA,US,92614" 
                            lat="33.6846603698176" long="-117.850629887389"  class="demo-radio"/> 
                            <span class="demo-label"> Irvine</span>
                            <br>
                            <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> 2000 Main Street
                            <br>
                            <span class="demo-city-zip">Irvine, CA 92614</span>
                        </label>
                        <br>
                        <label class="demo-label-container">
                            <input name="srcAddress" type="radio" value="255 S. King Street,Seattle,WA,US,98104" 
                            lat="47.598100-122.331206" long="-122.331206"  class="demo-radio"/> 
                            <span class="demo-label"> Seattle</span>
                            <br>
                            <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> 255 S. King Street
                            <br>
                            <span class="demo-city-zip">Seattle, WA, 98104</span>
                        </label>
                        <br> 
                        <label class="demo-label-container">
                            <input name="srcAddress" type="radio" value="360 AMS Court,Green Bay,WI,US,54313"  
                            lat="44.550886" long="-88.100548"  class="demo-radio"> 
                            <span class="demo-label"> Green Bay</span>
                            <br>
                            <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> 360 AMS Court
                            <br>
                            <span class="demo-city-zip">Green Bay, WI 54313</span>
                        </label>
                        <br>
                        <label class="demo-label-container">
                            <input name="srcAddress" type="radio" value="512 S Mangum Street,Durham,NC,US,27701" 
                            lat="35.991727" long="-78.902647"  class="demo-radio"/> 
                            <span class="demo-label"> Durham</span>
                            <br>
                            <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> 512 S Mangum Street
                            <br>
                            <span class="demo-city-zip">Durham, NC 27701</span>
                        </label>
                        <br>
                        <label class="demo-label-container">
                            <input name="srcAddress" type="radio" value="Weslayan Tower 24 Greenway Plaza,Houston,TX,US,77046" 
                            lat="29.729903" long="-95.440863"  class="demo-radio"/> 
                            <span class="demo-label"> Houston</span>
                            <br>
                            <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> Weslayan Tower 24 Greenway Plaza
                            <br>
                            <span class="demo-city-zip">Houston, TX 77046</span>
                        </label>
                        <br>
                        <label class="demo-label-container">
                            <input name="srcAddress" type="radio" value="4304 Live Oak Lane,Rocklin,CA,US,95765" 
                            lat="38.821517" long="-121.243897"  class="demo-radio"/> 
                            <span class="demo-label"> Rocklin</span>
                            <br>
                            <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> 4304 Live Oak Lane
                            <br>
                            <span class="demo-city-zip">Rocklin, CA 95765</span>
                        </label>
                        <br>
                        <label class="demo-label-container">
                            <input name="srcAddress" type="radio" value="6465 Greenwood Plaza Blvd,Greenwood Village,CO,US,80111" lat="39.599445" long="-104.896804"  class="demo-radio"/> 
                            <span class="demo-label"> Denver</span>
                            <br>
                            <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> 6465 Greenwood Plaza Blvd
                            <br>
                            <span class="demo-city-zip">Greenwood Village, CO 80111</span>
                        </label>
                        <br>
                        <!-- international addresses -->
                        <label class="demo-label-container">
                            <input name="srcAddress" type="radio" value="3rd Floor Trafalgar Place,Brighton,Brighton and Hove,UK,BN1 4FU" lat="50.828746" long="-0.139584"  class="demo-radio"/> 
                            <span class="demo-label"> Brighton</span>
                            <br>
                            <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> 3rd Floor Trafalgar Place
                            <br>
                            <span class="demo-city-zip">Brighton, UK BN1 4FU</span>
                        </label>
                        <br>
                        <label class="demo-label-container">
                            <input name="srcAddress" type="radio" value="Bahiratwadi Shivajinagar,Pune,Maharashtra,India,411 016" 
                            lat="18.533946" long="73.827597"  class="demo-radio"/> 
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
                            lat="-23.633102" long="-46.695348"  class="demo-radio"/> 
                            <span class="demo-label"> São Paulo</span>
                            <br>
                            <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> Rua Henri Dunant 137
                            <br>
                            <span class="demo-city-zip">São Paulo, Brazil 04709-110</span>
                        </label>
                        <br>
                        <label class="demo-label-container">
                            <input name="srcAddress" type="radio" value="O.L.Vrouwstraat 6,Grimbergen,Belgium Grimbergen,BE,B-1850" 
                            lat="50.932458" long="4.372408"  class="demo-radio"/> 
                            <span class="demo-label"> Brussels</span>
                            <br>
                            <i class="glyphicon glyphicon-map-marker demo-city-marker"></i> O.L.Vrouwstraat 6
                            <br>
                            <span class="demo-city-zip">Grimbergen, BE B-1850</span>
                        </label>
                    </form>
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
                        <button class="btn btn-primary" type="button" onClick="ApiRequest();" style="display:inline;">
                            Submit
                        </button>
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