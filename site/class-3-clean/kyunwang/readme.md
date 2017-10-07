# Data cleaning with template graph
Given a template graph. I'll be cleaning a dataset from KNMI.

![][previewImg]

## Data
This is a dataset from KNMI about the weather in:
- Schiphol
- De bilt
- Lelystad
- hHuibertgat

We will be using three columns of the dataset namely:
- STN - Station code
- YYYYMMDD - Date
- HH - Hour
- T - Temperature

## Problems encountered along the way
Cleaning the dataset was somewhat hard as some behaviour didn't go as expected.

In the template code there was a variable that which I was using was reset. (var places = [])
I overlooked it.

To the point of almost completing. I didn't know how to make the *values* property, so I had to look for examples. Same for the date format as is was that the way I had the *timeParse* set up was incorrect.

[previewImg]: preview.png
