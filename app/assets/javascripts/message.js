$(function() {
  function buildHTML(message) {
    if (message.image) {
      var html =
        `<div class="message" data-message-id=${message.id}>
          <div class="message__content">
            <div class="message__content__user">
              ${message.user_name}
            </div>
            <div class="message__content__data">
              ${message.created_at}
            </div>
          </div>
          <div class="message__post">
            <p class="lower-message">
              ${message.content}
            </p>
          </div>
          <img src=${message.image} >
        </div>`
      return html;
    } else {
      var html =
        `<div class="message" data-message-id=${message.id}>
          <div class="message__content">
            <div class="message__content__user">
              ${message.user_name}
            </div>
            <div class="message__content__date">
              ${message.created_at}
            </div>
          </div>
          <div class="message__post">
            <p class="lower-message">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }
$('#new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
      .done(function(data) {
        var html = buildHTML(data);
        $('.messages').append(html);
        $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight });
        $('form')[0].reset();
      })
      .fail(function() {
        alert("メッセージ送信に失敗しました");
      })
      return false;
})
});