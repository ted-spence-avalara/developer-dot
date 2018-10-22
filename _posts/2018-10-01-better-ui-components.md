
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
HTML gives us a lot to work with. More than we give it credit for and for the things it doesn't, it gives us control to do it ourselves. And that’s where we went wrong. Let's use icons as a quick example.

Because HTML doesn't give us an `icon` tag to markup our site's icons, we have to design and construct our own solution. Many similar approaches exist. Here's three (you'll likely recognize them):

```html
<i class="fa fa-phone"></i>

<i class="icon icon-phone"></i>

<span class="oi oi-phone"></span>
```
Pretty simple. They use classes to define themselves and their attributes and while there is nothing wrong with it, there are flaws:

#### 1) Repetitive naming:
`fa`, `icon`, and `oi` are repeated twice.

#### 2) Loss of clarity when the following inevitably happens (or the extra effort required to prevent it):
```html
<i class="icon icon-phone"></i>  original code
<i class="icon icon-phone foo"></i>  six weeks later
<i class="bar baz icon icon-phone foo"></i>  a year later
```
What is that last one? Is it a `bar` or `baz` or maybe an `icon` with a `foo`? This is messy.
#### 3) Tags become unavoidable boilerplate with no meaning:
```html
<i class="icon icon-phone"></i>
<div class="icon icon-phone"></div>
<span class="icon icon-phone"></span>
```
The code looks more like spans dressed up as icons rather than looking like true icons.
#### 4) Next to standard elements the class-based stuff looks out of place; it lacks uniformity:
```html
<i class="icon icon-phone"></i>
<input type="email" autofocus>
```
What if standard elements were based on that same approach:
```html
<i class="input input-email input-autofocus">
```
Gross! You might laugh at that, but it’s how we've always done custom stuff. 

### HTML your way
We don't have to use classes when building UI. There's a better way. We can design and construct our custom components with a similar semantic and declarative API as the standard elements. Here's what I mean:
```html
<i class="icon icon-phone"></i>
```
becomes
```html
<icon name="phone"></icon>
```
That code is 100% compatible with all browsers. It can be authored, downloaded, and parsed just like any "real" HTML because it is. Sure, it's not a standard element and browsers won't apply any default styles, but this is not a problem at all. You can write CSS that applies to `icon` just like you do for any of the standard tags and attributes:
```css
icon {
  font-family: 'My Icons';
}

icon[name="phone"]:before {
  content: "\u123";
}
```
Let's take it up a notch:
```html
<span class="badge badge-success">1</span>
```
becomes
```html
<badge count="1" type="success"></badge>
```
The second one is clearly a Badge with it's own attributes, just like real elements. And with a little CSS we can add some intelligence to Badge so that when it has a zero count or no count it's hidden, i.e. `badge[count="0"], badge[count=""] { display: none }`. Cool!

Here's some other examples of components built with custom tags and attributes instead of classes:
```html
<loader loading></loader>

<alert type="success">...</alert>

<row>
  <col span="6" hide="sm">...</col>
  <col span="6 sm-12">...</col>
</row>
```

Are you starting to see the difference? Do you sense the benefits? Designing these UI components with tags and attributes is fun! It's also better. It is objectively better:

* Enables UI engineers to implement components with high-level APIs rather than dumb elements with a list of classes
* No more OOCSS, BEM, or similar attempts to engineer around the problems with class-based design
* Custom tags have strong semantic meaning and are easily identifiable, e.g. `<badge>` vs. `<span class="badge">`
* The `class` attribute is still usable and if it is used it won't dilute your code, e.g. `<icon name="phone" class="foo bar baz">`
* You get uniformity of markup because custom components use tags and attributes just like standard HTML elements. In many cases you can ditch the need for templating, e.g. `{{> "icon" name="phone"}}` becomes `<icon name="phone"></icon>`
* Using custom tags and attributes is officially supported! This is how custom components are _supposed_ to be done
* Doing so sets you up for future improvements. Let’s get into that now.

### Component evolution
Creating and sharing custom components is a commitment. Your components will evolve and have new capabilities added to them over time just like the standard ones do. Let's look at the possible evolution of a custom Alert or "callout" component:

Original design:
```html
<alert type="success">
  <p>You should try this</p>
</alert>
```
That would look something like:

image...

Pretty basic component with a nice little API that uses a custom tag, familiar `type` attribute, and naturally supports nesting HTML inside. There are no dependencies here. No magic, no hacks, nothing proprietary, no new idioms or special syntax, it's just HTML and CSS that every dev knows and every browser supports. It's really as if this was a standard element.

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
  content: "\u555";
}
```
It's starting to really look like something. It's pretty common for alerts to disappear automatically, so let's add support for that. If this were a standard element I would kind of expect it would have an `autodismiss` attribute for this, so let's give it one:
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
Not bad! We have a simple Alert component with a nice little API:
* Semantic `alert` tag
* `type` attribute - _required_ - One of "info", "success", "warn", or "error"
* `autodismiss` attribute - _optional_ - If present, the Alert will disappear after four seconds
* You can nest content inside it, including other custom HTML

There is a small problem though. The problem is our tag name is not totally future-proof. There's two considerations here:

The first is that some day HTML might get a tag with the same name. I pray every night before bed that WHATWG will give us `icon`. If WHATWG doesn't, it's still possible some other developer will. Either way there's risk of a collision and this brings us to the second consideration: prefixing. 

Although we aren't technically creating Custom Elements at this point, it's best practice to always use a prefix for custom tags. At Avalara we use `s-` as our prefix. The `s` is short for *S*kylab, which is the name of our design system. But it also stands for *S*eattle - that's where we are, *s*tandards - we always go for standards until we actually need to bring in a dependency, *s*emantic - tags with attributes are much more semantic than a span with a class list, *s*mall - HTML and a little CSS can take you very far without the need for something like React, and *s*hared - we have over 20 web apps and three times as many developers that need a common set of custom UI components.

Prefixing is a best-practice. It solves the risk of colliding tags, it's also a helpful distinguisher between standard and custom tags, and it sets you up very nicely for when JavaScript-enabled functionality is required. This custom tag approach, unlike many JavaScript libraries, scales in both directions: you can scale down to simple HTML and CSS-only components like icon, or all the way up to interactive components that respond to state changes all _while maintaining the same uniform HTML interface_.

Let's see how our Alert can go from basic custom tag with styles to interactive component without breaking changes or a shifting paradigm.

In a future release of Alert we're adding the ability to customize the `autodismiss` duration. You can take the default four seconds by simply adding the attribute, or you can shorten or extend that duration by setting it's value to a number:
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
If you're the maintainer of a shared library, pick a short prefix that's meaningful to you. Twitter's Bootstrap, for example, would go from:
```html
<div class="alert alert-success">
```
to
```html
<twbs-alert type="success">
```
or maybe just
```html
<b-alert type="success">
```
Anyway, back to `autodismiss`. Supporting a value of seconds now requires the use of JavaScript. At this point most people go for the flavor-of-the-day proceed to write tens, even hundreds, of lines of code following whatever framework idioms and special syntax is required. That's not a problem if you're a tiny team with one app, but if you have lots of consumers of your Alert you're entering into a code contract, and the less that contract asks of the implementer the better. If we built our Alert in React for example, we would require:
* A 32kb download of React added to their site
* Continued updates of that dependency
* Learn React's idioms
* Learn JSX all its funny gotchas and then write your markup in JSX
* Set up a build pipeline which in this case just about has to be Babel plus Webpack
* A legacy mess to refactor once React and JSX are no longer popular

To some degree the same is true for any JavaScript library. But we can minimize that and be better positioned for the long-term if we pick something that follows, or stays close to, Custom Elements. Here's how it could play out...
