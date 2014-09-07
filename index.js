var fs = require('fs');

/**
 * @name Replace Temp Values
 * @param file the path the file
 * @param values object with the variable to be replaced and its replacement
 * @param callback
 */
module.exports = function(file, values, callback)
{
  var marker = '%',
    regex;

  //Read file
  fs.readFile(file, function(err, data)
  {
    if(err) { return err; }

    var replaced = data.toString();


    for(var key in values)
    {

      if(values.hasOwnProperty(key))
      {

        regex = new RegExp(marker + key + marker, 'g');

        var contains = replaced.indexOf(marker + key + marker);

        if(contains > -1)
        {

          replaced = replaced.replace(regex, values[key]);

        }
        else
        {

          console.log('Template Value ' + key + ' is not found');

        }

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