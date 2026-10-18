chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // Only scan when the page is fully loaded and it's a real website
    if (changeInfo.status === 'complete' && tab.url && tab.url.startsWith('http')) {
        autoScan(tab.url, tabId);
    }
});

async function autoScan(url, tabId) {
    try {
        const response = await fetch(`http://localhost:8000/scan?url=${encodeURIComponent(url)}`);
        const data = await response.json();

        // 1. Update the Icon Badge (Visual Feedback in toolbar)
        if (data.status === "PHISHING") {
            chrome.action.setBadgeText({ text: "!!", tabId: tabId });
            chrome.action.setBadgeBackgroundColor({ color: "#EF4444", tabId: tabId });
            
            // 2. Trigger System Notification for Threats
            chrome.notifications.create({
                type: 'basic',
                iconUrl: 'https://cdn-icons-png.flaticon.com/512/564/564619.png', 
                title: '🛡️ ASRA: THREAT DETECTED',
                message: `Risk: ${data.probability}. This site is flagged as malicious.`,
                priority: 2
            });
        } else {
            chrome.action.setBadgeText({ text: "OK", tabId: tabId });
            chrome.action.setBadgeBackgroundColor({ color: "#10B981", tabId: tabId });
        }

        // 3. Save result to local storage so the popup can see it
        chrome.storage.local.set({ [url]: data });

    } catch (error) {
        console.error("ASRA: Backend offline.");
        chrome.action.setBadgeText({ text: "OFF", tabId: tabId });
    }
}