# Portfolio CLI Deployment Design

This document outlines the plan to host the `My_Portfolio` project to Vercel using the Vercel CLI.

## Overview
We will use the official Vercel CLI (`npx vercel`) to deploy the Next.js application. This approach ensures a standard deployment pipeline and allows for easy configuration of project settings.

## Deployment Workflow

1.  **Preparation**:
    *   Ensure all necessary files are committed to Git.
    *   Verify that `package.json` has the correct build scripts.
2.  **Linking**:
    *   Run `npx vercel link` to connect the local project to a Vercel project.
    *   This will involve selecting the appropriate Vercel scope and project name.
3.  **Deployment**:
    *   Run `npx vercel` for a preview deployment.
    *   Once verified, run `npx vercel --prod` for the production deployment.
4.  **Bypassing Restrictions**:
    *   Since PowerShell script execution is restricted, all commands will be prefixed with `npx` to run the CLI directly from `node_modules`.

## Success Criteria
- [ ] Successful build on Vercel's infrastructure.
- [ ] A live preview URL is generated and functional.
- [ ] (Optional) Production domain is configured correctly.

---

Does this look right so far?
