import React from 'react';

export default function Terms() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-blue max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using ImageResizer, you accept and agree to be bound by the terms
              and provision of this agreement.
            </p>

            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily use this website for personal, non-commercial
              transitory viewing only.
            </p>

            <h2>3. Service Description</h2>
            <p>
              ImageResizer provides an online tool for resizing images. The service is provided
              "as is" and "as available" without any warranties.
            </p>

            <h2>4. User Obligations</h2>
            <ul>
              <li>You must not use the service for any illegal purposes</li>
              <li>You must not upload malicious files</li>
              <li>You must not attempt to breach the service's security</li>
            </ul>

            <h2>5. Intellectual Property</h2>
            <p>
              The service and its original content, features, and functionality are owned by
              ImageResizer and are protected by international copyright, trademark, patent, trade
              secret, and other intellectual property laws.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              ImageResizer shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages resulting from your use of or inability to use
              the service.
            </p>

            <h2>7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any
              changes by updating the date at the bottom of this page.
            </p>

            <h2>8. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the
              United States.
            </p>

            <h2>9. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
              terms@imageresizer.com
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