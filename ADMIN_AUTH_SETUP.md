# Admin Authentication Setup

The blog admin panel is now password-protected. Only authorized administrators can create, edit, or delete blog posts.

## How It Works

1. **Password Protection**: The admin panel requires a password to access
2. **Session Management**: Login sessions last for 24 hours
3. **Automatic Redirect**: Unauthenticated users are redirected to the login page
4. **Secure Storage**: Authentication status is stored in browser localStorage

## Setting Up the Admin Password

### Option 1: Environment Variable (Recommended)

1. **In Netlify Dashboard:**
   - Go to Site Settings → Environment variables
   - Add: `VITE_ADMIN_PASSWORD` = `your-secure-password-here`
   - Redeploy your site

2. **Locally (.env file):**
   ```env
   VITE_ADMIN_PASSWORD=your-secure-password-here
   ```

### Option 2: Default Password (Less Secure)

If no environment variable is set, the default password is: `metanova2024`

⚠️ **Change this default password immediately in production!**

## Accessing the Admin Panel

1. Navigate to: `https://yourdomain.com/admin/login`
2. Enter your admin password
3. Click "Login"
4. You'll be redirected to the admin panel

## Logging Out

Click the "Logout" button in the top-right corner of the admin panel.

## Security Features

- ✅ Password-protected access
- ✅ 24-hour session expiration
- ✅ Automatic logout after session expires
- ✅ Redirects to login page if not authenticated
- ✅ No access to admin routes without authentication

## Customizing the Password

To change the password:

1. **Update Environment Variable:**
   - Change `VITE_ADMIN_PASSWORD` in Netlify or `.env` file
   - Redeploy your site

2. **Or Update Default:**
   - Edit `src/contexts/AuthContext.tsx`
   - Change: `const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'your-new-password';`

## Password Requirements

Use a strong password:
- At least 12 characters
- Mix of uppercase, lowercase, numbers, and symbols
- Don't use common words or patterns
- Consider using a password manager

## Troubleshooting

### Can't Login
- Verify the password is correct
- Check that environment variable is set correctly (if using)
- Clear browser localStorage and try again
- Check browser console for errors

### Session Expired
- Simply log in again
- Sessions automatically expire after 24 hours for security

### Forgot Password
- If using environment variable: Update it in Netlify dashboard
- If using default: Check `src/contexts/AuthContext.tsx`

## Important Security Notes

⚠️ **For Production:**
- Always use an environment variable for the password
- Never commit passwords to Git
- Use a strong, unique password
- Consider implementing more advanced authentication (OAuth, 2FA) for enhanced security

## Future Enhancements

Potential improvements:
- Multi-user support with different roles
- Two-factor authentication (2FA)
- Password reset functionality
- Activity logging
- Session management dashboard

