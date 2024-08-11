---
title: "How to convert a CSV file to a JSON object with JavaScript"
slug: /csvtojson
---

# How to convert a CSV file to a JSON object with JavaScript on the client side

A month or so ago, I was working on a project that required using data in a CSV file to create options on an HTML selector. I knew I could manually, painstakingly, hardcode the data into the HTML element. (And in the end, it might have even been the faster option.) But I didn’t want to do that. I knew there had to be a way to convert that data in the CSV file to a JSON object dynamically. However, in my research, I found a lot of solutions for how to do this in node, but nothing really for the frontend. (If there is something else out there that shows how to do this, I missed it, most likely due to my lack of patience.) It was only through a few lucky guesses that I was able to come up with this solution.

## What do CSV and JSON mean?

I’m not going to go too deep into the weeds about what CSV and JSON are. If you’re reading this article, you probably know already, and you can feel free to skip ahead to the process.

For those who don’t know, CSV stands for Comma Separated Value. It’s essentially a file that stores data in a table format. The first line defines the table’s columns and the following lines are the data. All of the data values are separated by commas, hence the name.

JSON stands for JavaScript Object Notation. As the name suggests, a JSON is a JavaScript object. Having data in this format makes it easier to work with.

## The Process

The first thing we need to do is declare a function to do all of this. Call it anything you like. For the purposes of this tutorial, I’m calling my function convertCSVToJSON because when I learned to code, my instructor said to name things the way a seven year old would.

Now that we have our function declared, we need to grab the data. (Heads up, this tutorial uses a local CSV file). To do this, use JavaScript’s built-in fetch API.

Once we’ve fetched the data, we need to use a then() method to clean up the data. We do that by using the text() method.

Now that the response is nice and clean and easy to read, we use another then() method to grab the data.

Once we have the data held in our variable called data, we need to do some set up before we work with it. First we need an empty array to hold onto the data once we’re done with it. Then we need to split the data up.

First, we’ll split the data up. Since a CSV file is a series of lines, we’ll split it up into those lines, using the break at the end of each line as the point where we make the split.

We also need to define the keys for the data in our JSON. For this we use the first line of the CSV file. Grab the zero-index line and split it up along the commas.

Now that we have our keys defined, we’re going to loop through the data, twice, using nested for loops.

For the first loop, we’re looping through each line. Inside this first loop, we create an empty object that’s going to hold each of the lines. Then we create a variable called current line that we’ll use to split each line along its commas.

Then we create our nested loop. This loop uses the headers variable from before and matches those keys with its corresponding piece of data. Once these corresponding pieces of data are paired up, they’re shunted into their own cozy little object.

Finally, using the push() method, we’re going to take each one of those objects and push it into our empty array from before.

Now all our data is packaged up nice and ready to be worked with. With this JSON, you can display the data as a table on the DOM, or use it to create a selector on a form, and anything else you’d like to do with it.
