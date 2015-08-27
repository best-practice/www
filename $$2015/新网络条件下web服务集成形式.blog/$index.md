新网络条件下 web 服务集成形式
=============================

 - [What is markdown](#what)
 - [PINP Markdown](#pinpmd)
 - [Markdown Basics](#basic)

---

<a name="what"></a>&nbsp;

What is markdown?
-----------------
Markdown is a _lightweight_ markup language with a easy and simple 
syntax, designed to be easy for a human to enter with a simple 
text editor, and easy to read in its raw form. Lightweight markup 
languages are used in applications where people might be expected 
to read the document source as well as the rendered output. For 
instance, a person downloading a software library might prefer to 
read the documentation in a text editor rather than a browser.

Another application is for entry in web-based publishing, such as 
weblogs and wikis, where the input interface is a simple text box.
The server software converts the input to a common document markup 
language like HTML or XHTML.

Please refer to [Wikipedia Article](http://en.wikipedia.org/wiki/Lightweight_markup_language) for more information.

### Advantages of markdown

 * Write articles and texts faster than in HTML
 * Easy to read when not converted
 * Very fast to learn
 * HTML can be embedded very easy
 * A lot of applications compatible with it

### Disadvantages of markdown

 + No Table support (some dialects have it, but the standard does not).
 + No text colour options (you need to use html for that)
 + Some dialects support more options than others.
 + Targeted at web style markup

### Some important websites

#### 1. Official Markdown Page
> The original markdown emitted, by by John Gruber. 『[website](http://daringfireball.net/projects/markdown/)』

#### 2. One popluar markdown tool
> A full-featured markdown parser and compiler, written in 
  *JavaScript*. Built for speed. 『[chjj/marked](https://github.com/chjj/marked)』

#### 3. Online markdown editors
> Here are popular online editors:

> 1. [Markdownr](http://markdownr.com/) 
> 2. [Dingus](http://daringfireball.net/projects/markdown/dingus)
> 3. [John Combe's editor](http://joncom.be/experiments/markdown-editor/edit/)
> 4. [CtrlShift](http://www.ctrlshift.net/project/markdowneditor/)
> 5. [dillinger](http://dillinger.io/)
> 6. [Hashify](http://hashify.me/)

---

<a name="pinpmd"></a>&nbsp;

PINP Markdown
-------------
PINP (PINP Is Not PPT) support markdown project, *Project* in 
PINP means a set of files that constructing html page, all these
files exist in a folder, usually we call such folder as *Project*.
A PINP markdown project should have a folder with __*.blog__ name, 
and a text file (__$index.md__) directly exists in the folder. When 
user visit the folder from PINP web service, the $index.md file will
be represented in HTML page automatically.

Markdown project in PINP also is called *Blog*, because it looks like 
normal blog article when released to public website.

PINP uses [formal markdown syntax][md_syntax] and some html tags
that help embedding one or more PINP documents. For example, insert an 
`<iframe>` by following code:

      <iframe frameborder="0" width="500" height="280" src="/software/slide11/$ext/3rd-slideshow/ad.sshow/?size=0x0&autoplay=3&background-color=rgb(255,255,255)&no-frame=1"></iframe>

<iframe frameborder="0" width="500" height="280" src="/software/slide11/$ext/3rd-slideshow/ad.sshow/?size=0x0&autoplay=3&background-color=rgb(255,255,255)&no-frame=1"></iframe>

### How to edit markdown file in PINP

There are two ways to create and edit PINP blog, one is online editing 
that requires user login to [PINP website][pinp] (or your github PINP editor),
then create or edit a blog online. Another way is offline editing, follow these steps: 

 1. Install *PINP client tool* in your local machine
 2. Create a blog folder in Windows Explorer, the folder name should 
    has ".blog" extension.
   ![create blog folder](/software/slide11/$ext/3rd-slideshow/create_blogprj.png)
 3. Select new created folder and run popup menu "New pinp blog"
 4. PINP system will create a default md file (_$index.md_) for you,
    and a preview HTML page also will be showed.
 5. You can edit _$index.md_ file with any text editor, the preview page 
    would automatic be **refreshed** when ever the file changed and saved.

  [md_syntax]: http://daringfireball.net/projects/markdown/syntax   "DARING FIREBALL markdown syntax"
  [pinp]: http://www.pinp.me/  "PINP Official website"

---

<a name="basic"></a>&nbsp;

Markdown: Basics
----------------

Come from [Daring Fireball](http://daringfireball.net/projects/markdown/basics)

&nbsp;

Getting the Gist of Markdown's Formatting Syntax
------------------------------------------------

This page offers a brief overview of what it's like to use Markdown.
The [syntax page](http://daringfireball.net/projects/markdown/syntax) 
provides complete, detailed documentation for
every feature, but Markdown should be very easy to pick up simply by
looking at a few examples of it in action. The examples on this page
are written in a before/after style, showing example syntax and the
HTML output produced by Markdown.

It's also helpful to simply try Markdown out; the [Dingus](http://daringfireball.net/projects/markdown/dingus) 
is a web application that allows you type your own Markdown-formatted 
text and translate it to XHTML.

## Paragraphs, Headers, Blockquotes ##

A paragraph is simply one or more consecutive lines of text, separated
by one or more blank lines. (A blank line is any line that looks like
a blank line -- a line containing nothing but spaces or tabs is
considered blank.) Normal paragraphs should not be indented with
spaces or tabs.

Markdown offers two styles of headers: *Setext* and *atx*.
Setext-style headers for `<h1>` and `<h2>` are created by
"underlining" with equal signs (`=`) and hyphens (`-`), respectively.
To create an atx-style header, you put 1-6 hash marks (`#`) at the
beginning of the line -- the number of hashes equals the resulting
HTML header level.

Blockquotes are indicated using email-style '`>`' angle brackets.

Markdown:

    A First Level Header
    ====================
    
    A Second Level Header
    ---------------------

    Now is the time for all good men to come to
    the aid of their country. This is just a
    regular paragraph.

    The quick brown fox jumped over the lazy
    dog's back.
    
    ### Header 3

    > This is a blockquote.
    > 
    > This is the second paragraph in the blockquote.
    >
    > ## This is an H2 in a blockquote


Output:

    <h1>A First Level Header</h1>
    
    <h2>A Second Level Header</h2>
    
    <p>Now is the time for all good men to come to
    the aid of their country. This is just a
    regular paragraph.</p>
    
    <p>The quick brown fox jumped over the lazy
    dog's back.</p>
    
    <h3>Header 3</h3>
    
    <blockquote>
        <p>This is a blockquote.</p>
        
        <p>This is the second paragraph in the blockquote.</p>
        
        <h2>This is an H2 in a blockquote</h2>
    </blockquote>



### Phrase Emphasis ###

Markdown uses asterisks and underscores to indicate spans of emphasis.

Markdown:

    Some of these words *are emphasized*.
    Some of these words _are emphasized also_.
    
    Use two asterisks for **strong emphasis**.
    Or, if you prefer, __use two underscores instead__.

Output:

    <p>Some of these words <em>are emphasized</em>.
    Some of these words <em>are emphasized also</em>.</p>
    
    <p>Use two asterisks for <strong>strong emphasis</strong>.
    Or, if you prefer, <strong>use two underscores instead</strong>.</p>
   


## Lists ##

Unordered (bulleted) lists use asterisks, pluses, and hyphens (`*`,
`+`, and `-`) as list markers. These three markers are
interchangable; this:

    *   Candy.
    *   Gum.
    *   Booze.

this:

    +   Candy.
    +   Gum.
    +   Booze.

and this:

    -   Candy.
    -   Gum.
    -   Booze.

all produce the same output:

    <ul>
    <li>Candy.</li>
    <li>Gum.</li>
    <li>Booze.</li>
    </ul>

Ordered (numbered) lists use regular numbers, followed by periods, as
list markers:

    1.  Red
    2.  Green
    3.  Blue

Output:

    <ol>
    <li>Red</li>
    <li>Green</li>
    <li>Blue</li>
    </ol>

If you put blank lines between items, you'll get `<p>` tags for the
list item text. You can create multi-paragraph list items by indenting
the paragraphs by 4 spaces or 1 tab:

    *   A list item.
    
        With multiple paragraphs.

    *   Another item in the list.

Output:

    <ul>
    <li><p>A list item.</p>
    <p>With multiple paragraphs.</p></li>
    <li><p>Another item in the list.</p></li>
    </ul>
    


### Links ###

Markdown supports two styles for creating links: *inline* and
*reference*. With both styles, you use square brackets to delimit the
text you want to turn into a link.

Inline-style links use parentheses immediately after the link text.
For example:

    This is an [example link](http://example.com/).

Output:

    <p>This is an <a href="http://example.com/">
    example link</a>.</p>

Optionally, you may include a title attribute in the parentheses:

    This is an [example link](http://example.com/ "With a Title").

Output:

    <p>This is an <a href="http://example.com/" title="With a Title">
    example link</a>.</p>

Reference-style links allow you to refer to your links by names, which
you define elsewhere in your document:

    I get 10 times more traffic from [Google][1] than from
    [Yahoo][2] or [MSN][3].

    [1]: http://google.com/        "Google"
    [2]: http://search.yahoo.com/  "Yahoo Search"
    [3]: http://search.msn.com/    "MSN Search"

Output:

    <p>I get 10 times more traffic from <a href="http://google.com/"
    title="Google">Google</a> than from <a href="http://search.yahoo.com/"
    title="Yahoo Search">Yahoo</a> or <a href="http://search.msn.com/"
    title="MSN Search">MSN</a>.</p>

The title attribute is optional. Link names may contain letters,
numbers and spaces, but are *not* case sensitive:

    I start my morning with a cup of coffee and
    [The New York Times][NY Times].

    [ny times]: http://www.nytimes.com/

Output:

    <p>I start my morning with a cup of coffee and
    <a href="http://www.nytimes.com/">The New York Times</a>.</p>


### Images ###

Image syntax is very much like link syntax.

Inline (titles are optional):

    ![alt text](/path/to/img.jpg "Title")

Reference-style:

    ![alt text][id]

    [id]: /path/to/img.jpg "Title"

Both of the above examples produce the same output:

    <img src="/path/to/img.jpg" alt="alt text" title="Title" />



### Code ###

In a regular paragraph, you can create code span by wrapping text in
backtick quotes. Any ampersands (`&`) and angle brackets (`<` or
`>`) will automatically be translated into HTML entities. This makes
it easy to use Markdown to write about HTML example code:

    I strongly recommend against using any `<blink>` tags.

    I wish SmartyPants used named entities like `&mdash;`
    instead of decimal-encoded entites like `&#8212;`.

Output:

    <p>I strongly recommend against using any
    <code>&lt;blink&gt;</code> tags.</p>
    
    <p>I wish SmartyPants used named entities like
    <code>&amp;mdash;</code> instead of decimal-encoded
    entites like <code>&amp;#8212;</code>.</p>


To specify an entire block of pre-formatted code, indent every line of
the block by 4 spaces or 1 tab. Just like with code spans, `&`, `<`,
and `>` characters will be escaped automatically.

Markdown:

    If you want your page to validate under XHTML 1.0 Strict,
    you've got to put paragraph tags in your blockquotes:

        <blockquote>
            <p>For example.</p>
        </blockquote>

Output:

    <p>If you want your page to validate under XHTML 1.0 Strict,
    you've got to put paragraph tags in your blockquotes:</p>
    
    <pre><code>&lt;blockquote&gt;
        &lt;p&gt;For example.&lt;/p&gt;
    &lt;/blockquote&gt;
    </code></pre>
