
# Better UI Components
## How to avoid over-engineering user interfaces through the use of standards

There's a user interface technology that is so good it has _100%_ developer adoption. It is also totally compatible with _all_ browsers and developer tools, has no dependencies, is very well-documented, and easy to learn.  The technology of course is none other than HTML and I think we've ignored its power to enable us to design, construct, and implement better UI components.

### HTML all the way
As a reminder, HTML’s job is to give content structure and meaning. This is called semantics. As the web progressed HTML adapted to include new elements to provide semantic support for more content, like `<nav>` and `<video>` and `<article>`. Over the years it also added new capabilities to existing elements like the addition of the `autofocus` attribute, which tells the browser which element to focus on page load (a must for log in and search UX!).

These additions are of course made accessible to us through the usual HTML constructs: *tags*, *attributes*, and *nesting*. In case you need a refresher, here's some examples:

```html
<h1>Hello World!</h1>

<p>Ready for <a href="example.com" download>download</a></p>

<input type="email" placeholder="name@example.com" autofocus>

<video src="example.com/vids/cats.mp4" poster="example.com/posters/cats.jpg" autoplay loop controls></video>
```
Standard semantic elements with the declarative API that makes HTML so easy. Pretty simple; no mystery here.

As you know HTML gives us a lot of elements to work with - probably more than we give it credit for - but it definitely doesn't give us elements for everything we need, does it? Let's use icons as a quick example.

Because HTML doesn't give us an `icon` tag to markup a site's icons we have to design our own solution. Here's three similar approaches you've likely seen before:

```html
<i class="fa fa-phone"></i>

<i class="icon icon-phone"></i>

<span class="oi oi-phone"></span>
```
Those solutions use classes to both define the element and its attributes, and while there is nothing wrong with that, there are drawbacks:

#### 1) Repetitive naming:
`fa`, `icon`, and `oi` are repeated twice.

#### 2) Loss of clarity when the following inevitably happens (or the constant effort required to prevent it):
```html
<i class="icon icon-phone"></i>  original code
<i class="icon icon-phone foo"></i>  six weeks later
<i class="bar baz icon icon-phone foo"></i>  a year later
```
What exactly is that last one supposed to be? Too messy.
#### 3) The tag becomes unavoidable boilerplate with no meaning:
```html
<i class="icon icon-phone"></i>
<div class="icon icon-phone"></div>
<span class="icon icon-phone"></span>
```
That means `<div class=""></div>` is all boilerplate.
#### 4) Next to standard elements the class-based design looks out of place; it lacks uniformity:
```html
<i class="icon icon-phone"></i>
<input type="email" autofocus>
```
What if standard elements were based on that same design? So we'd have:
```html
<i class="icon icon-phone"></i>
<i class="input input-email input-autofocus">
```
Pretty gross, but that's what you get with a class-based design. Gets even worse if you go BEM: 
```html
<div class="mdl-dialog__actions mdl-dialog__actions--full-width">
``` 
[That's real btw](https://getmdl.io/components/index.html#dialog-with-full-width-actions)



We don't have to do it this way. We don't have to use classes. There's something better. 

### Custom HTML tags

We can design our custom components with the same declarative style as standard elements using custom tags and attributes. Here's what that means:

_Before_
```html
<i class="icon icon-phone"></i>
```
_After_
```html
<icon name="phone"></icon>
```
Custom tags are compatible with all modern browsers and later versions of IE. Browsers will download and parse that code just like any "real" HTML because it is. Sure, it's not a standard element and browsers won't apply any default styles to these _unknown_ tags, but that is not a problem at all. You can create CSS rules using custom tags, i.e. `icon`, just like you would for standard tags and attributes or classes:
```css
icon {
  font-family: 'My Icons';
}

icon[name="phone"]:before {
  content: "\u123";
}
```

That works perfectly fine. Other than specificity, it's no different than using `.icon` and `.icon-phone:before`.

Let's do another one. A Badge component's design would go from:
```html
<span class="badge badge-success">1</span>
```
to
```html
<badge count="1" type="success"></badge>
```
The second one is clearly a Badge element with it's own attributes. Just like real elements! And with a little CSS we can add some intelligence to Badge so when it has a zero count or no count it hides, i.e. `badge[count="0"], badge[count=""] { display: none }`. That's cool!

Here's some other examples of components built with custom tags and attributes instead of classes:
```html
<loader loading></loader>

<alert type="success">...</alert>

<row>
  <col span="6" hide="sm">...</col>
  <col span="6 sm-12">...</col>
</row>
```

Are you starting to see the difference? Do you sense the benefits? 

Designing custom UI components with tags and attributes instead of classes is fun and it's better. It is objectively better:

* Enables UI engineers to design components with a meaningful API instead of a boilerplate tag and list of classes
* Custom tags have strong semantic meaning and are easily identifiable: `<badge>` vs. `<span class="badge">`
* No more BEM or similar methodologies for engineering around the problems with class-based design
* The `class` attribute is still usable and if it is used it won't dilute your code, e.g. `<icon name="phone" class="foo bar baz">`
* In so many cases you can ditch the need for abstraction, e.g. `{{> "icon" name="phone"}}` or `<OverEngineeredIcon name="phone"/>` is replaced with `<icon name="phone"></icon>`
* The result is standards-based clean, uniform markup since custom components use real HTML just like the rest of your markup 
* Using custom tags and attributes is officially supported. It's how HTML thought we'd design custom components, but we instead went crazy for classes!
* Custom tags set you up perfectly for future improvements. How so? Let’s get into that now.

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
}

alert[type="success"] {
  color: white;
  background-color: green;
}
```
That would look something like:

image here...

Please note that there are no dependencies here. There's nothing to download, no tools and nothing to build. No magic, no hacks, nothing proprietary, no new idioms or special syntax, nothing. And when it comes to building software, _nothing_ is better than something.

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

It's starting to really look like something. It's pretty common for Alerts to disappear automatically, so let's add support for that. If there really was an HTML `alert` element and it had an auto-disappearing feature I could imagine it would have an `autodismiss` attribute for triggering this behavior, so let's go with that:

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
Nice! We got ourselves a useful component without a single build step or polyfill required ;)

And check out that friendly little API:
* Semantic `alert` tag
* `type` - _required_ - one of "info", "success", "warn", or "error"
* `autodismiss` - _optional_ - if present, the Alert will disappear after four seconds
* You can nest content, including other custom HTML

If you didn't know any better you'd think this was a standard HTML5 element available in all newer browsers. Hey, that's a good sign! 

There is a small problem though. The problem is our tag name is not totally future-proof. There's two considerations here:

The first is that some day HTML might get a tag with the same name. I pray every night before bed that WHATWG will give us `icon`. If WHATWG doesn't, it's still possible some other developer will use it. Either way there's risk of a collision and this brings us to the second consideration: prefixing. 

Although we aren't technically creating Custom Elements at this point, you'll want to follow the spec and use a prefix for your custom tags. At Avalara we use `s-` as our prefix. The `s` is short for Skylab, which is the name of our design system, but it also stands for:
* **s**tandards - we always go for standards until we actually need to bring in a dependency
* **s**emantic - tags with attributes are much more semantic than div/span with classes
* **s**mall - basic HTML and CSS can take you very far without needing something like React
* **s**hared - these components are shared by our 20+ web apps and three times as many developers
* **S**eattle - not really, but that's where we are! Come [join us](https://www.avalara.com/us/en/about/jobs/job-details.oUKm8fwS.html)

So yeah, prefixing is a best-practice. It solves the risk of colliding tags and it's a helpful visual distinguisher between standard and custom tags. More importantly it sets you up very nicely for when JavaScript-enabled functionality is required. You see, the custom tag approach scales in both directions: you get to scale down to lightweight CSS-only components like icon, or all the way up to interactive components that respond to state changes all while maintaining _the same uniform HTML interface_. The secret is staying close to standards.

Let's see how our Alert can go from a basic custom tag with styles to interactive component without breaking changes or a shifting paradigm.

In a future release of Alert let's say we're adding the ability to customize the `autodismiss` duration. You can take the default four seconds by simply adding the attribute, or you can shorten or extend that duration by setting its value to a number:

_Customized autodismiss_
```html
<alert type="success" autodismiss="10">
  <p>You should try this</p>
</alert>
```
But as we've learned, it's best-practice to prefix, so that really should be:
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
Anyway, back to `autodismiss`. Supporting a value of seconds now requires the use of JavaScript. At this point most people go  with what they know or try the flavor-of-the-day ramping up on whatever idioms and special syntax is required. That's not a problem if you're a small team with one app, but if you have lots of consumers of your Alert component you're entering into a code contract and the less that contract asks of the implementer the better.

We can minimize the contract and be better positioned for the long-term if we pick a solution that follows, or stays close to, Custom Elements. Here's some options available today:
* vanilla [Custom Elements](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements) and [Web Components](https://www.webcomponents.org/introduction) of course
* [Polymer](https://www.polymer-project.org/3.0/start/)
* [Slim](http://slimjs.com/#/getting-started)
* [Vue](https://vuejs.org/v2/guide/#Relation-to-Custom-Elements)
* [Riot](https://riot.js.org), which has the best DX out there imo, [try it](https://riot.js.org/play/). There's even a w3c proposal out there [that takes the spec in a similar direction](https://github.com/w3c/webcomponents/blob/gh-pages/proposals/Declarative-Custom-Elements-Strawman.md)

If whatever you pick enables you and other devs to compose UIs using HTML, then it's a good choice. Being able to write and maintain standards-based markup is easier and less costly since there's nothing proprietary that will inevitably fall out of fashion and need to be refactored. I don't know what GitHub is buitl with, but here's me pretending to use Skylab to create their UI:

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

