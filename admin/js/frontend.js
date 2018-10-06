function clickTrackingLink(link_id) {
    var data_string = 'id=' + link_id;
    
    $.ajax({
        type: 'POST',
        url: '/admin/frontend/tracking_link_log.php',
        data: data_string,
        dataType: 'text',
        success: function(response) {
            return true;
        },
        error: function (XMLHttpRequest, text_status, error_thrown) {
        }
    });
}