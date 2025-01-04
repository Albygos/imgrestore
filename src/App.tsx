import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageResizer from './components/ImageResizer';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={
                <>
                  <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                      <span className="block">Professional Image Resizer</span>
                      <span className="block text-blue-600">Simple, Fast, and Secure</span>
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                      Resize your images instantly while maintaining quality. Free, online, and no registration required.
                    </p>
                  </div>

                  <div className="max-w-3xl mx-auto mb-12 prose prose-blue">
                    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Image Resizer?</h2>
                      <ul className="space-y-2 text-gray-600">
                        <li>✓ Completely free and unlimited usage</li>
                        <li>✓ No registration or account required</li>
                        <li>✓ Process images locally - your files never leave your device</li>
                        <li>✓ Maintain aspect ratio or customize dimensions</li>
                        <li>✓ Support for JPG, PNG, and WebP formats</li>
                        <li>✓ Instant processing with no waiting time</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-6 mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use</h2>
                      <ol className="space-y-2 text-gray-600">
                        <li>1. Click the upload area or drag and drop your image</li>
                        <li>2. Choose your desired dimensions</li>
                        <li>3. Toggle aspect ratio lock if needed</li>
                        <li>4. Click download to save your resized image</li>
                      </ol>
                    </div>
                  </div>

                  <ImageResizer />

                  <div className="max-w-3xl mx-auto mt-12 prose prose-blue">
                    <div className="bg-white rounded-xl shadow-sm p-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for Best Results</h2>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Keep aspect ratio enabled to prevent image distortion</li>
                        <li>• For web images, consider dimensions under 2000px for optimal loading</li>
                        <li>• Use PNG format for images with text or sharp edges</li>
                        <li>• Choose JPG for photographs and complex images</li>
                      </ul>
                    </div>
                  </div>
                </>
              } />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;