---
title: 'Visualizing the Tour De France'
description: 'What does some basic web scraping teach us about the speed of the Tour?'
date: 2016-04-27
draft: false
slug: /project/tdf
tags:
  - Python
  - Data Viz
  - Web Scraping
---

In this short post I'm going to do the first set of two visualizations exploring data regarding the grand tours that I pulled from Wikipedia. Specifically, here I'm going to look at a couple elements of the Tour de France over it's entire 114 year history. Namely, I'm going to look at the length of the Tour, the average speed of the winner for each edition, their total winning time, and the margin that they won by.

I'm not intending to do any inferential analyses, but what I'm expecting to see is that the Tour is getting faster and shorter, and is being won on smaller margins as time goes on. I'm going to hide all of the code in this particular notebook, but I will display some of the raw data and explain the process as I go along just so you can see where I started and where I got to, and then what those data actually look like. If you are interested in the more technical aspects of how I did all of these analyses, there is a seperate jupyter notebook in the repository I put up on github for this particular project [here](https://github.com/dwiwad/Analyzing-the-Grand-Tours). These notebooks have more detailed information on what I did step by step, including all of the code.

With that, let's get right into the data!

## Tour de France Winners Data

I grabbed these data from the wikipedia page for Tour GC winners, which can be found here on [the wikipedia page for Tour de France GC Winners.](https://en.wikipedia.org/wiki/List_of_Tour_de_France_general_classification_winners)

Let's take a quick look at these raw data; what does it look like once scraped from wikipedia and cleaned a little bit? Here's the first and last five rows (i.e., the first and most recent five Tour winners):

![Figure 1](./images/tour_early.png)
</br>
![Figure 2](./images/tour_late.png)

We've got a lot of interesting information in this table, including the winner, their team, the number of stage wins, etc. However, given that I'm focusing here on speed of the tour, I'm going to pull out all the information I need and put it into one smaller new table. That is, I'll pull out the columns for distance, time, and margin.

From this, I'll calculate a new column, average speed, which is simply the total distance divided by the winning time. Here's what the new cleaned up data look like:

![Figure 3](./images/tour_clean_head.png)
</br>
![Figure 4](./images/tour_clean_tail.png)

So here is the data that we're going to work with from now on. We've got winning time in hours, total distance in kilometers, winning margin in seconds, and then average speed in kilometers per hour. Let's take a look now, and see how things have changed over time.

![Figure 5](./images/all_in_one.png)

There's tons of interesting things going on here! One thing to note first, is the blue bars correspond to missing data - as in, years where there was no Tour de France, or the Tour was structured differently. First, between 1905 and 1912 the Tour was scored on points so there is no distance and time data there. Second (and third), the Tour was not run during either of the World Wars. So, brushing over that let's dive into the data.

I'll focus first on the top and bottom graphs, because most of the interesting stuff, in my opinion, is in the middle. First, the Tour has been getting shorter since right around WW I. This isn't entirely surprising because back in the early 20th century the Tour was envisioned as a savage race for only the hardest men, where only one man would actually make it to the end. So, over the years the Tour has gotten shorter but still a formidable distance.

Second, the winning margin was huge back when the Tour was inhumanely difficult - the margin was in the realm of hours. However, since the 1950s the winning margin has been in the realm of minutes or seconds. We'll dive a bit deeper into this later on.

Lastly, the overall winning time and average speed. This is where stuff gets a bit more interesting! The overall winning time has been getting lower and lower, which makes sense given the tour has gotten shorter and faster. The tour has been getting consistently faster over the years, even over just the last few decades. In fact, the average speed was still around 32kmh in the early 1970s and was over 40 kmh the last few years. Thats nearly a 20% increase in average speed over four decades. Average speed seemed to increase pretty sharply from the 1960s to the early 2000s, but has seemed pretty consistent since then. I did, however, notice some interesting blips in the 1990s and 2000s. Let's dive a little bit deeper in the speed data for those years.

![Figure 6](./images/zoomed.png)

When we zoom in on the last 46 years (1971-2017) we can see this pattern a little bit more clearly. When zoomed in, the pattern of the Tour getting faster looks a little bit less remarkable, but I think it's still quite amazing when you unpack what these numbers are actually showing. I'm going to focus on the average speed column.

While they don't look like huge peaks, you'll notice that the year of the Festina Affair and the last year of Lance (one year before Operacion Puerto) are the fastest edtions of the tour in the last half century - this is not over a trivial time frame. Even when you think about the advancements in bike, kit, and athlete training technology over the last decade, Lance in his last year was still faster than the current pros who have ten extra years of engineering underneath them.

The other bit, is that even though the slope of the average speed line doesn't look crazy - it's actually quite steep. The average speed of the Tour has increased by about 6 km/h since the 1970s, which is an increase of about 17%. All this while the tour has remained relatively consistent in its distance of about 3,500 km.

It would be nice to be able to factor in total elevation data (maybe they're faster now because they're climbing less), but I can't find these data anywhere.

The general pattern seems to me to be twofold: (1) The tour is getting faster and faster and (2) There were relatively big drops in average speed after each major doping scandal, followed by slow and steady increases in speed (including over the last twelve years).

That being said, I don't think the Tour will actually get substantially faster without drastic changes to the route or UCI rules. For instance, I can't see the average speed hitting the mid-forties.

Lastly, I'm going to zoom in a bit on the winning margins.

![Figure 7](./images/margin.png)

When we zoom in on the winning margins, we can see there is still a slight slope down. The time gap to the winner is getting smaller and smaller over time. Again, it doesn't seem like much but the slope of this line goes down from ten minutes in 1971 (~ 600 seconds) to just 54 seconds in 2017. Again, I don't think there's really anywhere to go from here though. I suspect we will just continue to see the Tour being won on margins of less than a minute for the foreseeable future, unless there are major shakeups to the UCI's rules.

## Limitations

The biggest limitation of these basic visualizations, particularly the data about average speed, is that I would like to factor in the elevation gain for a given tour. The speed info is hard to interpret without it. For instance, a tour with 10 flat sprinters stages is likely to be faster, on average, than a tour with only 3. This doesn't mean riders are getting faster overall, it just means the structure of the Tour was weighted towards faster stages. Unfortunately, I cannot find these data anywhere. I think we can assume though, that changes in the structure of the Tour don't explain all changes in speed over the last few decades, where the race is very much a climbers race.
