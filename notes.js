/*Templates:-
Templates simplify the creation of documents. Templates can ease our
 workload and make us feel less stressed, and, at the same time, 
 they increase efficiency. Templates increase the attention of the audience. 
 They help in saving time and money.

 In the context of programming and web development, templating refers to the
  process of creating a reusable format or layout for presenting data in a consistent manner.
  In the context of programming and web development, templatingrefers to the process of creating a reusable format or layout for presenting data in a consistent manner.

Templates typically include placeholders or variables that can be dynamically filled with data, allowing the same template to be used for multiple instances of similar content. For example, in web development, templates are often used to define the structure and layout of web pages, with placeholders for content that will vary depending on the page being displayed.

Templates can be used in a variety of programming languages and frameworks, and they are particularly useful for creating dynamic web pages or generating reports with consistent formatting. They help developers save time and ensure consistency by separating the presentation layer from the business logic and data processing.


// TEMPLATING:-
Templates allows us to define a preset "Pattern" for a webpages, that we can dynamically modify wi.
for example we could define a single "Search" template that displays all the results for a given search term.

Some of the other popular ones include
 
handlebars.
jade,
Pug,
nunchucks.
These are specific to JavaScript templating engines that we can use with Express.



// EJS:
Embedded JavaScript, refers to basically being able to embed JavaScript code, actual javaScript syntax inside of HTMl.
We are actually embedding actual javaScript inside of our templates, so it makes it a lot easier.

EJS:-What is the "E" for? "Embedded"? Could be. How about "Effective", "Elegant" or just "Easy".
EJS is simple templating language that lets you generate HTML markup with plain JavaScript.No religiousness about how to organize things.No
reinvention of iteration and control-flow.it's just plain javaScript.

1.Use plain JavaScript
2.Fast developement time
3.Simple syntax
3.Speedy execution
4.Easy debugging
5.Active developement

// Tags of EJS:-
<% 'Scriptlet' tag, for control-flow, no output
<%_ ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
<%= Outputs the value into the template (HTML escaped)
<%- Outputs the unescaped value into the template
<%# Comment tag, no execution, no output
<%% Outputs a literal '<%'
%> Plain ending tag
-%> Trim-mode ('newline slurp') tag, trims following newline
_%> ‘Whitespace Slurping’ ending tag, removes all whitespace after it

// 
<% in this template we add the logic of the javScript code
or add the js code.


 */