import React from 'react';

export default function Privacy() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-blue max-w-none">
            <h2>Introduction</h2>
            <p>
              At ImageResizer, we take your privacy seriously. This Privacy Policy explains how we collect,
              use, and protect your personal information when you use our service.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect minimal information necessary to provide our service:
            </p>
            <ul>
              <li>Browser type and version</li>
              <li>Usage statistics</li>
              <li>Technical information about your device</li>
            </ul>

            <h2>How We Process Your Images</h2>
            <p>
              All image processing is done locally in your browser. We do not store or transmit your
              images to our servers. Your files remain private and secure.
            </p>

            <h2>Cookies and Tracking</h2>
            <p>
              We use essential cookies to ensure the proper functioning of our website. These cookies
              do not track your browsing activity on other sites.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              We may use third-party services for analytics and performance monitoring. These services
              collect anonymous usage data to help us improve our service.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your information. However, no
              internet-based service can guarantee 100% security.
            </p>

            <h2>Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access your personal data</li>
              <li>Request correction of your data</li>
              <li>Request deletion of your data</li>
              <li>Object to data processing</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              privacy@imageresizer.com
            </p>

            <h2>Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page.
            </p>

            <p className="text-sm text-gray-500 mt-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}