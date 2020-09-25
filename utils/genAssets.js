/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
// const path = require('path');
const glob = require('glob');
const { v4: uuidv4 } = require('uuid');

const getPosts = () => {
  glob('./public/images/uploads/gallery/*/*', (er, files) => {
    const data = [];
    for (let i = 0; i < files.length; i += 1) {
      const element = files[i];

      data.push({
        id: uuidv4(),
        path: element.substr(8, element.length),
      });
      console.log(element);
    }

    fs.writeFile('./content/gallery.json', JSON.stringify({ gallery: data }), (err) => {
      if (err) throw err;
      console.log('Saved to data.json');
    });
  });
};

getPosts();
