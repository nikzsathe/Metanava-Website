import PolicyViewer from "./PolicyViewer";

const PrivacyPolicyPage = () => {
   return (
      <PolicyViewer
         title="Privacy Policy"
         description="Learn how Metanova Tech collects, uses, and safeguards personal information across our products and services."
         filePath="/documents/privacy-policy.pdf"
      />
   );
};

export default PrivacyPolicyPage;

