
# Better UI Components
## How to avoid over-engineering user interfaces through the use of standards

How did we miss it? It was right there this whole time and nobody, not for the 10 plus years that it’s been possible, seemed to use it. Somebody somewhere must have used it. Perhaps some people did, but didn’t bother to write about it. I hope that’s not true because the web community would have been better off with it. In today’s climate of hype I think it needs to be shared and embraced before we go too far down this over-engineered path we seem to be on. Well then, what is "it"?

What I’m talking about is a user interface technology that is so good it already has 100% developer adoption. It is also totally compatible with _all_ browsers and existing tools, it has no dependencies, is very well-documented and is very easy to learn. It’s so good it’s an open web standard. The technology of course is none other than HTML and we’ve ignored its power to enable us to design, construct, and implement better UI components. Let me explain.

### HTML your way
As a reminder, HTML’s job is to give content structure and meaning. This is called semantics. As the web progressed HTML adapted to include new elements, and new attributes for their many features, to provide semantic support for content like `<video>` and `<article>`. Over the years it's also added improved capabilities for existing elements like the `autofocus` attribute, which tells the browser where to focus on page load. These new additions were built with the HTML constructs that already existed and no doubt will continue to exist, those are: *tags*, *attributes*, and *nesting*. Classes are all user-defined, so of course classes aren’t included. Here’s some examples of HTML elements and their semantic, declarative API:

```html
<h1>

<a href="" download>

<input type="email" placeholder="name@example.com" autofocus>

<video src="example.com/vids/cats.mp4" poster="example.com/posters/cats.jpg" autoplay loop controls>
```
HTML gives us a lot to work with. More than we give it credit for and for the things it doesn't, it gives us control to do it ourselves. And that’s where we went wrong.

Let’s use icons as a quick example. Because HTML doesn’t give us an icon tag to markup our icons, we have to design and construct our own. Many similar approaches exist. Here’s three:

```html
<i class=“fas fa-phone”></i>

<i class=“icon icon-phone”></i>

<span class="oi oi-phone"></span>
```
Those are fine. They all use classes and there is nothing wrong with that, although the use of the `<i>` tag is not semantic and a bit hacky, but I do like how short it is. Here’s what I don’t like:

#### 1) Repetitive naming:
`fa`, `icon`, and `oi` 

#### 2) Mixed in with other classes and the loss of clarity when this inevitably happens (or the ongoing effort required to prevent/fix it):
```html
<i class=“icon icon-phone”></i> (original)
<i class=“icon icon-phone foo”></i> (six weeks later)
<i class=“bar baz icon icon-phone foo”></i> (a year later)
```
#### 3) The tag is unavoidable boilerplate that has no meaning:
```html
<i class=“icon icon-phone”></i>
<div class=“icon icon-phone”></div>
<span class=“icon icon-phone”></span>
```
#### 4) Sitting next to standard elements the class-based approach just looks out of place, it lacks uniformity:
```html
<i class="icon icon-phone"></i>
<input type="email" autofocus>
```
What if all the standard elements were based on that same approach:
```html
<div class=“input input-email input-placeholder--name@example.com input-autofocus”>
<span class=“anchor anchor-href--example.com”>
```
Gross! We would laugh at code like that, but that’s what we do for our custom stuff. We don’t have to use classes when building UI components. There’s a better way. We can design and construct our custom components with the same semantic and declarative API as standard elements. Here’s what I mean:
```html
<i class="icon icon-phone">
```
Becomes:
```html
<icon name=“phone”>
```
That code is 100% compatible with all browsers. It can be authored, downloaded, and parsed just like any “real” HTML because it is. Sure, it’s not a standard element and browsers won’t have any default styles that match of course, but this is not a problem at all. You can write CSS that applies to icon just as well as any of the standard tags and attributes:
```css
icon {
  font-family: ‘My Icons’;
}

icon[name=“phone”]:before {
  content: “\u123”;
}
```
Let’s take it up a notch:
```html
<span class=“badge badge-success”>1</span>
```

Becomes:
```
<badge count=“1” status=“success”></badge>

badge {
  border-radius: 50%;
}

badge[count=“0”], badge[count=“”] {
  display: none; /* A Badge with a zero count or no count at all is not displayed */
}

badge[status=“success”] { background-color: green; }
badge[status=“alert”] { background-color: red; }
```
Here’s another:
```
<loader loading></loader>
```

Are you starting to see the difference? Do you sense the benefits? Designing UI components with tags and attributes is fun! But it’s also better. It’s objectively better:

Enables UI engineers to think in terms of components with high-level APIs rather than dumb elements with a list of classes
No more OOCSS, BEM, or similar attempts to engineer around the problems with class-based design
Avoids meaningless boilerplate tags in your code
The class attribute is rarely needed and when it is it’s not polluting your component’s design
Uniformity of markup because custom components will have the same declarative style as standard ones, e.g. <loader disabled> and <button disabled>
Using tags and attributes is officially supported, it’s how custom HTML is supposed to be done
Doing so sets you up for future improvements. Let’s get into that now

Creating and sharing custom components is a commitment. Your components will evolve and have new capabilities added to them just like the standard ones. Let’s look at the possible evolution of a custom Alert (aka Callout) component:

Original design:
```
<alert type=“success”>
  <p>You should try this</p>
</alert>
```
That would look something like:
Pretty basic component with a nice little API that uses a custom tag, familiar attribute, and supports nested content. There’s no dependencies here. No magic, no hacks, nothing proprietary, no new idioms, it’s just HTML and CSS that every dev knows and every browser supports. It’s really as if this was a standard element.

It doesn’t offer much though. Let’s see if we can support an icon:
```
<alert type=“success”>
  <icon name=“check”></icon>
  <p>You should try this</p>
</alert>
```
That works and adds some visual value, but it’s not the right way to design a component. Let’s get an icon without leaving it up to the implementer:
```
<alert type=“success”>
  <p>You should try this</p>
</alert>

alert[type=“success”]:before {
   content: “\u555”;
}
```
Starting to look like something. It’s a pretty common for alerts to disappear automatically, so let’s add support for that with a custom autodismiss attribute.

<alert type=“success” autodismiss>
  <p>You should try this</p>
</alert> 

alert {
     transition: opacity 2s 4s ease-in-out;
     opacity: 1; 
}

alert[autodismiss] {
    opacity: 0; 
}

Not bad. We have a simple Alert component with a nice little API:
Semantic “alert” tag
type attribute - required - Sets the type of Alert. Types include “info”, “success”, “warn”, and “error”
autodismiss attribute - optional - If present, the Alert will disappear after four seconds

And because it’s HTML you can nest content inside it, including other custom HTML, or nest it inside something else. 

There is a small problem though. The problem is our tag names are not totally future-proof. There’s two considerations here:
The first is one day HTML might introduce tags with the same names. I pray every night before bed that whatwg will give us icon. If whatwg doesn’t, it’s still possible some other developer will. Either way there’s risk of a collision and this brings us to prefixing. 

Although we aren’t technically creating Custom Elements (more on that in a minute), it’s best practice to use a prefix for custom tags. At Avalara we use s- as our prefix. The s means a lot of things. It’s short for Skylab, which is the name of our design system. But it also stands for Seattle, which is where we are; standards, because we go for standards until we actually need to introduce a dependency; semantic, because tags and attributes are and classes just can’t compare; small, because HTML and CSS can take you very far without needing to bring in something like React; and shared, because we have over 20 web apps and three times as many developers that need a common design system.

Prefixing solves the risk of colliding tags, is a helpful distinguisher between standard and custom tags, and sets you up very nicely for when JavaScript-enabled functionality is required. The custom tag approach scales in both directions - you can scale down to simple HTML and CSS only components or all the way up to interactive components that respond to state changes and if you chose something that respects web standards, i.e. Custom Elements, you get to preserve the same uniform API as all the standard HTML elements.

Let’s see how our Alert can go from basic custom tag to interactive component without breaking changes or shifting paradigm.

In Alert 2.0 we’re adding the ability to set autodismiss to a custom duration. So you can take the default four seconds by adding the attribute, or you can shorten or extend that duration by setting it’s value to a number of seconds:

<alert type=“success” autodismiss=“10">
  <p>You should try this</p>
</alert>

But as we’ve learned, it’s best-practice to prefix, so that really should be:

<s-alert type=“success” autodismiss>
  <p>You should try this</p>
</s-alert>

If you’re the maintainer of a shared library, pick a short prefix that’s meaningful to you. Twitter’s Bootstrap, for example, would go from:
<div class="alert alert-success">
  <p>You should try this</p>
</div>

To:
<twbs-alert type=“success” >
  <p>You should try this</p>
</twbs-alert>

Or maybe just:
<b-alert type=“success” >
  <p>You should try this</p>
</b-alert>
