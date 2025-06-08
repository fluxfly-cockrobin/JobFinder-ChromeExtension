chrome.contextMenus.create({
    id: "JobFinder",
    title: "JobFinder",
    contexts: ["selection"]
})

chrome .contextMenus.onClicked.addListener(function (info, tab) {
    if(info.menuItemId){
        //`${info.menuItemId} ${variableName}`
        const variableName = info.selectionText;
        chrome.tabs.create({ url: `https://www.indeed.com/jobs?q=${variableName}`});
        chrome.tabs.create({ url: `https://www.google.com/search?sca_esv=433326fac3a19cfb&q=${variableName}&udm=8&jbr=sep:0`});
        chrome.tabs.create({ url: `https://www.ziprecruiter.com/jobs-search?search=${variableName}`});
        chrome.tabs.create({ url: `https://www.linkedin.com/jobs/search?keywords=${variableName}`});
        
    }
});
