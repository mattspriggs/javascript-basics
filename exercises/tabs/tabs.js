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
  event.currentTarget.setAttribute('aria-selected', true);
  //Find the tab panel and show it
  const { id } = event.currentTarget;
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  console.log(tabPanel);
  tabPanel.hidden = false;
}
tabButtons.forEach((button) =>
  button.addEventListener('click', handleTabClick)
);
