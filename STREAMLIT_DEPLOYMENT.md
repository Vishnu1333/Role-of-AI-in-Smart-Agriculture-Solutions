# Streamlit Community Cloud companion app

This repository has two distinct entry points:
- React/Vite website: npm run dev / npm run build
- Streamlit research dashboard: streamlit_app.py

## Deploy to Streamlit Community Cloud
1. Open https://share.streamlit.io/ and sign in with the GitHub account that owns or administers this repository.
2. Select **Create app**.
3. Choose repository Vishnu1333/Role-of-AI-in-Smart-Agriculture-Solutions, branch main, and main file path streamlit_app.py.
4. Choose a free subdomain if available, then select **Deploy**.
5. Wait for the build to finish and open the generated streamlit.app URL.

The root requirements.txt pins Streamlit. The dataset used by the companion app is stored in streamlit_data/papers.json. Keep the source catalogue src/data/papers.ts and the JSON copy in sync when modifying records.

Official instructions: https://docs.streamlit.io/deploy/streamlit-community-cloud/deploy-your-app/deploy

## Important note
This does not convert or host the React website inside Streamlit. It adds a separate Python dashboard for catalogue exploration, category/year summaries, source-linked selected findings and the group-member list. Streamlit deployment still requires the account owner to authorize and create the app in Streamlit Community Cloud.
