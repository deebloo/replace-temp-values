var fs = require('fs');

/**
 *
 * @param file the path the file
 * @param orig the template values to be replace (they are automatically wrapped in % %)
 * @param rplcmt the values to be replaced with
 */
module.exports = function(file, orig, rplcmt)
{

  //Read file
  fs.readFile(file, function(err, data)
  {
    if(err) { return err; }

    // check to see if the source is an array
    if(!Array.isArray(orig))
    {

      // replace the values
      data = data.toString().replace('%' + orig + '%', rplcmt);

    }
    else
    {

      // Loop through all of the values
      for(var i = 0, len = orig.length; i < len; i++)
      {

        data = data.toString().replace('%' + orig[i] + '%', rplcmt[i]);

      }

    }

    // Write the file back to its location
    fs.writeFile(file, data);

  });

};