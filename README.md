Replace Template Values
=========

A tiny module for replacing template values in a file.

Values to be replaced should be book ended with %%.

## Installation

  npm install replace-temp-values --save

## Usage

  var replace = require('replace-temp-values');
  
  replace('myFile.txt', 'Heading', 'Good Morning San Diego!');
  
  or with corresponding arrays
  
  replace('myFile.txt', ['Heading', 'Footer'], ['Good Morning San Diego!', 'Yaz Flute']);
  

* 0.1.0 Initial release