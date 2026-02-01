#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const token = process.env.GH_TOKEN;

if (!token) {
  console.error('Error: GH_TOKEN environment variable is not set');
  console.error('Please run: export GH_TOKEN=your_token_here');
  process.exit(1);
}

// Check if build folder exists
const buildPath = path.join(__dirname, '..', 'build');
if (!fs.existsSync(buildPath)) {
  console.error('Error: build folder does not exist!');
  console.error('Please run: npm run build');
  process.exit(1);
}

// Use token directly in URL - GitHub expects format: https://TOKEN@github.com/user/repo.git
const repoUrl = `https://${token}@github.com/silvestre139/taniti-tourism.git`;

try {
  console.log('Deploying to GitHub Pages...');
  console.log('Repository: silvestre139/taniti-tourism');
  
  // Clear gh-pages cache to avoid branch conflicts
  const cachePath = path.join(__dirname, '..', 'node_modules', '.cache', 'gh-pages');
  if (fs.existsSync(cachePath)) {
    console.log('Clearing gh-pages cache...');
    fs.rmSync(cachePath, { recursive: true, force: true });
  }
  
  // Use the -o flag to specify the origin name and avoid branch conflicts
  // Also add --no-history to avoid merge conflicts
  execSync(`gh-pages -d build -r ${repoUrl} -f --no-history`, { 
    stdio: 'inherit',
    env: {
      ...process.env,
      GIT_TERMINAL_PROMPT: '0'
    }
  });
  
  console.log('\n✅ Deployment successful!');
  console.log('Your site should be available at: https://silvestre139.github.io/taniti-tourism');
  console.log('(It may take a few minutes for GitHub Pages to update)');
} catch (error) {
  console.error('\n❌ Deployment failed!');
  console.error('\nTroubleshooting steps:');
  console.error('1. Verify repository exists and is PUBLIC:');
  console.error('   https://github.com/silvestre139/taniti-tourism');
  console.error('2. Check token has "repo" scope:');
  console.error('   https://github.com/settings/tokens');
  console.error('3. Try creating a new token with full "repo" access');
  console.error('4. Make sure the repository is not empty (add a README if needed)');
  console.error('\nIf issues persist, try:');
  console.error('  - Initialize git: git init');
  console.error('  - Add remote: git remote add origin https://github.com/silvestre139/taniti-tourism.git');
  process.exit(1);
}
