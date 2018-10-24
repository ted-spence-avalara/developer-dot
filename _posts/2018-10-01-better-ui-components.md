
# Custom HTML Tags
## How to design better UI components and avoid over-engineering user interfaces through the use of standards

**Tl;dr:** this is something new that's NOT another js thing vying for market share. Enjoy!

### HTML now and forever
HTML’s job is to give content structure and meaning. This is called semantics. As the web progressed HTML adapted to include new elements to provide semantic support for more content, like `<nav>` for navigation and `<video>` for videos and `<article>` for, well, articles. Over the years it also added new capabilities to existing elements like the addition of the `autofocus` attribute, which tells the browser which element to focus on page load (you know that one is a must for log in and search UX!).

These additions were of course implemented through the usual HTML constructs: *tags*, *attributes*, and *nesting*. In case you need a refresher, here's some examples:

```html
<h1>Hello World!</h1>
```
`h1` is the "heading level 1" tag.
```html
<p>Ready for <a href="example.com" download>download</a></p>
```
That's an "anchor" element with download and "hypertext reference" attributes nested inside a paragraph. Here's some more examples:
```html
<section>
  <header>...</header>
  <footer>...</footer>
</section>

<input type="email" placeholder="name@example.com" autofocus>

<video src="example.com/vids/cats.mp4" poster="example.com/posters/cats.jpg" autoplay loop controls></video>
```
So yeah, those are standard elements with that familiar declarative API that makes learning and writing HTML so simple. Pretty basic stuff; no mystery here.

As you know HTML gives us lots of elements to work with, but you no doubt also know it doesn't give us enough elements for everything we need. Not by a long shot. Let's takes icons for a simple example.

Because HTML doesn't give us an `icon` tag to markup a site's icons we have to design our own solution. Here's three similar approaches you've likely seen before:

```html
<i class="fa fa-phone"></i>

<i class="icon icon-phone"></i>

<span class="oi oi-phone"></span>
```
Those solutions use classes to define both the element and its attributes, and while there is nothing wrong with that, there are drawbacks:

#### 1) Repetitive naming:
`fa`, `icon`, and `oi` are repeated twice. Not DRY.

#### 2) Loss of clarity when the following inevitably happens (or the extra effort required to prevent it):
```html
<i class="icon icon-phone"></i>  original code
<i class="icon icon-phone foo"></i>  six weeks later
<i class="bar baz icon icon-phone foo"></i>  a year later
```
What exactly is that last one supposed to be? It's no longer clear. 
#### 3) The tag becomes unavoidable boilerplate with no meaning:
```html
<i class="icon icon-phone"></i>
<div class="icon icon-phone"></div>
<span class="icon icon-phone"></span>
```
That means `<div class=""></div>` is just boilerplate. Bummer.
#### 4) Next to standard elements the class-based design looks out of place:
```html
<i class="icon icon-phone"></i>
<input type="email" autofocus>
```
What if the standard elements used classes like this? So instead of the above we'd have:
```html
<i class="icon icon-phone"></i>
<i class="input input-type-email input-autofocus">
```
Pretty gross, but that's class-based design, and it gets even worse if you follow BEM. Here's an example of that from a popular design system: 
```html
<div class="mdc-dialog__actions mdc-dialog__actions--full-width">
``` 
We don't have to do it this way. We don't have to use classes. There's something better. 

### Custom HTML tags

We can design custom components with more meaningful APIs by using tags, attributes, and nesting - just like real elements. Here's what that means:

_A typical class-based design_
```html
<i class="icon icon-phone"></i>
```
_Done with a custom tag and attribute design_
```html
<icon name="phone"></icon>
```
If this kind of makes you uneasy, don't worry. Custom tags are compatible with all modern browsers and later versions of IE. Browsers happily download, parse, and render custom tags just like any "real" HTML because it is. Sure, it's not a standard element and browsers won't have any default styles or built-in behaviors for your custom or _unknown_ tags, but that's not a problem at all. You can create CSS rules for custom tags, like `icon`, just like you can for standard tags and classes:
```css
icon {
  font-family: 'My Icons';
}

icon[name="phone"]:before {
  content: "\u123"; /* a phone glyph */
}
```

So there we go. That works perfectly fine! Other than specificity, it works the same as `.icon` and `.icon-phone:before`.


Let's do another one. 

A typical class-based Badge design looks like:
```html
<span class="badge badge-success">1</span>
```
Not awful, but here's the same thing using a tag and attributes:
```html
<badge count="1" type="success"></badge>
```
The second one is clearly a Badge element with it's own attributes. Again, not unlike real elements. And with a little CSS we can add some intelligence to Badge so when it has a zero count or no count it hides: 
```css
badge[count="0"], badge[count=""] { 
  display: none 
}
``` 
That's cool!

Here's some other examples of components built with custom tags and attributes instead of classes:
```html
<loader loading></loader>

<alert type="success">...</alert>

<row>
  <col span="6" hide="sm">...</col>
  <col span="6 sm-12">...</col>
</row>
```
How about we redo Material's Dialog Actions from earlier? That'd go like this:
```html
<div class="mdc-dialog__actions mdc-dialog__actions--full-width">...</div>
```
becomes
```html
<mdc-dialog-actions size="full-width">...</mdc-dialog-actions>
```

Can you see the difference? 

Are you starting to sense the benefits? 

Designing custom UI components with tags and attributes instead of classes is fun and it's better. It is objectively better:

* Enables UI engineers to design components with much more meaningful APIs instead of a boilerplate tag and list of classes
* Custom tags have strong semantic meaning and are easily identifiable: `<badge>` vs. `<span class="badge">`
* No more BEM or similar methodologies for engineering around the problems with class-based design
* In many cases you can ditch the need for abstraction: `{{> icon name="phone"}}` or `<OverEngineeredIcon name="phone"/>` is replaced with `<icon name="phone"></icon>`
* The result is clean, standards-based markup that has a nice uniform look with excellent readability
* Using custom tags and attributes is officially supported. It's how HTML thought we'd design custom components, but we instead went crazy for classes!
* Lastly, using custom tags with attributes sets you up for future improvements. How so? Let’s get into that now.

### Component evolution
Creating and sharing custom components is a commitment. Your components will evolve and have new capabilities added to them over time. Let's look at the possible evolution of a custom Alert (aka Callout) component:

_Original design_
```html
<alert type="success">
  <p>You should try this</p>
</alert>
```
```css
alert { 
  display: flex; 
  color: white;
}

alert[type="success"] { background-color: green; }
alert[type="warn"] { background-color: orange; }
alert[type="error"] { background-color: red; }
```
That would look something like:

image here...

Please note that there are no dependencies here. There's nothing to download, no tools and nothing to build. No magic, no hacks, nothing proprietary, no frameworks or special syntax, nothing. And when it comes to building software, _nothing_ is better than something.

Our Alert is pretty plain right now, so let’s see if we can give it an icon:

_With an icon_
```html
<alert type="success">
  <icon name="check"></icon>
  <p>You should try this</p>
</alert>
```
That works, but it's not the right way to design a component. Let's get an icon without leaving it up to the implementer:

_With the icon inferred_
```html
<alert type="success">
  <p>You should try this</p>
</alert>
```
```css
alert[type="success"]:before {
  font-family: 'My Icons';
  content: "\u555"; /* gets us a ✓ icon */
}
```

image here...

Ok, that's starting to really look like something. (Note that the CSS here does not include all the properties needed) 

It's pretty common for Alerts to disappear automatically, so let's add support for that. If there really was an HTML `alert` element and it had an auto-disappearing feature I could imagine it would have an `autodismiss` attribute for triggering this behavior, so let's go with that:

_New autodismiss feature_
```html
<alert type="success" autodismiss>
  <p>You should try this</p>
</alert> 
```
```css
alert {
     transition: opacity 2s 4s ease-in-out;
     opacity: 1; 
}

alert[autodismiss] {
    opacity: 0; 
}
```
Nice! We really got ourselves a useful component without a single build step or polyfill required - imagine that! And check out its friendly little API:
* `alert` tag
* `type` attribute (_required_) - one of "success", "warn", or "error"
* `autodismiss` attribute (_optional_) - if present, the Alert will disappear after four seconds
* Accepts nested content, including other custom tags

If you didn't know any better you might think this was one of them fancy HTML5 elements available in all those non-IE browsers. That's a sign we are on the right track! 

There is a small problem though. The problem is our tag name is not totally future-proof. There's two considerations here:

The first is that some day HTML might get a tag with the same name as ours. I pray every night before bed that WHATWG will give us `<icon>`...but if WHATWG doesn't, it's still possible some other developer might. Either way there's risk of a collision and that brings us to the second consideration: prefixing. 

Although these aren't technically Custom Elements at this point, you'll want to follow the spec and use a prefix for your custom tags. At Avalara we use `s-` as our prefix. The `s` is short for Skylab, which is the name of our design system, but it also means:
* **s**tandards - we always go for standards until we actually need to bring in a dependency
* **s**emantic - tags with attributes are much more semantic than `div` with classes
* **s**mall - basic HTML and CSS can take you very far without the overhead of something like React
* **s**hared - these components are shared by our 20+ web apps and three times as many developers
* **S**eattle - ok not really, but that's where we are! Come [join us](https://www.avalara.com/us/en/about/jobs/job-details.oUKm8fwS.html)

So yeah, prefixing is a best-practice. It solves the risk of colliding tags and it's a helpful visual distinguisher between standard and custom tags. More importantly it sets you up very nicely for when JavaScript-enabled functionality is required and you go Custom Elements or similar. You see, using prefixed custom tags instead of classes can scale in either direction: you can scale down to lightweight CSS-only components like icon, or all the way up to interactive components that respond to state changes _all while maintaining the same interface_. The secret is prefixed custom tags.

Let's see how our Alert can go from a basic custom tag with styles to interactive JavaScript-enabled component without breaking changes or a shifting paradigm.

In a future release of Alert let's say we're adding the ability to set the `autodismiss` duration. You can take the default four seconds by simply adding the attribute, or you can shorten or extend that duration by setting its value to a number:

_Override autodismiss duration_
```html
<alert type="success" autodismiss="10">
  <p>You should try this</p>
</alert>
```
But as we've learned it's best-practice to prefix, so that really should be:
```html
<s-alert type="success" autodismiss="10">
  <p>You should try this</p>
</s-alert>
```
> Side note: If you're the maintainer of a shared library, pick a short prefix that's meaningful to you. Twitter's Bootstrap, for example, would go from:
> ```html
> <div class="alert alert-success">
> ```
> to
> ```html
> <twbs-alert type="success">
> ```
> or maybe just
> ```html
> <b-alert type="success">
> ```
> and Material can use `mdc-` as shown above.  

Anyway, back to `autodismiss`. Supporting a value of seconds now requires the use of JavaScript. At this point most people go  with what they know or try the flavor-of-the-day ramping up on whatever idioms and special syntax is required. That's not a problem if you're a small team with one app, but if you have lots of consumers of your Alert component you're entering into a code contract and the less that contract asks of the implementer the better.

We can minimize the contract and be better positioned for the long-term if we pick a solution that follows, or stays close to, Custom Elements. Here's some options available today:
* [Custom Elements](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements) or full-blown [Web Components](https://www.webcomponents.org/introduction) of course
* [Polymer](https://www.polymer-project.org/3.0/start/)
* [Slim](http://slimjs.com/#/getting-started)
* [Vue](https://vuejs.org/v2/guide/#Relation-to-Custom-Elements)
* [Riot](https://riot.js.org), which has the best DX out there imo, [try it](https://riot.js.org/play/). There's even a w3c [proposal that takes the Custom Elements spec in a similar direction](https://github.com/w3c/webcomponents/blob/gh-pages/proposals/Declarative-Custom-Elements-Strawman.md)

Here's two examples where Alert has been upgraded to a stateful component to support user-defined seconds:

_Custom Elements + `<template>` element_
```html
<template id="s-alert">
  <style>
    ...
  </style>
  
  <s-icon></s-icon>
  <slot></slot>
</template>

<script>
  let tmpl = document.querySelector('#s-alert');

  customElements.define('s-alert', class extends HTMLElement {
    constructor() {
      super();
      let shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(tmpl.content.cloneNode(true));
    }
    
    static get observedAttributes() {
      return ['type', 'autodismiss'];
    }

    get seconds() {
      if (this.hasAttribute('autodismiss')) {
        let seconds = (typeof this.getAttribute('autodismiss') === 'number' ? this.getAttribute('autodismiss') : 4) * 1000;
      } else {
        let seconds = 0
      }
      
      return seconds;
    }

    set disabled(val) {
      if (val) {
        this.setAttribute('disabled', '');
      } else {
        this.removeAttribute('disabled');
      }
    }

    attributeChangedCallback(name, oldValue, newValue) {
    if (this.disabled) {
      this.setAttribute('tabindex', '-1');
      this.setAttribute('aria-disabled', 'true');
    } else {
      this.setAttribute('tabindex', '0');
      this.setAttribute('aria-disabled', 'false');
    }
    // TODO: also react to the open attribute changing.
    }

    connectedCallback() {
      ...
    }
  });
</script>
```
_Riot_
```html
<s-alert>
    <s-icon name="{icon}"></i>
    <yield/> <!-- like <slot> -->

    <script>
        // Determine Icon based on type
        this.icon = this.opts.type === 'success' ? 'check' : this.opts.type === 'error' ? 'info' : 'warn';

        this.on('mount', () => {
            if (this.opts.autodismiss) {
                let seconds = (typeof this.opts.autodismiss === 'number' ? this.opts.autodismiss : 4) * 1000;
                setTimeout(this.unmount(), seconds);
            }
        })
    </script>
    <style>
      ...
    </style>  
</s-alert>
```

With either implementation using the new version of Alert with the overrideable `autodismiss` hasn't changed:
```html
<s-alert type="success" autodismiss="10">
  <p>You should try this</p>
</s-alert>
```
And the default still works the same too:
```html
<s-alert type="success" autodismiss>
  <p>You should try this</p>
</s-alert>
```

If whatever you pick enables you and other devs to compose UIs using HTML, then it's a good choice. If something forces you to add lots of kb (more than 10 min+gz) and write special syntax, then it's not a good choice for UI composition because we already have HTML for that. We just haven't been using it correctly!

Being able to write and maintain apps built with this kind of standards-based markup is easier and it's less costly since there's nothing proprietary that will inevitably fall out of fashion and need to be refactored. I don't know what GitHub's UI is built with, but here's me pretending to use Skylab to create their UI:

```html
<body>
  <nav>...</nav>
  <s-tabs>
    <s-tab for="code">
      <s-icon name="code"></s-icon> Code
    </s-tab>
    <div id="code">
      <s-editor mode="md"></s-editor>
    </div>
    <s-tab for="pull-req">
      <s-icon name="merge"></s-icon> Pull requests <s-badge count="0"></s-badge>
    </s-tab>
    <div id="pull-req">
      ...
    </div> 
    <s-tab for="projects">
      <s-icon name="board"></s-icon> Projects <s-badge count="1"></s-badge>
    </s-tab>
    <div id="projects">
      ...
    </div>
  </s-tabs>
  <footer>...</footer>
</body>
```

Now I know this doesn't address the hard problem of application state management and having the UI reliably reflect that state. That's what React and others set out to solve and they did. But the front-end community seems to have been unable to take a balanced approach to adopting these new technologies and just started over-engineering everything in sight. It's very pervasive in the React community in particular. I'll go out on a limb and say that if you use React you no doubt have an over-engineered app, or at least in part. When I see things like this (real React components) I just wonder what the heck are all the React devs doing to themselves:
```html
<DisplayText size="extraLarge" element="h4">Good evening, Dominic.</DisplayText>
```
which outputs
```html
<h4 class="Polaris-DisplayText Polaris-DisplayText--sizeExtraLarge">Good evening, Dominic.</h4>
```
Just take a minute to think about what happened there...

Here's another one from a nice tech company that should know better:
```html
<UitkInlineBadge shape="shape-pill" theme="theme-success">10% off</UitkInlineBadge>
```
which outputs
```html
<span class="uitk-badge uitk-badge-inline shape-pill theme-success">10% off</span>
```
The overuse of these libraries diminishes the potential gains from using them, even to the point of resulting in an overall negative outcome. But I don't know, maybe it's not so obvious: 

_Should an engineer write a dozen lines of CSS to make Badge, or should they write **474 total lines of code across 8 files with multiple dependencies and a mandatory build pipleine** (true story)?_  

"So it can scale!" 

So it can. And yet 9 out of 10 of cases were in zero danger of not being able to scale, but all 10 were solved with [insert favorite js library] and now the app has 10x the amount of code as necessary. Can it scale _down_? Down so much that it can get out of its own way and not be needed at all? 

And that's really what the custom tag approach is about. Yes, a tag and attribute design is much nicer than class-based - the time for that switch has come - but being able to design and build components that scale in either direction using standards-based HTML constructs (prefixed tag, attributes, and nesting) across a wide range of use cases is a very compelling opportunity!

