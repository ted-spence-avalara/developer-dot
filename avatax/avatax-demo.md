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
    function GetMap() {
        map = new Microsoft.Maps.Map('#myMap', {});
        var layer = new Microsoft.Maps.Layer("MyPushpinLayer1");
        layer.add(new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(47.59789, -122.33104)));
        map.layers.insert(layer);
    }

    //Find address? Or use map.Find()?
</script>
<script type='text/javascript' src='https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=Ahgp_E6MHtyMYBJPCllMKTwJk7Indytl8hVm-Boe6mbyWbcyZvVBUePMDP5OLeiH' async defer></script>

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
    <select id="dropdown-addresses">
        <option>Select from a list...</option>
        <option value="2000 Main Street, Irvine, CA 92614">Irvine, California</option> <!-- OnChange, call GetMap() with this Location object new Microsoft.Maps.Location(33.6846603698176, -117.850629887389) -->
        <option value="255 S. King Street, Seattle, WA 98104">Seattle, Washington</option> <!-- OnChange, call GetMap() with this new Microsoft.Maps.Location(47.59789, -122.33104) -->
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
            <h5 class="console-output-header">
                Request
                <i class="glyphicon glyphicon-pencil"></i>
            </h5>
            <div class="code-snippet reqScroll">
                <pre id="console-input">{ }</pre>
            </div>
        </div>
        <div class="col-md-6 console-res-container">
             <h5 class="console-output-header">Response</h5>
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