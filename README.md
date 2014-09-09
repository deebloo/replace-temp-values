I reccomend using the more generic [find-and-replace](https://github.com/DannyBlueDesign/find-and-replace) instead
Replace Template Values
=========

A tiny module for replacing template values in a file.

Values to be replaced should be book ended with %%.


## Installation
  ```TXT
  npm install replace-temp-values --save
  ```

## Usage
  myFile.txt
  ```TXT
  %Heading%
  
  Welcome to this months newsletter
  ...
  
  %Footer%
  ```
    
  app.js
  ```JS
  var replace = require('replace-temp-values');
  
  var values = {'Heading': 'Good Morning San Diego!', 'Footer': 'Yaz Flute'};
  
  replace('myFile.txt', 'newFile.txt', values);
  ```
  

* 0.1.5
