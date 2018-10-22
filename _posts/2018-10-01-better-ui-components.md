
# Better UI Components
## How to avoid over-engineering user interfaces through the use of standards

How did we miss it? It was right there this whole time and nobody, not for the 10 plus years that it’s been possible, seemed to use it. Somebody somewhere must have used it. Perhaps some people did, but didn’t bother to write about it. I hope that’s not true because the web community would have been better off with it. In today’s climate of hype I think it needs to be shared and embraced before we go too far down this over-engineered path we seem to be on. Well then, what is "it"?

What I’m talking about is a user interface technology that is so good it already has 100% developer adoption. It is also totally compatible with _all_ browsers and existing tools, it has no dependencies, is very well-documented and is very easy to learn. It’s so good it’s an open web standard. The technology of course is none other than HTML and we’ve ignored its power to enable us to design, construct, and implement better UI components. Let me explain.

### HTML all the way
As a reminder, HTML’s job is to give content structure and meaning. This is called semantics. As the web progressed HTML adapted to include new elements to provide semantic support for content, like `<video>` and `<article>`. Over the years it also added new capabilities to existing elements like the addition of the `autofocus` attribute, which tells the browser where to focus on page load. These additions are of course made accessible through the usual HTML constructs: *tags*, *attributes*, and *nesting*. Here are some examples of standard HTML elements and their semantic, declarative API:

```html
<h1>

<a href="example.com" download>

<input type="email" placeholder="name@example.com" autofocus>

<video src="example.com/vids/cats.mp4" poster="example.com/posters/cats.jpg" autoplay loop controls>
```
HTML gives us a lot to work with - probably more than we give it credit for - but it definitely doesn't give us everything we need. Let's use icons as a quick example.

Because HTML doesn't give us an `icon` tag to markup a site's icons we have to design our own solution. Here's three similar approaches you've likely seen before:

```html
<i class="fa fa-phone"></i>

<i class="icon icon-phone"></i>

<span class="oi oi-phone"></span>
```
Pretty simple. Those solutions use classes to both define the element and its attributes, and while there is nothing wrong with that, there are drawbacks:

#### 1) Repetitive naming:
`fa`, `icon`, and `oi` are repeated twice.

#### 2) Loss of clarity when the following inevitably happens (or the constant effort required to prevent it):
```html
<i class="icon icon-phone"></i>  original code
<i class="icon icon-phone foo"></i>  six weeks later
<i class="bar baz icon icon-phone foo"></i>  a year later
```
What exactly is that last one supposed to be? Messy.
#### 3) The tag becomes unavoidable boilerplate with no meaning:
```html
<i class="icon icon-phone"></i>
<div class="icon icon-phone"></div>
<span class="icon icon-phone"></span>
```
So `<i|div|span class=""></i|div|span>` is boilerplate.
#### 4) Next to standard elements the class-based design looks out of place; it lacks uniformity:
```html
<i class="icon icon-phone"></i>
<input type="email" autofocus>
```
What if standard elements were based on that same design? We'd have:
```html
<i class="input input-email input-autofocus">
```
Pretty gross, but that's how we've been designing custom components.


We don't have to do it this way. We don't have to use classes. There's something better. 

### Custom HTML tags

We can design custom components with the same declarative style as standard elements using custom tags and attributes. Here's what that means:

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

Designing custom UI components with tags and attributes instead of classes is fun! And it's better. It is objectively better:

* Enables UI engineers to design components with a high-level API instead of a boilerplate tag and list of classes
* No more OOCSS, BEM, or similar attempts to engineer around the problems with class-based design
* Custom tags have strong semantic meaning and are easily identifiable: `<badge>` vs. `<span class="badge">`
* The `class` attribute is still usable and if it is used it won't dilute your code, e.g. `<icon name="phone" class="foo bar baz">`
* In so many cases you can ditch the need for abstraction, e.g. `{{> "icon" name="phone"}}` or `<OverEngineeredIcon name="phone"/>` is replaced with `<icon name="phone"></icon>`
* The result is clean, uniform markup since custom components use real HTML just like the rest of your markup 
* Using custom tags and attributes is officially supported! It's how HTML thought we'd design custom components, but we instead went crazy for classes
* Custom tags set you up perfectly for future improvements. How so? Let’s get into that now.

### Component evolution
Creating and sharing custom components is a commitment. Your components will evolve and have new capabilities added to them over time. Let's look at the possible evolution of a custom Alert (aka Callout) component:

_Original design_
```html
<alert type="success">
  <p>You should try this</p>
</alert>
```
That would look something like:

image here...

Pretty basic component with a nice little custom `alert` tag, a familiar `type` attribute, and naturally supports nesting HTML inside. There are no dependencies here. Nothing to download, nothing to build. No magic, no hacks, nothing proprietary, no new idioms or special syntax, it's just HTML and CSS that every dev knows and every browser supports. It's really as if this was a standard element.

It doesn't offer much though, so let’s see if we can support an icon:
```html
<alert type="success">
  <icon name="check"></icon>
  <p>You should try this</p>
</alert>
```
That works and adds some visual value, but it's not the right way to design a component. Let's get an icon without leaving it up to the implementer:
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

It's starting to really look like something. It's pretty common for Alerts to disappear automatically, so let's add support for that. 

If there really was an HTML `alert` element with auto-disappearing feature I could imagine it would have an `autodismiss` attribute for triggering this behavior, so let's go with that:
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
Not bad! We have a useful Alert component with a friendly little API:
* Semantic `alert` tag
* `type` attribute - _required_ - One of "info", "success", "warn", or "error"
* `autodismiss` attribute - _optional_ - If present, the Alert will disappear after four seconds
* You can nest content inside it, including other custom HTML

If you didn't know any better you'd be sure this was a standard HTML5 element available in all newer browsers. Hey, that's a good sign! 

There is a small problem though. The problem is our tag name is not totally future-proof. There's two considerations here:

The first is that some day HTML might get a tag with the same name. I pray every night before bed that WHATWG will give us `icon`. If WHATWG doesn't, it's still possible some other developer will use it. Either way there's risk of a collision and this brings us to the second consideration: prefixing. 

Although we aren't technically creating Custom Elements at this point, you'll want to follow the spec and use a prefix for your custom tags. At Avalara we use `s-` as our prefix. The `s` is short for Skylab, which is the name of our design system, but it also stands for:
* **s**tandards - we always go for standards until we actually need to bring in a dependency
* **s**emantic - tags with attributes are much more semantic than div/span with classes
* **s**mall - basic HTML and CSS can take you very far without needing something like React
* **s**hared - these components are shared by our 20+ web apps and three times as many developers
* **S**eattle - not really, but that's where we are! Come [join us](https://www.avalara.com/us/en/about/jobs/job-openings.html)

Prefixing is a best-practice. It solves the risk of colliding tags, it's also a helpful distinguisher between standard and custom tags, and it sets you up very nicely for when JavaScript-enabled functionality is required. The custom tag approach scales in both directions: you get to scale down to lightweight HTML and CSS-only components like icon, or all the way up to interactive components that respond to state changes all while maintaining _the same uniform HTML interface_. The secret is sticking with standards.

Let's see how our Alert can go from basic custom tag with styles to interactive component without breaking changes or a shifting paradigm.

In a future release of Alert let's say we're adding the ability to customize the `autodismiss` duration. You can take the default four seconds by simply adding the attribute, or you can shorten or extend that duration by setting its value to a number:
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
Anyway, back to `autodismiss`. Supporting a value of seconds now requires the use of JavaScript. At this point most people go for the flavor-of-the-day proceed to write tens, even hundreds, of lines of code following whatever framework idioms and special syntax is required. That's not a problem if you're a tiny team with one app, but if you have lots of consumers of your Alert you're entering into a code contract, and the less that contract asks of the implementer the better. If we built our Alert in React for example, we would require:
* A 32kb download of React added to their site
* Continued updates of that dependency
* Learn React's idioms
* Learn JSX all its funny gotchas and then write your markup in JSX
* Set up a build pipeline which in this case just about has to be Babel plus Webpack
* A legacy mess to refactor once React and JSX are no longer popular

To some degree the same is true for any JavaScript library. But we can minimize that and be better positioned for the long-term if we pick something that follows, or stays close to, Custom Elements. Here's how it could play out...
