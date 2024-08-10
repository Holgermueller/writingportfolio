---
title: "How to convert a CSV file to a JSON object with JavaScript"
slug: /csvtojson
---

# How to convert a CSV file to a JSON object with JavaScript on the client side

A month or so ago, I was working on a project that required using data in a CSV to create options on an HTML selector. I knew I could manually, painstakingly, hardcode the data into the HTML element. (And in the end, it might have even been the faster option.) But I didn’t want to do that. I know there had to be a way to convert that data in the CSV file to a JSON object dynamically. However, in my research, I found a lot of solutions for how to do this in node, but nothing really for the frontend. (If there is something else out there that shows how to do this, I missed it, most likely due to my lack of patience.) It was only through a few lucky guesses that I was able to come up with this solution.
