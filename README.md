# 🛡️ ASRA: Autonomous Security & Risk Analytics

**Autonomous Neural Threat Intelligence for Real-Time Phishing Neutralization.**

[![Python](https://img.shields.io/badge/Python-3.9+-blue.svg)](https://www.python.org/)
[![React](https://img.shields.io/badge/React-18+-61DAFB.svg)](https://react.dev/)
[![PyTorch](https://img.shields.io/badge/PyTorch-2.x-EE4C2C.svg)](https://pytorch.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-Framework-009688.svg)](https://fastapi.tiangolo.com/)

---

## 📑 Overview

ASRA is a multi-modal AI security suite designed to detect sophisticated phishing URLs, including potential zero-day threats. Rather than relying only on reactive blacklists, ASRA analyzes a URL using a **Trio-Fusion Neural Architecture** that combines semantic intent, character-level patterns, and domain identity signals.

### 🚀 Key Features

- **Trio-Fusion Brain:** Combines a BERT-based semantic model, CNN-BiLSTM sequential analysis, and an MLP-based identity/statistical branch.
- **SSL Anti-Bias Shield:** Designed to identify phishing attempts even when a URL uses HTTPS.
- **Forensic Dashboard:** A glassmorphic React interface that presents detailed threat-analysis results.
- **Autonomous Guard:** A Chrome extension with a background service worker for browsing protection.
- **Live Identity Audit:** WHOIS lookups used to assess domain age and registration history when data is available.

---

## 🧠 Methodology: The Trio-Fusion Architecture

ASRA evaluates URLs through three complementary intelligence branches:

1. **Semantic Branch (BERT):** Uses a Transformer-based model to evaluate URL text and detect deceptive naming patterns or brand impersonation signals.
2. **Visual/Sequential Branch (CNN-BiLSTM):** Uses a CNN to extract character-level patterns associated with typosquatting, while a bidirectional LSTM evaluates sequence relationships in the URL.
3. **Identity/Statistical Branch (Heuristics + MLP):** Uses statistical signals such as Shannon entropy and domain-registration features, including WHOIS data when available.

The outputs of these branches are combined to produce a phishing risk assessment.

---

## 🛠️ Tech Stack

### Backend — The Engine Room

- **Python:** Backend and data-processing language.
- **PyTorch:** Neural network training and inference.
- **Hugging Face Transformers:** DistilBERT integration.
- **FastAPI:** Asynchronous API for threat analysis.
- **Python-Whois:** Domain-registration lookups.

### Frontend — The Command Center

- **React 18 + Vite:** Dashboard application.
- **Tailwind CSS v4:** Responsive interface styling.
- **Framer Motion:** Forensic interface animations.
- **Recharts:** Threat and model-result visualizations.

### Browser Extension

- **Chrome Extensions (Manifest V3):** Browser integration and background service worker.

---

## ⚙️ Installation & Setup

### 1. Prerequisites

- **Node.js v20+** and npm
- **Python 3.9+** and pip
- **NVIDIA GPU (optional):** Recommended for training; CPU inference is supported depending on the installed model and runtime.

### 2. Backend Setup

Clone the repository and start the ASRA API server:

```bash
# Clone the repository (replace yourusername with the actual owner)
git clone https://github.com/yourusername/asra-security.git

# Open the backend directory
cd asra-security/asra-backend

# Install Python dependencies
pip install -r requirements.txt

# Start the ASRA API server
python asra_api.py
```

> **Note:** Keep this terminal open while using the frontend. Check the backend console for the API address and any environment-specific configuration.

### 3. Frontend Setup

Open a **new terminal**. From the repository's backend directory, navigate to the frontend:

```bash
cd ../asra-frontend

# Install React dependencies
npm install

# Start the development dashboard
npm run dev
```

Open the local URL displayed by Vite in the terminal.

### 4. Browser Extension Setup

1. Open Chrome and navigate to `chrome://extensions/`.
2. Enable **Developer mode**.
3. Click **Load unpacked**.
4. Select the `asra-extension` folder in the repository root.
5. Confirm that ASRA appears in the installed extensions list.

> Make sure the API server is running if the extension requires backend requests for URL analysis.

---

## 📊 Performance Results

The following are **project-reported results** for a balanced dataset of **380,000 unique URLs**. Verify these figures against the final evaluation logs before publication.

| Metric | Reported Score |
| :--- | ---: |
| Accuracy | 99.2% |
| Precision | 98.9% |
| Recall (Catch Rate) | 99.4% |
| F1-Score | 99.1% |
| Inference Time | ~750 ms |

---

## 📸 Screenshots & Demo

Add screenshots or short demonstrations of the following when they are available:

- **Dashboard:** Threat-analysis interface.
- **Analytics:** Model results and visualizations.
- **Extension Popup:** Browser threat alerts and scan output.
- **Demo Video/GIF:** End-to-end URL scan and result presentation.

---

## 🛡️ License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.

---

## 🤝 Contributors

**Shaik Riyaz** — Lead AI Engineer & Full-Stack Developer

*Autonomous Security & Risk Analytics (ASRA) · v5.0 Elite Edition*
