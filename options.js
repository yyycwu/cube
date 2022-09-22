(async()=>{
  const { requestDomains } = await chrome.storage.sync.get('requestDomains');
  if (Array.isArray(requestDomains)) {
    requestDomainsTextarea.value = requestDomains.join('\n');
  }
})();
requestDomainsTextarea.onchange = saveButton.onclick = async function() {
  const requestDomains = this.value.split('\n');
  await chrome.storage.sync.set({ requestDomains });
  okDiv.animate({ opacity: [ '0', '1' ], easing: [ 'step-start' ] }, 800);
  const removeRuleIds = await getDynamicRuleIds();
  await chrome.declarativeNetRequest.updateDynamicRules({ removeRuleIds });
  const addRules = [];
  for (let index = 0; index<requestDomains.length;) {
    const requestDomain = requestDomains[index];
    addRules.push({
      action: {
        type: 'block'
      },
      condition: {
        requestDomains
      },
      id: ++index
    });
  }
  await chrome.declarativeNetRequest.updateDynamicRules({ addRules });
};
async function getDynamicRuleIds() {
  const rules = await chrome.declarativeNetRequest.getDynamicRules();
  const ids = [];
  for (const rule of rules) {
    ids.push(rule.id);
  }
  return ids;
}