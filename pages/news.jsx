import Footer from '@/components/footer';
import Layout from '@/components/layout';
import newsImages from '@/data/news_data/newsdata';
import React, { useState, useCallback, useEffect } from 'react';
import ImageViewer from 'react-simple-image-viewer';

export default function News() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  useEffect(() => {
    if (isViewerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isViewerOpen]);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className='bg-yellow-50 min-h-[100vh]'>
      <Layout
        title='News'
        description='Burgers News'
        keywords='News, Burgers, Offers'
      />

      <div>
        <h1 className='text-center mt-14 font-secundario text-6xl'>News</h1>
      </div>

      <div className='flex flex-wrap gap-4 justify-evenly p-2'>
        {newsImages.map((image, index) => (
          <div className='w-[500px]' key={index}>
            <img
              className='rounded-xl md:h-[320px] sm:h-[220px]'
              src={image.src}
              onClick={() => openImageViewer(index)}
              width='500'
              style={{ margin: '2px' }}
              alt={image.alt}
            />
            <h1 className='mt-8 font-principal m-2 text-xl'>{image.caption}</h1>
          </div>
        ))}
      </div>

      {isViewerOpen && (
        <ImageViewer
          className='rounded-xl'
          src={newsImages.map((image) => image.src)}
          currentIndex={currentImage}
          disableScroll={false}
          onClose={closeImageViewer}
        />
      )}

      <Footer />
    </div>
  );
}

