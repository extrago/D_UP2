# 🎭 Playwright & PostgreSQL Automation Framework

![Playwright Tests](https://github.com/extrago/D_UP2/actions/workflows/playwright-allure.yml/badge.svg)
[![Allure Report](https://img.shields.io/badge/Allure%20Report-View%20Results-green?style=flat&logo=allure)](https://extrago.github.io/D_UP2/)

An advanced End-to-End (E2E) testing framework designed for full-stack validation. This project focuses on synchronizing UI actions with backend database states, ensuring data integrity across the entire application lifecycle.

## 🛠️ Tech Stack
* **Language:** TypeScript (Type-safe automation)
* **Testing Framework:** Playwright (Chromium, Firefox, WebKit)
* **Database:** PostgreSQL (Containerized via Docker)
* **Environment Management:** Dotenv (Secure credential handling)
* **Reporting:** Allure / Playwright HTML Reporter
* **CI/CD:** GitHub Actions

---

## 🚀 Key Features

- **Automated Infrastructure:** Seamlessly spins up PostgreSQL via Docker and handles schema initialization through Playwright's Global Setup.
- **Page Object Model (POM):** Clean and maintainable code architecture.
- **Database Validation:** Direct SQL querying to verify UI data persistence.
- **Automatic Data Cleanup:** Implemented `afterEach` hooks to ensure a clean database state after every test run.
- **Professional Reporting:** Integrated Allure Reports for visual analytics and failure documentation.

---

## 🔍 Troubleshooting & Senior Technical Insights

This section documents complex infrastructure challenges encountered during development and the strategic solutions implemented:

### 1. Port Conflict Resolution (Host vs. Guest)
Managed a local PostgreSQL port conflict by implementing Port Re-mapping (Host 5433 -> Container 5432), ensuring environment portability.

### 2. PostgreSQL 18+ Volume Architecture
Adjusted Docker Volume mount points to align with modern DevOps practices for database persistence and major-version upgrades.

### 3. Authentication Persistence (Code 28P01)
Handled Docker volume persistence issues by utilizing `docker compose down -v` to perform clean state resets during configuration updates.

---

## 💻 How to Run Locally

1. **Clone the project**
2. **Install dependencies:** `npm install`
3. **Configure Environment:** Add your `.env` credentials.
4. **Spin up database:** `docker compose up -d`
5. **Run tests:** `npx playwright test`

---

## 👨‍💻 Author

**Basem Abdelwahab** *QA Automation Engineer | SDET*

Connect with me on:
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/basemabdelwahab/)