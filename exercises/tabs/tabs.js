const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tanPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(event) {
  //When the tab is clicked hide all others
  tanPanels.forEach((panel) => {
    panel.hidden = true;
  });
  //Mark all tabs as unselected
  tabButtons.forEach((tab) => {
    tab.setAttribute('aria-selected', false);
  });
  //Mark the clicked tab as selected

  //Find the tab panel and show it
}
tabButtons.forEach((button) =>
  button.addEventListener('click', handleTabClick)
);
