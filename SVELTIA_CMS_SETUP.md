# Sveltia CMS Setup for Hugo Site

This guide explains how to set up and use Sveltia CMS with your Hugo site.

## What's Been Installed

1. **Admin Panel**: Accessible at `/admin/` or `/admin`
2. **Configuration**: Located at `static/admin/config.yml`
3. **Media Uploads**: Files will be stored in `static/images/uploads/`
4. **Netlify Identity**: Added to your site for authentication

## Accessing the Admin Panel

1. Navigate to `http://localhost:1313/admin/` (when running Hugo locally)
2. Or visit `https://yourdomain.com/admin/` (when deployed)

## Collections Available

### Pages
- **About Page**: Edit content at `content/about/_index.md`
- **Contact Page**: Edit content at `content/contact/_index.md`
- **Rates Page**: Edit content at `content/rates/_index.md`
- **General Pages**: Create new pages in the `content/` folder

### Blog Posts
- Create and manage blog posts in `content/blog/`
- Posts will be automatically dated with the format: `YYYY-MM-DD-slug`

### Site Configuration
- **Navigation**: Edit `data/navbar.yml`
- **Footer**: Edit `data/footer.yml`
- **Contact Data**: Edit `data/contact.yml`
- **Rates Data**: Edit `data/rates.yml`
- **Site Config**: Edit `config.yml`

## Authentication Setup

### Gitea OAuth (Self-hosted Git)
This site is configured to use Gitea authentication with your instance at `https://git.beardedtek.com`:

1. **Create a Gitea OAuth App**:
   - Go to `https://git.beardedtek.com` → Settings → Applications
   - Create a new OAuth App
   - Set Redirect URI to `https://beardedtek.com/admin/`
   - Note your Client ID and Client Secret

2. **Environment Variables**:
   - Set `OAUTH_CLIENT_ID` to your Gitea OAuth Client ID
   - Set `OAUTH_CLIENT_SECRET` to your Gitea OAuth Client Secret

3. **Repository Access**:
   - Ensure your OAuth app has access to `beardedtek/flowbite-beardedtek.com`
   - Verify write permissions are enabled

### Local Development (No Authentication)
For development or testing:

- The CMS is configured with `local_backend: true`
- No authentication required for local development
- Simply run `hugo server` and visit `/admin/`

## File Structure Created

```
static/
├── admin/
│   ├── config.yml          # Gitea CMS configuration
│   └── index.html          # Admin panel HTML
└── images/
    └── uploads/            # Media uploads directory

content/
└── admin/
    └── _index.md           # Admin page redirect
```

## Customization

### Adding New Collections
Edit `static/admin/config.yml` to add new content types:

```yaml
- name: "new_collection"
  label: "New Collection"
  folder: "content/new-section"
  create: true
  fields:
    - {label: "Title", name: "title", widget: "string"}
    - {label: "Body", name: "body", widget: "markdown"}
```

### Changing Media Upload Location
Update these lines in `static/admin/config.yml`:

```yaml
media_folder: "static/images/uploads"
public_folder: "/images/uploads"
```

## Troubleshooting

### Local Backend Issues
If you encounter issues with the local backend:
1. Make sure you're running Hugo locally
2. Check that the `static/admin/` directory exists
3. Verify the config.yml syntax is correct

### Authentication Issues
1. **Gitea OAuth**: Verify your Gitea instance URL and OAuth app configuration
2. **Local Development**: Make sure `local_backend: true` is set in config.yml
3. **Repo Access**: Ensure your OAuth app has proper repository access permissions
4. **Environment Variables**: Check that `OAUTH_CLIENT_ID` and `OAUTH_CLIENT_SECRET` are set correctly

## Next Steps

1. **Test Locally**: Run `hugo server` and visit `/admin/`
2. **Deploy**: Push your changes to your Git repository
3. **Configure Netlify**: Set up Identity and deployment settings
4. **Invite Users**: Add team members to manage content

## Resources

- [Sveltia CMS Documentation](https://github.com/sveltia/sveltia-cms)
- [Netlify Identity Documentation](https://docs.netlify.com/visitor-access/identity/)
- [Hugo Documentation](https://gohugo.io/documentation/) 