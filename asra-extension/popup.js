window.onload = async () => {
    const statusLabel = document.getElementById('statusLabel');
    const probLabel = document.getElementById('probLabel');
    const tipsLabel = document.getElementById('tipsLabel');
    const verdictBox = document.getElementById('verdictBox');

    // Get the current tab URL
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // Look for the auto-scan result saved by background.js
    chrome.storage.local.get([tab.url], (result) => {
        if (result[tab.url]) {
            const data = result[tab.url];
            statusLabel.innerText = data.status;
            probLabel.innerText = `Risk Index: ${data.probability}`;
            tipsLabel.innerText = data.tips;

            if (data.status === 'PHISHING') {
                verdictBox.className = 'verdict-card phish';
            } else {
                verdictBox.className = 'verdict-card safe';
            }
        } else {
            statusLabel.innerText = "SCANNING...";
            tipsLabel.innerText = "ASRA is performing a forensic audit on this domain.";
        }
    });
};