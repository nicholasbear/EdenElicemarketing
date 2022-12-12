function checkImage(url) {
  //check image exists
  var image = new Image();
  image.onload = function() {
    if (this.width > 0) {
      console.log("image exists");
    }
  }
  image.onerror = function() {
    alert("image doesn't exist");
  }
  image.src = url;
}

$(document).ready(function(){
  $("#button").click(function(){ // 버튼 누를시
    const url = $("#url").val();
    const apiKey = 'AIzaSyC1yBL6YbPZj5nwrtDa0tlXa6-7A3Ur5B8';
    var place = url.lastIndexOf('=');
    const channelId = url.substr(place+1);
    const channel = "https://www.googleapis.com/youtube/v3/videos?&part=snippet&key=" + apiKey + "&id=" + channelId;
    console.log(channelId);
    fetch(channel)
      .then(res => res.json())
        .then(data => {
          console.log(data);
          const temp = data["items"][0]['snippet']['thumbnails']['maxres']['url'];
          $("#output").val(temp);
          checkImage(temp);
          $("#image").attr("src",temp);
    });
  });
});