import React from 'react';
import { Image as ImageIcon, Zap, Shield, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About ImageResizer
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Your trusted tool for quick and efficient image resizing
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                      <Zap className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    Lightning Fast
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Resize your images instantly with our optimized processing engine.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                      <Shield className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    Secure Processing
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Your images are processed locally in your browser. We never store your files.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                      <Users className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    User Friendly
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Simple and intuitive interface designed for users of all skill levels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
          <p className="mt-4 text-lg text-gray-500">
            At ImageResizer, we believe in making image processing accessible to everyone. Our tool 
            is designed to help individuals and businesses optimize their images without compromising 
            on quality. Whether you're a professional photographer, web developer, or someone who 
            occasionally needs to resize images, we've got you covered.
          </p>
        </div>
      </div>
    </div>
  );
}