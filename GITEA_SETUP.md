# Gitea Authentication Setup for BeardedTek

This guide will help you set up Sveltia CMS with your Gitea instance at `https://git.beardedtek.com`.

## ✅ Current Configuration

Your Sveltia CMS is now configured to use:
- **Gitea Instance**: `https://git.beardedtek.com`
- **Repository**: `beardedtek/flowbite-beardedtek.com`
- **Backend**: GitLab (compatible with Gitea)
- **API Endpoint**: `https://git.beardedtek.com/api/v1`
- **Auth Endpoint**: `https://git.beardedtek.com/login/oauth/authorize`

## 🔧 Setup Steps

### 1. Create Gitea OAuth Application

1. **Login to your Gitea instance**:
   - Go to `https://git.beardedtek.com`
   - Login with your account

2. **Create OAuth App**:
   - Go to Settings → Applications
   - Click "Create new OAuth application"
   - Fill in the details:
     - **Application Name**: `Sveltia CMS`
     - **Redirect URIs**: `https://beardedtek.com/admin/` (or your domain)
     - **Scopes**: Select `repo` and `user:email`

3. **Save the credentials**:
   - Copy the **Client ID**
   - Copy the **Client Secret**

### 2. Environment Variables

Add these environment variables to your deployment:

```bash
OAUTH_CLIENT_ID=your_gitea_client_id
OAUTH_CLIENT_SECRET=your_gitea_client_secret
```

### 3. Repository Access

Ensure your Gitea OAuth app has access to:
- Repository: `beardedtek/flowbite-beardedtek.com`
- Permissions: Read and write access

## 🚀 Testing

### Local Development
1. Run `hugo server`
2. Visit `http://localhost:1313/admin/`
3. You should see the Gitea login option

### Production
1. Deploy your site with the environment variables
2. Visit `https://beardedtek.com/admin/`
3. Click "Login with Gitea"

## 🔍 Troubleshooting

### Common Issues

1. **"Invalid redirect URI"**:
   - Make sure the redirect URI in Gitea matches your site URL exactly
   - Include the trailing slash: `https://beardedtek.com/admin/`

2. **"Repository not found"**:
   - Verify the repo name is correct: `beardedtek/flowbite-beardedtek.com`
   - Ensure the OAuth app has repository access

3. **"Authentication failed"**:
   - Check that environment variables are set correctly
   - Verify Client ID and Secret are correct

### Debug Steps

1. **Check Gitea API**:
   - Visit `https://git.beardedtek.com/api/v1/version`
   - Should return Gitea version info

2. **Test OAuth Flow**:
   - Try logging in manually at `https://git.beardedtek.com/login/oauth/authorize`
   - Verify your OAuth app appears in the list

3. **Check Repository Access**:
   - Ensure your user has write access to the repository
   - Check repository permissions in Gitea

## 📋 Configuration Files

### Main Config (`static/admin/config.yml`)
```yaml
backend:
  name: gitlab
  repo: beardedtek/flowbite-beardedtek.com
  branch: main
  base_url: https://git.beardedtek.com/api/v1
  auth_endpoint: https://git.beardedtek.com/login/oauth/authorize
```

### Environment Variables Needed
```bash
OAUTH_CLIENT_ID=your_client_id_here
OAUTH_CLIENT_SECRET=your_client_secret_here
```

## 🎯 Next Steps

1. **Create the OAuth app** in your Gitea instance
2. **Set environment variables** in your deployment
3. **Test locally** with `hugo server`
4. **Deploy to production** and test the full flow

## 📞 Support

If you encounter issues:
1. Check the Gitea logs for authentication errors
2. Verify all URLs and credentials are correct
3. Test the OAuth flow manually in your browser
4. Check that your repository exists and is accessible

Your Sveltia CMS is now ready to use with Gitea authentication! 