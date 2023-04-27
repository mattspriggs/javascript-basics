const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
  //When the tab is clicked hide all others
  tabPanels.forEach((panel) => {
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

  /* METHOD 1
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  console.log(tabPanel);
  tabPanel.hidden = false;
   */

  //   METHOD 2- FIND IN THE ARRAY OF TABS
  console.log(tabPanels);
  const tabPanel = tabPanels.find(
    (panel) => panel.getAttribute('aria-labelledby') === id
  );
  tabPanel.hidden = false;
}
tabButtons.forEach((button) =>
  button.addEventListener('click', handleTabClick)
);
