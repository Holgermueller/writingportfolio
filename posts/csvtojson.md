---
title: "How to convert a CSV file to a JSON object with JavaScript"
slug: /csvtojson
---

# How to convert a CSV file to a JSON object with JavaScript on the client side

A month or so ago, I was working on a project that required using data in a CSV to create options on an HTML selector. I knew I could manually, painstakingly, hardcode the data into the HTML element. (And in the end, it might have even been the faster option.) But I didn’t want to do that. I know there had to be a way to convert that data in the CSV file to a JSON object dynamically. However, in my research, I found a lot of solutions for how to do this in node, but nothing really for the frontend. (If there is something else out there that shows how to do this, I missed it, most likely due to my lack of patience.) It was only through a few lucky guesses that I was able to come up with this solution.

## What do CSV and JSON mean?

I’m not going to go too deep into the weeds about what CSV and JSON are. If you’re reading this article, you probably know already. But for those who don’t know, CSV stands for Comma Separated Value. It’s essentially a file that stores data in a table format. The first line defines the table’s columns and the following lines are the data. All of the data values are separated by commas, hence the name. It looks something like this:

JSON stands for JavaScript Object Notation. As the name suggests, a JSON is a JavaScript object. Having data in this format makes it easier to work with.
