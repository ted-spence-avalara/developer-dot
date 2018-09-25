---
layout: page
categories: [avatax, api]
product: avatax
doctype: use_cases
---

<script type='text/javascript'>

    var map;
    function GetMap(lat, long) {
        if(lat == null || long == null) {
            lat = 33.6846603698176;
            long = -117.850629887389;
        }
        var location  = new Microsoft.Maps.Location(lat, long);
        
        map = new Microsoft.Maps.Map('#myMap', {center: location});
        var layer = new Microsoft.Maps.Layer("MyPushpinLayer1");
        layer.add(new Microsoft.Maps.Pushpin(location));
        map.layers.insert(layer);
    }

    //Find address? Or use map.Find()?
</script>
<script type='text/javascript' src='https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=Ahgp_E6MHtyMYBJPCllMKTwJk7Indytl8hVm-Boe6mbyWbcyZvVBUePMDP5OLeiH' async defer></script>


 <div class="row">
    <!-- settings/code container -->
    <div class="col-md-7">
        <!-- API endpoint header -->
        <div class="row">
            <h2 id="demo-endpoint-header" style="display:inline-block;">API Endpoint</h2>
            <div id="demo-endpoint-contents" style="margin: 10px;display:inline-block;">
                <div class="code-snippet-plaintext" style="display: inline;" id="console-method">POST</div>
                <div class="code-snippet-plaintext" style="display: inline;" id="console-server">https://sandbox-rest.avatax.com</div>
                <div class="code-snippet-plaintext" style="display: inline;" id="console-path">/api/v2/transactions/create</div>
            </div>
        </div>
        <div class="row">
            <!-- Shortcuts -->
            <div class="col-md-4" id="demo-shortcuts" style="max-height:835px;overflow:auto;">
                <h3>Shortcuts</h3>
                <div class="row">
                    <div class="demo-shortcut-desc" style="margin-top:15px;margin-bottom:5pxfont-weight:bold;font-size:20px;">Choose a common product or service:</div>
                    <form id="dropdown-products" onChange="fillWithSampleData();"> 
                        <label><input value="P0000000" name="product" type="radio" description="Tangible Personal Property" checked/> Tangible Personal Property</label><br>
                        <label><input value="PF160024" name="product" type="radio" description="All Sushi"/> All Sushi</label><br>
                        <label><input value="FR010000" name="product" type="radio" description="Shipping"/> Shipping</label><br>
                        <label><input value="DM040200" name="product" type="radio" description="Music - streaming / electronic download"/> Music - streaming / electronic download</label><br>
                        <label><input value="PC040400" name="product" type="radio" description="Sports and Recreational Equipment" /> Sports and Recreational Equipment</label><br>
                    </form>  
                </div>
                <div class="row">
                    <div class="demo-shortcut-desc" style="margin-top:15px;margin-bottom:5px;font-weight:bold;font-size:20px;">Use a pre-selected address:</div>
                    <form id="dropdown-addresses" onChange="fillWithSampleData();">
                        <label><input name="address" type="radio" value="2000 Main Street,Irvine,CA,US,92614" lat="33.6846603698176" long=
                        "-117.850629887389" checked/> Irvine, CA, United States</label><br>
                        <label><input name="address" type="radio" value="255 S. King Street,Seattle,WA,US,98104" lat="47.598100-122.331206" long="-122.331206"/> Seattle, WA, United States</label><br> 
                        <label><input name="address" type="radio" value="360 AMS Court,Green Bay,WI,US,54313"  lat="44.550886" long="-88.100548"> Green Bay, WI, United States</label><br>
                        <label><input name="address" type="radio" value="512 S Mangum Street,Durham,NC,US,27701" lat="35.991727" long="-78.902647"/> Durham, NC, United States</label><br>
                        <label><input name="address" type="radio" value="Weslayan Tower 24 Greenway Plaza,Houston,TX,US,77046"  lat="29.729903" long="-95.440863"/> Houston, TX, United States</label><br>
                        <label><input name="address" type="radio" value="4304 Live Oak Lane,Rocklin,CA,US,95765" lat="38.821517" long="-121.243897"/> Rocklin, CA, United States</label><br>
                        <label><input name="address" type="radio" value="6465 Greenwood Plaza Blvd,Greenwood Village,CO,US,80111" lat="39.599445" long="-104.896804"/> Denver, CO, United States</label><br>
                        <!-- international addresses -->
                        <label><input name="address" type="radio" value="3rd Floor Trafalgar Place,Brighton,Brighton and Hove,UK,BN1 4FU" lat="50.828746" long="-0.139584"/> Brighton, United Kingdom</label><br>
                        <label><input name="address" type="radio" value="Bahiratwadi Shivajinagar,Pune,Maharashtra,India,411 016" lat="18.533946" long="73.827597"/> Pune, India</label><br>
                        <label><input name="address" type="radio" value="Rua Henri Dunant 137,São Paulo,SP,Brazil,04709-110" lat="-23.633102" long="-46.695348"/> São Paulo, São Paulo, Brazil</label><br>
                        <label><input name="address" type="radio" value="O.L.Vrouwstraat 6,Grimbergen,Belgium Grimbergen,BE,B-1850" lat="50.932458" long="4.372408"/> Brussels, Belgium</label><br>
                    </form>
                </div>
            </div>
            <!-- API details  -->
            <div class="col-md-8" id="demo-api-details" style="max-height:835px;overflow:auto;">
                <h3>API Details</h3>
                <!-- start api console output -->
                <div class="console-req-container api-console-output row" id="demo-console-req" style="margin-bottom:5px;">
                    <h5 class="console-output-header">Request
                        <div style="float:right;">
                            <button class="btn btn-link" type="submit" onClick="copyToClipboard('#console-input');" style="color:#000000;margin-right:5px;display:inline;">
                                <i class="glyphicon glyphicon-copy"></i>Copy
                            </button>
                            <button class="btn btn-link" style="display:inline;color:#000000;margin-right:5px;">
                                <a href="https://developer.avalara.com/api-reference/avatax/rest/v2/models/CreateTransactionModel/" style="color:#000000;" target="_blank">
                                    <i class="glyphicon glyphicon-list-alt"></i> 
                                    Docs
                                </a>
                            </button>
                            <button class="btn btn-primary" type="button" onClick="ApiRequest();" style="display:inline;">Submit</button>
                        </div>
                    </h5>
                    <div class="code-snippet reqScroll">
                        <pre id="console-input">{ }</pre>
                    </div>
                </div>
                <!-- response output -->
                <div class="row console-res-container api-console-output" id="demo-console-res">
                    <h5 class="console-output-header col-md-12">Response
                        <div style="float:right;">
                            <button class="btn btn-link" type="submit" onClick="copyToClipboard('#console-output');" style="color:#000000;margin-right:5px;">
                                <i class="glyphicon glyphicon-copy"></i>Copy
                            </button>
                            <button class="btn btn-link" style="float:right;color:#000000;margin-right:5px;">
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
                <!-- end api console output -->
            </div>
        </div>
    </div>
    <!-- map container -->
    <div class="col-md-5">
        <div id="myMap" style="width:850px;height:900px;"></div>
    </div>
 </div>