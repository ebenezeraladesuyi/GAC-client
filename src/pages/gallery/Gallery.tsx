/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { iGallery } from '../../types/interface';
import axios from 'axios';
import { url } from '../../utils/Api';
import { DatasIsaLoading } from '../isLoading/DataIsLoading';

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Number of images per page
  const [allImages, setAllImages] = useState<iGallery[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch all images from API
  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${url}/gallery/getimages`);
        const sortedImages = response.data && response.data.sort((a: iGallery, b: iGallery) => {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
        setAllImages(sortedImages);
        setLoading(false);
      } catch (error) {
        console.error("Error getting images:", error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // Calculate indexes of images to display for the current page
  const indexOfLastImage = currentPage * itemsPerPage;
  const indexOfFirstImage = indexOfLastImage - itemsPerPage;
  const currentImages = allImages && allImages.slice(indexOfFirstImage, indexOfLastImage);

  // Handle page change
  const handleChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  // Creative layout patterns
  const getImageClass = (index: number) => {
    const patterns = [
      // Pattern 1: Masonry-like layout with different heights
      'h-[200px]', 'h-[250px]', 'h-[180px]', 'h-[220px]',
      'h-[230px]', 'h-[190px]', 'h-[210px]', 'h-[240px]',
      'h-[170px]', 'h-[260px]', 'h-[200px]', 'h-[220px]',
    ];

    // Pattern 2: Different aspect ratios for visual interest
    const aspectRatios = [
      'aspect-square', 'aspect-video', 'aspect-[4/3]', 'aspect-[3/4]',
      'aspect-square', 'aspect-[16/9]', 'aspect-[4/5]', 'aspect-[3/2]',
    ];

    // Pattern 3: Rounded corners variation
    const borderRadius = [
      'rounded-none', 'rounded-lg', 'rounded-xl', 'rounded-2xl',
      'rounded-lg', 'rounded-none', 'rounded-2xl', 'rounded-lg',
    ];

    // Pattern 4: Hover effects
    const hoverEffects = [
      'hover:scale-105', 'hover:rotate-1', 'hover:scale-110', 'hover:-rotate-1',
      'hover:scale-105', 'hover:rotate-2', 'hover:scale-110', 'hover:-rotate-2',
    ];

    return `
      w-full md:w-[48%] lg:w-[32%] xl:w-[24%] 
      ${patterns[index % patterns.length]}
      ${aspectRatios[index % aspectRatios.length]}
      ${borderRadius[index % borderRadius.length]}
      ${hoverEffects[index % hoverEffects.length]}
      transition-all duration-300 ease-in-out
      cursor-pointer
      overflow-hidden
      shadow-lg hover:shadow-xl
    `;
  };

  // Creative grid container
  const gridContainerClass = `
    w-[95%] 
    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
    gap-4 md:gap-6
    auto-rows-[200px]
    grid-flow-dense
  `;

  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-8 py-[40px] bg-gray-50">
      
      {/* Header Section */}
      <div className="w-full h-[40vh] flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 to-cyan-50 gap-4 px-4 text-center">
        <h5 className="text-4xl md:text-5xl font-bold text-[#23a1db] drop-shadow-sm">
          OUR GALLERY
        </h5>
        <i className="text-xl md:text-2xl text-gray-600 font-light">
          Capturing Moments, Creating Memories...
        </i>
        <div className="w-20 h-1 bg-[#23a1db] mt-4 rounded-full"></div>
      </div>

      {loading ? (
        <div className="w-full flex justify-center py-12">
          <DatasIsaLoading />
        </div>
      ) : (
        <>
          {/* Creative Gallery Grid */}
          <div className={gridContainerClass}>
            {currentImages && currentImages.map((image: iGallery, index: number) => (
              <div
                key={image._id}
                className={getImageClass(index)}
                style={{
                  gridRow: `span ${Math.ceil((index % 4) + 1)}`,
                }}
              >
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                  src={image.gacImage} 
                  alt={`Gallery image ${index + 1}`}
                  loading="lazy"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-end justify-start p-4">
                  <div className="transform translate-y-4 opacity-0 hover:translate-y-0 hover:opacity-100 transition-all duration-300">
                    <div className="w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center mb-2">
                      <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Alternative Layout: Masonry Style */}
          {/* Uncomment this section if you want a pure masonry layout */}
          {/*
          <div className="w-[95%] columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {currentImages && currentImages.map((image: iGallery, index: number) => (
              <div
                key={image._id}
                className="break-inside-avoid mb-4 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <img 
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                  src={image.gacImage} 
                  alt={`Gallery image ${index + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          */}
        </>
      )}

      {/* Pagination */}
      <Stack spacing={2} sx={{ mt: 4 }}>
        <Pagination
          count={Math.ceil(allImages && allImages.length / itemsPerPage)}
          page={currentPage}
          onChange={handleChangePage}
          color="primary"
          size="large"
          sx={{
            '& .MuiPaginationItem-root': {
              fontSize: '1.1rem',
              fontWeight: '600',
            },
            '& .MuiPaginationItem-page.Mui-selected': {
              backgroundColor: '#23a1db',
              color: 'white',
            },
          }}
        />
      </Stack>

      {/* Loading more indicator */}
      {!loading && currentImages && currentImages.length > 0 && (
        <div className="text-gray-500 text-sm mt-4">
          Showing {indexOfFirstImage + 1}-{Math.min(indexOfLastImage, allImages.length)} of {allImages.length} images
        </div>
      )}
    </div>
  );
};

export default Gallery;