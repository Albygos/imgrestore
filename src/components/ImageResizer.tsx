import React, { useState, useRef } from 'react';
import { Upload, Download, Image as ImageIcon, Trash2 } from 'lucide-react';

interface ImageDimensions {
  width: number;
  height: number;
}

export default function ImageResizer() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState<ImageDimensions>({ width: 800, height: 600 });
  const [aspectRatio, setAspectRatio] = useState(true);
  const [originalDimensions, setOriginalDimensions] = useState<ImageDimensions | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          setOriginalDimensions({ width: img.width, height: img.height });
          setDimensions({ width: img.width, height: img.height });
        };
        img.src = e.target?.result as string;
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDimensionChange = (dimension: 'width' | 'height', value: number) => {
    if (aspectRatio && originalDimensions) {
      const ratio = originalDimensions.height / originalDimensions.width;
      if (dimension === 'width') {
        setDimensions({ width: value, height: Math.round(value * ratio) });
      } else {
        setDimensions({ width: Math.round(value / ratio), height: value });
      }
    } else {
      setDimensions(prev => ({ ...prev, [dimension]: value }));
    }
  };

  const handleDownload = () => {
    if (!selectedImage || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      canvas.width = dimensions.width;
      canvas.height = dimensions.height;
      ctx.drawImage(img, 0, 0, dimensions.width, dimensions.height);
      
      const link = document.createElement('a');
      link.download = 'resized-image.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    };
    img.src = selectedImage;
  };

  const resetImage = () => {
    setSelectedImage(null);
    setDimensions({ width: 800, height: 600 });
    setOriginalDimensions(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="space-y-6">
        {/* Upload Section */}
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 bg-gray-50 hover:bg-gray-100 transition-colors">
          {!selectedImage ? (
            <label className="flex flex-col items-center cursor-pointer space-y-4">
              <Upload className="w-12 h-12 text-gray-500" />
              <span className="text-gray-600 font-medium">Drop your image here or click to upload</span>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
              <span className="text-sm text-gray-500">Supports: JPG, PNG, WebP</span>
            </label>
          ) : (
            <div className="w-full space-y-4">
              <img
                src={selectedImage}
                alt="Preview"
                className="max-w-full max-h-[400px] mx-auto object-contain rounded-lg"
              />
              <div className="flex justify-center">
                <button
                  onClick={resetImage}
                  className="flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Remove Image
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Controls Section */}
        {selectedImage && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Width (px)</label>
                <input
                  type="number"
                  value={dimensions.width}
                  onChange={(e) => handleDimensionChange('width', parseInt(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Height (px)</label>
                <input
                  type="number"
                  value={dimensions.height}
                  onChange={(e) => handleDimensionChange('height', parseInt(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="aspectRatio"
                checked={aspectRatio}
                onChange={(e) => setAspectRatio(e.target.checked)}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="aspectRatio" className="text-sm text-gray-600">
                Maintain aspect ratio
              </label>
            </div>

            <button
              onClick={handleDownload}
              className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resized Image
            </button>
          </div>
        )}
      </div>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
}