var list = $(".checkbox-list");
list.find(":checkbox").change(function() {
   if ( $(this).hasClass("checkall") ) {
      if ( $(this).is(':checked') ) {
         list.find('input:checkbox:not(:disabled)').prop('checked', 'checked');
      } else {
         list.find('input:checkbox:not(:disabled)').removeProp('checked');
      }
   }
});
