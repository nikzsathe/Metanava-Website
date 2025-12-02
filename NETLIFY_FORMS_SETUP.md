# Netlify Forms Setup

The contact form has been integrated with Netlify Forms. Here's what you need to know:

## How It Works

Netlify automatically detects forms with the `data-netlify="true"` attribute and processes submissions. The form is configured to:

1. **Submit to Netlify Forms** - All form submissions are automatically captured by Netlify
2. **Spam Protection** - Includes a honeypot field (`bot-field`) to prevent spam
3. **Form Validation** - Client-side validation using Yup schema
4. **User Feedback** - Toast notifications for success/error states

## Form Fields

The contact form includes the following fields:

- **Full Name** (required)
- **Work Email** (required, validated)
- **Company Name** (required)
- **Phone Number** (required)
- **Website URL** (required, validated as URL)
- **Job Title** (required)
- **What service are you looking for?** (required, dropdown)
  - B2B Lead Generation
  - Demand Generation
  - Account-Based Marketing
  - Content Syndication
  - Digital Marketing
  - Email Marketing
  - Other
- **Monthly budget range** (required, dropdown)
  - Under $5,000
  - $5,000 - $10,000
  - $10,000 - $25,000
  - $25,000 - $50,000
  - $50,000 - $100,000
  - Over $100,000
- **Message / Requirements** (required, minimum 10 characters)

## Viewing Submissions

1. Go to your Netlify dashboard
2. Navigate to **Forms** in the sidebar
3. Click on the **"contact"** form
4. View all submissions with timestamps and field data

## Email Notifications

To receive email notifications for new form submissions:

1. Go to **Site settings** → **Forms**
2. Scroll to **Form notifications**
3. Click **Add notification**
4. Choose **Email notifications**
5. Enter the email address(es) to receive notifications
6. Select the **"contact"** form
7. Save

## Spam Filtering

Netlify automatically filters spam submissions. You can:

- View spam submissions in the **Spam** tab
- Manually mark submissions as spam/not spam
- Configure additional spam filters in **Site settings** → **Forms** → **Spam filtering**

## Testing

To test the form:

1. Fill out all required fields
2. Submit the form
3. Check your Netlify dashboard → Forms → "contact" to see the submission
4. You should see a success toast notification

## Troubleshooting

### Form not submitting

- Ensure the form has `data-netlify="true"` attribute (already added)
- Check that the form name matches: `name="contact"`
- Verify the hidden input: `<input type="hidden" name="form-name" value="contact" />`
- Check browser console for errors

### Not receiving notifications

- Verify email notification settings in Netlify dashboard
- Check spam/junk folder
- Ensure the form name in notification settings matches "contact"

### Form validation errors

- All fields are required
- Email must be valid format
- Website URL must be valid URL (include http:// or https://)
- Message must be at least 10 characters

## Form Name

The form is named **"contact"** - this is used by Netlify to identify and group submissions.

## Customization

To modify form fields or validation:

1. Edit `src/components/forms/ContactForm.tsx`
2. Update the `ContactFormData` interface
3. Update the Yup validation schema
4. Update the form JSX
5. Rebuild and redeploy



