var express = require('express');
var router = express.Router();
var FeedParser = require('feedparser');
var http = require('http');
var xpath = require('xpath');
var dom = require('xmldom').DOMParser;
var fs = require('fs');

router.all('/*', function (req, res, next) {
  res.contentType('json');
  res.header('Access-Control-Allow-Origin', '*');
  next();
});


router.get('/', function(request, response) {
  var episodes = [];
  var feedMeta;

//	fs.readFile('./public/episodes.json', 'utf-8', function(err, text) {
//		// console.log(err);
//  	response.send(text);
//	});

  http.get('http://feeds.rebuild.fm/rebuildfm', function(res) {
    res.pipe(new FeedParser({}))
    .on('error', function(error) {
      response.status(500).json({
        'message': 'Http failure while fetching feed.' 
       });
        
    })
    .on('meta', function(meta) {
      feedMeta = meta;
    })
    .on('readable', function() {
      var stream = this;
      var shownotes = [];
      var item;

      while (item = stream.read()) {

        var notesXml = new dom().parseFromString(item.description);
        var noteTitleNodes = xpath.select("//ul/li/a/text()", notesXml);
        var noteUrlNodes = xpath.select("//ul/li/a/@href", notesXml);

        for(var idx = 0; idx < noteTitleNodes.length; idx++) {
          var shownote = {
            'title': noteTitleNodes[idx].nodeValue,
            'url': noteUrlNodes[idx].nodeValue
          };
          shownotes.push(shownote);
        }

        var episode = {
          'title': item.title,
          'mediaUrl': item.link,
          'publicationDate': item.pubDate,
          'shownotes': shownotes
        };
        episodes.push(episode);
      }
    })
    .on('end', function() {
      var result;
      result = {
       'episodes': episodes 
      };
      response.send(result);
    });
  });
});

module.exports = router;
