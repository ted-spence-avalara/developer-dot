---
layout: page
title: AvaTax Demo
categories: [avatax, api]
product: avatax
doctype: use_cases
disqus: 1
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
    
    function GetMapWithLine(destLat, destLong, srcLat, srcLong) {
         if(destLat == null || destLong == null) {
            destLat = 33.6846603698176;
            destLong = -117.850629887389;
        }

        if(srcLat == null || srcLong == null) {
            var location  = new Microsoft.Maps.Location(destLat, destLong);        
            map = new Microsoft.Maps.Map('#myMap', {center: location});
            var layer = new Microsoft.Maps.Layer("MyPushpinLayer1");
            layer.add(new Microsoft.Maps.Pushpin(location));
            map.layers.insert(layer);
            return;
        }

        map = new Microsoft.Maps.Map('#myMap', {});
        var center = map.getCenter();
        var coords = [center, new Microsoft.Maps.Location(center.latitude + 1, center.longitude + 1)];
        var line = new Microsoft.Maps.Polyline(coords, {strokeColor: 'orange', strokeThickness: 3});
        map.entities.push(line);
    }
</script>
<script type='text/javascript' src='https://www.bing.com/api/maps/mapcontrol?callback=GetMapWithLine&key=Ahgp_E6MHtyMYBJPCllMKTwJk7Indytl8hVm-Boe6mbyWbcyZvVBUePMDP5OLeiH' async defer></script>

<div id="myMap" style="position:relative;width:800px;height:600px;"></div>

## Shortcuts

<div>
    Choose a common product or service:
    <select id="dropdown-products" onChange="fillWithSampleData();">
        <option value="P0000000" description="Tangible Personal Property">Tangible Personal Property</option>
        <option value="PF160024" description="All Sushi">All Sushi</option>
        <option value="FR010000" description="Shipping">Shipping</option>
        <option value="DM040200" description="Music - streaming / electronic download">Music - streaming / electronic download</option>
        <option value="PC040400" description="Sports and Recreational Equipment">Sports and Recreational Equipment</option>
    </select>
    Use a pre-selected address:
    <select id="dropdown-addresses" onChange="fillWithSampleData();">
        <option value="2000 Main Street,Irvine,CA,US,92614" lat="33.6846603698176" long=
        "-117.850629887389">Irvine, CA, United States</option> 
        <option value="255 S. King Street,Seattle,WA,US,98104" lat="47.598100-122.331206" long="-122.331206">Seattle, WA, United States</option> 
        <option value="360 AMS Court,Green Bay,WI,US,54313"  lat="44.550886" long="-88.100548">Green Bay, WI, United States</option>
        <option value="512 S Mangum Street,Durham,NC,US,27701" lat="35.991727" long="-78.902647">Durham, NC, United States</option>
        <option value="Weslayan Tower 24 Greenway Plaza,Houston,TX,US,77046"  lat="29.729903" long="-95.440863">Houston, TX, United States</option>
        <option value="4304 Live Oak Lane,Rocklin,CA,US,95765" lat="38.821517" long="-121.243897">Rocklin, CA, United States</option>
        <option value="6465 Greenwood Plaza Blvd,Greenwood Village,CO,US,80111" lat="39.599445" long="-104.896804">Denver, CO, United States</option>
        <!-- international addresses -->
        <option value="3rd Floor Trafalgar Place,Brighton,Brighton and Hove,UK,BN1 4FU" lat="50.828746" long="-0.139584">Brighton, United Kingdom</option>
        <option value="Bahiratwadi Shivajinagar,Pune,Maharashtra,India,411 016" lat="18.533946" long="73.827597"> Pune, India</option>
        <option value="Rua Henri Dunant 137,São Paulo,SP,Brazil,04709-110" lat="-23.633102" long="-46.695348">São Paulo, São Paulo, Brazil</option>
        <option value="O.L.Vrouwstraat 6,Grimbergen,Belgium Grimbergen,BE,B-1850" lat="50.932458" long="4.372408">Brussels, Belgium</option>
    </select>
</div>

## API Details

<div class="api-console-output">
<h5 class="console-output-header">API Endpoint</h5>
    <div class="row" style="margin: 10px;">
        <div class="code-snippet-plaintext" style="display: inline;" id="console-method">POST</div>
        <div class="code-snippet-plaintext" style="display: inline;" id="console-server">https://sandbox-rest.avatax.com</div>
        <div class="code-snippet-plaintext" style="display: inline;" id="console-path">/api/v2/transactions/create</div>
    </div>
    <div class="row" style="margin-bottom: 8px;">
        <div class="col-md-6 console-req-container">
            <h5 class="console-output-header col-md-12">Request
                <div style="float:right;">
                    <button class="btn btn-secondary" type="submit" onClick="copyToClipboard('#console-input');" style="color:#000000;margin-right:5px;">
                        <i class="glyphicon glyphicon-copy"></i>Copy
                    </button>
                    <button class="btn btn-secondary" style="float:right;color:#000000;margin-right:5px;">
                        <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/CreateTransactionModel/" style="color:#000000;" target="_blank">
                            <i class="glyphicon glyphicon-list-alt"></i> 
                            Docs
                        </a>
                    </button>
                </div>
            </h5>
            <div class="code-snippet reqScroll">
                <pre id="console-input">{ }</pre>
            </div>
        </div>
        <div class="col-md-6 console-res-container" >
            <h5 class="console-output-header col-md-12">Response
                <div style="float:right;">
                    <button class="btn btn-secondary" type="submit" onClick="copyToClipboard('#console-output');" style="color:#000000;margin-right:5px;">
                        <i class="glyphicon glyphicon-copy"></i>Copy
                    </button>
                    <button class="btn btn-secondary" style="float:right;color:#000000;margin-right:5px;">
                        <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/TransactionModel/" style="color:#000000;" target="_blank">
                            <i class="glyphicon glyphicon-list-alt"></i> 
                            Docs
                        </a>
                    </button>
                </div>
            </h5>
            <div class="code-snippet respScroll">
                <div class="loading-pulse" style="display: none;"></div>
                <pre id="console-output"></pre>
            </div>
         </div>
     </div>
     <div>
         <button class="btn btn-secondary" style="color: #000000;" type="button" onClick="$('#console-input').empty().val('{ }');">Reset</button>
         <button class="btn btn-primary" type="button" onClick="ApiRequest();">Submit</button>
     </div>
</div>