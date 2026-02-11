# Agentic Demo Template

A ready-to-deploy React template for agentic coding demos, configured for automatic deployment to Azure Static Web Apps.

## 🏗️ Architecture

```
GitHub Repository → GitHub Actions → Build → Azure Static Web Apps → Public URL
```

## 🚀 Quick Start

### Prerequisites

- Azure account
- GitHub account
- Node.js 18+ (for local development)

### 1. Azure Setup

1. **Create Azure Static Web App:**
   ```bash
   # Login to Azure
   az login
   
   # Create resource group
   az group create --name rg-agentic-demo --location eastus
   
   # Create Static Web App
   az staticwebapp create \
     --name agentic-demo-app \
     --resource-group rg-agentic-demo \
     --source https://github.com/YOUR-USERNAME/YOUR-REPO \
     --location eastus \
     --branch main \
     --app-location "/" \
     --output-location "build" \
     --login-with-github
   ```

2. **Get Deployment Token:**
   ```bash
   az staticwebapp secrets list \
     --name agentic-demo-app \
     --resource-group rg-agentic-demo
   ```
   
   Copy the `apiKey` value - you'll need this for GitHub.

### 2. GitHub Setup

1. **Create new repository** from this template or push this code to a new repo

2. **Add Azure deployment token as secret:**
   - Go to your GitHub repository
   - Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - Value: Paste the `apiKey` from step 1
   - Click "Add secret"

3. **Push to main branch** - deployment will trigger automatically!

### 3. Verify Deployment

- Check the Actions tab in GitHub to see the deployment progress
- Your app will be live at: `https://agentic-demo-app.azurestaticapps.net`
- Or find your URL in Azure Portal → Static Web Apps → your app → Overview

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

The app will open at `http://localhost:3000`

## 📁 Project Structure

```
agentic-demo-template/
├── .github/
│   └── workflows/
│       └── azure-static-web-apps.yml    # Deployment workflow
├── public/
│   └── index.html                       # HTML template
├── src/
│   ├── App.js                           # Main component
│   ├── App.css                          # App styles
│   ├── index.js                         # Entry point
│   └── index.css                        # Global styles
├── .gitignore
├── package.json
└── README.md
```

## 🔄 Deployment Workflow

Every push to the `main` branch triggers:

1. **Checkout** - GitHub Actions checks out your code
2. **Install** - Installs npm dependencies
3. **Build** - Runs `npm run build`
4. **Deploy** - Uploads build folder to Azure Static Web Apps
5. **Live** - App is available at your Azure URL (2-3 minutes)

## 🛠️ Customization

### Change App Content

Edit `src/App.js` to modify the UI. The changes will auto-deploy when you push to main.

### Add Environment Variables

1. In Azure Portal → your Static Web App → Configuration
2. Add application settings (these become environment variables)
3. Access in React with `process.env.REACT_APP_YOUR_VARIABLE`

### Custom Domain

1. In Azure Portal → your Static Web App → Custom domains
2. Add your domain and follow DNS configuration steps
3. SSL certificate is automatically provisioned

## 🔐 Security Notes

- This setup is isolated from corporate environments
- Uses managed identity (no credentials in code)
- Deployment token stored as encrypted GitHub secret
- HTTPS enforced by default
- Enable Azure AD authentication if needed via Azure Portal

## 💰 Cost Estimate

- **Free Tier**: $0/month
  - 100 GB bandwidth/month
  - 0.5 GB storage
  - Perfect for demos

- **Standard Tier**: ~$9/month
  - Custom domains
  - Increased bandwidth
  - SLA guarantees

## 📚 Useful Commands

```bash
# View deployment logs
az staticwebapp show --name agentic-demo-app --resource-group rg-agentic-demo

# List all static web apps
az staticwebapp list --output table

# Delete the app (cleanup)
az staticwebapp delete --name agentic-demo-app --resource-group rg-agentic-demo
```

## 🤖 For Agentic Use

This template is designed for agentic coding demos. An AI agent can:

1. Clone this repository
2. Modify `src/App.js` or add new components
3. Commit and push changes
4. Watch automatic deployment happen
5. Share the live URL

No manual deployment steps required!

## 📖 Resources

- [Azure Static Web Apps Documentation](https://docs.microsoft.com/azure/static-web-apps/)
- [GitHub Actions Documentation](https://docs.github.com/actions)
- [React Documentation](https://react.dev)

## 🐛 Troubleshooting

**Deployment fails:**
- Check GitHub Actions logs for errors
- Verify `AZURE_STATIC_WEB_APPS_API_TOKEN` secret is set correctly
- Ensure build completes successfully locally

**App doesn't update:**
- Check if workflow ran in Actions tab
- Verify you pushed to the `main` branch
- Clear browser cache

**Build errors:**
- Run `npm install` and `npm run build` locally to reproduce
- Check Node.js version (requires 18+)

## 📝 License

MIT - feel free to use for your demos!
