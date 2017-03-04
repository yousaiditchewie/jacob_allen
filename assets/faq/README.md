#Jacob's jQuery FAQ Template

***
*This is a very simple and easy to modify template for making a basic FAQ page, or any type of page where text or content can be shown and hidden.*  

[See it in action](http://jacobcallen.com/assets/faq/FAQ.html)

##Quick back-story

I was asked to make a Frequently Asked Questions page for a client that would show and hide text, and initially, I was inclined to use a pre-made template or library of some sort.  As I was searching for the right type of template, I realized that for what we needed it would take far less time to make my own than it would to search for one that's close and modify it the rest of the way.

After making the FAQ page, the client ended up deciding on a completely different design that didn't include showing and hiding text.  Since I didn't want my pretty code to go to waiste, I decided to put it on GitHub for other developers to use.  

My goal is to hopefully give other developers an easier time to put together a simple FAQ page that shows and hides text.  There should be minimal (or at least easy) editing and customization.  

If I had more time, I'd add transitions to make the showing and hiding a really smooth experience for users.  I'd also hide all shown text other than the text most recently selected by a user to minimize visual noise on the page.  Feel free to send a pull request with your own features or if you see ways to make the code cleaner/simpler.  

Enjoy!

##Instructions for use
###1. Clone or copy the code from FAQ.html
The code in the html document contains HTML, CSS, JavaScript and jQuery code.  For it to work properly, you'll want to make sure you're connecing the jQuery CDN to your document.  
###2. Ensure the naming scheme doesn't conflict with your code
* My naming scheme conists of a question and answer wrapper div that has the class "outter-div".  
* The first child of each div.outter-div is a div with the class "question".  
* The second/last child of each div.outter-div is a div with the class "answer".
* Each div.question contains a span with a "+" inside. The inner html will be replaced with a "-" when the answer related to that span is shown. 

###3. Replace content with your own
* You can leave the "Question # ?" or replace it with your own questions.  It is typically not common or necessary to number Frequently Asked Questions, but there are no rules saying you can't. 
* Inside the div.answer, you can put any type of content.  I originally had lists, tables and addresses inside many of the questions.  The world is your oyster.

###4. Style away
I used a font called "Amiko" found on [Google Fonts](https://fonts.google.com), and a deep blue and red that caught my eye on [Coolors](https://coolors.co).

###5. JavaScript
There is only one function that utilizes jQuery's element identifyers, checks to see if the "hidden" class is found in the element.  

* If the element is hidden, the function removes it.
* if the element is not hidden, the function adds it.

###Important note
Make sure that if you rename any classes to update the jQuery and JavaScript accordingly.  

[More projects by Jacob Allen](http://jacobcallen.com)
