let currentTabHeader = 0;

function toTab(index) {
  if(document.getElementById('active-tab-header') !== null) {
    document.getElementById('active-tab-header').id = 'inactive-tab-header';
    document.getElementById('active-tab-content').id = '';
  }
  currentTabHeader = index;
  document.getElementsByClassName('box-header-child')[index].id = 'active-tab-header';
  document.getElementsByClassName('box-content-child')[index].id = 'active-tab-content';
  setTimeout(() => {
    document.getElementById('inactive-tab-header').id = '';
  }, 500);
}