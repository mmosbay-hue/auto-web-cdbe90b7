### Design Tokens
- **Primary Color**: `indigo-600`
- **Font**: System UI (sans-serif)
- **Border Radius**: `rounded-lg` / `rounded-xl` / `rounded-full`
- **Shadow Style**: `shadow-lg` / `shadow-xl`

### Components Created
- `src/App.js`: Main application layout, orchestrates all sections.
- `src/components/Header.js`: Top navigation bar with logo, links, and CTA.
- `src/components/Hero.js`: Main introductory section with headline and primary CTA.
- `src/components/Dashboard.js`: Visual dashboard showcasing financial overview, cashflow, budgets, and AI insights.
- `src/components/Features.js`: Grid section showcasing key application features.
- `src/components/Goals.js`: Grid section outlining the business goals of the CFO AI.
- `src/components/Architecture.js`: Visual representation of the system architecture.
- `src/components/DataModel.js`: Displays the core financial data models (Users, Transactions, etc.).
- `src/components/DataCollection.js`: Section explaining financial data sources and API integrations.
- `src/components/AiAnalysis.js`: Grid section detailing the core AI analysis modules.
- `src/components/AlertSystem.js`: Explains the automatic financial alert system and notification channels.
- `src/components/Automation.js`: Section detailing financial process automation features.
- `src/components/Security.js`: Section detailing financial data security measures.
- `src/components/Deployment.js`: Section detailing the technology stack for deployment.
- `src/components/Footer.js`: Standard site footer with links and copyright.

### Shared Data Shapes
- `feature: { icon, title, description }`
- `goal: { icon, title, description }`
- `architectureLayer: { icon, title, description, tech, color, bgColor, borderColor }`
- `user: { id, name, role, company_id }`
- `transaction: { id, amount, type, category, date, note }`
- `budget: { id, category, limit_amount, period }`
- `cashflow: { date, income, expense, balance }`
- `forecast: { date, predicted_income, predicted_expense, risk_level }`
- `dataSource: { icon, title, description }`
- `aiModule: { icon, title, description, examples, color, bgColor }`
- `kpi: { icon, title, value, change, changeType }`
- `alertRule: { condition, action }`
- `automationItem: { icon, title, description }`
- `securityFeature: { icon, title, description, color, bgColor }`
- `deploymentTech: { category, icon, technologies, color, bgColor }`

### Routing Structure
- `/`: Landing Page (current implementation)
