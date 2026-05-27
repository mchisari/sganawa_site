function doSearch() {
  var frm, index, cb;

  frm = document.searchForm;
  if (frm && frm.search_block_form) {
    if (frm.search_block_form) {
      window.location = "http://google.com/search?q=site:www.sganawa.org%20" + encodeURIComponent(frm.search_block_form.value);
    }
  }

  return false; // Cancels form submission
}

