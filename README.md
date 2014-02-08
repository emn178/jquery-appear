# jQuery-appear
A jQuery plugin provides appear and disappear events to do lazyload, infinite scroll or else effect.

## Download
[Compress](https://raw.github.com/emn178/jquery-appear/master/build/jquery.appear.min.js)  
[Uncompress](https://raw.github.com/emn178/jquery-appear/master/src/jquery.appear.js)

## Demo
[Lazyload](http://emn178.github.io/jquery-appear/samples/lazyload/) (You could also refer to [jquery-lazyload-any](http://github.io/emn178/jquery-lazyload-any/))  
[Infinite Scroll](http://emn178.github.io/jquery-appear/samples/infinite-scroll/)  

## Browser Support
jQuery-appear currently supports IE7+, Chrome, Firefox, Safari and Opera.

## Usage
You could just use jQuery `bind`, `delegate` or `on` to listen event.
HTML
```HTML
<div id="#you-want-to-detect">
</div>
```
JavaScript
```JavaScript
$('#you-want-to-detect').bind('appear', appearHandler);
$('#you-want-to-detect').bind('disappear', disappearHandler);
```

## Example
HTML
```HTML
<div id="loading">
  <img src="loading.gif" />
</div>
```
JavaScript
```JavaScript
$('#loading').bind('appear', ajaxLoad);
```

## License
The project is released under the [MIT license](http://www.opensource.org/licenses/MIT).

## Contact
The project's website is located at https://github.com/emn178/jquery-appear  
Author: emn178@gmail.com
