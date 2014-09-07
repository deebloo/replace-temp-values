var fs = require('fs');

/**
 * @name Replace Temp Values
 * @param file the path the file
 * @param orig the template values to be replace (they are automatically wrapped in % %)
 * @param rplcmt the values to be replaced with
 * @param callback
 */
module.exports = function(file, orig, rplcmt, callback)
{

  //Read file
  fs.readFile(file, function(err, data)
  {
    if(err) { return err; }

    var replaced = data,
        regex;

    // check to see if the source is an array
    if(!Array.isArray(orig))
    {
      regex = new RegExp('%' + orig + '%', 'g');

      // replace the values
      replaced = replaced.toString().replace(regex, rplcmt);

    }
    else
    {

      // Loop through all of the values
      for(var i = 0, len = orig.length; i < len; i++)
      {
        regex = new RegExp('%' + orig[i] + '%', 'g');

        replaced = replaced.toString().replace('%' + regex[i] + '%', rplcmt[i]);

      }

    }

    // Write the file back to its location
    fs.writeFile(file, replaced, function(err)
    {

      if(err) { throw err; }

      callback ? callback(replaced) : false;

    });

  });

};