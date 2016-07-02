# [Rebuild Show Notes Filter](https://tamanishi.net/rebuildshownotesfilter/)

[Rebuild](http://rebuild.fm)のShow Notesをサッと検索したいものです。  

## Description
[Rebuild](http://rebuild.fm)を聴いていると、「あ、これ以前のエピソードでも出てきたな。どのエピソードだったっけ。」ということがままありますね。  
そんな時に、気になったキーワードで今までのエピソードのShow Notesを横断して検索できたらいいなというものです。  
出演されている方々も時々そんな状況になることがあるっぽいですよね。  

今のところ、Github pagesにホストしています。

## Demo
![Demo](./demo.gif)

## Todoというか備忘録
* 初期表示までちょっとかかるのを何とかしたい。
* 検索ワードで絞っていく時はよいけどを緩めていく時にウッと待たされるのを何とかしたい。
* エピソードの更新通知を受けて、[herokuに元ネタjsonを作らせて](http://rebuildshownotesjson.herokuapp.com/episodes)、[手動でGithubにpush](https://github.com/tamanishi/rebuildshownotesfilter/blob/master/episodes.sh)してる運用を何とかしたい。
  * リアルタイムにリクエストの度にjsonにパースする道もあるが、feedは数日に一度しか変わらないのでリクエストの度にパースするのはしたくないなと。

## Licence

MIT

## Author

[tamansihi](https://github.com/tamansihi)

