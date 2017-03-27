export function getUrlParams(url) {
	function urlSplit(toSplit, charTo){
 	 return toSplit.split(charTo);
	}

  function hasCounty(urlparams) {
    if (/\d/.test(urlparams[4]) === true){
      var city = urlSplit(urlparams[2], '.')[0];
      var county = null;
      var categoryId = urlparams[3];
      var pid = urlSplit(urlparams[4], '.')[0];
      return [city, county, categoryId, pid];
    } else {
      city = urlSplit(urlparams[2], '.')[0];
      county = urlparams[3];
      categoryId = urlparams[4];
      pid = urlSplit(urlparams[5], '.')[0];
      return [city, county, categoryId, pid];
    }
  }
return (hasCounty(urlSplit(url, '/')));
}